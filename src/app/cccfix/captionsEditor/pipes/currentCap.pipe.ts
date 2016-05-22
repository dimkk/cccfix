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
    name: 'getEnd',
    pure: false
})
export class getEnd implements PipeTransform {
    transform(value: string, duration: string): any {
        if (duration) {
            let s = parseFloat(value);
            let e = parseFloat(duration) + s;
            return e.toFixed(3);
        } else {
            let s = parseFloat(value);
            return s; // .toFixed(1);
        }

    }
}
