import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { StorybookThemeDecorator } from '../../decorator/storybook-theme-decorator';
import { akTheme } from '../../theme';
import { SpinnerComponent } from './spinner.component';

const meta: Meta<SpinnerComponent> = {
  title: 'Core/Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'range',
      min: 8,
      max: 80,
      description: 'The size of the spinner in pixels. [8 - 80]'
    },
    color: {
      control: 'select',
      options: ['', ...(akTheme.colorKeys as string[])],
      description: 'The color of the spinner'
    },
  },
  args: {
    color: 'blue',
    size: 14,
  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],

};

export default meta;

type Story = StoryObj<SpinnerComponent>;

export const Default: Story = {};
