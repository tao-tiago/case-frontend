export const pixelToRem = (pxValue: number): string => {
  const remValue = pxValue / 16

  return `${remValue}rem`
}
