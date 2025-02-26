import { ImageComponets } from "@/components/ImageComponet"
import { InputBasic } from "@/components/InputBasic"
import { TestFigure } from "@/components/TestFigure"

function Home() {
  return (
    <div className="flex justify-center items-center h-full gap-3">
      <TestFigure />
      <InputBasic className="bg-red-500" value="" />
      <ImageComponets className="w-[300px] h-[150px]" />
      <ImageComponets className="w-[400px] h-[200px]" />
      <ImageComponets className="w-[120px] h-[80px]" />
    </div>
  )
}

export default Home