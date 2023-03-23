import { twMerge } from 'tailwind-merge';

export default function classNames(...args: unknown[]) {
    return twMerge(args.filter(Boolean).join(' '));
}
