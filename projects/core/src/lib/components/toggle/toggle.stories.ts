import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { StorybookThemeDecorator } from '../../decorator/storybook-theme-decorator';
import { ToggleComponent } from './toggle.component';

const meta: Meta<ToggleComponent> = {
  title: 'Core/Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the toggle'
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'The position of the label'
    },
    color: {
      control: 'select',
      options: ['', 'blue', 'red', 'orange', 'green', 'yellow', 'neutral'],
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
    showIO: {
      control: 'boolean',
      description: 'Whether to show the on/off labels'
    },
    onChange: {
      action: 'changed',
      description: 'The action to perform when the toggle is changed'
    },
  },
  args: {
    label: 'I am a label',
    labelPosition: 'right',
    color: 'blue',
    size: 'md',
    value: false,
    onChange: () => console.log('Changed'),
    showIO: false,
  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],
};

export default meta;

type Story = StoryObj<ToggleComponent>;

export const Default: Story = {};
