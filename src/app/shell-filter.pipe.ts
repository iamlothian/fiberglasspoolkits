import { Pipe, PipeTransform } from '@angular/core';
import { ShellRange } from './models';

type SHELL_FILTER_TRYPES = "title"

@Pipe({
  name: 'shellFilter'
})
export class ShellFilterPipe implements PipeTransform {
  transform(ranges: ShellRange[], type: SHELL_FILTER_TRYPES, value: any): ShellRange[] {
    if (!ranges || value === undefined) {
        return ranges;
    }

    switch(type) {
      case "title":
        value = (value as string).toLowerCase()
        return ranges
                .filter(r => r.title.toLowerCase().indexOf(value) !== -1)
                .map(r => { r.shells = r.shells.filter((s,i)=>i===0); return r });
      default: throw new Error("filter on type [" + type + "] no supported")
    }

  }
}
