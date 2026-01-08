import { TableUnvirtualized } from '../../table-unvirtualized/table-unvirtualized'
import { ChevronDownIcon, ChevronUpIcon } from '../../../icons'

interface ExpandableButtonCellProps {
  onClick: () => void
  expanded: boolean
}

export const ExpandableButtonCell = ({
  expanded,
  onClick,
}: ExpandableButtonCellProps) => {
  return (
    <TableUnvirtualized.Body.Cell isTextContent={false} className='pr-0'>
      <button
        type='button'
        className='flex h-full w-full items-center justify-center'
        onClick={onClick}
        tabIndex={0}
      >
        {expanded ?
          <ChevronUpIcon className='h-4 w-4 fill-neutral-600' />
        : <ChevronDownIcon className='h-4 w-4 fill-neutral-600' />}
      </button>
    </TableUnvirtualized.Body.Cell>
  )
}
