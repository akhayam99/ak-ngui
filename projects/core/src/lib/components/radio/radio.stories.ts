import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { StorybookThemeDecorator } from '../../decorator/storybook-theme-decorator';
import { akTheme } from '../../theme';
import { RadioComponent } from './radio.component';

const meta: Meta<RadioComponent> = {
  title: 'Input/Radio',
  component: RadioComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the radio'
    },
    value: {
      control: 'boolean',
      description: 'The value of the radio'
    },
    label: {
      control: 'text',
      description: 'The label of the radio'
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'The position of the label'
    },
    color: {
      control: 'select',
      options: ['', ...(akTheme.colorKeys as string[])],
      description: 'The color of the button'
    },
    role: {
      control: 'select',
      options: ['', ...(akTheme.roleKeys as string[])],
      description: 'The role of the button (overrides color)'
    },
    status: {
      control: 'select',
      options: ['', ...(akTheme.statusKeys as string[])],
      description: 'The status of the button (overrides color and role)'
    },
    onChange: {
      action: 'onChange',
      description: 'The event emitted when the radio value changes'
    }
  },
  args: {
    size: 'md',
    value: false,
    label: 'I am a radio',
    labelPosition: 'right',
    color: 'blue',
    role: '',
    status: '',
    onChange: (event) => console.log("Radio value: ", event),
  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],
};

export default meta;

type Story = StoryObj<RadioComponent>;

export const Default: Story = {};
