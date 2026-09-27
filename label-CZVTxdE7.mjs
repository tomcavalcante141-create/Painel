import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./router-DHi9HsM2.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/label-CZVTxdE7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BALLOON_LABELS = {
	dialogue: "Diálogo",
	thought: "Pensamento",
	caption: "Legenda",
	sfx: "SFX"
};
var FORMAT_LABELS = {
	manga: "Mangá",
	hq: "HQ ocidental"
};
var KIND_LABELS = {
	oneshot: "One-shot",
	serial: "Capítulos"
};
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-20 w-full resize-none rounded-md bg-surface px-3 py-2.5 text-sm text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)] transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-inset text-fg",
		outline: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_16%,transparent)] text-muted",
		primary: "bg-primary text-primary-fg",
		warn: "bg-warn/15 text-warn",
		ok: "bg-ok/15 text-ok",
		danger: "bg-danger/12 text-danger"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-surface px-3 text-sm text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)] transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function wordCount(text) {
	return text.trim().split(/\s+/).filter(Boolean).length;
}
function balloonWords(balloons) {
	return balloons.reduce((n, b) => n + wordCount(b.text), 0);
}
function pageStats(page, format) {
	const balloons = page.panels.flatMap((p) => p.balloons);
	const dialogue = balloons.filter((b) => b.type === "dialogue").length;
	const thoughts = balloons.filter((b) => b.type === "thought").length;
	const captions = balloons.filter((b) => b.type === "caption").length;
	const sfx = balloons.filter((b) => b.type === "sfx").length;
	const words = balloonWords(balloons) + page.panels.reduce((n, p) => n + wordCount(p.description), 0);
	const emptyPanels = page.panels.filter((p) => !p.description.trim()).length;
	const balloonCount = balloons.length;
	const perPanel = page.panels.length ? balloonCount / page.panels.length : 0;
	let density = "boa";
	if (balloonCount <= 2 && page.panels.length <= 2) density = "leve";
	if (balloonCount >= 8 || perPanel >= 3.2) density = "falada";
	if (balloonCount >= 12 || words >= 220) density = "densa";
	const hints = [];
	if (balloonCount > (format === "manga" ? 7 : 9)) hints.push(format === "manga" ? "Página muito falada para mangá. Quebre em mais painéis ou corte diálogo." : "Muitos balões nesta página. Considere cortar ou espalhar em outra página.");
	if (page.panels.find((p) => p.balloons.filter((b) => b.type !== "sfx").length >= 4)) hints.push("Um painel está carregado de texto. Divida a ação em dois quadros.");
	if (emptyPanels > 0) hints.push(emptyPanels === 1 ? "Há um painel sem descrição visual." : `${emptyPanels} painéis ainda sem descrição visual.`);
	if (page.panels.length === 1 && balloonCount >= 5) hints.push("Splash com muito texto. O leitor precisa de ar — ou de mais quadros.");
	if (dialogue === 0 && page.panels.length >= 3 && sfx === 0 && captions === 0) hints.push("Página muda. Se for intencional, anote o silêncio na legenda.");
	return {
		panels: page.panels.length,
		balloons: balloonCount,
		dialogue,
		thoughts,
		captions,
		sfx,
		words,
		emptyPanels,
		density,
		hints
	};
}
function chapterStats(chapter) {
	return {
		pages: chapter.pages.length,
		panels: chapter.pages.reduce((n, p) => n + p.panels.length, 0),
		balloons: chapter.pages.reduce((n, p) => n + p.panels.reduce((m, pan) => m + pan.balloons.length, 0), 0),
		words: chapter.pages.reduce((n, page) => {
			return n + page.panels.reduce((m, pan) => m + wordCount(pan.description) + balloonWords(pan.balloons), 0);
		}, 0)
	};
}
function projectStats(project) {
	return {
		...project.chapters.reduce((acc, ch) => {
			const s = chapterStats(ch);
			return {
				pages: acc.pages + s.pages,
				panels: acc.panels + s.panels,
				balloons: acc.balloons + s.balloons,
				words: acc.words + s.words
			};
		}, {
			pages: 0,
			panels: 0,
			balloons: 0,
			words: 0
		}),
		characters: project.characters.length,
		chapters: project.chapters.length
	};
}
var DENSITY_LABELS = {
	leve: "Leve",
	boa: "Equilibrada",
	falada: "Falada",
	densa: "Densa"
};
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-fg leading-none peer-disabled:opacity-50", className),
	...props
}));
Label.displayName = Root.displayName;
//#endregion
export { Input as a, Textarea as c, FORMAT_LABELS as i, pageStats as l, Badge as n, KIND_LABELS as o, DENSITY_LABELS as r, Label as s, BALLOON_LABELS as t, projectStats as u };
