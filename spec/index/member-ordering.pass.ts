/* tslint:disable:no-empty no-unused-variable */
class MemberOrdering {
  static someStaticProperty: string;
  static someStaticMethod(): void { }

  constructor() { }

  someProperty: string;
  private somePrivateProperty: string;

  someFunction(): void { }
  private somePrivateFunction(): void { }
}
