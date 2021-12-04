export function capitalize(str?: string) {
  const lower = str?.toLowerCase()
  return lower ? str?.charAt(0).toUpperCase() + lower?.slice(1) : lower
}

export function chunks<T>(array: T[], size: number): T[][] {
  return Array.apply(
    0,
    new Array(Math.ceil(array.length / size))
  ).map((_, index) => array.slice(index * size, (index + 1) * size))
}

//SanitizedObject class helps prevent prototype pollution with creating obj without prototype
export class SanitizedObject {
  constructor(obj) {
    return Object.assign(Object.create(null), obj)
  }
}