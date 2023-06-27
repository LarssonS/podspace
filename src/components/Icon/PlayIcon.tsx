import { FC } from "react"
import { HasClassName } from "../../types/HasClassName"

export const PlayIcon: FC<HasClassName> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.9" d="M18.288 10.9807C19.0491 11.4471 19.0491 12.5528 18.288 13.0192L8.82019 18.8219C8.02361 19.3101 7 18.7369 7 17.8026L7 6.19737C7 5.26309 8.02361 4.68988 8.82018 5.17808L18.288 10.9807Z" fill="currentColor" />
    </svg>
  )
}
