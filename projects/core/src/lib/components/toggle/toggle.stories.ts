import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { StorybookThemeDecorator } from '../../decorator/storybook-theme-decorator';
import { ToggleComponent } from './toggle.component';

const meta: Meta<ToggleComponent> = {
  title: 'Core/Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['', 'cblue', 'cred', 'corange', 'cgreen', 'cyellow', 'cneutral'],
      description: 'The color of the toggle'
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the toggle'
    },
    value: {
      control: 'boolean',
      description: 'The value of the toggle'
    },
    onChange: {
      action: 'changed',
      description: 'The action to perform when the toggle is changed'
    },
  },
  args: {
    color: 'cblue',
    size: 'md',
    value: false,
    onChange: () => console.log('Changed')
  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],
};

export default meta;

type Story = StoryObj<ToggleComponent>;

export const Default: Story = {};
