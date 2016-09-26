function align(
  param1: number,
  param2: number,
  param3: number, param4: number): number {
  let a = 1
  a += param1 + param2 + param3 + param4 + param1 + param2 + param3 + param4 + param1 + param2 + param3 + param4 + param1 + param2 + param3 + param4 + param1 + param2 + param3 + param4
    + param1 + param2 + param3 + param4

    ; (a as any).fun = 2

  return a
}

align(0,
  1,
  2,
  3)

{
  align(1, 2, 3, 4)
  align(1, 1, 1, 1)
}
