import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'texto_undescore'})
export class TextoUndescore implements PipeTransform {
  transform(value: string): string {
    return value.replaceAll("_", " ");
  }
}
