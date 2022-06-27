type Props = {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
};

// className을 props로 넘겨 컴포넌트 스타일링을 가능하게 했음
const BoardBody = ({ className, width = '622', height = '441', fill = 'none' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 622 441"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="25.6429" y="27.8281" width="572.687" height="388.633" fill="#F2C37E" />
      <path d="M0 1.96387H621.342L598.987 27.8285H319.214H25.6427L0 1.96387Z" fill="#CA9D67" />
      <path
        d="M621.342 441L7.36117e-05 441L23.6702 416.461L302.128 416.461L598.329 416.461L621.342 441Z"
        fill="#BC854F"
      />
      <path
        d="M0 441L-1.92403e-05 1.96378L25.6427 28.4916L25.6427 215.445L25.6427 415.798L0 441Z"
        fill="#AF7642"
      />
      <path
        d="M622 0.637695L622 441L598.33 416.462L598.33 226.874L598.33 29.1551L622 0.637695Z"
        fill="#C5925B"
      />
    </svg>
  );
};

export default BoardBody;
