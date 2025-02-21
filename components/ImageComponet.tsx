import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface Props {
  className?: string;
}

export const ImageComponets: FC<Props> = (props) => {

  console.log(100031, props.className)

  return (
    <div className={`bg-white rounded-3xl flex justify-center items-center ${props.className}`}  >
      {yoSoyJson.nombre}
    </div>
  )
}

const yoSoyJson = {
  nombre: "jafet",
  apellido: "monitlla"
}