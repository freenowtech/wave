/**
 * Returns a union of all possible paths to leaves in an object.
 *
 * @example
 * type Foo = {
 *   bar: {
 *     baz: string;
 *   },
 *   qux: number;
 * }
 *
 * type FooLeaves = Leaves<Foo>;
 * // ['bar', 'baz'] | ['qux']
 */
export type Leaves<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? [K, ...Leaves<T[K]>] : [K];
}[keyof T];

/**
 * Joins a union of strings with a separator.
 *
 * @example
 * type Foo = ['bar', 'baz'] | ['a', 'b', 'c'];
 *
 * type Joined = Join<Foo>;
 * // 'bar-baz' | 'a-b-c'
 */
export type Join<T extends unknown[], U extends string = '-'> = T extends [infer F, ...infer R]
  ? R['length'] extends 0
    ? `${F & string}`
    : `${F & string}${U}${Join<R, U>}`
  : never
