import { gridTemplateAreas, panelArea, templateById } from "@/lib/templates";
import type { Format, Page } from "@/lib/types";
import { cn } from "@/lib/utils";

export function PagePreview({
  page,
  pageNumber,
  format,
  selectedPanelId,
  onSelectPanel,
}: {
  page: Page;
  pageNumber: number;
  format: Format;
  selectedPanelId?: string;
  onSelectPanel?: (id: string) => void;
}) {
  const template = templateById(page.template);
  const rtl = format === "manga";

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="gutter-page aspect-page w-full max-w-sm rounded-xl p-2.5"
        dir={rtl ? "rtl" : "ltr"}
      >
        <div
          className="grid h-full gap-1"
          style={{
            gridTemplateAreas: gridTemplateAreas(template),
            direction: rtl ? "rtl" : "ltr",
          }}
        >
          {page.panels.map((panel, i) => {
            const area = panelArea(i);
            const selected = panel.id === selectedPanelId;
            const line =
              panel.balloons.find((b) => b.text.trim())?.text ??
              panel.description.trim().slice(0, 42);
            return (
              <button
                key={panel.id}
                type="button"
                onClick={() => onSelectPanel?.(panel.id)}
                className={cn(
                  "relative min-h-0 overflow-hidden rounded-sm bg-inset p-1.5 text-left transition-[box-shadow] duration-150",
                  selected && "ring-2 ring-primary/50",
                )}
                style={{ gridArea: template.areas.join(" ").includes(area) ? area : undefined }}
              >
                <span
                  className={cn(
                    "absolute top-1 font-mono text-micro tabular-nums text-subtle",
                    rtl ? "right-1.5" : "left-1.5",
                  )}
                >
                  {i + 1}
                </span>
                <p
                  className={cn(
                    "mt-4 line-clamp-4 text-micro leading-snug text-muted",
                    rtl && "text-right",
                  )}
                  dir="ltr"
                >
                  {line || "—"}
                </p>
                {panel.balloons.length > 0 ? (
                  <span className="absolute bottom-1 right-1.5 font-mono text-micro tabular-nums text-subtle" dir="ltr">
                    {panel.balloons.length}b
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
      <p className="text-xs uppercase tracking-[0.14em] text-muted">
        Página {pageNumber}
        <span className="mx-1.5 text-border-strong">·</span>
        {rtl ? "Mangá · D→E" : "HQ · E→D"}
        <span className="mx-1.5 text-border-strong">·</span>
        {template.label}
      </p>
    </div>
  );
}
