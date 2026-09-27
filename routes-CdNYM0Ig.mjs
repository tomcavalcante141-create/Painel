import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { T as ArrowRight, g as Eye, l as PanelsTopLeft, u as MessageSquare } from "../_libs/lucide-react.mjs";
import { n as Button, t as BrandMark } from "./button-V_34Orry.mjs";
import { t as SAMPLE_PROJECT_ID } from "./seed-B6W6fAUL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CdNYM0Ig.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/studio",
							children: "Estúdio"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/studio",
							children: ["Escrever", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-8 md:grid-cols-2 md:gap-16 md:px-8 md:pb-24 md:pt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stagger-in",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
								children: "Estúdio de roteiro"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-fg md:text-6xl",
								children: "Escreva a HQ. Painel a painel."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg",
								children: "Um editor feito para roteiristas de quadrinhos e mangá. Não é um documento genérico: é página, painel, o que o leitor vê e o que o personagem fala."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/studio",
										children: ["Começar um roteiro", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/studio/$projectId",
										params: { projectId: SAMPLE_PROJECT_ID },
										children: "Abrir o exemplo"
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPage, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-border bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anatomy, {
								kicker: "Página",
								title: "A unidade de ritmo",
								body: "Cada página tem um layout. O sistema numera sozinho. Você pensa em virada, não em parágrafo."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anatomy, {
								kicker: "Painel",
								title: "O que o leitor vê",
								body: "Descrição visual primeiro. Plano, ação, cenário — separado do que se fala."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anatomy, {
								kicker: "Balão",
								title: "O que se ouve",
								body: "Diálogo, pensamento, legenda e SFX. Cada um no lugar certo, com o personagem certo."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anatomy, {
								kicker: "Preview",
								title: "A página no papel",
								body: "Lado a lado com o texto. Mangá lê da direita; HQ da esquerda. Sem desenhar uma linha."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
							children: "Do logline ao PDF"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl",
							children: "A história inteira, no mesmo caderno."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, { className: "size-5" }),
								title: "Mangá ou HQ",
								body: "Ritmo e leitura mudam com o formato. Templates de página para splash, faixa, grade e mangá clássico."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-5" }),
								title: "Personagens e mundo",
								body: "Fichas, relações, lugares, regras, timeline e estrutura de atos. Notas soltas viram cenas depois."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-5" }),
								title: "Exportar para o artista",
								body: "PDF formatado, Markdown limpo, ou só as descrições de painel. Versões do roteiro ficam salvas aqui."
							})
						]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border px-5 py-8 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Roteiros para HQ e mangá. Os desenhos ficam com você."
					})]
				})
			})
		]
	});
}
function Anatomy({ kicker, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-surface px-6 py-8 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-xl font-medium",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: body
			})
		]
	});
}
function FeatureCard({ icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl bg-surface p-6 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 items-center justify-center rounded-md bg-inset text-primary",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-xl font-medium",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: body
			})
		]
	});
}
function HeroPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto w-full max-w-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-6 top-8 hidden h-40 w-28 rotate-[-8deg] rounded-lg bg-inset shadow-border md:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gutter-page relative aspect-page rounded-xl p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid h-full gap-1.5",
					style: {
						gridTemplateAreas: `"a a a" "b b c" "d e e"`,
						gridTemplateRows: "1.2fr 1fr 1fr"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPanel, {
							area: "a",
							n: "1",
							caption: "Plataforma vazia. 1h14."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPanel, {
							area: "b",
							n: "2",
							caption: "A catraca lacrada.",
							balloon: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPanel, {
							area: "c",
							n: "3",
							caption: "Celular: último trem 00:42."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPanel, {
							area: "d",
							n: "4",
							caption: "Lanterna no túnel."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPanel, {
							area: "e",
							n: "5",
							caption: "O fiscal. Uniforme seco.",
							balloon: true
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs uppercase tracking-[0.16em] text-muted",
				children: "Página 1 · Estação Fechada"
			})
		]
	});
}
function HeroPanel({ area, n, caption, balloon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-sm bg-inset",
		style: { gridArea: area },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-1.5 top-1.5 font-mono text-micro tabular-nums text-subtle",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute inset-x-2 bottom-2 text-micro leading-snug text-muted",
				children: caption
			}),
			balloon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-2 top-6 rounded-full bg-surface px-2 py-1 text-micro text-fg shadow-border",
				children: "— Moça. Fechou."
			}) : null
		]
	});
}
//#endregion
export { Home as component };
