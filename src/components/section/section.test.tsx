import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Section } from './section'

describe('Section', () => {
  it('renders title and description slots', () => {
    render(
      <Section>
        <Section.Title>Details</Section.Title>
        <Section.Description>Extra context</Section.Description>
      </Section>,
    )

    expect(screen.getByText('Details')).toBeInTheDocument()
    expect(screen.getByText('Extra context')).toBeInTheDocument()
  })
})
