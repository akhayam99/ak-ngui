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
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    role: { control: 'radio', options: ['primary', 'secondary'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    variant: { control: 'radio', options: ['filled', 'outlined'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'BUTTON',
    role: 'primary',
    size: 'medium',
    variant: 'filled',
    loading: false,
    disabled: false,
    onClick: fn()
  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],

};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {};

export const Roles = () => BUTTON_ROLES

export const Sizes = () => BUTTON_SIZES

export const Variant = () => BUTTON_VARIANTS
