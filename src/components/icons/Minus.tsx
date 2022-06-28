type Props = {
  width?: string;
  height?: string;
  color?: string;
};

const XIcon = ({ width = '38', height = '38', color = '#FFF0AF' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1010_49)">
        <circle cx="19" cy="15" r="15" fill={color} />
      </g>
      <path d="M22.1845 14.983V16.5455H15.8208V14.983H22.1845Z" fill="black" />
      <defs>
        <filter
          id="filter0_d_1010_49"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1010_49" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1010_49"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default XIcon;
