export const allCategoryCode: Record<string, boolean> = {
  '{': true,  // begin group
  '}': true,  // end group
  '$': true,  // math shift
  '&': true,  // algiment
  '#': true,  // macro
  '^': true,  // superscript
  '_': true,  // subscript
  '%': true,  // comment
};

export const normalizeCategoryCode = (str: string): string => {
  if (allCategoryCode[str]) {
    return `\\${str}`;
  }

  return str;
};
