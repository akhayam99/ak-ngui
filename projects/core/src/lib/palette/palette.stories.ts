import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { StorybookThemeDecorator } from '../decorator/storybook-theme-decorator';
import { PaletteComponent } from './palette.component';

const meta: Meta<PaletteComponent> = {
  title: 'Palette',
  component: PaletteComponent,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {

  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],

};

export default meta;

type Story = StoryObj<PaletteComponent>;

export const Default: Story = {};
