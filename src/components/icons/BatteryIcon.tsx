interface BatteryIconProps {
  bars: 4 | 3 | 2;
  className?: string;
}

const BatteryIcon = ({ bars, className = "" }: BatteryIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Battery outline */}
      <rect x="2" y="7" width="18" height="10" rx="2" ry="2" />
      <line x1="22" y1="11" x2="22" y2="13" />
      
      {/* Battery bars */}
      {bars >= 1 && <rect x="5" y="10" width="2" height="4" fill="currentColor" />}
      {bars >= 2 && <rect x="9" y="10" width="2" height="4" fill="currentColor" />}
      {bars >= 3 && <rect x="13" y="10" width="2" height="4" fill="currentColor" />}
      {bars >= 4 && <rect x="17" y="10" width="2" height="4" fill="currentColor" />}
    </svg>
  );
};

export default BatteryIcon;
