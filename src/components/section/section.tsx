import type { ReactNode } from 'react'
import { SectionDescription } from './section-description'
import { SectionPanel } from './section-panel'
import { SectionTitle } from './section-title'
import { SectionTitleGroup } from './section-title-group'

interface SectionProps {
  children: ReactNode
}

const Section = ({ children }: SectionProps) => {
  return <section className='flex flex-col gap-2'>{children}</section>
}

Section.TitleGroup = SectionTitleGroup
Section.Title = SectionTitle
Section.Description = SectionDescription
/**
 * @deprecated Use the dedicated Panel component
 */
Section.Panel = SectionPanel

export { Section }
