'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [vehicleType, setVehicleType] = useState('car');
  const [parkingLot, setParkingLot] = useState('lot1');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [allocations, setAllocations] = useState([]);

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
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/allocations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, vehicleType, parkingLot }),
      });
      const data = await res.json();
      
      if (data.success) {
        setMessage(`Hello ${name}, your ${vehicleType} has been allotted parking in ${parkingLot}.`);
        setName('');
        setVehicleType('car');
        setParkingLot('lot1');
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

  return (
    <div className="container">
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
            <label htmlFor="parking-lot">Select Parking Lot</label>
            <select 
              id="parking-lot"
              value={parkingLot}
              onChange={(e) => setParkingLot(e.target.value)}
            >
              <option value="lot1">Parking Lot 1 (Premium)</option>
              <option value="lot2">Parking Lot 2 (Standard)</option>
              <option value="lot3">Parking Lot 3 (Economy)</option>
            </select>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Allocating...' : 'Allocate Parking'}
          </button>
        </form>

        {message && (
          <div className="message">
            {message}
          </div>
        )}
      </div>

      <div className="glass-panel" style={{ animationDelay: '0.2s' }}>
        <h2>Recent Allocations</h2>
        {allocations.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)' }}>No parking spaces allotted yet.</p>
        ) : (
          <div className="allocations-list">
            {allocations.map((alloc) => (
              <div key={alloc._id} className="allocation-item">
                <div className="item-header">
                  <span className="item-name">{alloc.name}</span>
                  <span className="item-date">{new Date(alloc.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="item-details">
                  <span className="tag">{alloc.vehicleType}</span>
                  <span className="tag lot">{alloc.parkingLot}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
