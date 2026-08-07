export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 121189,
  'm': 121189,
  'f': 121189,
  't': 121189,
  'o': 121192 ,
  'org': 121192 
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "t", "m", "org"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const TEMPERATURE_TAG_MAP_ORO: Record<string, string> = {
  'q': '[08.08] TRAFEGO',
  'm': '[08.08] TRAFEGO',
  'f': '[08.08] TRAFEGO',
  't': '[08.08] TRAFEGO',
  'o': '[08.08] ORGÂNICO',
  'org': '[08.08] ORGÂNICO'
};

export const getTagIdByTemperature = (temperature: string): number | null => {
  return TEMPERATURE_TAG_MAP[temperature] || null;
};

export const getTagByTemperatureOro = (temperature: string): string | null => {
  return TEMPERATURE_TAG_MAP_ORO[temperature] || null;
};

export const isValidTemperature = (temperature: string): boolean => {
  return temperature in TEMPERATURE_TAG_MAP;
};

export const getValidTemperatures = (): string[] => {
  return Object.keys(TEMPERATURE_TAG_MAP);
};

export const normalizeTemperature = (
  value: string | string[] | undefined
): NormalizedTemperature | undefined => {
  const rawValue = Array.isArray(value) ? value[0] : value;
  if (!rawValue) return undefined;

  if (rawValue === "o") {
    return "org";
  }

  if (
    rawValue === "q" ||
    rawValue === "f" ||
    rawValue === "t" ||
    rawValue === "m" ||
    rawValue === "org"
  ) {
    return rawValue;
  }

  return undefined;
};
