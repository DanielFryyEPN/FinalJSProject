import { Injectable } from '@angular/core';

@Injectable()
export class MasterUrlService {
  url: 'http://localhost:1337/';
  constructor() {console.log('la url en el servicio', this.url);}
}
