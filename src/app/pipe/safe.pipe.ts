import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private _DomSantitizer:DomSanitizer) {}
  transform(value: any, args?: any): any {
    return this._DomSantitizer.bypassSecurityTrustResourceUrl(value);
  }

}
