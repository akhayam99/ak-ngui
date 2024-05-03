import { Pipe, PipeTransform } from '@angular/core';
import { colorFromKey } from "../utils";

@Pipe({ name: 'colorFromKey', standalone: true })

export class ColorFromKeyPipe implements PipeTransform {
  transform(value: string): string {
    return colorFromKey(value);
  }
}
