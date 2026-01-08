import { twMerge } from 'tailwind-merge'

export function classNames(...args: unknown[]) {
  return twMerge(args.filter(Boolean).join(' '))
}
