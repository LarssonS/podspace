import { FC } from "react"
import { HasClassName } from "../../types/HasClassName"

export const ForwardIcon: FC<HasClassName> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 13.2876L7.56016 17.8474C6.87738 18.2658 6 17.7745 6 16.9737L6 7.02632C6 6.22551 6.87738 5.73418 7.56016 6.15264L15 10.7123V6.5C15 6.22386 15.2239 6 15.5 6H16.5C16.7761 6 17 6.22386 17 6.5V17.5C17 17.7761 16.7761 18 16.5 18H15.5C15.2239 18 15 17.7761 15 17.5V13.2876Z" fill="currentColor" />
    </svg>
  )
}
