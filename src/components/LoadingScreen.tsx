interface LoadingScreenProps {
  progress: number
}

const LoadingScreen = ({ progress }: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <div className="w-64 text-center">
        <div className="mb-4">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="text-gray-400">
          Chargement des images... {Math.round(progress)}%
        </p>
      </div>
    </div>
  )
}

export default LoadingScreen
