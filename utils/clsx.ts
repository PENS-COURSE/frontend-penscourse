import { normalizeClass } from "vue";

import { twMerge } from "tailwind-merge";

function clsx(...inputs: Parameters<typeof normalizeClass>) {
  return twMerge(normalizeClass(inputs));
}

type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];
type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;

declare module "vue" {
  function normalizeClass(...inputs: ClassValue[]): string;
}

export default clsx;
