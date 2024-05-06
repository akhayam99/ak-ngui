import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { StorybookThemeDecorator } from '../../decorator/storybook-theme-decorator';
import { akTheme } from '../../theme';
import { ToastComponent } from './toast.component';
const meta: Meta<ToastComponent> = {
  title: 'Feedback/Toast',
  component: ToastComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the toast'
    },
    message: {
      control: 'text',
      description: 'The message of the toast'
    },
    color: {
      control: 'select',
      options: ['', ...(akTheme.colorKeys as string[])],
      description: 'The color of the toast'
    },
    role: {
      control: 'select',
      options: ['', ...(akTheme.roleKeys as string[])],
      description: 'The role of the toast'
    },
    status: {
      control: 'select',
      options: ['', ...(akTheme.statusKeys as string[])],
      description: 'The status of the toast'
    },
    loading: {
      control: 'boolean',
      description: 'Whether the toast is in a loading state'
    },
    closable: {
      control: 'boolean',
      description: 'Whether the toast can be closed'
    },
    closeClick: {
      action: 'closeClick',
      description: 'Emitted when the close button is clicked'
    }
  },
  args: {
    title: 'Title toast',
    message: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit',
    color: 'blue',
    role: '',
    status: '',
    loading: false,
    closable: true,
    closeClick: () => console.log('Close icon clicked')
  },
  decorators: [componentWrapperDecorator(StorybookThemeDecorator)],

};

export default meta;

type Story = StoryObj<ToastComponent>;

export const Default: Story = {};
