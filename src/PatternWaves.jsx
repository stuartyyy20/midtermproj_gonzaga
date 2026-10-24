function createWavePath(row, cursor, cursorSize, cursorStrength, interactive) {
  const points = []
  const rowY = 72 + row * 19

  for (let index = 0; index <= 60; index += 1) {
    const x = (index / 60) * 1200
    const drift = Math.sin(x * 0.008 + row * 0.34) * 15
      + Math.sin(x * 0.003 + row * 0.19) * 21
    const distance = Math.hypot((x - cursor.x) / 1.5, rowY - cursor.y)
    const influence = interactive
      ? Math.max(0, 1 - distance / (cursorSize * 2.5)) * cursorStrength * 34
      : 0
    const y = rowY + drift + Math.sin(x * 0.004 + row * 0.26) * influence
    points.push(`${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`)
  }

  return points.join(' ')
}

function PatternWaves({
  preset = 'silk',
  color = '#ffffff',
  backgroundColor = '#000000',
  fade = 'edges',
  interactive = true,
  cursorSize = 50,
  cursorStrength = 0.6,
  cursor = { x: 600, y: 325 },
}) {
  const rows = Array.from({ length: 30 }, (_, index) => index)
  const presetClass = preset === 'silk' ? 'pattern-waves-silk' : ''

  return (
    <svg
      className={`pattern-waves ${presetClass} ${fade === 'edges' ? 'pattern-waves-fade' : ''}`}
      viewBox="0 0 1200 650"
      preserveAspectRatio="none"
      role="presentation"
      style={{ backgroundColor }}
    >
      <g fill="none" stroke={color} strokeWidth="1">
        {rows.map((row) => (
          <path
            key={row}
            d={createWavePath(row, cursor, cursorSize, cursorStrength, interactive)}
            opacity={0.23 + (row % 5) * 0.035}
          />
        ))}
      </g>
    </svg>
  )
}

export default PatternWaves
