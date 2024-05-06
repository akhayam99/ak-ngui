import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ColorFromKeyPipe } from '../pipes';
import { akTheme } from '../theme';
import { PaletteColorComponent } from './color/color.component';

@Component({
  selector: 'ak-palette',
  templateUrl: 'palette.component.html',
  styleUrls: ['palette.component.scss'],
  standalone: true,
  imports: [
    ColorFromKeyPipe,
    NgFor,
    PaletteColorComponent,
  ]
})

export class PaletteComponent implements OnInit {

  colorKeys: string[] = []
  colors = {}

  ngOnInit(): void {
    this.colorKeys = akTheme?.colorKeys || []
    this.colors = akTheme?.colors || {}
  }

  copyToClipboard(value: string): void {
    navigator.clipboard.writeText(value)
  }

}
