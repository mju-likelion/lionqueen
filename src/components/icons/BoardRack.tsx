type Props = {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
};

// className을 props로 넘겨 컴포넌트 스타일링을 가능하게 했음
const BoardRack = ({ className, width = '272', height = '148', fill = 'none' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 272 148"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="7.5"
        y1="-7.5"
        x2="181.145"
        y2="-7.5"
        transform="matrix(0.704085 -0.710115 0.704085 0.710115 11.4988 147.23)"
        stroke="#AF7642"
        strokeWidth="15"
        strokeLinecap="square"
      />
      <line
        x1="7.5"
        y1="-7.5"
        x2="180.5"
        y2="-7.5"
        transform="matrix(-0.704053 -0.710147 0.704053 -0.710147 271.186 135.25)"
        stroke="#AF7642"
        strokeWidth="15"
        strokeLinecap="square"
      />
      <ellipse cx="138.398" cy="17.9063" rx="17.7526" ry="17.9063" fill="#935628" />
    </svg>
  );
};

export default BoardRack;
