import Image from "next/image"
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react"

type position = "tl" | "tr" | "bl" | "br"

interface Props {
  label?: string
  className?: string
  hover?: string
  labelPosition?: position
  image: string
}

export const ImageComponets: FC<Props> = (props) => {
  const [hover, setHover] = useState(false)

  console.log(props.image)

  const size = 16
  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`flex justify-center items-center ${props.className}`}  >
        <div className={`bg-white rounded-2xl relative transition-width transition-height duration-500 ease-linear w-full h-full overflow-hidden cursor-pointer ${props.hover} ${!props?.labelPosition
          ? "rounded-bl-none"
          : props.labelPosition == "tr"
            ? "rounded-tr-none"
            : props.labelPosition == "tl"
              ? "rounded-tl-none"
              : props.labelPosition == "br"
                ? "rounded-br-none"
                : "rounded-bl-none"
          }`}>
          <img src={props.image} className="w-full h-full object-cover" />


          <div className={`absolute ${!props?.labelPosition
            ? "left-0 bottom-0 flex items-end"
            : props.labelPosition == "tr"
              ? "top-0 right-0 flex-row-reverse"
              : props.labelPosition == "tl"
                ? "top-0 left-0"
                : props.labelPosition == "br"
                  ? "bottom-0 right-0 flex-row-reverse items-end"
                  : "bottom-0 right-0 flex items-end"
            }  flex  `}>
            <div className={`flex  ${!props?.labelPosition
              ? "flex-col"
              : props.labelPosition == "tr"
                ? "items-end flex-col-reverse"
                : props.labelPosition == "tl"
                  ? "flex-col-reverse"
                  : props.labelPosition == "br"
                    ? "items-end flex-col"
                    : "flex-col"
              }`}>
              <div className={`bg-black triangle-curved ${!props?.labelPosition
                ? "rotate-90"
                : props.labelPosition == "tr"
                  ? "-rotate-90"
                  : props.labelPosition == "tl"
                    ? "rotate-180"
                    : props.labelPosition == "br"
                      ? ""
                      : "rotate-90"
                }`} />
              <div className={`bg-black *w-[100px] *h-[50px] transition-width transition-height duration-500 ease-linear flex items-center justify-center ${hover && "*w-[120px] *h-[60px]"} ${!props?.labelPosition
                ? "rounded-tr-2xl"
                : props.labelPosition == "tr"
                  ? "rounded-bl-2xl"
                  : props.labelPosition == "tl"
                    ? "rounded-br-2xl"
                    : props.labelPosition == "br"
                      ? "rounded-tl-2xl"
                      : "rounded-tr-2xl"
                }`}>
                <span className={`transition-text duration-500 ease-linear text-white p-4 text-sm ${hover && "text-xl text-blue-500"}`}>
                  {props.label}
                </span>
              </div>
            </div>
            <div className={`bg-black triangle-curved ${!props?.labelPosition
              ? "rotate-90"
              : props.labelPosition == "tr"
                ? "-rotate-90"
                : props.labelPosition == "tl"
                  ? "rotate-180"
                  : props.labelPosition == "br"
                    ? ""
                    : "rotate-90"
              }`} />
          </div>
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