import { i as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-collection+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./_ssr/ssr.mjs";
import { C as Check, S as ChevronDown, _ as Download, a as Trash2, b as ChevronRight, c as Plus, d as Map, f as LayoutGrid, m as Focus, n as Volume2, o as StickyNote, p as History, r as Users, s as Sparkles, u as MessageSquare, v as Copy, w as BookOpen, x as ChevronLeft, y as ChevronUp } from "./_libs/lucide-react.mjs";
import { a as Label2, c as Separator2, d as Trigger, i as ItemIndicator2, l as SubContent2, n as Content2, o as Portal2, r as Item2, s as Root2, t as CheckboxItem2, u as SubTrigger2 } from "./_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { c as slugify, i as downloadText, n as Route, o as formatDateTime, r as cn } from "./_ssr/router-DHi9HsM2.mjs";
import { n as Button, t as BrandMark } from "./_ssr/button-V_34Orry.mjs";
import { g as templatesFor, h as templateById, i as gridTemplateAreas, m as panelArea } from "./_ssr/seed-B6W6fAUL.mjs";
import { n as useStudioStore, t as currentChapterOf } from "./_ssr/store-Ck-7Blh3.mjs";
import { a as Input, c as Textarea, i as FORMAT_LABELS, l as pageStats, n as Badge, o as KIND_LABELS, r as DENSITY_LABELS, s as Label, t as BALLOON_LABELS, u as projectStats } from "./_ssr/label-CZVTxdE7.mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "./_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_projectId-U0pYSvLw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 min-w-44 overflow-hidden rounded-lg bg-surface p-1 text-fg shadow-border", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-pointer select-none items-center gap-2 rounded-md px-2 py-2 text-sm outline-none transition-colors focus:bg-inset data-[disabled]:pointer-events-none data-[disabled]:opacity-40", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none focus:bg-inset", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex size-4 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-xs font-medium uppercase tracking-wider text-muted", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-border", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm outline-none focus:bg-inset", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto size-4" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-40 overflow-hidden rounded-lg bg-surface p-1 shadow-border", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
function balloonLine(b) {
	if (b.type === "sfx") return `SFX: ${b.text || "—"}`;
	if (b.type === "caption") return `LEGENDA: ${b.text || "—"}`;
	if (b.type === "thought") return `${b.speaker.trim() || "???"} (pensamento): ${b.text || "—"}`;
	return `${b.speaker.trim() || "???"}: ${b.text || "—"}`;
}
function pageToMarkdown(page, pageNumber, options) {
	const lines = [`## Página ${pageNumber}`];
	if (page.note.trim() && !options?.panelsOnly) lines.push(`*Nota: ${page.note.trim()}*`, "");
	page.panels.forEach((panel, i) => {
		lines.push(`### Painel ${i + 1}`);
		lines.push(panel.description.trim() || "_(sem descrição visual)_");
		if (!options?.panelsOnly) {
			for (const b of panel.balloons) if (b.text.trim() || b.speaker.trim()) lines.push(`- ${balloonLine(b)}`);
			if (panel.annotation.trim()) lines.push(`- _Anotação: ${panel.annotation.trim()}_`);
		}
		lines.push("");
	});
	return lines.join("\n");
}
function projectToMarkdown(project, options) {
	const header = [
		`# ${project.title}`,
		"",
		`**Formato:** ${FORMAT_LABELS[project.format]} · **Tipo:** ${KIND_LABELS[project.kind]}`,
		project.logline.trim() ? `**Logline:** ${project.logline.trim()}` : "",
		""
	].filter((l) => l !== "");
	const body = project.chapters.flatMap((ch) => {
		const block = [`# ${ch.title}`, ""];
		ch.pages.forEach((page, i) => {
			block.push(pageToMarkdown(page, i + 1, options));
		});
		return block;
	});
	if (!options?.panelsOnly && project.characters.length) {
		body.push("# Personagens", "");
		for (const c of project.characters) {
			body.push(`## ${c.name}`);
			if (c.role) body.push(`*${c.role}*`);
			if (c.appearance) body.push(`**Aparência:** ${c.appearance}`);
			if (c.personality) body.push(`**Personalidade:** ${c.personality}`);
			if (c.notes) body.push(c.notes);
			body.push("");
		}
	}
	return [...header, ...body].join("\n").trim() + "\n";
}
function printHtml(project, options) {
	const htmlBody = projectToMarkdown(project, options).replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").split("\n").map((line) => {
		if (line.startsWith("# ")) return `<h1>${line.slice(2)}</h1>`;
		if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`;
		if (line.startsWith("### ")) return `<h3>${line.slice(4)}</h3>`;
		if (line.startsWith("- ")) return `<p class="line">${line.slice(2)}</p>`;
		if (!line.trim()) return "";
		return `<p>${line}</p>`;
	}).join("\n");
	return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>${project.title} — Painel</title>
  <style>
    @page { margin: 18mm 16mm; }
    body { font-family: "Source Serif 4", Georgia, serif; color: #1b1814; background: #fff; max-width: 720px; margin: 0 auto; padding: 32px 24px; line-height: 1.5; }
    h1 { font-family: Fraunces, Georgia, serif; font-size: 28px; margin: 0 0 8px; }
    h2 { font-size: 18px; margin: 28px 0 8px; letter-spacing: 0.04em; text-transform: uppercase; }
    h3 { font-size: 14px; margin: 16px 0 4px; color: #3d4f4b; }
    p { margin: 0 0 6px; }
    p.line { padding-left: 16px; }
    .meta { color: #6d655b; font-size: 13px; margin-bottom: 24px; }
  </style>
</head>
<body>
  ${htmlBody}
</body>
</html>`;
}
function printProject(project, options) {
	const html = printHtml(project, options);
	const frame = document.createElement("iframe");
	frame.setAttribute("aria-hidden", "true");
	frame.style.position = "fixed";
	frame.style.right = "0";
	frame.style.bottom = "0";
	frame.style.width = "0";
	frame.style.height = "0";
	frame.style.border = "0";
	document.body.appendChild(frame);
	const doc = frame.contentDocument;
	if (!doc) {
		frame.remove();
		return;
	}
	doc.open();
	doc.write(html);
	doc.close();
	const run = () => {
		frame.contentWindow?.focus();
		frame.contentWindow?.print();
		setTimeout(() => frame.remove(), 1e3);
	};
	if (frame.contentWindow?.document.readyState === "complete") run();
	else frame.onload = run;
}
function ExportMenu({ project }) {
	const slug = slugify(project.title);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			size: "sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Exportar"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Enviar ao artista" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => printProject(project),
				children: "Imprimir / PDF"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => {
					downloadText(`${slug}.md`, projectToMarkdown(project), "text/markdown");
					toast.success("Markdown baixado");
				},
				children: "Markdown completo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => {
					downloadText(`${slug}-paineis.md`, projectToMarkdown(project, { panelsOnly: true }), "text/markdown");
					toast.success("Só as descrições");
				},
				children: "Só descrições de painel"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => {
					downloadText(`${slug}.json`, JSON.stringify(project, null, 2), "application/json");
					toast.success("Cópia JSON salva");
				},
				children: "Backup JSON"
			})
		]
	})] });
}
function PagePreview({ page, pageNumber, format, selectedPanelId, onSelectPanel }) {
	const template = templateById(page.template);
	const rtl = format === "manga";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "gutter-page aspect-page w-full max-w-sm rounded-xl p-2.5",
			dir: rtl ? "rtl" : "ltr",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-full gap-1",
				style: {
					gridTemplateAreas: gridTemplateAreas(template),
					direction: rtl ? "rtl" : "ltr"
				},
				children: page.panels.map((panel, i) => {
					const area = panelArea(i);
					const selected = panel.id === selectedPanelId;
					const line = panel.balloons.find((b) => b.text.trim())?.text ?? panel.description.trim().slice(0, 42);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelectPanel?.(panel.id),
						className: cn("relative min-h-0 overflow-hidden rounded-sm bg-inset p-1.5 text-left transition-[box-shadow] duration-150", selected && "ring-2 ring-primary/50"),
						style: { gridArea: template.areas.join(" ").includes(area) ? area : void 0 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("absolute top-1 font-mono text-micro tabular-nums text-subtle", rtl ? "right-1.5" : "left-1.5"),
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-4 line-clamp-4 text-micro leading-snug text-muted", rtl && "text-right"),
								dir: "ltr",
								children: line || "—"
							}),
							panel.balloons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute bottom-1 right-1.5 font-mono text-micro tabular-nums text-subtle",
								dir: "ltr",
								children: [panel.balloons.length, "b"]
							}) : null
						]
					}, panel.id);
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs uppercase tracking-[0.14em] text-muted",
			children: [
				"Página ",
				pageNumber,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-1.5 text-border-strong",
					children: "·"
				}),
				rtl ? "Mangá · D→E" : "HQ · E→D",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-1.5 text-border-strong",
					children: "·"
				}),
				template.label
			]
		})]
	});
}
function AutoTextarea({ value, onChange, className, ...props }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const el = ref.current;
		if (!el) return;
		el.style.height = "0px";
		el.style.height = `${Math.max(el.scrollHeight, 44)}px`;
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
		ref,
		value,
		onChange: (e) => onChange(e.target.value),
		className: cn("overflow-hidden", className),
		...props
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var suggestScript = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("d679c916c82b77ca66d3b1f565ec550d285cb7054fbedc01d44453e185f8764b"));
var BALLOON_TYPES = [
	"dialogue",
	"thought",
	"caption",
	"sfx"
];
function ScriptEditor({ projectId, page, pageNumber, format, characters, selectedPanelId, onSelectPanel }) {
	const stats = pageStats(page, format);
	const setPageTemplate = useStudioStore((s) => s.setPageTemplate);
	const setPageNote = useStudioStore((s) => s.setPageNote);
	const addPanel = useStudioStore((s) => s.addPanel);
	const deletePage = useStudioStore((s) => s.deletePage);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function askRhythm() {
		setBusy(true);
		try {
			const res = await suggestScript({ data: {
				kind: "rhythm",
				format,
				context: page.panels.map((p, i) => {
					const balls = p.balloons.map((b) => `${b.type}${b.speaker ? ` ${b.speaker}` : ""}: ${b.text}`).join(" | ");
					return `Painel ${i + 1}: ${p.description || "(vazio)"} // ${balls || "sem balões"}`;
				}).join("\n")
			} });
			if (res.ok) toast.message("Ritmo da página", { description: res.text });
			else toast.error(res.error);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-2xl px-4 py-6 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
					children: ["Página ", pageNumber]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: stats.density === "falada" || stats.density === "densa" ? "warn" : "ok",
						children: DENSITY_LABELS[stats.density]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs tabular-nums text-subtle",
						children: [
							stats.panels,
							" painéis · ",
							stats.balloons,
							" balões"
						]
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								children: "Layout"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
							align: "end",
							children: templatesFor(format).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onClick: () => setPageTemplate(projectId, page.id, t.id),
								children: [t.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto text-xs text-muted",
									children: t.panelCount
								})]
							}, t.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: askRhythm,
							disabled: busy,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}), "Ritmo"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							onClick: () => deletePage(projectId, page.id),
							"aria-label": "Apagar página",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
						})
					]
				})]
			}),
			stats.hints.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-1 rounded-lg bg-warn/10 px-3 py-2 text-sm text-warn",
				children: stats.hints.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: h }, h))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
					value: page.note,
					onChange: (v) => setPageNote(projectId, page.id, v),
					placeholder: "Nota da página (virada, silêncio, referência para o artista)…",
					className: "bg-inset/60 text-sm"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 space-y-8",
				children: page.panels.map((panel, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelBlock, {
					projectId,
					pageId: page.id,
					panel,
					index: i,
					format,
					characters,
					selected: panel.id === selectedPanelId,
					onSelect: () => onSelectPanel(panel.id),
					canDelete: page.panels.length > 1,
					canMoveUp: i > 0,
					canMoveDown: i < page.panels.length - 1
				}) }, panel.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => addPanel(projectId, page.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Painel"]
				})
			})
		]
	});
}
function PanelBlock({ projectId, pageId, panel, index, format, characters, selected, onSelect, canDelete, canMoveUp, canMoveDown }) {
	const setPanelDescription = useStudioStore((s) => s.setPanelDescription);
	const setPanelAnnotation = useStudioStore((s) => s.setPanelAnnotation);
	const addBalloon = useStudioStore((s) => s.addBalloon);
	const deletePanel = useStudioStore((s) => s.deletePanel);
	const movePanel = useStudioStore((s) => s.movePanel);
	const addPanel = useStudioStore((s) => s.addPanel);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [showNote, setShowNote] = (0, import_react.useState)(Boolean(panel.annotation));
	async function expand() {
		setBusy(true);
		try {
			const res = await suggestScript({ data: {
				kind: "expand",
				format,
				context: panel.description || "Painel sem descrição. Invente uma ação concreta, cinematográfica, curta."
			} });
			if (res.ok) setPanelDescription(projectId, pageId, panel.id, res.text);
			else toast.error(res.error);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		onClick: onSelect,
		className: cn("rounded-xl bg-surface p-4 shadow-border transition-[box-shadow] duration-150", selected && "shadow-border-hover"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
					children: ["Painel ", index + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							disabled: !canMoveUp,
							onClick: () => movePanel(projectId, pageId, panel.id, -1),
							"aria-label": "Subir painel",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							disabled: !canMoveDown,
							onClick: () => movePanel(projectId, pageId, panel.id, 1),
							"aria-label": "Descer painel",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							onClick: () => setShowNote((v) => !v),
							"aria-label": "Anotação",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyNote, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							disabled: !canDelete,
							onClick: () => deletePanel(projectId, pageId, panel.id),
							"aria-label": "Apagar painel",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs font-medium text-muted",
				children: "O que o leitor vê"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
				value: panel.description,
				onChange: (v) => setPanelDescription(projectId, pageId, panel.id, v),
				placeholder: "Plano, ação, cenário, expressão…",
				className: "mt-1 paper-rule min-h-24"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: expand,
					disabled: busy,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}), "Expandir descrição"]
				})
			}),
			showNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
				value: panel.annotation,
				onChange: (v) => setPanelAnnotation(projectId, pageId, panel.id, v),
				placeholder: "Anotação para o artista ou para você…",
				className: "mt-2 bg-inset/70"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-3",
				children: panel.balloons.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BalloonRow, {
					projectId,
					pageId,
					panelId: panel.id,
					balloon: b,
					characters,
					format
				}, b.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: [BALLOON_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => addBalloon(projectId, pageId, panel.id, t),
					children: [t === "sfx" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {}), BALLOON_LABELS[t]]
				}, t)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => addPanel(projectId, pageId, panel.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Painel abaixo"]
				})]
			})
		]
	});
}
function BalloonRow({ projectId, pageId, panelId, balloon, characters, format }) {
	const updateBalloon = useStudioStore((s) => s.updateBalloon);
	const deleteBalloon = useStudioStore((s) => s.deleteBalloon);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const names = characters.map((c) => c.name).filter(Boolean);
	const datalistId = `speakers-${panelId}`;
	async function altDialogue() {
		setBusy(true);
		try {
			const res = await suggestScript({ data: {
				kind: "dialogue",
				format,
				context: `${balloon.type} ${balloon.speaker}: ${balloon.text || "(vazio)"}`
			} });
			if (res.ok) toast.message("Alternativas", { description: res.text });
			else toast.error(res.error);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-inset/80 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: balloon.type,
					onChange: (e) => updateBalloon(projectId, pageId, panelId, balloon.id, { type: e.target.value }),
					className: "h-9 rounded-md bg-surface px-2 text-xs font-medium text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)]",
					children: BALLOON_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: t,
						children: BALLOON_LABELS[t]
					}, t))
				}),
				balloon.type === "dialogue" || balloon.type === "thought" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					list: datalistId,
					value: balloon.speaker,
					onChange: (e) => updateBalloon(projectId, pageId, panelId, balloon.id, { speaker: e.target.value }),
					placeholder: "Quem fala",
					className: "h-9 max-w-40"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
					id: datalistId,
					children: names.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: n }, n))
				})] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex",
					children: [(balloon.type === "dialogue" || balloon.type === "thought") && balloon.text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						onClick: altDialogue,
						disabled: busy,
						"aria-label": "Sugerir fala",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {})
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						onClick: () => deleteBalloon(projectId, pageId, panelId, balloon.id),
						"aria-label": "Apagar balão",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
			value: balloon.text,
			onChange: (v) => updateBalloon(projectId, pageId, panelId, balloon.id, { text: v }),
			placeholder: balloon.type === "sfx" ? "KRAK, silêncio, chuva…" : "Texto do balão…",
			className: "mt-2 min-h-11 bg-surface"
		})]
	});
}
function CharactersPanel({ project }) {
	const addCharacter = useStudioStore((s) => s.addCharacter);
	const updateCharacter = useStudioStore((s) => s.updateCharacter);
	const deleteCharacter = useStudioStore((s) => s.deleteCharacter);
	const addRelation = useStudioStore((s) => s.addRelation);
	const deleteRelation = useStudioStore((s) => s.deleteRelation);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 p-4 md:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			title: "Personagens",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				onClick: () => addCharacter(project.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Personagem"]
			})
		}), project.characters.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "Cadastre quem vive nesta história. O nome entra no diálogo automaticamente." }) : project.characters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl bg-surface p-4 shadow-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: c.name,
						onChange: (e) => updateCharacter(project.id, c.id, { name: e.target.value }),
						className: "font-display text-lg"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						onClick: () => deleteCharacter(project.id, c.id),
						"aria-label": "Apagar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: c.role,
					onChange: (e) => updateCharacter(project.id, c.id, { role: e.target.value }),
					placeholder: "Função na história",
					className: "mt-2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "mt-3 block text-xs text-muted",
					children: "Aparência"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
					value: c.appearance,
					onChange: (v) => updateCharacter(project.id, c.id, { appearance: v }),
					placeholder: "O que o desenhista precisa ver.",
					className: "mt-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "mt-3 block text-xs text-muted",
					children: "Personalidade / voz"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
					value: c.personality,
					onChange: (v) => updateCharacter(project.id, c.id, { personality: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "mt-3 block text-xs text-muted",
					children: "Notas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
					value: c.notes,
					onChange: (v) => updateCharacter(project.id, c.id, { notes: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
							children: "Relações"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1",
							children: c.relations.map((r) => {
								const other = project.characters.find((x) => x.id === r.targetId);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: r.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: other?.name ?? "?" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon-sm",
											className: "ml-auto",
											onClick: () => deleteRelation(project.id, c.id, r.targetId),
											"aria-label": "Remover relação",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
										})
									]
								}, r.targetId);
							})
						}),
						project.characters.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "h-9 flex-1 rounded-md bg-surface px-2 text-sm shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)]",
								defaultValue: "",
								onChange: (e) => {
									const targetId = e.target.value;
									if (!targetId) return;
									addRelation(project.id, c.id, targetId, "conhece");
									e.target.value = "";
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Ligar a…"
								}), project.characters.filter((o) => o.id !== c.id && !c.relations.some((r) => r.targetId === o.id)).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: o.id,
									children: o.name
								}, o.id))]
							})
						}) : null
					]
				})
			]
		}, c.id))]
	});
}
function WorldPanel({ project }) {
	const addPlace = useStudioStore((s) => s.addPlace);
	const updatePlace = useStudioStore((s) => s.updatePlace);
	const deletePlace = useStudioStore((s) => s.deletePlace);
	const addRule = useStudioStore((s) => s.addRule);
	const updateRule = useStudioStore((s) => s.updateRule);
	const deleteRule = useStudioStore((s) => s.deleteRule);
	const addTimeline = useStudioStore((s) => s.addTimeline);
	const updateTimeline = useStudioStore((s) => s.updateTimeline);
	const deleteTimeline = useStudioStore((s) => s.deleteTimeline);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 p-4 md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
					title: "Lugares",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => addPlace(project.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Lugar"]
					})
				}),
				project.places.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "Onde a história acontece." }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-3",
					children: project.places.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-4 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: p.name,
								onChange: (e) => updatePlace(project.id, p.id, { name: e.target.value })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								onClick: () => deletePlace(project.id, p.id),
								"aria-label": "Apagar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
							className: "mt-2",
							value: p.description,
							onChange: (v) => updatePlace(project.id, p.id, { description: v }),
							placeholder: "Atmosfera, detalhes visuais…"
						})]
					}, p.id))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Regras do mundo",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => addRule(project.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Regra"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-3",
				children: project.worldRules.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: r.title,
							onChange: (e) => updateRule(project.id, r.id, { title: e.target.value })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							onClick: () => deleteRule(project.id, r.id),
							"aria-label": "Apagar",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
						className: "mt-2",
						value: r.body,
						onChange: (v) => updateRule(project.id, r.id, { body: v })
					})]
				}, r.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Linha do tempo",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => addTimeline(project.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Evento"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-3",
				children: project.timeline.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: e.when,
								onChange: (ev) => updateTimeline(project.id, e.id, { when: ev.target.value }),
								placeholder: "Quando",
								className: "max-w-32"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: e.title,
								onChange: (ev) => updateTimeline(project.id, e.id, { title: ev.target.value }),
								placeholder: "Título"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								onClick: () => deleteTimeline(project.id, e.id),
								"aria-label": "Apagar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
						className: "mt-2",
						value: e.body,
						onChange: (v) => updateTimeline(project.id, e.id, { body: v })
					})]
				}, e.id))
			})] })
		]
	});
}
function OutlinePanel({ project }) {
	const addBeat = useStudioStore((s) => s.addBeat);
	const updateBeat = useStudioStore((s) => s.updateBeat);
	const deleteBeat = useStudioStore((s) => s.deleteBeat);
	const renameAct = useStudioStore((s) => s.renameAct);
	const updateProject = useStudioStore((s) => s.updateProject);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 p-4 md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { title: "Estrutura" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs text-muted",
				children: "Logline"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
				className: "mt-1",
				value: project.logline,
				onChange: (v) => updateProject(project.id, { logline: v }),
				placeholder: "Uma frase. O contrato com o leitor."
			})] }),
			project.outline.map((act) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: act.title,
						onChange: (e) => renameAct(project.id, act.id, e.target.value),
						className: "font-display text-lg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-3",
						children: act.beats.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg bg-inset p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: b.title,
									onChange: (e) => updateBeat(project.id, act.id, b.id, { title: e.target.value })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon-sm",
									onClick: () => deleteBeat(project.id, act.id, b.id),
									"aria-label": "Apagar beat",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
								className: "mt-2 bg-surface",
								value: b.summary,
								onChange: (v) => updateBeat(project.id, act.id, b.id, { summary: v }),
								placeholder: "O que acontece neste beat."
							})]
						}, b.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "mt-3",
						onClick: () => addBeat(project.id, act.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Beat"]
					})
				]
			}, act.id))
		]
	});
}
function NotesPanel({ project }) {
	const addNote = useStudioStore((s) => s.addNote);
	const updateNote = useStudioStore((s) => s.updateNote);
	const deleteNote = useStudioStore((s) => s.deleteNote);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 p-4 md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Notas",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => addNote(project.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Nota"]
				})
			}),
			project.notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "Ideias soltas. Depois viram cenas." }) : null,
			project.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-4 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: n.title,
							onChange: (e) => updateNote(project.id, n.id, { title: e.target.value })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							onClick: () => deleteNote(project.id, n.id),
							"aria-label": "Apagar",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextarea, {
						className: "mt-2",
						value: n.body,
						onChange: (v) => updateNote(project.id, n.id, { body: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-xs text-subtle",
						children: formatDateTime(n.updatedAt)
					})
				]
			}, n.id))
		]
	});
}
function VersionsPanel({ project }) {
	const saveVersion = useStudioStore((s) => s.saveVersion);
	const restoreVersion = useStudioStore((s) => s.restoreVersion);
	const deleteVersion = useStudioStore((s) => s.deleteVersion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 p-4 md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Versões",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => saveVersion(project.id),
					children: "Salvar versão"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Um recorte do capítulo atual. Restaurar troca as páginas, não os personagens."
			}),
			project.versions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "Nenhuma versão salva ainda." }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: project.versions.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-medium",
								children: v.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs tabular-nums text-subtle",
								children: [
									formatDateTime(v.createdAt),
									" · ",
									v.pages.length,
									" pág."
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => restoreVersion(project.id, v.id),
							children: "Restaurar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							onClick: () => deleteVersion(project.id, v.id),
							"aria-label": "Apagar versão",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
						})
					]
				}, v.id))
			})
		]
	});
}
function Header({ title, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl font-medium tracking-tight",
			children: title
		}), action]
	});
}
function Empty({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-lg bg-inset px-4 py-6 text-sm text-muted",
		children: text
	});
}
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {})
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border-strong" })
}));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
var TABS = [
	{
		id: "script",
		label: "Roteiro",
		icon: BookOpen
	},
	{
		id: "characters",
		label: "Elenco",
		icon: Users
	},
	{
		id: "world",
		label: "Mundo",
		icon: Map
	},
	{
		id: "outline",
		label: "Estrutura",
		icon: LayoutGrid
	},
	{
		id: "notes",
		label: "Notas",
		icon: StickyNote
	},
	{
		id: "versions",
		label: "Versões",
		icon: History
	}
];
function Workspace({ project }) {
	const [tab, setTab] = (0, import_react.useState)("script");
	const [pageId, setPageId] = (0, import_react.useState)(currentChapterOf(project)?.pages[0]?.id ?? "");
	const [panelId, setPanelId] = (0, import_react.useState)();
	const [focus, setFocus] = (0, import_react.useState)(false);
	const [mobilePane, setMobilePane] = (0, import_react.useState)("script");
	const updateProject = useStudioStore((s) => s.updateProject);
	const addPage = useStudioStore((s) => s.addPage);
	const addChapter = useStudioStore((s) => s.addChapter);
	const setCurrentChapter = useStudioStore((s) => s.setCurrentChapter);
	const renameChapter = useStudioStore((s) => s.renameChapter);
	const duplicateProject = useStudioStore((s) => s.duplicateProject);
	const saveVersion = useStudioStore((s) => s.saveVersion);
	const chapter = currentChapterOf(project);
	const pages = chapter?.pages ?? [];
	const activePage = pages.find((p) => p.id === pageId) ?? pages[0];
	const pageNumber = activePage ? pages.findIndex((p) => p.id === activePage.id) + 1 : 1;
	const stats = (0, import_react.useMemo)(() => projectStats(project), [project]);
	function goPage(id) {
		setPageId(id);
		setPanelId(void 0);
		setTab("script");
		setMobilePane("script");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex shrink-0 items-center gap-2 border-b border-border bg-surface px-3 py-2 md:px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/studio",
					className: "flex size-11 items-center justify-center rounded-md text-muted hover:bg-inset hover:text-fg",
					"aria-label": "Voltar ao estúdio",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {
					compact: true,
					className: "hidden sm:inline-flex"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: project.title,
					onChange: (e) => updateProject(project.id, { title: e.target.value }),
					className: "h-11 max-w-56 border-0 bg-transparent font-display text-lg shadow-none md:max-w-xs",
					"aria-label": "Título do roteiro"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => updateProject(project.id, { format: project.format === "manga" ? "hq" : "manga" }),
					className: "hidden sm:inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: FORMAT_LABELS[project.format]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "hidden font-mono text-xs tabular-nums text-subtle lg:inline",
					children: [
						stats.pages,
						" pág. · ",
						stats.panels,
						" painéis · ",
						stats.balloons,
						" balões"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: focus ? "default" : "ghost",
							size: "icon-sm",
							onClick: () => setFocus((v) => !v),
							"aria-label": "Modo foco",
							className: "hidden md:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Focus, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							className: "hidden md:inline-flex",
							"aria-label": "Duplicar",
							onClick: () => {
								if (duplicateProject(project.id)) toast.success("Cópia criada no estúdio");
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							className: "hidden md:inline-flex",
							onClick: () => saveVersion(project.id),
							children: "Versão"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportMenu, { project })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-1",
			children: [!focus ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden w-56 shrink-0 flex-col border-r border-border bg-surface md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-1 text-xs font-medium uppercase tracking-[0.14em] text-muted",
								children: "Capítulo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "mt-2 h-10 w-full rounded-md bg-inset px-2 text-sm",
								value: project.currentChapterId,
								onChange: (e) => {
									setCurrentChapter(project.id, e.target.value);
									const ch = project.chapters.find((c) => c.id === e.target.value);
									if (ch?.pages[0]) goPage(ch.pages[0].id);
								},
								children: project.chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.title
								}, c.id))
							}),
							chapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "mt-2 h-9",
								value: chapter.title,
								onChange: (e) => renameChapter(project.id, chapter.id, e.target.value),
								"aria-label": "Nome do capítulo"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								className: "mt-1 w-full justify-start",
								onClick: () => addChapter(project.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Capítulo"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 px-1 text-xs font-medium uppercase tracking-[0.14em] text-muted",
								children: "Páginas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-2 space-y-1",
								children: pages.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => goPage(p.id),
									className: cn("flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm", activePage?.id === p.id ? "bg-primary text-primary-fg" : "hover:bg-inset"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Pág. ", i + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs tabular-nums opacity-70",
										children: p.panels.length
									})]
								}) }, p.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "mt-2 w-full",
								onClick: () => {
									const id = addPage(project.id, activePage?.id);
									if (id) goPage(id);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Página"]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "grid grid-cols-3 gap-1 border-t border-border p-2",
					children: TABS.map((t) => {
						const Icon = t.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							title: t.label,
							onClick: () => setTab(t.id),
							className: cn("flex h-11 flex-col items-center justify-center rounded-md text-micro", tab === t.id ? "bg-inset text-fg" : "text-muted hover:bg-inset/60 hover:text-fg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), t.label]
						}, t.id);
					})
				})]
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1 overflow-x-auto border-b border-border px-2 py-2 md:hidden",
					children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: tab === t.id ? "default" : "ghost",
						onClick: () => setTab(t.id),
						children: t.label
					}, t.id))
				}), tab === "script" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1 border-b border-border px-2 py-2 lg:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneChip, {
							active: mobilePane === "pages",
							onClick: () => setMobilePane("pages"),
							children: "Páginas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneChip, {
							active: mobilePane === "script",
							onClick: () => setMobilePane("script"),
							children: "Texto"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneChip, {
							active: mobilePane === "preview",
							onClick: () => setMobilePane("preview"),
							children: "Página"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
							className: cn("min-h-0 flex-1", mobilePane !== "script" && "hidden lg:block"),
							children: activePage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScriptEditor, {
								projectId: project.id,
								page: activePage,
								pageNumber,
								format: project.format,
								characters: project.characters,
								selectedPanelId: panelId,
								onSelectPanel: setPanelId
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "p-8 text-sm text-muted",
								children: "Nenhuma página neste capítulo."
							})
						}),
						!focus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: cn("w-full shrink-0 overflow-y-auto border-l border-border bg-inset/40 p-4 lg:w-80", mobilePane !== "preview" && "hidden lg:block"),
							children: activePage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PagePreview, {
								page: activePage,
								pageNumber,
								format: project.format,
								selectedPanelId: panelId,
								onSelectPanel: setPanelId
							}) : null
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: cn("w-full overflow-y-auto p-3 lg:hidden", mobilePane !== "pages" && "hidden"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "space-y-1",
								children: pages.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => goPage(p.id),
									className: cn("flex w-full items-center justify-between rounded-md px-3 py-3 text-left", activePage?.id === p.id ? "bg-primary text-primary-fg" : "bg-surface"),
									children: [
										"Página ",
										i + 1,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs",
											children: p.panels.length
										})
									]
								}) }, p.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "mt-3 w-full",
								variant: "outline",
								onClick: () => {
									const id = addPage(project.id, activePage?.id);
									if (id) goPage(id);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Página"]
							})]
						})
					]
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollArea, {
					className: "min-h-0 flex-1",
					children: [
						tab === "characters" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharactersPanel, { project }) : null,
						tab === "world" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldPanel, { project }) : null,
						tab === "outline" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutlinePanel, { project }) : null,
						tab === "notes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesPanel, { project }) : null,
						tab === "versions" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VersionsPanel, { project }) : null
					]
				})]
			})]
		})]
	});
}
function PaneChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-10 rounded-md px-3 text-sm", active ? "bg-primary text-primary-fg" : "text-muted hover:bg-inset"),
		children
	});
}
function ProjectPage() {
	const { projectId } = Route.useParams();
	const project = useStudioStore((s) => s.projects.find((p) => p.id === projectId));
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-4 bg-bg px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Roteiro não encontrado"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-sm text-muted",
				children: "Ele pode ter sido apagado neste aparelho."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/studio",
					children: "Voltar ao estúdio"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workspace, { project });
}
//#endregion
export { ProjectPage as component };
