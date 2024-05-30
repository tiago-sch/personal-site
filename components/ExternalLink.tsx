import { type ReactNode } from 'react'

interface ExternalLinkProps {
  href: string,
  className?: string,
  title?: string,
  children: ReactNode,
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ children, ...otherProps }) => {
  return (
    <a
      target='_blank'
      rel='noopener nofollow'
      {...otherProps}
    >
      {children}
    </a>
  )
}

export default ExternalLink
