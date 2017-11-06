import { Pipe, PipeTransform } from '@angular/core';
import { ShellRange } from './models';

type SHELL_FILTER_TRYPES = "title"

@Pipe({
  name: 'shellFilter'
})
export class ShellFilterPipe implements PipeTransform {
  transform(ranges: ShellRange[], type: SHELL_FILTER_TRYPES, value: any): ShellRange[] {
    if (!ranges || !value) {
        return ranges;
    }

    switch(type) {
      case "title": return ranges.filter(r => r.title.indexOf(value) !== -1);
      default: throw new Error("filter on type [" + type + "] no supported")
    }

  }
}
