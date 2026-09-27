import { l as uid, s as now } from "./router-DHi9HsM2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seed-B6W6fAUL.js
var PAGE_TEMPLATES = [
	{
		id: "splash",
		label: "Splash",
		hint: "Página inteira",
		panelCount: 1,
		areas: ["a"]
	},
	{
		id: "twoV",
		label: "2 faixas",
		hint: "Dois painéis empilhados",
		panelCount: 2,
		areas: ["a", "b"]
	},
	{
		id: "twoH",
		label: "2 colunas",
		hint: "Dois painéis lado a lado",
		panelCount: 2,
		areas: ["a b"]
	},
	{
		id: "threeV",
		label: "3 faixas",
		hint: "Ritmo de leitura vertical",
		panelCount: 3,
		areas: [
			"a",
			"b",
			"c"
		]
	},
	{
		id: "strip3",
		label: "Tira",
		hint: "Três quadros em faixa",
		panelCount: 3,
		areas: ["a b c"],
		formats: ["hq"]
	},
	{
		id: "widePlus2",
		label: "Faixa + 2",
		hint: "Estabelecimento e corte",
		panelCount: 3,
		areas: ["a a", "b c"]
	},
	{
		id: "invertedL",
		label: "L invertido",
		hint: "Um grande e dois pequenos",
		panelCount: 3,
		areas: ["a a b", "a a c"]
	},
	{
		id: "four",
		label: "Grade 4",
		hint: "Dois por dois",
		panelCount: 4,
		areas: ["a b", "c d"]
	},
	{
		id: "manga5",
		label: "Mangá 5",
		hint: "Página clássica de mangá",
		panelCount: 5,
		areas: [
			"a a a",
			"b b c",
			"d e e"
		],
		formats: ["manga"]
	},
	{
		id: "six",
		label: "Grade 6",
		hint: "Página densa",
		panelCount: 6,
		areas: [
			"a b",
			"c d",
			"e f"
		]
	}
];
var AREA_LETTERS = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i"
];
function templateById(id) {
	return PAGE_TEMPLATES.find((t) => t.id === id) ?? PAGE_TEMPLATES[0];
}
function templatesFor(format) {
	return PAGE_TEMPLATES.filter((t) => !t.formats || t.formats.includes(format));
}
function defaultTemplateFor(panelCount, format) {
	const exact = templatesFor(format).find((t) => t.panelCount === panelCount);
	if (exact) return exact.id;
	if (panelCount <= 1) return "splash";
	if (panelCount === 2) return format === "hq" ? "twoH" : "twoV";
	if (panelCount === 3) return format === "manga" ? "widePlus2" : "threeV";
	if (panelCount === 4) return "four";
	if (panelCount === 5) return format === "manga" ? "manga5" : "six";
	return "six";
}
function panelArea(index) {
	return AREA_LETTERS[index] ?? "a";
}
function gridTemplateAreas(template) {
	return template.areas.map((row) => `"${row}"`).join(" ");
}
function makeBalloon(type, speaker = "", text = "") {
	return {
		id: uid(),
		type,
		speaker,
		text
	};
}
function makePanel(description = "", balloons = []) {
	return {
		id: uid(),
		description,
		annotation: "",
		balloons
	};
}
function makePage(template, panels) {
	return {
		id: uid(),
		template,
		note: "",
		panels: panels ?? [makePanel()]
	};
}
function makeChapter(title, format, pages) {
	return {
		id: uid(),
		title,
		pages: pages ?? [makePage(defaultTemplateFor(1, format))]
	};
}
function makeCharacter(name, role = "") {
	return {
		id: uid(),
		name,
		role,
		appearance: "",
		personality: "",
		notes: "",
		relations: []
	};
}
function makePlace(name, description = "") {
	return {
		id: uid(),
		name,
		description
	};
}
function makeRule(title, body = "") {
	return {
		id: uid(),
		title,
		body
	};
}
function makeNote(title = "Nota", body = "") {
	return {
		id: uid(),
		title,
		body,
		updatedAt: now()
	};
}
function defaultOutline() {
	return [
		{
			id: uid(),
			title: "Começo",
			beats: []
		},
		{
			id: uid(),
			title: "Conflito",
			beats: []
		},
		{
			id: uid(),
			title: "Clímax",
			beats: []
		},
		{
			id: uid(),
			title: "Resolução",
			beats: []
		}
	];
}
function makeProject(input) {
	const chapter = makeChapter(input.kind === "oneshot" ? "One-shot" : "Capítulo 1", input.format);
	const t = now();
	return {
		id: uid(),
		title: input.title.trim() || "Sem título",
		format: input.format,
		kind: input.kind,
		logline: input.logline?.trim() ?? "",
		createdAt: t,
		updatedAt: t,
		currentChapterId: chapter.id,
		chapters: [chapter],
		characters: [],
		places: [],
		worldRules: [],
		timeline: [],
		outline: defaultOutline(),
		notes: [],
		versions: []
	};
}
var SAMPLE_PROJECT_ID = "sample-estacao-fechada";
function createSampleProject() {
	const nara = makeCharacter("Nara", "Protagonista");
	nara.appearance = "23 anos. Casaco oversized grafite, fone no pescoço, mochila de lona. Cabelo preso de qualquer jeito.";
	nara.personality = "Observa antes de falar. Irônica quando está nervosa. Não gosta de pedir ajuda.";
	nara.notes = "Designer freelancer. Volta do estúdio de um cliente no centro.";
	const fiscal = makeCharacter("O Fiscal", "Antagonista / mistério");
	fiscal.appearance = "Uniforme de metrô de outra década. Crachá sem foto. Sorriso que não chega aos olhos.";
	fiscal.personality = "Educado demais. Fala como se o relógio dele não andasse.";
	fiscal.notes = "Nunca pisca nos close-ups. Não molha no chuvisco.";
	nara.relations = [{
		targetId: fiscal.id,
		label: "desconfia"
	}];
	fiscal.relations = [{
		targetId: nara.id,
		label: "escolheu"
	}];
	const estacao = makePlace("Estação República — plataforma 2", "Madrugada. Lâmpadas fluorescentes com um tubo piscando. Chuva no claraboia. Catalogadoras de anúncio da década passada.");
	const tunel = makePlace("Túnel sentido Barra Funda", "Cheiro de ozônio e óleo. Os azulejos param de fazer sentido depois de vinte metros.");
	const p1 = makePage("widePlus2", [
		makePanel("PLANO ABERTO. Plataforma vazia, 1h14. Chuva estilhaça a claraboia. Um único banco molhado. O letreiro eletrônico morreu no meio de uma palavra: REPUBL—", [makeBalloon("caption", "", "São Paulo. Terça. O último trem já passou.")]),
		makePanel("NARA de costas, parada diante da catraca fechada com corrente e cadeado. O fone pende sem música. A mochila pesa num ombro só."),
		makePanel("CLOSE do celular: 01:14. Última mensagem do app: “ÚLTIMO TREM 00:42 — Serviço encerrado.” Polegar hesitando sobre “chamar carro”. Sem crédito.")
	]);
	p1.note = "Estabelecer silêncio. Quase nenhum diálogo.";
	const p2 = makePage("manga5", [
		makePanel("Nara anda na borda da plataforma. Passos ecoam demais. Ela olha o túnel como quem olha um poço.", [makeBalloon("thought", "Nara", "Se eu voltar pela rua, são treze quarteirões. De madrugada. Sozinha.")]),
		makePanel("De dentro do túnel, uma lanterna fraca. Não aponta para ela. Aponta para o chão, como quem varre."),
		makePanel("O FISCAL surge no limite da luz, já no recinto da plataforma, como se sempre tivesse estado ali. Uniforme seco.", [makeBalloon("dialogue", "O Fiscal", "Moça. Plataforma dois fechou.")]),
		makePanel("Nara dá um passo atrás. A corrente da catraca ao fundo. Ele entre ela e a saída do túnel.", [makeBalloon("dialogue", "Nara", "Eu… perdi o último."), makeBalloon("dialogue", "O Fiscal", "Todo mundo perde o último. Uma hora.")]),
		makePanel("CLOSE da boca dele. O sorriso. Atrás, o letreiro tenta ligar: uma letra só. R.", [makeBalloon("sfx", "", "tic  tic  tic")])
	]);
	const p3 = makePage("invertedL", [
		makePanel("ELE se aproxima sem apressar. A lanterna agora ilumina o crachá: o plástico está opaco, sem nome, sem foto. Nara segura a alça da mochila.", [
			makeBalloon("dialogue", "O Fiscal", "Tem um serviço extra. Não sai no aplicativo."),
			makeBalloon("dialogue", "Nara", "Não tem trem extra. Eu trabalho com mapa da cidade."),
			makeBalloon("dialogue", "O Fiscal", "Mapa. Bonito. O mapa não desce no túnel.")
		]),
		makePanel("DETALHE. A água da chuva escorre da claraboia e desvia dele. O chão ao redor está seco num círculo perfeito."),
		makePanel("Nara olha o círculo. Entende. O celular vibra: SEM SINAL. Ela escolhe a escada de serviço, não o túnel.", [makeBalloon("thought", "Nara", "Ele não molha.")])
	]);
	const p4 = makePage("twoV", [makePanel("ELA sobe a escada de serviço dois degraus de cada vez. Porta de ferro no topo, destrancada. Luz de rua entra como faca. Ele não a persegue — fica na plataforma, lanterna agora apagada.", [makeBalloon("dialogue", "O Fiscal", "Amanhã o último passa mais cedo.")]), makePanel("EXTERIOR. República de madrugada. Nara encosta na mureta, respira. A estação abaixo apaga um bloco de luz de cada vez. Último quadro: o letreiro, visto de cima pelos vãos, finalmente completa: REPÚBLICA — e apaga.", [makeBalloon("caption", "", "Ela pega o ônibus. Não conta para ninguém."), makeBalloon("caption", "", "Na quarta, o último trem sai às 00:10.")])]);
	p4.note = "Não mostrar se ele ainda está lá. O leitor decide.";
	const chapter = makeChapter("One-shot", "manga", [
		p1,
		p2,
		p3,
		p4
	]);
	const t = now();
	return {
		id: SAMPLE_PROJECT_ID,
		title: "Estação Fechada",
		format: "manga",
		kind: "oneshot",
		logline: "Numa madrugada de São Paulo, uma passageira descobre que a estação fechou — e que o fiscal no túnel não deveria existir.",
		createdAt: t,
		updatedAt: t,
		currentChapterId: chapter.id,
		chapters: [chapter],
		characters: [nara, fiscal],
		places: [estacao, tunel],
		worldRules: [makeRule("Quem perde o último", "O Fiscal só aparece para quem fica sozinho depois do encerramento. Câmeras não o gravam. Água não o toca.")],
		timeline: [{
			id: uid(),
			title: "Último trem",
			when: "00:42",
			body: "Nara ainda estava no ateliê do cliente, atrasada de propósito."
		}, {
			id: uid(),
			title: "Catraca lacrada",
			when: "01:14",
			body: "Ela chega. O serviço já encerrou. O Fiscal acorda."
		}],
		outline: [
			{
				id: uid(),
				title: "Começo",
				beats: [{
					id: uid(),
					title: "A cidade fecha",
					summary: "Plataforma morta, chuva, o app confirma: ela perdeu."
				}]
			},
			{
				id: uid(),
				title: "Conflito",
				beats: [{
					id: uid(),
					title: "O homem seco",
					summary: "O Fiscal oferece um trem que não existe. Nara percebe o círculo seco."
				}]
			},
			{
				id: uid(),
				title: "Clímax",
				beats: [{
					id: uid(),
					title: "A escada, não o túnel",
					summary: "Ela recusa a oferta e sobe o serviço."
				}]
			},
			{
				id: uid(),
				title: "Resolução",
				beats: [{
					id: uid(),
					title: "Amanhã mais cedo",
					summary: "Livramento ambíguo. O horário do último trem encolhe."
				}]
			}
		],
		notes: [{
			id: uid(),
			title: "Tom",
			body: "Terror quieto, não jump scare. Referência de ritmo: Ito nas páginas 2–3, mas com São Paulo realista no estabelecimento.",
			updatedAt: t
		}],
		versions: []
	};
}
//#endregion
export { makeBalloon as a, makeNote as c, makePlace as d, makeProject as f, templatesFor as g, templateById as h, gridTemplateAreas as i, makePage as l, panelArea as m, createSampleProject as n, makeChapter as o, makeRule as p, defaultTemplateFor as r, makeCharacter as s, SAMPLE_PROJECT_ID as t, makePanel as u };
