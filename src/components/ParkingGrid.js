export default function ParkingGrid({ 
  spots, 
  spotNumber, 
  checkoutSpot, 
  isSpotOccupied, 
  getOccupiedVehicleDetails,
  onSpotClick
}) {
  const renderSpot = (num) => {
    const occupied = isSpotOccupied(num);
    const selected = spotNumber === num;
    const isCheckout = checkoutSpot === num;
    const vehicleDetails = getOccupiedVehicleDetails(num);
    
    let className = 'spot';
    if (selected || isCheckout) className += ' selected';
    else if (occupied) className += ' occupied';
    else className += ' available';

    return (
      <div 
        key={num} 
        className={className}
        onClick={() => onSpotClick(num, occupied)}
        title={occupied ? `Occupied by a ${vehicleDetails}` : `Spot ${num} available`}
      >
        {num}
      </div>
    );
  };

  return (
    <div className="parking-lot-layout">
      <div className="parking-row top">
        {spots.slice(0, 10).map(renderSpot)}
      </div>
      
      <div className="road">
        <div className="road-line"></div>
      </div>
      
      <div className="parking-row bottom">
        {spots.slice(10, 20).map(renderSpot)}
      </div>
    </div>
  );
}
