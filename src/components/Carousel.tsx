import { createEffect, createSignal, onCleanup, onMount } from "solid-js";

interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
  alts?: string[];
}

export default function Carousel(props: CarouselProps) {
  const { autoSlide = false, autoSlideInterval = 5000, slides } = props;

  const [curr, setCurr] = createSignal(0);
  const [isInViewport, setIsInViewport] = createSignal(true);
  const [isPaused, setIsPaused] = createSignal(false);
  let carouselRef: HTMLDivElement | undefined = undefined;

  const prev = () => setCurr(curr() === 0 ? slides.length - 1 : curr() - 1);
  const next = () => setCurr(curr() === slides.length - 1 ? 0 : curr() + 1);

  const getAlt = (index: number): string => {
    if (props.alts?.[index]) {
      return props.alts[index];
    }
    return `Project screenshot ${index + 1}`;
  };

  onMount(() => {
    const el = carouselRef;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setIsInViewport(entry.isIntersecting);
        }
      },
      { threshold: 0, rootMargin: "50px" },
    );
    observer.observe(el);
    onCleanup(() => observer.disconnect());
  });

  createEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!autoSlide || !isInViewport() || isPaused() || reduceMotion) {
      return;
    }

    const slideInterval = setInterval(next, autoSlideInterval);

    onCleanup(() => clearInterval(slideInterval));
  });

  return (
    <div
      ref={carouselRef}
      class="relative overflow-hidden rounded-xl"
      role="group"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusIn={() => setIsPaused(true)}
      onFocusOut={() => setIsPaused(false)}
    >
      <div
        class="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${curr() * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((img, i) => (
          <img
            src={img}
            alt={getAlt(i)}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${slides.length}`}
            class="aspect-video w-full shrink-0 object-cover"
            style={{ width: `${100 / slides.length}%` }}
            decoding="async"
            loading="lazy"
          />
        ))}
      </div>

      {slides.length !== 1 ? (
        <div class="absolute inset-0 flex items-center justify-between p-2 pointer-events-none">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            class="pointer-events-auto bg-surface/85 text-ink hover:bg-surface inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full p-2.5 shadow-sm transition-colors focus-visible:outline-2"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            class="pointer-events-auto bg-surface/85 text-ink hover:bg-surface inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full p-2.5 shadow-sm transition-colors focus-visible:outline-2"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      ) : null}

      {slides.length !== 1 ? (
        <div class="absolute right-0 bottom-2 left-0">
          <div class="flex items-center justify-center gap-1">
            {slides.map((_src, i) => (
              <button
                type="button"
                onClick={() => setCurr(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={curr() === i}
                class="relative inline-flex min-h-9 min-w-9 cursor-pointer items-center justify-center p-1.5 focus-visible:outline-2"
              >
                <span
                  class={`block rounded-full transition-all ${
                    curr() === i ? "bg-accent h-2 w-4" : "bg-ink-3/60 hover:bg-ink-2 h-2 w-2"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
