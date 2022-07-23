type Props = {
  width?: string;
  height?: string;
  color?: string;
};

const Bubble = ({ width = '163', height = '163', color = '#c5e5ff' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 163 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8" filter="url(#filter0_d_1165_51)">
        <circle cx="81.5" cy="77.5" r="77.5" fill={color} />
      </g>
      <ellipse cx="53.9783" cy="112.75" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="39.9895" cy="89.5079" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="39.2893" cy="87.9044" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="38.5892" cy="86.3019" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="37.8904" cy="83.8971" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="37.1902" cy="81.4923" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="36.4915" cy="76.6837" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="36.4915" cy="71.8746" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="36.4915" cy="67.0665" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="37.1902" cy="62.2569" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="38.5892" cy="57.4488" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="39.9895" cy="53.441" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="42.7859" cy="49.4337" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="43.4861" cy="48.6329" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="44.8846" cy="46.2276" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="46.9837" cy="44.6251" rx="10.4915" ry="12.0221" fill="white" />
      <ellipse cx="49.7806" cy="43.0221" rx="10.4915" ry="12.0221" fill="white" />
      <defs>
        <filter
          id="filter0_d_1165_51"
          x="0"
          y="0"
          width="163"
          height="163"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1165_51" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1165_51"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Bubble;
