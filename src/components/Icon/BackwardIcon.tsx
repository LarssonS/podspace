import { FC } from "react"
import { HasClassName } from "../../types/HasClassName"

export const BackwardIcon: FC<HasClassName> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 13.2876L16.4398 17.8474C17.1226 18.2658 18 17.7745 18 16.9737V7.02632C18 6.22551 17.1226 5.73418 16.4398 6.15264L9 10.7123V6.5C9 6.22386 8.77614 6 8.5 6H7.5C7.22386 6 7 6.22386 7 6.5V17.5C7 17.7761 7.22386 18 7.5 18H8.5C8.77614 18 9 17.7761 9 17.5V13.2876Z" fill="currentColor" />
    </svg>
  )
}
