import { ImageComponets } from "@/components/ImageComponet"
import { InputBasic } from "@/components/InputBasic"
import { TestFigure } from "@/components/TestFigure"

function Home() {
  return (
    <div className="flex w-full h-full gap-3">
      <ImageComponets className="w-[300px] h-[150px]" />
      <ImageComponets className="w-[400px] h-[150px]" />
      <ImageComponets className="flex-1 h-[150px]" />
    </div>
  )
}

export default Home