import { createSignal, onCleanup, createEffect } from 'solid-js'

interface CarouselProps {
  autoSlide?: boolean
  autoSlideInterval?: number
  slides: string[]
}

export default function Carousel (props: CarouselProps) {
  const { autoSlide = false, autoSlideInterval = 5000, slides } = props

  const [curr, setCurr] = createSignal(0)

  const prev = () => setCurr(curr() === 0 ? slides.length - 1 : curr() - 1)
  const next = () => setCurr(curr() === slides.length - 1 ? 0 : curr() + 1)

  createEffect(() => {
    if (!autoSlide) return

    const slideInterval = setInterval(next, autoSlideInterval)

    onCleanup(() => clearInterval(slideInterval))
  })

  return (
    <div class="relative overflow-hidden rounded-lg">
      <div
        class="flex transition-transform duration-500 ease-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${curr() * (100 / slides.length)}%)`
        }}
      >
        {slides.map((img) => (
          <img
            src={img}
            alt="Some content to some project"
            class="w-full shrink-0"
            style={{ width: `${100 / slides.length}%` }}
            decoding="async"
            loading="lazy"
          />
        ))}
      </div>

      {slides.length !== 1 ? (
        <div class="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            class="rounded-full bg-white/40 p-1 text-gray-800 shadow hover:bg-white/80"
          >
            <svg class='opacity-80 transition-opacity hover:opacity-100' width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={next}
            class="rounded-full bg-white/40 p-1 text-gray-800 shadow hover:bg-white/80"
          >
            <svg class='opacity-80 transition-opacity hover:opacity-100' width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      ) : null}

      {slides.length !== 1 ? (
        <div class="absolute bottom-4 left-0 right-0">
          <div class="flex items-center justify-center gap-2">
            {slides.map((_src, i) => (
              <div
                class={`h-3 w-3 rounded-full bg-white/70 transition-all ${
                  curr() === i ? 'p-2' : 'bg-opacity-50'
                } `}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
