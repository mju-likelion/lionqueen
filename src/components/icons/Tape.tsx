type Props = {
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
  opacity?: string;
};

const Tape = ({
  className,
  width = '25',
  height = '43',
  fill = '#FF6B6B',
  opacity = '0.63',
}: Props) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 25 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="16.466"
        height="39.9066"
        transform="matrix(0.97971 0.200422 -0.197496 0.980304 8.12964 0.469727)"
        fill={fill}
        fillOpacity={opacity}
      />
    </svg>
  );
};

export default Tape;
