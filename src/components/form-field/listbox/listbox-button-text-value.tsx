export interface ListboxButtonTextValueProps {
  placeholder: string
  value?: string | number | null
}

export const ListboxButtonTextValue = ({
  placeholder,
  value,
}: ListboxButtonTextValueProps) => {
  if (!value) {
    return (
      <div className='paragraph-100 text-neutral-600 group-hover:text-neutral-700'>
        {placeholder}
      </div>
    )
  }
  return <div className='paragraph-100'>{value}</div>
}
