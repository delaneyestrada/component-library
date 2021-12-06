import React from 'react'

interface SpotifyPlayerProps {
  url: string
  height: string
}

const SpotifyPlayer = ({ url, height }: SpotifyPlayerProps) => {
  return (
    <div className='spotify-playlist'>
      <iframe
        src={url}
        title={Date.now().toString()}
        width='100%'
        height={height}
        frameBorder='0'
        allowTransparency
        allow='encrypted-media'
      />
    </div>
  )
}

export default SpotifyPlayer
