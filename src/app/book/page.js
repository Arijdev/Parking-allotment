'use client';

import { useState, useEffect } from 'react';
import ParkingGrid from '@/components/ParkingGrid';
import BookingForm from '@/components/BookingForm';
import CheckoutCard from '@/components/CheckoutCard';

export default function BookPage() {
  const [name, setName] = useState('');
  const [vehicleType, setVehicleType] = useState('car');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [parkingLot, setParkingLot] = useState('lot1');
  const [spotNumber, setSpotNumber] = useState(null);
  const [checkoutSpot, setCheckoutSpot] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [allocations, setAllocations] = useState([]);
  
  const totalSpots = 20; // 20 spots per lot

  useEffect(() => {
    fetchAllocations();
  }, []);

  const fetchAllocations = async () => {
    try {
      const res = await fetch('/api/allocations');
      const data = await res.json();
      if (data.success) {
        setAllocations(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch allocations:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!spotNumber) {
      setMessage('Error: Please select an available spot from the map.');
      return;
    }
    
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/allocations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, vehicleType, vehicleNumber, parkingLot, spotNumber }),
      });
      const data = await res.json();
      
      if (data.success) {
        setMessage(`Hello ${name}, your ${vehicleType} (${vehicleNumber}) has been allotted spot #${spotNumber} in ${parkingLot}.`);
        setName('');
        setVehicleType('car');
        setVehicleNumber('');
        setSpotNumber(null);
        fetchAllocations();
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('An error occurred while submitting.');
    } finally {
      setLoading(false);
    }
  };

  // Helper to check if a spot is occupied in the current selected lot
  const isSpotOccupied = (num) => {
    return allocations.some(a => a.parkingLot === parkingLot && a.spotNumber === num);
  };
  
  // Get vehicle details of occupied spot
  const getOccupiedVehicleDetails = (num) => {
    const alloc = allocations.find(a => a.parkingLot === parkingLot && a.spotNumber === num);
    return alloc ? `${alloc.vehicleType} (${alloc.vehicleNumber || 'N/A'})` : null;
  };

  // Handle lot change
  const handleLotChange = (lot) => {
    setParkingLot(lot);
    setSpotNumber(null);
    setCheckoutSpot(null);
    setMessage('');
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!checkoutSpot) return;

    try {
      const res = await fetch(`/api/allocations?parkingLot=${parkingLot}&spotNumber=${checkoutSpot}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      
      if (data.success) {
        setMessage(`Vehicle successfully checked out from Spot #${checkoutSpot} in ${parkingLot}.`);
        setCheckoutSpot(null);
        fetchAllocations();
      } else {
        setMessage(data.error || 'Failed to checkout vehicle.');
      }
    } catch (err) {
      setMessage('An error occurred while checking out.');
    }
  };

  // Generate an array of spot numbers 1 to totalSpots
  const spots = Array.from({ length: totalSpots }, (_, i) => i + 1);

  const handleSpotClick = (num, occupied) => {
    setMessage('');
    if (!occupied) {
      setSpotNumber(num);
      setCheckoutSpot(null);
    } else {
      setCheckoutSpot(num);
      setSpotNumber(null);
    }
  };

  return (
    <div className="container flex-grow">
        {/* Form Section */}
        <div className="glass-panel" style={{ animationDelay: '0s' }}>
          {checkoutSpot ? (
            <CheckoutCard 
              checkoutSpot={checkoutSpot}
              parkingLot={parkingLot}
              getOccupiedVehicleDetails={getOccupiedVehicleDetails}
              handleCheckout={handleCheckout}
              onCancel={() => setCheckoutSpot(null)}
            />
          ) : (
            <BookingForm 
              name={name} setName={setName}
              vehicleType={vehicleType} setVehicleType={setVehicleType}
              vehicleNumber={vehicleNumber} setVehicleNumber={setVehicleNumber}
              spotNumber={spotNumber} parkingLot={parkingLot}
              handleSubmit={handleSubmit} loading={loading}
            />
          )}

          {message && (
            <div className="message" style={{ borderColor: message.startsWith('Error') ? 'rgba(239, 68, 68, 0.4)' : '', background: message.startsWith('Error') ? 'rgba(239, 68, 68, 0.1)' : '', color: message.startsWith('Error') ? '#f87171' : ''}}>
              {message}
            </div>
          )}
        </div>

        {/* Visualizer Section */}
        <div className="glass-panel" style={{ animationDelay: '0.1s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 className="global-heading">Live Parking Map</h2>
            <div className="lot-tabs">
              {['lot1', 'lot2', 'lot3'].map(lot => (
                <button 
                  key={lot}
                  className={`tab-btn ${parkingLot === lot ? 'active' : ''}`}
                  onClick={() => handleLotChange(lot)}
                >
                  {lot.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <ParkingGrid 
            spots={spots}
            spotNumber={spotNumber}
            checkoutSpot={checkoutSpot}
            isSpotOccupied={isSpotOccupied}
            getOccupiedVehicleDetails={getOccupiedVehicleDetails}
            onSpotClick={handleSpotClick}
          />
          
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', marginTop: '1rem', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--spot-avail-bg)', border: '1px solid var(--spot-avail-border)' }}></div>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Available</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--spot-occ-bg)', border: '1px dashed var(--spot-occ-border)' }}></div>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Occupied</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)', border: '1px solid var(--accent-hover)' }}></div>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Selected</span>
            </div>
          </div>
        </div>
    </div>
  );
}
