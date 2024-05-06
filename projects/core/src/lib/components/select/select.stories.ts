import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { StorybookThemeDecorator } from '../../decorator/storybook-theme-decorator';
import { SelectComponent } from './select.component';

const meta: Meta<SelectComponent> = {
  title: 'Input/Select',
  component: SelectComponent,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],
};

export default meta;

type Story = StoryObj<SelectComponent>;

export const Default: Story = {};
