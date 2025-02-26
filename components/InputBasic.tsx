import { ChangeEvent, DetailedHTMLProps, FC, HTMLAttributes, useEffect, useState } from "react"


interface Props {
  value: string
  className?: string;
}

export const InputBasic: FC<Props> = (props) => {
  const [value, setValue] = useState<string>(props.value)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value)
    setValue(event.target.value);
  };

  return (
    <>
      <input onChange={handleChange} value={value} type="email" placeholder="tu ejemplo" className={` ${props.className}`} />

      <div className="">
        <div className="flex rotate-180 *space-x-1 *space-y-1">
          <div className="triangle-curved rotate-90 *translate-y-1" />
          <div className="triangle-curved" />
        </div>
        <div className="flex *space-x-1 *space-y-1">
          <div className="triangle-curved rotate-90" />
          <div className="bg-yellow-300* *-translate-y-1">

            <div className="triangle-curved" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .triangle-curved {
          width: 200px;
          height: 200px;
          background-color: red;
          clip-path: path("M 0 200 L 0 199.6 C 0 199.6, 197 203, 199.6 0 L 200 0 L 200 200 z");
        }
      `}</style>
    </>
  )
}
