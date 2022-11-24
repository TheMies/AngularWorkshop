import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertCharToChar'
})
export class ConvertCharToCharPipe implements PipeTransform {

  transform(text: string, replace: string, replaceWith: string): string {
    return text.split(replace).join(replaceWith);
  }
}