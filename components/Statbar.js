import React from 'react'

function Statbar({ value, max, pokeColor, statName }) {
  let percent = (value / max) * 100;

  return (
    <div style={ {
      display: 'flex',
      gap: "1rem",
      alignItems: 'baseline'
    } }>
      <p style={ {
        width: "20%"
      } }>{ statName.toUpperCase().replace("-", " ") }</p>
      <div className="progress" style={ {
        width: "80%"
      } }>
        <div className="progress-bar" role="progressbar" style={ { width: `${percent}%`, backgroundColor: pokeColor } } aria-valuenow={ percent } aria-valuemin="0" aria-valuemax={ max }>{ value }</div>
      </div>
    </div>
  )
}

export default Statbar
