import { FC, useState, useMemo } from "react"
import { formatDuration } from "../../utils/formatDuration"
import { BackwardIcon } from "../Icon/BackwardIcon"
import { ExplicitIcon } from "../Icon/ExplicitIcon"
import { ForwardIcon } from "../Icon/ForwardIcon"
import { PlayIcon } from "../Icon/PlayIcon"
import { SkipBackIcon } from "../Icon/SkipBackIcon"
import { SkipForwardIcon } from "../Icon/SkipForwardIcon"
import { PlayerProps } from "./PlayerProps"
import { ControlButton } from "../ControlButton/ControlButton"

export const Player: FC<PlayerProps> = ({ track }) => {
  const [currentTime] = useState<number>(1642)

  const date = useMemo(() => {
    const newDate = new Date(track.publishedAt)
    return newDate.toLocaleDateString('sv-SE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }, [track.publishedAt])

  const remainingTime = useMemo(() => {
    return track.length - currentTime
  }, [track.length, currentTime])

  const progress = useMemo(() => {
    return `${Math.round(currentTime / (track.length / 100 ))}%`
  }, [track.length, currentTime])

  return (
    <div className='max-w-sm bg-surf-700 border border-[#19191d] rounded-3xl overflow-hidden shadow shadow-surf-new-900/[16]'>
      <div className='relative'>
        <img className="w-full aspect-square" src={track.coverImage} alt="Pod image" />
        <div className='flex items-end justify-center absolute bottom-0 left-0 h-[144px] w-full  bg-gradient-to-t from-surf-700 to-surf-700/0 backdrop-blur-[1px]'>
          <article className='text-center'>
            <h4 className='font-inter font-semibold text-primary-txt text-base'>{track.title}</h4>
            <div className='flex items-center justify-center text-[13px] leading-6'>
              <span className='text-primary-txt/70'>{date}</span>
              <span className='text-primary-txt/50'>・Episode・</span>

              {track.explicit && <ExplicitIcon className='w-3 h-3 text-primary-txt/50' />}
            </div>
          </article>
        </div>
      </div>


      <div className='px-10 pt-4 pb-6'>
        <div className='border border-t-white/[.08] border-b-white/[.02] border-x-white/[.02] rounded-[3px] h-[6px] relative my-4'>
          <div className='h-[calc(100% + 2px)] bg-white absolute -top-px -left-px -bottom-px rounded-l-[3px]' style={{ width: progress }}></div>
        </div>

        <div className='font-ionb h-[28px] grid grid-cols-3 mb-6'>
          <div className='relative'>
            <time className='absolute left-0 text-[#E8F8FF] z-10'>{formatDuration(currentTime)}</time>
            <div className='absolute left-0 text-[#5CE7FF06]'>88:88:88</div>
          </div>
          <div className='relative text-center'>
            <time className='absolute left-1/2 -translate-x-1/2 text-[#85D1FF] z-10'>1x&nbsp;speed</time>
            <div className='absolute left-1/2 -translate-x-1/2 text-[#5CE7FF06]'>88888888</div>
          </div>
          <div className='relative'>
            <time className='absolute right-0 text-[#E8F8FF] z-10'>-{formatDuration(remainingTime)}</time>
            <div className='absolute right-0 text-[#5CE7FF06]'>88:88:88</div>
          </div>
        </div>

        <div className='flex justify-evenly'>
          <ControlButton variant="secondary">
            <BackwardIcon className='w-6 h-6 text-primary-txt' />
          </ControlButton>
          <ControlButton variant="primary">
            <SkipBackIcon className='w-6 h-6 text-[#B3E5FF]' />
          </ControlButton>
          <ControlButton variant="primary">
            <PlayIcon className='w-6 h-6 text-[#B3E5FF]' />
          </ControlButton>
          <ControlButton variant="primary">
            <SkipForwardIcon className='w-6 h-6 text-[#B3E5FF]' />
          </ControlButton>
          <ControlButton variant="secondary">
            <ForwardIcon className='w-6 h-6 text-[#B3E5FF]' />
          </ControlButton>
        </div>
      </div>
    </div>
  )
}
