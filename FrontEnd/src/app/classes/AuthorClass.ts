export class AuthorClass {
  constructor(public name: string,
              public lastName: string,
              public penName: string,
              public genres?: number[],
              public id?: number) { }
}
