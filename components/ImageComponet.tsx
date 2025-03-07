import { FC, useState } from "react"

export type position = "tl" | "tr" | "bl" | "br"

export interface BancoImagen {
  categoria: string
  id: string
  label: string
  labelPosition: position,
  imageUrl: string
}

interface Props {
  item: BancoImagen
  className?: string
  hover?: string
}

export const ImageComponets: FC<Props> = ({ item, className = "w-full h-full", hover = "hover:w-[95%] hover:h-[95%]" }) => {
  const [isHover, setIsHover] = useState(false)

  const size = 16
  return (
    <>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`flex justify-center items-center ${className}`}  >
        <div className={`bg-white rounded-2xl relative transition-width transition-height duration-500 ease-linear w-full h-full overflow-hidden cursor-pointer ${hover} ${!item?.labelPosition
          ? "rounded-bl-none"
          : item?.labelPosition == "tr"
            ? "rounded-tr-none"
            : item?.labelPosition == "tl"
              ? "rounded-tl-none"
              : item?.labelPosition == "br"
                ? "rounded-br-none"
                : "rounded-bl-none"
          }`}>
          <img src={item?.imageUrl} className="w-full h-full object-cover" />


          <div className={`absolute ${!item?.labelPosition
            ? "left-0 bottom-0 flex items-end"
            : item?.labelPosition == "tr"
              ? "top-0 right-0 flex-row-reverse"
              : item?.labelPosition == "tl"
                ? "top-0 left-0"
                : item?.labelPosition == "br"
                  ? "bottom-0 right-0 flex-row-reverse items-end"
                  : "bottom-0 left-0 flex items-end"
            }  flex  `}>
            <div className={`flex  ${!item?.labelPosition
              ? "flex-col"
              : item?.labelPosition == "tr"
                ? "items-end flex-col-reverse"
                : item?.labelPosition == "tl"
                  ? "flex-col-reverse"
                  : item?.labelPosition == "br"
                    ? "items-end flex-col"
                    : "flex-col"
              }`}>
              <div className={`bg-black triangle-curved ${!item?.labelPosition
                ? "rotate-90"
                : item?.labelPosition == "tr"
                  ? "-rotate-90"
                  : item?.labelPosition == "tl"
                    ? "rotate-180"
                    : item?.labelPosition == "br"
                      ? ""
                      : "rotate-90"
                }`} />
              <div className={`bg-black *w-[100px] *h-[50px] transition-width transition-height duration-500 ease-linear flex items-center justify-center ${isHover && "*w-[120px] *h-[60px]"} ${!item?.labelPosition
                ? "rounded-tr-2xl"
                : item?.labelPosition == "tr"
                  ? "rounded-bl-2xl"
                  : item?.labelPosition == "tl"
                    ? "rounded-br-2xl"
                    : item?.labelPosition == "br"
                      ? "rounded-tl-2xl"
                      : "rounded-tr-2xl"
                }`}>
                <span className={`transition-text duration-500 ease-linear text-white p-4 text-sm ${isHover && "text-xl text-blue-500"}`}>
                  {item?.label}
                </span>
              </div>
            </div>
            <div className={`bg-black triangle-curved ${!item?.labelPosition
              ? "rotate-90"
              : item?.labelPosition == "tr"
                ? "-rotate-90"
                : item?.labelPosition == "tl"
                  ? "rotate-180"
                  : item?.labelPosition == "br"
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