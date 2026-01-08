import type { Preview } from '@storybook/react-vite'
import { themes } from 'storybook/theming'
import '../src/styles/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered', // "centered" | "fullscreen"
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#FFFFFF' },
        { name: 'light', value: '#FAFAFC' },
        { name: 'dark', value: '#212121' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: ['Home', 'Icons gallery'],
      },
      showPanel: true,
    },
    docs: {
      theme: themes.light,
    },
  },

  tags: ['autodocs'],
}

export default preview
