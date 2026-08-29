export default function BookingForm({
  name, setName,
  vehicleType, setVehicleType,
  vehicleNumber, setVehicleNumber,
  spotNumber, parkingLot,
  handleSubmit, loading
}) {
  return (
    <div className="card">
      <h2 className="global-heading">Book a Spot</h2>
      <form onSubmit={handleSubmit} className="form-layout">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="e.g. John Doe" 
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
          <label htmlFor="vehicle-number">Vehicle Number</label>
          <input 
            type="text" 
            id="vehicle-number" 
            placeholder="e.g. ABC 1234" 
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Selected Spot</label>
          <input 
            type="text" 
            value={spotNumber ? `Spot #${spotNumber}` : 'Please select a spot on the map'} 
            readOnly 
            className="read-only-input"
            required
          />
        </div>
        
        <button type="submit" className="submit-btn global-btn" disabled={!spotNumber || loading}>
          {loading ? 'Confirming...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  );
}
