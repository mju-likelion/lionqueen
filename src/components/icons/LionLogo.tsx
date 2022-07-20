type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const LionLogo = ({ height = 154, width = 159, color = '#E67A18' }: Props) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 189 176"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="97.6086" cy="32.1655" rx="27.977" ry="32.1655" fill="#E67A18" />
      <ellipse cx="51.602" cy="38.8412" rx="27.977" ry="25.4897" fill="#E67A18" />
      <path
        d="M59.6842 86.7866C59.6842 104.551 46.3234 118.952 29.8421 118.952C13.3608 118.952 0 104.551 0 86.7866C0 69.0221 13.3608 54.6211 29.8421 54.6211C46.3234 54.6211 59.6842 69.0221 59.6842 86.7866Z"
        fill="#E67A18"
      />
      <ellipse cx="51.602" cy="131.697" rx="27.977" ry="32.1655" fill="#E67A18" />
      <ellipse cx="97.6086" cy="143.834" rx="27.977" ry="32.1655" fill="#E67A18" />
      <ellipse cx="142.372" cy="131.697" rx="27.977" ry="32.1655" fill="#E67A18" />
      <ellipse cx="155.428" cy="89.2134" rx="33.5724" ry="32.1655" fill="#E67A18" />
      <ellipse cx="142.372" cy="40.0552" rx="27.977" ry="24.2759" fill="#E67A18" />
      <path
        d="M147.967 89.2142C154.184 129.876 124.029 139.587 94.5 139.587C64.9709 139.587 38.5461 129.269 41.0329 89.2142C41.0329 61.3943 55.954 41.2694 94.5 38.8418C130.559 42.4832 147.967 61.3943 147.967 89.2142Z"
        fill="#FCDC6D"
      />
      <ellipse cx="74.6053" cy="74.0417" rx="4.97368" ry="4.85517" fill="#2B2B2B" />
      <ellipse cx="110.664" cy="74.0417" rx="4.97368" ry="4.85517" fill="#2B2B2B" />
      <path
        d="M100.717 88.6132C100.717 91.2946 97.0308 95.89 93.476 95.89C89.9212 95.89 87.0394 91.2946 87.0394 88.6132C87.0394 85.9318 90.7257 86.1862 94.2805 86.1862C97.8353 86.1862 100.717 85.9318 100.717 88.6132Z"
        fill="#2B2B2B"
      />
      <ellipse cx="54.7104" cy="49.7652" rx="9.94737" ry="7.28276" fill="#FCDC6D" />
      <ellipse cx="135.533" cy="49.7652" rx="9.94737" ry="7.28276" fill="#FCDC6D" />
      <line
        x1="0.5"
        y1="-0.5"
        x2="22.2938"
        y2="-0.5"
        transform="matrix(0.939254 0.343224 -0.358055 0.9337 57.1974 83.752)"
        stroke="#C5925B"
        strokeLinecap="round"
      />
      <line
        x1="0.5"
        y1="-0.5"
        x2="22.2819"
        y2="-0.5"
        transform="matrix(0.92785 0.372952 -0.388654 0.921384 110.664 95.8896)"
        stroke="#C5925B"
        strokeLinecap="round"
      />
      <path d="M58.4408 104.24L78.2926 95.8894" stroke="#C5925B" strokeLinecap="round" />
      <line
        x1="0.5"
        y1="-0.5"
        x2="22.312"
        y2="-0.5"
        transform="matrix(0.956429 -0.291965 0.305078 0.952327 110.664 90.4121)"
        stroke="#C5925B"
        strokeLinecap="round"
      />
      <path
        d="M81 111.011L94.5189 109.913L102.921 107.542L105.62 103"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LionLogo;
