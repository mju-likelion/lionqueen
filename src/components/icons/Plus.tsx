type Props = {
  width?: string;
  height?: string;
  color?: string;
};

const Plus = ({ width = '58', height = '57', color = '#FFF0AF' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 58 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_134_820)">
        <ellipse cx="29" cy="24.256" rx="25" ry="24.256" fill={color} />
      </g>
      <path
        d="M27.8472 26.8322C27.8872 28.6322 27.9272 30.4722 28.0072 32.4722C28.0472 34.3522 28.2872 34.7122 29.5672 34.7522C31.0072 34.7922 31.4072 34.2322 31.5672 32.5122C31.7272 30.6722 31.8072 28.8322 31.8472 26.7522C33.8072 26.7122 35.6472 26.6722 37.0872 26.5522C38.2472 26.4722 39.1272 26.7522 39.1272 24.5522C39.1272 23.2322 38.3672 22.9122 37.2072 22.8722C35.5272 22.8322 33.7272 22.8322 31.8872 22.8322C31.9272 21.1122 31.9272 19.2722 31.9672 17.1522C32.0072 15.8322 31.7672 15.1122 30.0072 15.1122C28.0472 15.1122 27.7672 15.7122 27.7672 17.1922V22.8322C26.0872 22.8722 24.4072 22.9122 22.8072 22.9522C21.4072 22.9922 20.3672 23.1922 20.3672 24.8322C20.3672 26.7522 21.4872 26.8322 22.9672 26.8322H27.8472Z"
        fill="#2E2E2E"
      />
      <defs>
        <filter
          id="filter0_d_134_820"
          x="0"
          y="0"
          width="58"
          height="56.5122"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_820" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_134_820"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Plus;
