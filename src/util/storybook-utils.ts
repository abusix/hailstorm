import type { Parameters } from '@storybook/react-vite'

export const noControl = {
  control: {
    type: null,
  },
}

export const hiddenArgControl = { table: { disable: true } }
/**
 * Add a description text to a storybook docs page.
 *
 * @example
 * ```ts
 * const meta: Meta<typeof Demo> = {
 *   component: Demo,
 *       parameters: getStoryDescription("Component Description"),
 * };
 * ```
 *
 * @example
 * ```ts
 * export const Default: Story = {
 *   parameters: getStoryDescription("Single Story description", "story")
 * };
 * ```
 */
export const getStoryDescription = (
  text: string,
  target: 'component' | 'story' = 'component',
): Parameters => ({
  docs: { description: { [target]: text } },
})
