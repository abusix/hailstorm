// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/vitest'
// eslint-disable-next-line import/no-extraneous-dependencies
import { cleanup } from '@testing-library/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})
