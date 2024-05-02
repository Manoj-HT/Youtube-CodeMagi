import { Sequence } from "remotion"
import Intro from "../Intro/Intro"

const Core = () => {
  return (
    <>
    <Sequence from={0}>
      <Intro />
    </Sequence>
    {/* <Sequence from={600}>

    </Sequence> */}
    </>
  )
}

export default Core