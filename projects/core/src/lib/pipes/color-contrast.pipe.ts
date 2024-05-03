import { Pipe, PipeTransform } from '@angular/core';
import { colorContrast } from "../utils";

@Pipe({ name: 'colorContrast', standalone: true })

export class ColorContrastPipe implements PipeTransform {
  transform(value: string): string {
    return colorContrast(value);
  }
}
