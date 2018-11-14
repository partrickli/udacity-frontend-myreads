/**
 * @description intersect of two array, with equaility of elements customizable
 * @param {any[]} l
 * @param {any[]} r
 */
export function intersect(l, r, equal) {
  return l.filter((le) => {
    return r.some((re) => equal(le, re));
  });
}
