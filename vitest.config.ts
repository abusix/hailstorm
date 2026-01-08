import { defineConfig } from 'vitest/config'
import storybookTest from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'

const storybookConfigDir = process.env.STORYBOOK_CONFIG_DIR ?? '.storybook'
const storybookProjectName = `storybook:${storybookConfigDir}`
const storybookBaseProjectName = `${storybookProjectName}:base`
const isStorybookTest = process.env.VITEST_STORYBOOK === 'true'

export default defineConfig({
  plugins:
    isStorybookTest ?
      [
        storybookTest({
          configDir: storybookConfigDir,
        }),
        {
          name: 'storybook-project-name-override',
          enforce: 'post',
          config: () => ({
            test: {
              name: storybookBaseProjectName,
            },
          }),
        },
      ]
    : [],
  test: {
    name: storybookBaseProjectName,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    include: isStorybookTest ? undefined : ['src/**/*.test.{ts,tsx}'],
    exclude: isStorybookTest ? [] : ['**/*.stories.*', '**/*.mdx'],
    coverage: {
      provider: 'v8',
      reporter: ['text'],
    },
    ...(isStorybookTest ?
      {
        browser: {
          enabled: true,
          provider: playwright(),
          instances: [
            {
              browser: 'chromium',
              name: storybookProjectName,
            },
          ],
        },
      }
    : {}),
  },
})
