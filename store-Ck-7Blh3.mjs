import { l as uid, s as now } from "./router-DHi9HsM2.mjs";
import { a as makeBalloon, c as makeNote, d as makePlace, f as makeProject, l as makePage, n as createSampleProject, o as makeChapter, p as makeRule, r as defaultTemplateFor, s as makeCharacter, u as makePanel } from "./seed-B6W6fAUL.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-Ck-7Blh3.js
function mapProject(projects, id, fn) {
	return projects.map((p) => p.id === id ? {
		...fn(p),
		updatedAt: now()
	} : p);
}
function mapChapter(project, fn) {
	const chapterId = project.currentChapterId;
	return {
		...project,
		chapters: project.chapters.map((ch) => ch.id === chapterId ? fn(ch) : ch)
	};
}
function currentChapter(project) {
	return project.chapters.find((c) => c.id === project.currentChapterId) ?? project.chapters[0];
}
function getProject(projects, id) {
	return projects.find((p) => p.id === id);
}
var useStudioStore = create()(persist((set, get) => ({
	projects: [],
	seeded: false,
	ensureSeed: () => {
		if (get().seeded) return;
		set({
			projects: [createSampleProject()],
			seeded: true
		});
	},
	createProject: (input) => {
		const project = makeProject(input);
		set({ projects: [project, ...get().projects] });
		return project.id;
	},
	deleteProject: (id) => {
		set({ projects: get().projects.filter((p) => p.id !== id) });
	},
	duplicateProject: (id) => {
		const src = getProject(get().projects, id);
		if (!src) return null;
		const copy = JSON.parse(JSON.stringify(src));
		const remap = /* @__PURE__ */ new Map();
		const nextId = () => {
			return uid();
		};
		copy.id = nextId();
		copy.title = `${src.title} (cópia)`;
		copy.createdAt = now();
		copy.updatedAt = now();
		copy.versions = [];
		copy.chapters = copy.chapters.map((ch) => {
			const nid = nextId();
			remap.set(ch.id, nid);
			return {
				...ch,
				id: nid,
				pages: ch.pages.map((page) => ({
					...page,
					id: nextId(),
					panels: page.panels.map((panel) => ({
						...panel,
						id: nextId(),
						balloons: panel.balloons.map((b) => ({
							...b,
							id: nextId()
						}))
					}))
				}))
			};
		});
		copy.currentChapterId = remap.get(src.currentChapterId) ?? copy.chapters[0].id;
		copy.characters = copy.characters.map((c) => {
			const nid = nextId();
			remap.set(c.id, nid);
			return {
				...c,
				id: nid
			};
		});
		copy.characters = copy.characters.map((c) => ({
			...c,
			relations: c.relations.map((r) => ({
				...r,
				targetId: remap.get(r.targetId) ?? r.targetId
			}))
		}));
		copy.places = copy.places.map((p) => ({
			...p,
			id: nextId()
		}));
		copy.worldRules = copy.worldRules.map((r) => ({
			...r,
			id: nextId()
		}));
		copy.timeline = copy.timeline.map((e) => ({
			...e,
			id: nextId()
		}));
		copy.outline = copy.outline.map((a) => ({
			...a,
			id: nextId(),
			beats: a.beats.map((b) => ({
				...b,
				id: nextId()
			}))
		}));
		copy.notes = copy.notes.map((n) => ({
			...n,
			id: nextId()
		}));
		set({ projects: [copy, ...get().projects] });
		return copy.id;
	},
	importProject: (project) => {
		const incoming = {
			...project,
			id: project.id || uid(),
			updatedAt: now()
		};
		if (get().projects.some((p) => p.id === incoming.id)) incoming.id = uid();
		set({ projects: [incoming, ...get().projects] });
		return incoming.id;
	},
	updateProject: (id, patch) => {
		set({ projects: mapProject(get().projects, id, (p) => ({
			...p,
			...patch
		})) });
	},
	touch: (id) => {
		set({ projects: get().projects.map((p) => p.id === id ? {
			...p,
			updatedAt: now()
		} : p) });
	},
	setCurrentChapter: (projectId, chapterId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			currentChapterId: chapterId
		})) });
	},
	addChapter: (projectId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => {
			const n = p.chapters.length + 1;
			const ch = makeChapter(`Capítulo ${n}`, p.format);
			return {
				...p,
				chapters: [...p.chapters, ch],
				currentChapterId: ch.id,
				kind: "serial"
			};
		}) });
	},
	renameChapter: (projectId, chapterId, title) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			chapters: p.chapters.map((c) => c.id === chapterId ? {
				...c,
				title
			} : c)
		})) });
	},
	deleteChapter: (projectId, chapterId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => {
			if (p.chapters.length <= 1) return p;
			const chapters = p.chapters.filter((c) => c.id !== chapterId);
			return {
				...p,
				chapters,
				currentChapterId: p.currentChapterId === chapterId ? chapters[0].id : p.currentChapterId
			};
		}) });
	},
	addPage: (projectId, afterPageId, template) => {
		let created = null;
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => {
			const page = makePage(template ?? defaultTemplateFor(1, p.format));
			created = page.id;
			if (!afterPageId) return {
				...ch,
				pages: [...ch.pages, page]
			};
			const idx = ch.pages.findIndex((pg) => pg.id === afterPageId);
			const pages = [...ch.pages];
			pages.splice(idx + 1, 0, page);
			return {
				...ch,
				pages
			};
		})) });
		return created;
	},
	deletePage: (projectId, pageId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => {
			if (ch.pages.length <= 1) return ch;
			return {
				...ch,
				pages: ch.pages.filter((pg) => pg.id !== pageId)
			};
		})) });
	},
	movePage: (projectId, pageId, dir) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => {
			const i = ch.pages.findIndex((pg) => pg.id === pageId);
			const j = i + dir;
			if (i < 0 || j < 0 || j >= ch.pages.length) return ch;
			const pages = [...ch.pages];
			const [item] = pages.splice(i, 1);
			pages.splice(j, 0, item);
			return {
				...ch,
				pages
			};
		})) });
	},
	setPageTemplate: (projectId, pageId, template) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => ({
			...ch,
			pages: ch.pages.map((pg) => pg.id === pageId ? {
				...pg,
				template
			} : pg)
		}))) });
	},
	setPageNote: (projectId, pageId, note) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => ({
			...ch,
			pages: ch.pages.map((pg) => pg.id === pageId ? {
				...pg,
				note
			} : pg)
		}))) });
	},
	addPanel: (projectId, pageId, afterPanelId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => ({
			...ch,
			pages: ch.pages.map((pg) => {
				if (pg.id !== pageId) return pg;
				const panel = makePanel();
				const panels = [...pg.panels];
				if (!afterPanelId) panels.push(panel);
				else {
					const idx = panels.findIndex((x) => x.id === afterPanelId);
					panels.splice(idx + 1, 0, panel);
				}
				const template = defaultTemplateFor(panels.length, p.format);
				return {
					...pg,
					panels,
					template
				};
			})
		}))) });
	},
	deletePanel: (projectId, pageId, panelId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => ({
			...ch,
			pages: ch.pages.map((pg) => {
				if (pg.id !== pageId || pg.panels.length <= 1) return pg;
				const panels = pg.panels.filter((x) => x.id !== panelId);
				return {
					...pg,
					panels,
					template: defaultTemplateFor(panels.length, p.format)
				};
			})
		}))) });
	},
	movePanel: (projectId, pageId, panelId, dir) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => ({
			...ch,
			pages: ch.pages.map((pg) => {
				if (pg.id !== pageId) return pg;
				const i = pg.panels.findIndex((x) => x.id === panelId);
				const j = i + dir;
				if (i < 0 || j < 0 || j >= pg.panels.length) return pg;
				const panels = [...pg.panels];
				const [item] = panels.splice(i, 1);
				panels.splice(j, 0, item);
				return {
					...pg,
					panels
				};
			})
		}))) });
	},
	setPanelDescription: (projectId, pageId, panelId, description) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => ({
			...ch,
			pages: ch.pages.map((pg) => pg.id !== pageId ? pg : {
				...pg,
				panels: pg.panels.map((pan) => pan.id === panelId ? {
					...pan,
					description
				} : pan)
			})
		}))) });
	},
	setPanelAnnotation: (projectId, pageId, panelId, annotation) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => ({
			...ch,
			pages: ch.pages.map((pg) => pg.id !== pageId ? pg : {
				...pg,
				panels: pg.panels.map((pan) => pan.id === panelId ? {
					...pan,
					annotation
				} : pan)
			})
		}))) });
	},
	addBalloon: (projectId, pageId, panelId, type) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => ({
			...ch,
			pages: ch.pages.map((pg) => pg.id !== pageId ? pg : {
				...pg,
				panels: pg.panels.map((pan) => pan.id !== panelId ? pan : {
					...pan,
					balloons: [...pan.balloons, makeBalloon(type)]
				})
			})
		}))) });
	},
	updateBalloon: (projectId, pageId, panelId, balloonId, patch) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => ({
			...ch,
			pages: ch.pages.map((pg) => pg.id !== pageId ? pg : {
				...pg,
				panels: pg.panels.map((pan) => pan.id !== panelId ? pan : {
					...pan,
					balloons: pan.balloons.map((b) => b.id === balloonId ? {
						...b,
						...patch
					} : b)
				})
			})
		}))) });
	},
	deleteBalloon: (projectId, pageId, panelId, balloonId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => mapChapter(p, (ch) => ({
			...ch,
			pages: ch.pages.map((pg) => pg.id !== pageId ? pg : {
				...pg,
				panels: pg.panels.map((pan) => pan.id !== panelId ? pan : {
					...pan,
					balloons: pan.balloons.filter((b) => b.id !== balloonId)
				})
			})
		}))) });
	},
	addCharacter: (projectId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			characters: [...p.characters, makeCharacter("Novo personagem")]
		})) });
	},
	updateCharacter: (projectId, characterId, patch) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			characters: p.characters.map((c) => c.id === characterId ? {
				...c,
				...patch
			} : c)
		})) });
	},
	deleteCharacter: (projectId, characterId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			characters: p.characters.filter((c) => c.id !== characterId).map((c) => ({
				...c,
				relations: c.relations.filter((r) => r.targetId !== characterId)
			}))
		})) });
	},
	addRelation: (projectId, characterId, targetId, label) => {
		if (!targetId || characterId === targetId) return;
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			characters: p.characters.map((c) => {
				if (c.id !== characterId) return c;
				if (c.relations.some((r) => r.targetId === targetId)) return c;
				return {
					...c,
					relations: [...c.relations, {
						targetId,
						label
					}]
				};
			})
		})) });
	},
	deleteRelation: (projectId, characterId, targetId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			characters: p.characters.map((c) => c.id !== characterId ? c : {
				...c,
				relations: c.relations.filter((r) => r.targetId !== targetId)
			})
		})) });
	},
	addPlace: (projectId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			places: [...p.places, makePlace("Novo lugar")]
		})) });
	},
	updatePlace: (projectId, placeId, patch) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			places: p.places.map((x) => x.id === placeId ? {
				...x,
				...patch
			} : x)
		})) });
	},
	deletePlace: (projectId, placeId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			places: p.places.filter((x) => x.id !== placeId)
		})) });
	},
	addRule: (projectId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			worldRules: [...p.worldRules, makeRule("Nova regra")]
		})) });
	},
	updateRule: (projectId, ruleId, patch) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			worldRules: p.worldRules.map((x) => x.id === ruleId ? {
				...x,
				...patch
			} : x)
		})) });
	},
	deleteRule: (projectId, ruleId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			worldRules: p.worldRules.filter((x) => x.id !== ruleId)
		})) });
	},
	addTimeline: (projectId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			timeline: [...p.timeline, {
				id: uid(),
				title: "Evento",
				when: "",
				body: ""
			}]
		})) });
	},
	updateTimeline: (projectId, eventId, patch) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			timeline: p.timeline.map((x) => x.id === eventId ? {
				...x,
				...patch
			} : x)
		})) });
	},
	deleteTimeline: (projectId, eventId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			timeline: p.timeline.filter((x) => x.id !== eventId)
		})) });
	},
	addBeat: (projectId, actId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			outline: p.outline.map((a) => a.id !== actId ? a : {
				...a,
				beats: [...a.beats, {
					id: uid(),
					title: "Beat",
					summary: ""
				}]
			})
		})) });
	},
	updateBeat: (projectId, actId, beatId, patch) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			outline: p.outline.map((a) => a.id !== actId ? a : {
				...a,
				beats: a.beats.map((b) => b.id === beatId ? {
					...b,
					...patch
				} : b)
			})
		})) });
	},
	deleteBeat: (projectId, actId, beatId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			outline: p.outline.map((a) => a.id !== actId ? a : {
				...a,
				beats: a.beats.filter((b) => b.id !== beatId)
			})
		})) });
	},
	renameAct: (projectId, actId, title) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			outline: p.outline.map((a) => a.id === actId ? {
				...a,
				title
			} : a)
		})) });
	},
	addNote: (projectId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			notes: [makeNote("Nota solta"), ...p.notes]
		})) });
	},
	updateNote: (projectId, noteId, patch) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			notes: p.notes.map((n) => n.id === noteId ? {
				...n,
				...patch,
				updatedAt: now()
			} : n)
		})) });
	},
	deleteNote: (projectId, noteId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			notes: p.notes.filter((n) => n.id !== noteId)
		})) });
	},
	saveVersion: (projectId, label) => {
		set({ projects: mapProject(get().projects, projectId, (p) => {
			const ch = currentChapter(p);
			if (!ch) return p;
			const snap = {
				id: uid(),
				label: label?.trim() || `Versão ${p.versions.length + 1}`,
				createdAt: now(),
				chapterId: ch.id,
				pages: JSON.parse(JSON.stringify(ch.pages))
			};
			return {
				...p,
				versions: [snap, ...p.versions].slice(0, 30)
			};
		}) });
	},
	restoreVersion: (projectId, versionId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => {
			const snap = p.versions.find((v) => v.id === versionId);
			if (!snap) return p;
			return {
				...p,
				currentChapterId: p.chapters.some((c) => c.id === snap.chapterId) ? snap.chapterId : p.currentChapterId,
				chapters: p.chapters.map((c) => c.id === snap.chapterId ? {
					...c,
					pages: JSON.parse(JSON.stringify(snap.pages))
				} : c)
			};
		}) });
	},
	deleteVersion: (projectId, versionId) => {
		set({ projects: mapProject(get().projects, projectId, (p) => ({
			...p,
			versions: p.versions.filter((v) => v.id !== versionId)
		})) });
	}
}), {
	name: "painel-studio-v1",
	skipHydration: true,
	partialize: (s) => ({
		projects: s.projects,
		seeded: s.seeded
	})
}));
function currentChapterOf(project) {
	return project.chapters.find((c) => c.id === project.currentChapterId) ?? project.chapters[0];
}
//#endregion
export { useStudioStore as n, currentChapterOf as t };
