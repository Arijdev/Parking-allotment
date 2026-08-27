'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [vehicleType, setVehicleType] = useState('car');
  const [parkingLot, setParkingLot] = useState('lot1');
  const [spotNumber, setSpotNumber] = useState(null);
  
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
        body: JSON.stringify({ name, vehicleType, parkingLot, spotNumber }),
      });
      const data = await res.json();
      
      if (data.success) {
        setMessage(`Hello ${name}, your ${vehicleType} has been allotted spot #${spotNumber} in ${parkingLot}.`);
        setName('');
        setVehicleType('car');
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
  
  // Get vehicle type of occupied spot
  const getOccupiedVehicleType = (num) => {
    const alloc = allocations.find(a => a.parkingLot === parkingLot && a.spotNumber === num);
    return alloc ? alloc.vehicleType : null;
  };

  // Handle lot change
  const handleLotChange = (lot) => {
    setParkingLot(lot);
    setSpotNumber(null); // Reset spot selection when changing lots
    setMessage('');
  };

  // Generate an array of spot numbers 1 to totalSpots
  const spots = Array.from({ length: totalSpots }, (_, i) => i + 1);

  const renderSpot = (num) => {
    const occupied = isSpotOccupied(num);
    const selected = spotNumber === num;
    const vehicle = getOccupiedVehicleType(num);
    
    let className = 'spot';
    if (selected) className += ' selected';
    else if (occupied) className += ' occupied';
    else className += ' available';

    return (
      <div 
        key={num} 
        className={className}
        onClick={() => !occupied && setSpotNumber(num)}
        title={occupied ? `Occupied by a ${vehicle}` : `Spot ${num} available`}
      >
        {num}
      </div>
    );
  };

  return (
    <div className="container" style={{ maxWidth: '1100px' }}>
      
      {/* Form Section */}
      <div className="glass-panel" style={{ animationDelay: '0s' }}>
        <h1>ParkSpace Allotment</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="vehicle-type">Vehicle Type</label>
            <select 
              id="vehicle-type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="bicycle">Bicycle</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Selected Spot</label>
            <input 
              type="text" 
              readOnly 
              value={spotNumber ? `Spot #${spotNumber} in ${parkingLot}` : 'None selected (Click map)'} 
              style={{ background: 'rgba(0,0,0,0.4)', color: spotNumber ? 'var(--text-primary)' : 'var(--text-secondary)' }}
            />
          </div>

          <button type="submit" disabled={loading || !spotNumber}>
            {loading ? 'Allocating...' : 'Allocate Parking Space'}
          </button>
        </form>

        {message && (
          <div className="message" style={{ borderColor: message.startsWith('Error') ? 'rgba(239, 68, 68, 0.4)' : '', background: message.startsWith('Error') ? 'rgba(239, 68, 68, 0.1)' : '', color: message.startsWith('Error') ? '#f87171' : ''}}>
            {message}
          </div>
        )}
      </div>

      {/* Visualizer Section */}
      <div className="glass-panel" style={{ animationDelay: '0.2s' }}>
        <h2>Parking Lot Map</h2>
        
        <div className="visualizer-container">
          <div className="lot-tabs">
            <button 
              type="button"
              className={`tab-btn ${parkingLot === 'lot1' ? 'active' : ''}`}
              onClick={() => handleLotChange('lot1')}
            >
              Lot 1 (Premium)
            </button>
            <button 
              type="button"
              className={`tab-btn ${parkingLot === 'lot2' ? 'active' : ''}`}
              onClick={() => handleLotChange('lot2')}
            >
              Lot 2 (Standard)
            </button>
            <button 
              type="button"
              className={`tab-btn ${parkingLot === 'lot3' ? 'active' : ''}`}
              onClick={() => handleLotChange('lot3')}
            >
              Lot 3 (Economy)
            </button>
          </div>

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
          
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', marginTop: '1rem', justifyContent: 'center' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#34d399' }}></div> Available
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f87171' }}></div> Occupied
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)' }}></div> Selected
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
