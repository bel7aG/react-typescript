import React, { FC, useState, useEffect } from 'react'

const Header: FC<{ initial?: number }> = ({ initial = 0 }) => {
  const [clicks, setClicks] = useState(initial)

  const handleIncrement = () => {
    setClicks(clicks + 1)
  }
  const handleDecrement = () => {
    setClicks(clicks - 1)
  }

  useEffect(() => {
    alert(clicks)
    if (clicks !== 0) {
      window.close()
    }
    return () => {
      alert(clicks)
    }
  }, [clicks === 10])

  return (
    <div className="App">
      <p>Clicks: {clicks}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Header
