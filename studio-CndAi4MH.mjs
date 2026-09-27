import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useStudioStore } from "./store-Ck-7Blh3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-CndAi4MH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudioHydrate({ children }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const finish = () => {
			useStudioStore.getState().ensureSeed();
			setReady(true);
		};
		const unsub = useStudioStore.persist.onFinishHydration(finish);
		useStudioStore.persist.rehydrate();
		if (useStudioStore.persist.hasHydrated()) finish();
		return unsub;
	}, []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-bg text-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg",
			children: "Abrindo o estúdio…"
		})
	});
	return children;
}
function StudioLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioHydrate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { StudioLayout as component };
