import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({
    name: 'currentCap',
    pure: false
})
export class currentCap implements PipeTransform {
  transform(value: string, start: string, duration: string): string {
      let s = parseFloat(start);
      let e = parseFloat(duration) + s;
      let v = parseFloat(value);
    let result = 'iherit';
    if (v >= s && v <= e) result = 'grey';
    return result;
  }
}
