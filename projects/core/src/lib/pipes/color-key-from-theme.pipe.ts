import { Pipe, PipeTransform } from '@angular/core';
import { colorKeyFromTheme } from "../utils";

@Pipe({ name: 'colorKeyFromTheme', standalone: true })

export class ColorKeyFromThemePipe implements PipeTransform {
  transform(value: string): string {
    return colorKeyFromTheme(value);
  }
}
