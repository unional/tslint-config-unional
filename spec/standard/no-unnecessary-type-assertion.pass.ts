let noTypeAssertion: { a: number }


let noTypeAssertionObj = {
  x: () => noTypeAssertion = { a: 1 },
  y: (x) => x
}

noTypeAssertionObj.y(noTypeAssertion!)
