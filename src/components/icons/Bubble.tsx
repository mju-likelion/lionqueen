type Props = {
  width?: string;
  height?: string;
  color?: string;
};

const Bubble = ({ width = '133', height = '133', color = '#C5E5FF' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 133 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8" filter="url(#filter0_d_899_49)">
        <circle cx="66.4639" cy="62.9365" r="62" fill={color} />
      </g>
      <ellipse cx="43.4761" cy="90.3871" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="31.8399" cy="71.5497" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="31.2574" cy="70.2504" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="30.6753" cy="68.9516" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="30.0938" cy="67.0024" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="29.5118" cy="65.0536" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="28.9302" cy="61.1562" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="28.9302" cy="57.2587" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="28.9302" cy="53.3617" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="29.5118" cy="49.4638" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="30.6753" cy="45.5668" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="31.8399" cy="42.3188" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="34.1661" cy="39.0707" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="34.7486" cy="38.4218" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="35.9121" cy="36.4726" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="37.6578" cy="35.1738" rx="8.72709" ry="9.74358" fill="white" />
      <ellipse cx="39.9839" cy="33.8744" rx="8.72709" ry="9.74358" fill="white" />
      <defs>
        <filter
          id="filter0_d_899_49"
          x="0.463867"
          y="0.936523"
          width="132"
          height="132"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_899_49" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_899_49"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Bubble;
