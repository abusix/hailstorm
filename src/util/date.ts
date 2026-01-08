export function getAbusixDateString(date: Date): string {
  const separator = '@'

  const datePart = date.toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  })

  const dayTimePart = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return `${datePart} ${separator} ${dayTimePart}`
}
