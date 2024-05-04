import { Pipe, PipeTransform } from '@angular/core';
import { colorFromKey } from "../utils";

@Pipe({ name: 'colorFromKey', standalone: true })

export class ColorFromKeyPipe implements PipeTransform {
  transform(value: string, shade: number = 5): string {
    return colorFromKey(value, shade);
  }
}
