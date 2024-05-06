import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { StorybookThemeDecorator } from '../../decorator/storybook-theme-decorator';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Input/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button'
    },
  },
  args: {
    size: 'md',
  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {};

export const InputCustomBefore = () => ({
  template: `
    <ak-input [size]="md" [value]="'Amin'">
      <div before-input> X </div>
    </ak-input>
  `,
});
