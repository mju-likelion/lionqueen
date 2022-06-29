type Props = {
  width?: string;
  height?: string;
  color?: string;
};

const ModalPlusButton = ({ width = '38', height = '38', color = '#FFF0AF' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_369_169)">
        <circle cx="19" cy="15" r="15" fill={color} />
      </g>
      <path
        d="M18.5953 19.6346V10.2596H20.1862V19.6346H18.5953ZM14.7032 15.7425V14.1516H24.0782V15.7425H14.7032Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_d_369_169"
          x="0"
          y="0"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_369_169" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_369_169"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ModalPlusButton;
