export interface TopBarLogoProps {
  src: string
}

export const TopBarLogo = ({ src }: TopBarLogoProps) => {
  return <img src={src} alt='logo' />
}
