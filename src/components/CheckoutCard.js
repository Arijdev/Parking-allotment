export default function CheckoutCard({
  checkoutSpot, 
  parkingLot, 
  getOccupiedVehicleDetails, 
  handleCheckout, 
  onCancel
}) {
  return (
    <div className="card">
      <h2 className="global-heading">Checkout Vehicle</h2>
      <form onSubmit={handleCheckout} className="form-layout">
        <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>Spot:</strong> {checkoutSpot}</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Vehicle:</strong> {getOccupiedVehicleDetails(checkoutSpot)}</p>
          <p><strong>Lot:</strong> {parkingLot}</p>
        </div>
        <button type="submit" className="submit-btn global-btn" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)' }}>
          Confirm Checkout
        </button>
        <button 
          type="button" 
          className="submit-btn global-btn" 
          style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-primary)', marginTop: '0.75rem' }} 
          onClick={onCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
