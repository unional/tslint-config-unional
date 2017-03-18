/* tslint:disable:no-empty no-unused-variable */
// Disable member ordering so related methods/properties can be grouped together.
class MemberOrderingStandard {
  constructor() { }

  static someStaticProperty: string
  someProperty: string
  private somePrivateProperty: string

  static someStaticMethod(): void { }
  someFunction(): void { }
  private somePrivateFunction(): void { }
}
