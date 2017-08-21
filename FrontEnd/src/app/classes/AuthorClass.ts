export class AuthorClass {
  constructor(public name: string,
              public lastName: string,
              public penName: string,
              public books: number[],
              public id?: number) { }
}
