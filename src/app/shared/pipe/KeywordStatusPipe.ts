import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'keyword'})
export class KeywordStatusPipe implements PipeTransform {
  keywords: string[] = ['Sport', 'Atmosphere', 'cloth', 'gas', 'travel',' Canadian Tire', 'Sport Chek', 'Atmosphere',  'Mark’s', 'Part Source', 'Party City', 'Gas+'];

  transform(text: string): string[] {
    const regex = new RegExp('\\b(' + this.keywords.join('|') + ')\\b', 'gi');
    const matches = text.match(regex);
    return matches ? matches.map(match => match.toLowerCase()) : [];
  }
}
