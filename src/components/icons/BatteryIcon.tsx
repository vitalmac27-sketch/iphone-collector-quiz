interface BatteryIconProps {
  bars: 4 | 3 | 2;
  className?: string;
}

const BatteryIcon = ({ bars, className = "" }: BatteryIconProps) => {
  // Convert bars to fill percentage
  const fillPercentage = bars === 4 ? 100 : bars === 3 ? 75 : 50;
  const fillWidth = (14 * fillPercentage) / 100; // 14 is the inner width of battery
  
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
      
      {/* Battery fill */}
      <rect 
        x="4.5" 
        y="9.5" 
        width={fillWidth} 
        height="5" 
        rx="1"
        fill="currentColor"
        className="transition-all duration-300"
      />
    </svg>
  );
};

export default BatteryIcon;
