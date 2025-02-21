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
    <input onChange={handleChange} value={value} type="string" placeholder="no hay luna" className={` ${props.className}`} />
  )
}
