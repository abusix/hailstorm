import type { ReactNode } from 'react'
import { BreadcrumbNavigationItem } from './breadcrumb-navigation-item'
import { BreadcrumbNavigationArrow } from './breadcrumb-navigation-arrow'

export interface BreadcrumbNavigationProps {
  children: ReactNode
}

const BreadcrumbNavigation = ({ children }: BreadcrumbNavigationProps) => {
  return <nav className='flex flex-row items-center gap-1'>{children}</nav>
}

BreadcrumbNavigation.Item = BreadcrumbNavigationItem
BreadcrumbNavigation.Arrow = BreadcrumbNavigationArrow

export { BreadcrumbNavigation }
