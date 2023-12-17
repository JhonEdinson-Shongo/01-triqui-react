import { useEffect, useRef } from "react";

export const MusicButton = (({ mute, changeStateMusic }) => {
  const audioRef = useRef()
  const toogleButton = () => {
      changeStateMusic()
  }

  const audioPay = async () => await audioRef.current.play()
  const audioPause = () => audioRef.current.pause()

  useEffect(() => {
    mute ? audioPay() : audioPause()
  }, [mute])

  return (
    <>
      <audio
        ref={ audioRef }
        autoPlay={ true }
        autobuffer="auto"
        loop={true}
        preload="auto"
      >
        <source src="./sound_game.mp3" type="audio/mp3" />
      </audio>
      <button className="btn-icon" onClick={ toogleButton }>
        {
          mute ? <img src="./volume-full.svg" alt="image to music sound"/> : ''
        }
        {
          !mute ? <img src="./volume-mute.svg" alt="image to mute sound"/> : ''
        }
      </button>
    </>
  )
});