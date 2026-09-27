import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-hLTu72Bz.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var suggestScript_createServerFn_handler = createServerRpc({
	id: "d679c916c82b77ca66d3b1f565ec550d285cb7054fbedc01d44453e185f8764b",
	name: "suggestScript",
	filename: "src/lib/ai.ts"
}, (opts) => suggestScript.__executeServer(opts));
var suggestScript = createServerFn({ method: "POST" }).validator((input) => input).handler(suggestScript_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "A ajuda de escrita não está disponível agora."
	};
	const formatLabel = data.format === "manga" ? "mangá (ritmo visual, menos texto, SFX fortes)" : "HQ ocidental (diálogos mais presentes, splashes)";
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 350,
			temperature: .7,
			messages: [{
				role: "system",
				content: `Você é um editor de roteiros de quadrinhos. Formato: ${formatLabel}. ${{
					expand: "Reescreva a descrição visual do painel de forma concreta e filmável: plano, ação, cenário, expressão. 2 a 4 frases. Sem diálogo. Português brasileiro. Devolva só o texto novo.",
					rhythm: "Analise o ritmo desta página de quadrinho. Diga se está falada, vazia ou equilibrada. Sugira no máximo 3 ajustes práticos (cortar balão, quebrar painel, virar página). Português brasileiro. Texto curto.",
					dialogue: "Sugira 1 ou 2 falas alternativas mais naturais e em voz do personagem, no mesmo tom. Português brasileiro. Liste as falas, cada uma em uma linha, sem numeração longa."
				}[data.kind]}`
			}, {
				role: "user",
				content: data.context.slice(0, 2500)
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: "Não foi possível gerar a sugestão."
	};
	const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
	if (!text) return {
		ok: false,
		error: "A sugestão veio vazia."
	};
	return {
		ok: true,
		text
	};
});
//#endregion
export { suggestScript_createServerFn_handler };
