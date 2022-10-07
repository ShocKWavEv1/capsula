import * as React from "react"

const SvgComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="100% 100% 100% 100%"
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient
          gradientTransform="rotate(150 .5 .5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="a"
        >
          <stop stopColor="hsl(315, 100%, 72%)" offset="0%" />
          <stop stopColor="hsl(227, 100%, 50%)" offset="100%" />
        </linearGradient>
        <filter
          id="b"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.005 0.003"
            numOctaves={2}
            seed={2}
            stitchTiles="stitch"
            x="0%"
            y="0%"
            result="turbulence"
          />
          <feGaussianBlur
            stdDeviation="20 0"
            x="0%"
            y="0%"
            in="turbulence"
            result="blur"
          />
          <feBlend
            mode="color-dodge"
            x="0%"
            y="0%"
            in="SourceGraphic"
            in2="blur"
            result="blend"
          />
        </filter>
      </defs>
      <path fill="url(#a)" filter="url(#b)" d="M0 0H700V700H0z" />
    </svg>
  )
}

export default SvgComponent