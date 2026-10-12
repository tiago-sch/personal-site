'use client'

interface PrintButtonProps {
  className?: string
}

const PrintButton: React.FC<PrintButtonProps> = ({ className }) => (
  <button type="button" className={className} onClick={() => window.print()}>
    Print this page
  </button>
)

export default PrintButton
