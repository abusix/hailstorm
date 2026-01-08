import type { ComponentProps } from 'react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  getStoryDescription,
  hiddenArgControl,
} from '../../util/storybook-utils'
import { Dialog } from './dialog'
import { Button } from '../button/button'
import { TickIcon } from '../../icons'
import { FormField } from '../form-field/form-field'
import { Toggle } from '../toggle'
import { Alert } from '../alert/alert'

const noop = () => undefined

const SpanFooter = () => <span>test footer 🍭</span>
const IconFooters = ({
  onClose,
}: Pick<ComponentProps<typeof Dialog>, 'onClose'>) => (
  <>
    <Button variant='secondary' onClick={() => onClose?.(false)}>
      Cancel
    </Button>

    <Button
      variant='primary'
      LeftIcon={TickIcon}
      onClick={() => onClose?.(true)}
    >
      Confirm
    </Button>
  </>
)
const footerOptions = {
  undefined,
  SpanFooter: <SpanFooter />,
  buttons: <IconFooters />,
}
const footerArgs = {
  options: Object.keys(footerOptions),
  mapping: footerOptions,
}

const meta: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,
  parameters: {
    ...getStoryDescription('Modal showing on top of the screen'),
    inlineStories: false, // keep controls interactive
  },
  args: {
    title: 'Dialog Title',
    children: 'Dialog Description',
    isShown: false,
    footer: undefined,
  },
  argTypes: {
    isShown: hiddenArgControl,
    onClose: hiddenArgControl,
    footer: footerArgs,
  },
  render: ({ children, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isShown, setIsShown] = useState(false)
    const toggleBtn = () => setIsShown((val) => !val)

    return (
      <div className='body-font'>
        <button
          type='button'
          onClick={toggleBtn}
          className='bg-neutral-100 px-4 py-2 shadow-sm'
        >
          show Modal
        </button>

        <Dialog {...args} isShown={isShown} onClose={toggleBtn}>
          {children}
        </Dialog>
      </div>
    )
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {}

export const WithFooterButtons: Story = {
  argTypes: {
    footer: hiddenArgControl,
  },
  render: ({ children, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isShown, setIsShown] = useState(false)
    const toggleBtn = () => setIsShown((val) => !val)

    return (
      <div className='body-font'>
        <button
          type='button'
          onClick={toggleBtn}
          className='bg-neutral-100 px-4 py-2 shadow-sm'
        >
          show Modal
        </button>

        <Dialog
          {...args}
          footer={<IconFooters onClose={() => setIsShown(false)} />}
          isShown={isShown}
          onClose={toggleBtn}
        >
          {children}
        </Dialog>
      </div>
    )
  },
}

export const WithLongContent: Story = {
  args: {
    children: (
      <>
        <Toggle.Switch checked ariaLabel='test' onChange={noop} />
        <p className='py-10'>Paragraph Content</p>
        <FormField>
          <FormField.LabelGroup>
            <FormField.Label htmlFor='value'>Label</FormField.Label>
            <FormField.Description id='value-description'>
              Description
            </FormField.Description>
          </FormField.LabelGroup>
          <FormField.RadioInput id='value' value='value_1' onChange={noop}>
            <FormField.RadioInput.Option value='value_1'>
              Value 1
            </FormField.RadioInput.Option>
            <FormField.RadioInput.Option value='value_2'>
              Value 2
            </FormField.RadioInput.Option>
            <FormField.RadioInput.Option value='value_3' disabled>
              Value 3
            </FormField.RadioInput.Option>
          </FormField.RadioInput>
        </FormField>
        <p className='py-5'>
          {`
                    "Oh, hush, hush, my child!" said Van Helsing. "God does not purchase souls in
                    this wise; and the Devil, though he may purchase, does not keep faith. But God
                    is merciful and just, and knows your pain and your devotion to that dear Madam
                    Mina. Think you, how her pain would be doubled, did she but hear your wild
                    words. Do not fear any of us, we are all devoted to this cause, and to-day shall
                    see the end. The time is coming for action; to-day this Vampire is limit to the
                    powers of man, and till sunset he may not change. It will take him time to
                    arrive here--see, it is twenty minutes past one--and there are yet some times
                    before he can hither come, be he never so quick. What we must hope for is that
                    my Lord Arthur and Quincey arrive first."
                    `}
        </p>

        <p className='py-10'>
          {`
                    "He will be here before long now," said Van Helsing, who had been consulting his
                    pocket-book. "Nota bene, in Madam's telegram he went south from Carfax, that
                    means he went to cross the river, and he could only do so at slack of tide,
                    which should be something before one o'clock. That he went south has a meaning
                    for us. He is as yet only suspicious; and he went from Carfax first to the place
                    where he would suspect interference least. You must have been at Bermondsey only
                    a short time before him. That he is not here already shows that he went to Mile
                    End next. This took him some time; for he would then have to be carried over the
                    river in some way. Believe me, my friends, we shall not have long to wait now.
                    We should have ready some plan of attack, so that we may throw away no chance.
                    Hush, there is no time now. Have all your arms! Be ready!" He held up a warning
                    hand as he spoke, for we all could hear a key softly inserted in the lock of the
                    hall door.
                    `}
        </p>
        <span>litipsum.com</span>
        <Alert title='Some important information' intent='info' />
        <Toggle.Switch checked={false} ariaLabel='test' onChange={noop} />
      </>
    ),
  },
  argTypes: {
    children: hiddenArgControl,
  },
}
