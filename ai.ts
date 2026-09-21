import { createServerFn } from "@tanstack/react-start";

export type SuggestKind = "expand" | "rhythm" | "dialogue";

export const suggestScript = createServerFn({ method: "POST" })
  .validator((input: { kind: SuggestKind; format: "manga" | "hq"; context: string }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "A ajuda de escrita não está disponível agora." };

    const formatLabel = data.format === "manga" ? "mangá (ritmo visual, menos texto, SFX fortes)" : "HQ ocidental (diálogos mais presentes, splashes)";
    const instructions: Record<SuggestKind, string> = {
      expand:
        "Reescreva a descrição visual do painel de forma concreta e filmável: plano, ação, cenário, expressão. 2 a 4 frases. Sem diálogo. Português brasileiro. Devolva só o texto novo.",
      rhythm:
        "Analise o ritmo desta página de quadrinho. Diga se está falada, vazia ou equilibrada. Sugira no máximo 3 ajustes práticos (cortar balão, quebrar painel, virar página). Português brasileiro. Texto curto.",
      dialogue:
        "Sugira 1 ou 2 falas alternativas mais naturais e em voz do personagem, no mesmo tom. Português brasileiro. Liste as falas, cada uma em uma linha, sem numeração longa.",
    };

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 350,
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content: `Você é um editor de roteiros de quadrinhos. Formato: ${formatLabel}. ${instructions[data.kind]}`,
          },
          { role: "user", content: data.context.slice(0, 2500) },
        ],
      }),
    });

    if (!res.ok) return { ok: false as const, error: "Não foi possível gerar a sugestão." };

    const body = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) return { ok: false as const, error: "A sugestão veio vazia." };
    return { ok: true as const, text };
  });
