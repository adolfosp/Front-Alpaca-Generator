import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'texto_capitalize'})
export class TextoCapitalize implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
