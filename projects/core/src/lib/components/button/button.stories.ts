import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { StorybookThemeDecorator } from '../../decorator/storybook-theme-decorator';
import { akTheme } from '../../theme';
import { ButtonComponent } from './button.component';
import { BUTTON_COLORS } from './stories/colors';
import { BUTTON_ROLES } from './stories/roles';
import { BUTTON_SIZES } from './stories/sizes';
import { BUTTON_STATUS } from './stories/status';
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
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button'
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outlined', 'ghost'],
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
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take up the full width of its container'
    }
  },
  args: {
    label: 'BUTTON',
    size: 'medium',
    variant: 'filled',
    loading: false,
    disabled: false,
    fullWidth: false,
    color: 'blue',
    role: '',
    status: '',
    onClick: fn(() => console.log('Clicked'))
  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],

};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {};

export const Colors = () => BUTTON_COLORS

export const Roles = () => BUTTON_ROLES

export const Status = () => BUTTON_STATUS

export const Sizes = () => BUTTON_SIZES

export const Variant = () => BUTTON_VARIANTS
