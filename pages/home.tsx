import { ImageComponets } from "@/components/ImageComponet"
import { InputBasic } from "@/components/InputBasic"
import { TestFigure } from "@/components/TestFigure"

function Home() {
  return (
    <div className="flex w-full h-full gap-4 p-4">
      <div className="flex flex-col w-[55vw] h-full gap-4">
        <ImageComponets label="Leyenda uno" className="w-full h-[68%]" hover="hover:w-[95%] hover:h-[95%]" />

        <div className="flex w-full flex-1 gap-4">
          <ImageComponets label="Leyenda dos" labelPosition="tr" className="flex w-[50%] h-full" hover="hover:w-[95%] hover:h-[95%]" />
          <ImageComponets label="Leyenda tres" labelPosition="br" className="flex w-[50%] h-full" hover="hover:w-[95%] hover:h-[95%]" />

        </div>
      </div>
      <div className="flex-1 flex flex-col h-full gap-4">
        <div className="w-full h-[68%] gap-4 flex flex-col">
          <ImageComponets label="Leyenda cuatro" className="w-full h-[56%]" hover="hover:w-[95%] hover:h-[95%]" />
          <div className="w-full flex-1 flex gap-4">
            <ImageComponets label="Leyenda cinco" className="w-1/2 h-full" hover="hover:w-[95%] hover:h-[95%]" />
            <ImageComponets label="Leyenda seis" labelPosition="tr" className="w-1/2 h-full" hover="hover:w-[95%] hover:h-[95%]" />
          </div>
        </div>
        <ImageComponets label="Leyenda siete" labelPosition="tr" className="w-full flex-1" hover="hover:w-[95%] hover:h-[95%]" />
      </div>
    </div>
  )
}

export default Home