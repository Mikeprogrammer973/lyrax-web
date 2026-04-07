
'use client'

interface SpinnerProps {
  text?: string
  fullScreen?: boolean
}

export default function Spinner({ text = 'Carregando...', fullScreen = true }: SpinnerProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-purple-200 rounded-full animate-pulse" />
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-purple-600 rounded-full animate-spin border-t-transparent" />
      </div>
      {text && (
        <p className="text-gray-500 text-sm animate-pulse">{text}</p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-linear-to-b from-gray-50 to-white">
        {content}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-8">
      {content}
    </div>
  )
}