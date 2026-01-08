import type { Meta, StoryObj } from '@storybook/react-vite'
import { TableUnvirtualized } from '../components/table-unvirtualized/table-unvirtualized'

type GlobalStylesStoryArgs = {
  sampleText: string
  linkLabel: string
  linkRest: string
  linkHref: string
  formLabel: string
  formDescription: string
  textPlaceholder: string
  searchPlaceholder: string
  disabledPlaceholder: string
  selectOptionOne: string
  selectOptionTwo: string
  textareaPlaceholder: string
  borderSampleOne: string
  borderSampleTwo: string
  buttonLabel: string
  disabledButtonLabel: string
  swatchSize: number
  sizeBarHeight: number
  sizeLabelWidth: number
}

const meta: Meta<GlobalStylesStoryArgs> = {
  title: 'Global CSS Style Classes',
  args: {
    sampleText: 'The quick brown fox jumps over the lazy dog',
    linkLabel: 'Be or not to be,',
    linkRest:
      'that is the question: Whether ’tis nobler in the mind to suffer The slings and arrows of outrageous fortune, …',
    linkHref: 'https://abusix.com',
    formLabel: 'Label',
    formDescription: 'Baseline styling from Tailwind forms + global overrides.',
    textPlaceholder: 'Text input',
    searchPlaceholder: 'Search input',
    disabledPlaceholder: 'Disabled input',
    selectOptionOne: 'Option one',
    selectOptionTwo: 'Option two',
    textareaPlaceholder: 'Textarea',
    borderSampleOne: 'Neutral surface',
    borderSampleTwo: 'Neutral 50 surface',
    buttonLabel: 'Default button',
    disabledButtonLabel: 'Disabled button',
    swatchSize: 40,
    sizeBarHeight: 24,
    sizeLabelWidth: 160,
  },
  argTypes: {
    sampleText: { control: 'text' },
    linkLabel: { control: 'text' },
    linkRest: { control: 'text' },
    linkHref: { control: 'text' },
    formLabel: { control: 'text' },
    formDescription: { control: 'text' },
    textPlaceholder: { control: 'text' },
    searchPlaceholder: { control: 'text' },
    disabledPlaceholder: { control: 'text' },
    selectOptionOne: { control: 'text' },
    selectOptionTwo: { control: 'text' },
    textareaPlaceholder: { control: 'text' },
    borderSampleOne: { control: 'text' },
    borderSampleTwo: { control: 'text' },
    buttonLabel: { control: 'text' },
    disabledButtonLabel: { control: 'text' },
    swatchSize: { control: { type: 'range', min: 24, max: 72, step: 4 } },
    sizeBarHeight: { control: { type: 'range', min: 8, max: 40, step: 2 } },
    sizeLabelWidth: { control: { type: 'range', min: 120, max: 240, step: 8 } },
  },
}

export default meta
type Story = StoryObj<GlobalStylesStoryArgs>

const colorGroups = [
  {
    title: 'Brand',
    tokens: [
      { name: 'abusix-black-pearl', cssVar: '--color-abusix-black-pearl' },
      { name: 'abusix-dusk', cssVar: '--color-abusix-dusk' },
    ],
  },
  {
    title: 'Neutral',
    tokens: [
      { name: 'neutral-900', cssVar: '--color-neutral-900' },
      { name: 'neutral-800', cssVar: '--color-neutral-800' },
      { name: 'neutral-700', cssVar: '--color-neutral-700' },
      { name: 'neutral-600', cssVar: '--color-neutral-600' },
      { name: 'neutral-500', cssVar: '--color-neutral-500' },
      { name: 'neutral-400', cssVar: '--color-neutral-400' },
      { name: 'neutral-300', cssVar: '--color-neutral-300' },
      { name: 'neutral-200', cssVar: '--color-neutral-200' },
      { name: 'neutral-100', cssVar: '--color-neutral-100' },
      { name: 'neutral-50', cssVar: '--color-neutral-50' },
      { name: 'neutral-0', cssVar: '--color-neutral-0' },
    ],
  },
  {
    title: 'Primary',
    tokens: [
      { name: 'primary-900-plus-20', cssVar: '--color-primary-900-plus-20' },
      { name: 'primary-900-plus-10', cssVar: '--color-primary-900-plus-10' },
      { name: 'primary-900-plus-8', cssVar: '--color-primary-900-plus-8' },
      { name: 'primary-900', cssVar: '--color-primary-900' },
      { name: 'primary-800', cssVar: '--color-primary-800' },
      { name: 'primary-700', cssVar: '--color-primary-700' },
      { name: 'primary-600', cssVar: '--color-primary-600' },
      { name: 'primary-500', cssVar: '--color-primary-500' },
      { name: 'primary-400', cssVar: '--color-primary-400' },
      { name: 'primary-300', cssVar: '--color-primary-300' },
      { name: 'primary-200', cssVar: '--color-primary-200' },
      { name: 'primary-100', cssVar: '--color-primary-100' },
      { name: 'primary-50', cssVar: '--color-primary-50' },
    ],
  },
  {
    title: 'Success',
    tokens: [
      { name: 'success-900', cssVar: '--color-success-900' },
      { name: 'success-800', cssVar: '--color-success-800' },
      { name: 'success-700', cssVar: '--color-success-700' },
      { name: 'success-600', cssVar: '--color-success-600' },
      { name: 'success-500', cssVar: '--color-success-500' },
      { name: 'success-400', cssVar: '--color-success-400' },
      { name: 'success-300', cssVar: '--color-success-300' },
      { name: 'success-200', cssVar: '--color-success-200' },
      { name: 'success-100', cssVar: '--color-success-100' },
      { name: 'success-50', cssVar: '--color-success-50' },
    ],
  },
  {
    title: 'Danger',
    tokens: [
      { name: 'danger-900', cssVar: '--color-danger-900' },
      { name: 'danger-800', cssVar: '--color-danger-800' },
      { name: 'danger-700', cssVar: '--color-danger-700' },
      { name: 'danger-600', cssVar: '--color-danger-600' },
      { name: 'danger-500', cssVar: '--color-danger-500' },
      { name: 'danger-400', cssVar: '--color-danger-400' },
      { name: 'danger-300', cssVar: '--color-danger-300' },
      { name: 'danger-200', cssVar: '--color-danger-200' },
      { name: 'danger-100', cssVar: '--color-danger-100' },
      { name: 'danger-50', cssVar: '--color-danger-50' },
    ],
  },
  {
    title: 'Warning',
    tokens: [
      { name: 'warning-900', cssVar: '--color-warning-900' },
      { name: 'warning-800', cssVar: '--color-warning-800' },
      { name: 'warning-700', cssVar: '--color-warning-700' },
      { name: 'warning-600', cssVar: '--color-warning-600' },
      { name: 'warning-500', cssVar: '--color-warning-500' },
      { name: 'warning-400', cssVar: '--color-warning-400' },
      { name: 'warning-300', cssVar: '--color-warning-300' },
      { name: 'warning-200', cssVar: '--color-warning-200' },
      { name: 'warning-100', cssVar: '--color-warning-100' },
      { name: 'warning-50', cssVar: '--color-warning-50' },
    ],
  },
  {
    title: 'Additional',
    tokens: [
      { name: 'violet-100', cssVar: '--color-violet-100' },
      { name: 'violet-800', cssVar: '--color-violet-800' },
      { name: 'teal-100', cssVar: '--color-teal-100' },
      { name: 'teal-800', cssVar: '--color-teal-800' },
      { name: 'orange-100', cssVar: '--color-orange-100' },
      { name: 'orange-800', cssVar: '--color-orange-800' },
      { name: 'pink-300', cssVar: '--color-pink-300' },
      { name: 'pink-800', cssVar: '--color-pink-800' },
      { name: 'purple-100', cssVar: '--color-purple-100' },
      { name: 'purple-800', cssVar: '--color-purple-800' },
    ],
  },
  {
    title: 'Special',
    tokens: [
      { name: 'black', cssVar: '--color-black' },
      { name: 'modal-background', cssVar: '--color-modal-background' },
      { name: 'transparent', cssVar: '--color-transparent' },
    ],
  },
]

const fontFamilies = [
  { name: 'display', className: 'font-display' },
  { name: 'sans', className: 'font-sans' },
  { name: 'mono', className: 'font-mono' },
]

const sizeTokens = [
  { name: 'size-120', cssVar: '--size-120' },
  { name: 'size-184', cssVar: '--size-184' },
  { name: 'size-285', cssVar: '--size-285' },
  { name: 'size-736', cssVar: '--size-736' },
]

export const Headlines: Story = {
  render: ({ sampleText }) => (
    <div className='flex flex-col gap-4'>
      <h3 className='headline-700'>Headline Styles</h3>

      <TableUnvirtualized>
        <TableUnvirtualized.Header>
          <TableUnvirtualized.Header.Row>
            <TableUnvirtualized.Header.Cell>
              ClassName
            </TableUnvirtualized.Header.Cell>
            <TableUnvirtualized.Header.Cell>
              Example
            </TableUnvirtualized.Header.Cell>
          </TableUnvirtualized.Header.Row>
        </TableUnvirtualized.Header>

        <TableUnvirtualized.Body>
          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>headline-100</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <h1 className='headline-100'>{sampleText}</h1>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>

          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>headline-200</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <h1 className='headline-200'>{sampleText}</h1>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>

          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>headline-300</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <h1 className='headline-300'>{sampleText}</h1>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>

          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>headline-400</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <h1 className='headline-400'>{sampleText}</h1>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>

          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>headline-500</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <h1 className='headline-500'>{sampleText}</h1>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>

          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>headline-600</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <h1 className='headline-600'>{sampleText}</h1>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>

          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>headline-700</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <h1 className='headline-700'>{sampleText}</h1>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>

          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>headline-800</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <h1 className='headline-800'>{sampleText}</h1>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>

          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>headline-900</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <h1 className='headline-900'>{sampleText}</h1>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>
        </TableUnvirtualized.Body>
      </TableUnvirtualized>
    </div>
  ),
}

export const Paragraphs: Story = {
  render: ({ sampleText }) => (
    <div className='flex flex-col gap-4'>
      <h3 className='headline-700'>Paragraph Styles</h3>

      <TableUnvirtualized>
        <TableUnvirtualized.Header>
          <TableUnvirtualized.Header.Row>
            <TableUnvirtualized.Header.Cell>
              ClassName
            </TableUnvirtualized.Header.Cell>
            <TableUnvirtualized.Header.Cell>
              Example
            </TableUnvirtualized.Header.Cell>
          </TableUnvirtualized.Header.Row>
        </TableUnvirtualized.Header>

        <TableUnvirtualized.Body>
          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>paragraph-100</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <p className='paragraph-100'>{sampleText}</p>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>

          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>paragraph-200</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <p className='paragraph-200'>{sampleText}</p>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>

          <TableUnvirtualized.Body.Row>
            <TableUnvirtualized.Body.Cell>
              <pre>paragraph-300</pre>
            </TableUnvirtualized.Body.Cell>
            <TableUnvirtualized.Body.Cell>
              <p className='paragraph-300'>{sampleText}</p>
            </TableUnvirtualized.Body.Cell>
          </TableUnvirtualized.Body.Row>
        </TableUnvirtualized.Body>
      </TableUnvirtualized>
    </div>
  ),
}

export const InlineLink: Story = {
  render: ({ linkLabel, linkRest, linkHref }) => (
    <div className='flex flex-col gap-4'>
      <h3 className='headline-700 font-mono'>inline-link</h3>

      <p className='paragraph-200'>
        <a href={linkHref} className='inline-link'>
          {linkLabel}
        </a>{' '}
        {linkRest}
      </p>
    </div>
  ),
}

export const FormControls: Story = {
  render: ({
    formLabel,
    formDescription,
    textPlaceholder,
    searchPlaceholder,
    disabledPlaceholder,
    selectOptionOne,
    selectOptionTwo,
    textareaPlaceholder,
  }) => (
    <div className='flex flex-col gap-6'>
      <div>
        <h3 className='headline-700'>Form Controls</h3>
        <p className='paragraph-200 text-neutral-700'>{formDescription}</p>
      </div>

      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='bg-neutral-0 flex flex-col gap-3 rounded-md border border-neutral-200 p-4'>
          <div className='headline-400 text-neutral-900'>{formLabel}</div>
          <input
            className='paragraph-100 focus:border-primary-400 h-9 rounded-sm border border-neutral-400 px-3 text-neutral-800 placeholder:text-neutral-600 focus:outline-hidden'
            placeholder={textPlaceholder}
            type='text'
          />
          <input
            className='paragraph-100 focus:border-primary-400 h-9 rounded-sm border border-neutral-400 px-3 text-neutral-800 placeholder:text-neutral-600 focus:outline-hidden'
            placeholder={searchPlaceholder}
            type='search'
          />
          <input
            className='paragraph-100 h-9 rounded-sm border border-neutral-300 bg-neutral-100 px-3 text-neutral-600'
            placeholder={disabledPlaceholder}
            disabled
            type='text'
          />
        </div>

        <div className='bg-neutral-0 flex flex-col gap-3 rounded-md border border-neutral-200 p-4'>
          <div className='headline-400 text-neutral-900'>Select & textarea</div>
          <select className='paragraph-100 focus:border-primary-400 h-9 rounded-sm border border-neutral-400 px-3 text-neutral-800 focus:outline-hidden'>
            <option>{selectOptionOne}</option>
            <option>{selectOptionTwo}</option>
          </select>
          <textarea
            className='paragraph-100 focus:border-primary-400 min-h-20 rounded-sm border border-neutral-400 px-3 py-2 text-neutral-800 placeholder:text-neutral-600 focus:outline-hidden'
            placeholder={textareaPlaceholder}
          />
        </div>

        <div className='bg-neutral-0 flex flex-col gap-3 rounded-md border border-neutral-200 p-4'>
          <div className='headline-400 text-neutral-900'>Checkboxes</div>
          <label className='paragraph-200 flex items-center gap-2 text-neutral-800'>
            <input type='checkbox' className='h-4 w-4' /> Default
          </label>
          <label className='paragraph-200 flex items-center gap-2 text-neutral-800'>
            <input type='checkbox' className='h-4 w-4' defaultChecked /> Checked
          </label>
          <label className='paragraph-200 flex items-center gap-2 text-neutral-600'>
            <input type='checkbox' className='h-4 w-4' disabled /> Disabled
          </label>
          <label className='paragraph-200 flex items-center gap-2 text-neutral-600'>
            <input
              type='checkbox'
              className='h-4 w-4'
              defaultChecked
              disabled
            />{' '}
            Disabled checked
          </label>
        </div>

        <div className='bg-neutral-0 flex flex-col gap-3 rounded-md border border-neutral-200 p-4'>
          <div className='headline-400 text-neutral-900'>Radio buttons</div>
          <label className='paragraph-200 flex items-center gap-2 text-neutral-800'>
            <input name='radio-demo' type='radio' className='h-4 w-4' /> Option
            A
          </label>
          <label className='paragraph-200 flex items-center gap-2 text-neutral-800'>
            <input
              name='radio-demo'
              type='radio'
              className='h-4 w-4'
              defaultChecked
            />{' '}
            Option B
          </label>
          <label className='paragraph-200 flex items-center gap-2 text-neutral-600'>
            <input
              name='radio-demo-disabled'
              type='radio'
              className='h-4 w-4'
              disabled
            />{' '}
            Disabled
          </label>
        </div>
      </div>
    </div>
  ),
}

export const BaseLayerOverrides: Story = {
  render: ({
    borderSampleOne,
    borderSampleTwo,
    buttonLabel,
    disabledButtonLabel,
  }) => (
    <div className='flex flex-col gap-6'>
      <div>
        <h3 className='headline-700'>Base Layer Overrides</h3>
        <p className='paragraph-200 text-neutral-700'>
          Tailwind v4 base adjustments used to preserve legacy defaults.
        </p>
      </div>

      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='bg-neutral-0 flex flex-col gap-3 rounded-md border border-neutral-200 p-4'>
          <div className='headline-400 text-neutral-900'>
            Default border color
          </div>
          <div className='paragraph-200 text-neutral-700'>
            These cards rely on <code>border</code> without a color utility.
          </div>
          <div className='grid gap-3 sm:grid-cols-2'>
            <div className='paragraph-200 bg-neutral-0 rounded-md border p-3 text-neutral-800'>
              {borderSampleOne}
            </div>
            <div className='paragraph-200 rounded-md border bg-neutral-50 p-3 text-neutral-800'>
              {borderSampleTwo}
            </div>
          </div>
        </div>

        <div className='bg-neutral-0 flex flex-col gap-3 rounded-md border border-neutral-200 p-4'>
          <div className='headline-400 text-neutral-900'>Button cursor</div>
          <div className='paragraph-200 text-neutral-700'>
            Enabled buttons should keep the pointer cursor.
          </div>
          <div className='flex flex-wrap gap-3'>
            <button
              type='button'
              className='paragraph-100 bg-neutral-0 rounded-sm border border-neutral-300 px-3 py-2 text-neutral-800'
            >
              {buttonLabel}
            </button>
            <button
              type='button'
              className='paragraph-100 rounded-sm border border-neutral-300 bg-neutral-100 px-3 py-2 text-neutral-600'
              disabled
            >
              {disabledButtonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const ColorTokens: Story = {
  render: ({ swatchSize }) => (
    <div className='flex flex-col gap-6'>
      <div>
        <h3 className='headline-700'>Color Tokens</h3>
        <p className='paragraph-200 text-neutral-700'>
          Tokens are sourced from <code>src/styles/index.css</code>.
        </p>
      </div>

      <div className='flex flex-col gap-6'>
        {colorGroups.map((group) => (
          <div key={group.title} className='flex flex-col gap-3'>
            <h4 className='headline-500 text-neutral-900'>{group.title}</h4>
            <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
              {group.tokens.map((token) => (
                <div
                  key={token.cssVar}
                  className='bg-neutral-0 flex items-center gap-3 rounded-md border border-neutral-200 p-3'
                >
                  <span
                    className='rounded border border-neutral-200'
                    style={{
                      backgroundColor: `var(${token.cssVar})`,
                      height: swatchSize,
                      width: swatchSize,
                    }}
                  />
                  <div className='flex flex-col gap-1'>
                    <span className='paragraph-200 text-neutral-900'>
                      {token.name}
                    </span>
                    <span className='paragraph-100 text-neutral-600'>
                      {token.cssVar}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const FontFamilies: Story = {
  render: ({ sampleText }) => (
    <div className='flex flex-col gap-4'>
      <div>
        <h3 className='headline-700'>Font Families</h3>
        <p className='paragraph-200 text-neutral-700'>
          Quick visual check for display/sans/mono stacks.
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        {fontFamilies.map((font) => (
          <div
            key={font.name}
            className='bg-neutral-0 flex flex-col gap-2 rounded-md border border-neutral-200 p-4'
          >
            <div className='paragraph-100 text-neutral-600'>{font.name}</div>
            <div className={`${font.className} text-neutral-900`}>
              {sampleText}.
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const SizeTokens: Story = {
  render: ({ sizeBarHeight, sizeLabelWidth }) => (
    <div className='flex flex-col gap-4'>
      <div>
        <h3 className='headline-700'>Size Tokens</h3>
        <p className='paragraph-200 text-neutral-700'>
          Visual scale for custom `--size-*` tokens.
        </p>
      </div>

      <div className='flex flex-col gap-3'>
        {sizeTokens.map((token) => (
          <div
            key={token.cssVar}
            className='bg-neutral-0 flex items-center gap-3 rounded-md border border-neutral-200 p-3'
          >
            <div className='shrink-0' style={{ width: sizeLabelWidth }}>
              <div className='paragraph-200 text-neutral-900'>{token.name}</div>
              <div className='paragraph-100 text-neutral-600'>
                {token.cssVar}
              </div>
            </div>
            <div
              className='bg-primary-200 rounded'
              style={{ width: `var(${token.cssVar})`, height: sizeBarHeight }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
}
