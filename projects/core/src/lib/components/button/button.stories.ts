import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { StorybookThemeDecorator } from '../../utils';
import { ButtonComponent } from './button.component';
import { BUTTON_ROLES } from './stories/roles';
import { BUTTON_SIZES } from './stories/sizes';
import { BUTTON_VARIANTS } from './stories/variants';

const meta: Meta<ButtonComponent> = {
  title: 'Core/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The text to display on the button'
    },
    onClick: {
      action: 'clicked',
      description: 'The action to perform when the button is clicked'
    },
    color: {
      control: 'select',
      options: ['', 'cblue', 'cred', 'corange', 'cgreen', 'cyellow', 'cneutral'],
      description: 'The color of the button'
    },
    role: {
      control: 'select',
      options: ['', 'primary', 'secondary'],
      description: 'The role of the button (overrides color)'
    },
    status: {
      control: 'select',
      options: ['', 'error', 'info', 'success', 'warning'],
      description: 'The status of the button (overrides color and role)'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button'
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outlined'],
      description: 'The variant of the button'
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
  },
  args: {
    label: 'BUTTON',
    size: 'medium',
    variant: 'filled',
    loading: false,
    disabled: false,
    color: 'cblue',
    role: '',
    status: '',
    onClick: fn(() => console.log('Clicked'))
  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],

};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {};

export const Roles = () => BUTTON_ROLES

export const Sizes = () => BUTTON_SIZES

export const Variant = () => BUTTON_VARIANTS
