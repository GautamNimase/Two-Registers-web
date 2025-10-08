import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e) => {
      if (e.target.closest('[data-cursor-hover]')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      if (e.target.closest('[data-cursor-hover]')) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <div
      className={`services-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: position.x - 10,
        top: position.y - 10,
      }}
    />
  )
}
