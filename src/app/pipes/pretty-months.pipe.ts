import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'prettyMonth'})
export class PrettyMonth implements PipeTransform {
  transform(value: string): string {
    const months = parseInt(value);
    if (months === 40 * 12) {
      return 'Never.';
    }

    const year = Math.trunc((months / 12));
    const month = months % 12;
    if (year && month) {
      return `${year} years ${month} months`;
    } else if (!year && month) {
      return `${month} months`;
    } else if (year && !month) {
      return `${year} years`;
    }
    return 'n/a';

  }
}
