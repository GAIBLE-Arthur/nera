/** Joins class names, filtering out falsy values. Small stand-in for `clsx`
 * so the project doesn't need an extra dependency for such a small need. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
