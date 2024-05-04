import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { StorybookThemeDecorator } from '../../decorator/storybook-theme-decorator';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Core/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the checkbox'
    },
    value: {
      control: 'boolean',
      description: 'The value of the checkbox'
    },
    indeterminate: {
      control: 'boolean',
      description: 'The indeterminate state of the checkbox'
    },
    label: {
      control: 'text',
      description: 'The label of the checkbox'
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'The position of the label'
    },
  },
  args: {
    size: 'md',
    value: false,
    indeterminate: false,
    label: 'I am a checkbox',
    labelPosition: 'right',
  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],
};

export default meta;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {};
