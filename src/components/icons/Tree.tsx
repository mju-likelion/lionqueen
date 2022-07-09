type Props = {
  className?: string;
};

const Tree = ({ className }: Props) => {
  return (
    <span>
      <svg
        width="158"
        height="198"
        viewBox="0 0 158 198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect x="57.7383" y="113.538" width="41.7433" height="84.4615" fill="#DAC2A5" />
        <ellipse cx="82.7054" cy="32.7115" rx="35.5013" ry="32.7115" fill="#6FD799" />
        <ellipse cx="54.6175" cy="70.442" rx="35.5013" ry="32.7115" fill="#6FD799" />
        <ellipse cx="35.5013" cy="109.904" rx="35.5013" ry="32.7115" fill="#6FD799" />
        <ellipse cx="75.2943" cy="109.904" rx="35.5013" ry="32.7115" fill="#6FD799" />
        <ellipse cx="122.499" cy="109.904" rx="35.5013" ry="32.7115" fill="#6FD799" />
        <ellipse cx="106.504" cy="70.442" rx="35.5013" ry="32.7115" fill="#6FD799" />
      </svg>
    </span>
  );
};

export default Tree;
