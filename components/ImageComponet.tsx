import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface Props {
  className?: string;
}

export const ImageComponets: FC<Props> = (props) => {

  console.log(100031, props.className)
  const size = 20
  return (
    <>
      <div className={`bg-white rounded-2xl flex justify-center items-center relative ${props.className}`}  >
        <div className="absolute left-0 bottom-0 flex items-end">
          <div>
            <div className="bg-black triangle-curved rotate-90" />
            <div className="bg-black rounded-r-2xl rounded-b-none w-[100px] h-[50px]"></div>
          </div>
          <div className="bg-black triangle-curved rotate-90" />
        </div>


        {/* {yoSoyJson.nombre} */}
      </div>
      <style jsx>{`
        .triangle-curved {
          width: ${size}px;
          height: ${size}px;
          clip-path: path("M 0 ${size} L 0 ${size} C 0 ${size}, ${size} ${size}, ${size} 0 L ${size} 0 L ${size} ${size} z");
        }
      `}</style>
    </>
  )
}

const yoSoyJson = {
  nombre: "jafet",
  apellido: "monitlla"
}