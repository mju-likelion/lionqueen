type Props = {
  width?: string;
  height?: string;
  color?: string;
};

const RightArrow = ({ width = '46', height = '52', color = '#FFF0AF' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.9985 29.775C46.6652 28.2361 46.6652 24.3871 43.9985 22.8468L6.49853 1.18582C3.83187 -0.354517 0.498535 1.56907 0.498535 4.64827L0.498535 47.9495C0.498535 51.0288 3.83187 52.9542 6.49854 51.4153L43.9985 29.775Z"
        fill={color}
      />
    </svg>
  );
};

export default RightArrow;
