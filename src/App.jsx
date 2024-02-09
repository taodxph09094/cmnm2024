import ReactPlayer from 'react-player'
import './App.scss'
import LayoutMain from './layout'
import { useEffect, useState } from 'react'

const App = () => {
  const [mutedVD, setMutedVD] = useState(true)
  useEffect(() => {
    setMutedVD(false)
  }, [])
  return (
    <>
      <LayoutMain />
      <div className="player-wrapper" style={{ width: '0', height: '0', overflow: 'hidden' }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=gU3lD2rNA9s"
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          volume={1}
          muted={mutedVD}
          controls={false}
        />
      </div>
    </>
  )
}

export default App
