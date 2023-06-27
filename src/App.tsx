import { FC, useEffect, useState } from 'react'
import { Player } from './components/Player/Player'
import { Track } from './types/Track'

const App: FC = () => {
  const [track, setTrack] = useState<Track>()

  useEffect(() => {
    fetch('/data/32-massa-vill-ha-upprattelse.json')
      .then(resp => resp.json())
      .then(resp => setTrack(resp))
  }, [])

  return (
    <main className='flex justify-center items-center min-h-screen'>
      {track &&
        <Player track={track} />
      }
    </main>
  )
}

export default App
