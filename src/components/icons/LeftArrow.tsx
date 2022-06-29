type Props = {
  width?: string;
  height?: string;
  color?: string;
};

const LeftArrow = ({ width = '46', height = '52', color = '#FFF0AF' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.22397 22.1012C-0.452114 23.6237 -0.475785 27.4726 2.18136 29.0293L39.5474 50.9205C42.2046 52.4772 45.5497 50.5741 45.5686 47.495L45.8349 4.19454C45.8539 1.1154 42.5324 -0.830481 39.8564 0.691956L2.22397 22.1012Z"
        fill={color}
      />
    </svg>
  );
};

export default LeftArrow;
