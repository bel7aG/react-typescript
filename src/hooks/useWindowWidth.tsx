import React, { useState, useEffect } from 'react'

export default () => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResizeWidth = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResizeWidth)
  }, [width])

  return true
}
