import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

export default function Carousel ({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides
}: {
  autoSlide?: boolean
  autoSlideInterval?: number
  slides: string[]
}) {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval])

  return (
    <div className='relative overflow-hidden rounded-lg'>
      <div
        className='flex transition-transform duration-500 ease-out'
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${curr * (100 / slides.length)}%)`
        }}
      >
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=''
            className='w-full flex-shrink-0'
            style={{ width: `${100 / slides.length}%` }}
          />
        ))}
      </div>
      {slides.length !== 1 ? (
        <div className='absolute inset-0 flex items-center justify-between p-4'>
          <button
            onClick={prev}
            className='rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white'
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className='rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white'
          >
            <ChevronRight size={40} />
          </button>
        </div>
      ) : null}

      {slides.length !== 1 ? (
        <div className='absolute bottom-4 left-0 right-0'>
          <div className='flex items-center justify-center gap-2'>
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-3 w-3 rounded-full bg-white transition-all ${curr === i ? 'p-2' : 'bg-opacity-50'} `}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
