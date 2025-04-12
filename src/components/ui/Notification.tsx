import React, { useEffect } from 'react'
import '../../styles/ia-enhancements.css'

interface NotificationProps {
  type: 'success' | 'error' | 'info'
  message: string
  onClose: () => void
  duration?: number
}

const Notification: React.FC<NotificationProps> = ({
  type,
  message,
  onClose,
  duration = 5000
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️'
  }

  const colors = {
    success: 'from-green-500/20 to-green-600/20 border-green-500/50',
    error: 'from-red-500/20 to-red-600/20 border-red-500/50',
    info: 'from-blue-500/20 to-blue-600/20 border-blue-500/50'
  }

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg border bg-gradient-to-r stl-glass stl-fade-in flex items-center space-x-3 ${colors[type]}`}
      role="alert"
    >
      <span className="text-xl">{icons[type]}</span>
      <p className="text-sm font-medium text-white">{message}</p>
      <button
        onClick={onClose}
        className="ml-4 text-white/60 hover:text-white transition-colors duration-300"
        aria-label="Fermer"
      >
        ×
      </button>
    </div>
  )
}

export default Notification
