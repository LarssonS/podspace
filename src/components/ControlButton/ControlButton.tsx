import { FC } from "react"
import { ControlButtonProps } from "./ControlButtonProps"
import classNames from "classnames"

export const ControlButton: FC<ControlButtonProps> = ({ children, variant }) => {
  return (
    <button className={classNames('h-10 w-10 rounded-full flex justify-center items-center transition-colors', {
      'hover:bg-primary-txt/5': variant == 'secondary',
      'bg-[#0C0F12] hover:bg-[#151A1E] shadow shadow-surf-new-900/[16]': variant == 'primary',
    })}>
      {children}
    </button>
  )
}
