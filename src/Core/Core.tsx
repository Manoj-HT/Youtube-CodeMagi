import { Sequence, useVideoConfig } from "remotion"
import Intro from "../Intro/Intro"
import Outro from "../Outro/Outro"
import HeyThere from "../Shared/Defaults/HeyThere"

const Core = () => {
  let { durationInFrames } = useVideoConfig()
  let outroFrameTime = durationInFrames - 600
  return (
    <>
      <Sequence from={0}>
        <Intro />
      </Sequence>
      <Sequence from={600}>
        <HeyThere />
    </Sequence>
      <Sequence from={outroFrameTime}>
        <Outro />
      </Sequence>
    </>
  )
}

export default Core