//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-Cg5zS2q8.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: ["/", "/studio"],
		preloads: [
			"/assets/index-YH4d3uww.js",
			"/assets/utils-BWF9YUs5.js",
			"/assets/dist-Bp-NdEYN.js",
			"/assets/dist-BW-7VSyo.js"
		],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-YH4d3uww.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-Bl--GmAe.js",
			"/assets/message-square-fFQXVtsW.js",
			"/assets/button-DsHc8aAS.js",
			"/assets/seed-JncPZDM6.js"
		]
	},
	"/studio": {
		filePath: "/workspace/src/routes/studio.tsx",
		children: ["/studio/$projectId", "/studio/"],
		preloads: ["/assets/studio-Dh8qg7oY.js", "/assets/store-CGyeULCB.js"]
	},
	"/studio/$projectId": {
		filePath: "/workspace/src/routes/studio/$projectId.tsx",
		children: void 0,
		preloads: [
			"/assets/_projectId-Capa0lsE.js",
			"/assets/message-square-fFQXVtsW.js",
			"/assets/label-K1KgaC3O.js",
			"/assets/button-DsHc8aAS.js",
			"/assets/seed-JncPZDM6.js"
		]
	},
	"/studio/": {
		filePath: "/workspace/src/routes/studio/index.tsx",
		children: void 0,
		preloads: [
			"/assets/studio-LUoAziCK.js",
			"/assets/label-K1KgaC3O.js",
			"/assets/button-DsHc8aAS.js"
		]
	}
} });
//#endregion
export { tsrStartManifest };
