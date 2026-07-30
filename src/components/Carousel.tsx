import { createSignal, onCleanup, createEffect, onMount } from 'solid-js'

interface CarouselProps {
  autoSlide?: boolean
  autoSlideInterval?: number
  slides: string[]
}

export default function Carousel (props: CarouselProps) {
  const { autoSlide = false, autoSlideInterval = 5000, slides } = props

  const [curr, setCurr] = createSignal(0)
  const [isInViewport, setIsInViewport] = createSignal(true)
  let carouselRef: HTMLDivElement | undefined

  const prev = () => setCurr(curr() === 0 ? slides.length - 1 : curr() - 1)
  const next = () => setCurr(curr() === slides.length - 1 ? 0 : curr() + 1)

  onMount(() => {
    const el = carouselRef
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setIsInViewport(entry.isIntersecting)
        }
      },
      { threshold: 0, rootMargin: '50px' }
    )
    observer.observe(el)
    onCleanup(() => observer.disconnect())
  })

  createEffect(() => {
    if (!autoSlide || !isInViewport()) return

    const slideInterval = setInterval(next, autoSlideInterval)

    onCleanup(() => clearInterval(slideInterval))
  })

  return (
    <div ref={carouselRef} class='relative overflow-hidden rounded-xl'>
      <div
        class='flex transition-transform duration-500 ease-out'
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${curr() * (100 / slides.length)}%)`
        }}
      >
        {slides.map((img) => (
          <img
            src={img}
            alt='Project screenshot'
            class='w-full shrink-0 aspect-video object-cover'
            style={{ width: `${100 / slides.length}%` }}
            decoding='async'
            loading='lazy'
          />
        ))}
      </div>

      {slides.length !== 1 ? (
        <div class='absolute inset-0 flex items-center justify-between p-2'>
          <button
            onClick={prev}
            class='rounded-full bg-surface/80 p-1.5 text-ink shadow-sm hover:bg-surface transition-colors'
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
              <polyline points='15 18 9 12 15 6' />
            </svg>
          </button>
          <button
            onClick={next}
            class='rounded-full bg-surface/80 p-1.5 text-ink shadow-sm hover:bg-surface transition-colors'
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
              <polyline points='9 18 15 12 9 6' />
            </svg>
          </button>
        </div>
      ) : null}

      {slides.length !== 1 ? (
        <div class='absolute bottom-3 left-0 right-0'>
          <div class='flex items-center justify-center gap-1.5'>
            {slides.map((_src, i) => (
              <div
                class={`rounded-full transition-all ${
                  curr() === i ? 'h-2 w-4 bg-accent' : 'h-2 w-2 bg-ink-3/50'
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
