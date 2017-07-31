export class BookClass {
  constructor(public isbn: string,
              public title: string,
              public publicationDate: Date,
              public author: number,
              public genres: number[]) { }
}
