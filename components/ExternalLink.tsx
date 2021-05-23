interface ExternalLinkProps {
  href: string,
  className?: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener nofollow'
      className={className}
    >
      {children}
    </a>
  )
}

export default ExternalLink
