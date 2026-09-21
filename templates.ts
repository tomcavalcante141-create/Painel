import type { TemplateId } from "./types";

export interface PageTemplate {
  id: TemplateId;
  label: string;
  hint: string;
  panelCount: number;
  /** CSS grid-template-areas, one string per row */
  areas: string[];
  formats?: Array<"manga" | "hq">;
}

export const PAGE_TEMPLATES: PageTemplate[] = [
  {
    id: "splash",
    label: "Splash",
    hint: "Página inteira",
    panelCount: 1,
    areas: ["a"],
  },
  {
    id: "twoV",
    label: "2 faixas",
    hint: "Dois painéis empilhados",
    panelCount: 2,
    areas: ["a", "b"],
  },
  {
    id: "twoH",
    label: "2 colunas",
    hint: "Dois painéis lado a lado",
    panelCount: 2,
    areas: ["a b"],
  },
  {
    id: "threeV",
    label: "3 faixas",
    hint: "Ritmo de leitura vertical",
    panelCount: 3,
    areas: ["a", "b", "c"],
  },
  {
    id: "strip3",
    label: "Tira",
    hint: "Três quadros em faixa",
    panelCount: 3,
    areas: ["a b c"],
    formats: ["hq"],
  },
  {
    id: "widePlus2",
    label: "Faixa + 2",
    hint: "Estabelecimento e corte",
    panelCount: 3,
    areas: ["a a", "b c"],
  },
  {
    id: "invertedL",
    label: "L invertido",
    hint: "Um grande e dois pequenos",
    panelCount: 3,
    areas: ["a a b", "a a c"],
  },
  {
    id: "four",
    label: "Grade 4",
    hint: "Dois por dois",
    panelCount: 4,
    areas: ["a b", "c d"],
  },
  {
    id: "manga5",
    label: "Mangá 5",
    hint: "Página clássica de mangá",
    panelCount: 5,
    areas: ["a a a", "b b c", "d e e"],
    formats: ["manga"],
  },
  {
    id: "six",
    label: "Grade 6",
    hint: "Página densa",
    panelCount: 6,
    areas: ["a b", "c d", "e f"],
  },
];

const AREA_LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i"] as const;

export function templateById(id: TemplateId): PageTemplate {
  return PAGE_TEMPLATES.find((t) => t.id === id) ?? PAGE_TEMPLATES[0]!;
}

export function templatesFor(format: "manga" | "hq"): PageTemplate[] {
  return PAGE_TEMPLATES.filter((t) => !t.formats || t.formats.includes(format));
}

export function defaultTemplateFor(panelCount: number, format: "manga" | "hq"): TemplateId {
  const pool = templatesFor(format);
  const exact = pool.find((t) => t.panelCount === panelCount);
  if (exact) return exact.id;
  if (panelCount <= 1) return "splash";
  if (panelCount === 2) return format === "hq" ? "twoH" : "twoV";
  if (panelCount === 3) return format === "manga" ? "widePlus2" : "threeV";
  if (panelCount === 4) return "four";
  if (panelCount === 5) return format === "manga" ? "manga5" : "six";
  return "six";
}

export function panelArea(index: number): string {
  return AREA_LETTERS[index] ?? "a";
}

export function gridTemplateAreas(template: PageTemplate): string {
  return template.areas.map((row) => `"${row}"`).join(" ");
}
