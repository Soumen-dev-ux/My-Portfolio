type MagicCircleProps = {
  className?: string
  compact?: boolean
}

export default function MagicCircle({ className = "", compact = false }: MagicCircleProps) {
  return (
    <div aria-hidden="true" className={`magic-circle ${compact ? "magic-circle--compact" : ""} ${className}`}>
      <div className="magic-circle__ring magic-circle__ring--outer"><span>✦ ᚨ ✧ ᚱ ✦ ᛟ ✧ ᚾ ✦</span></div>
      <div className="magic-circle__ring magic-circle__ring--middle" />
      <div className="magic-circle__ring magic-circle__ring--inner"><i /></div>
    </div>
  )
}
