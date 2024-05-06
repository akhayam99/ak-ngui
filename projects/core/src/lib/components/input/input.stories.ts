import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { StorybookThemeDecorator } from '../../decorator/storybook-theme-decorator';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Input/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {};
