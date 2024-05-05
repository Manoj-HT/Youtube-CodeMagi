import { Audio, staticFile } from "remotion"

const AudioSequences = () => {
  return (
    <>
    <Audio src={staticFile("c2p2/c2p2.mp3")} />
    </>
  )
}

export default AudioSequences