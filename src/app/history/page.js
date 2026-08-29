'use client';
import { useState, useEffect } from 'react';

export default function HistoryPage() {
  const [allocations, setAllocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await fetch('/api/allocations?filter=all');
      const data = await res.json();
      if (data.success) {
        setAllocations(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to permanently delete this record?')) return;
    try {
      const res = await fetch(`/api/allocations?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        fetchHistory();
      } else {
        alert(data.error || 'Failed to delete record.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred.');
    }
  };

  return (
    <div className="flex flex-col flex-grow w-full items-center py-10 px-6">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Parking History</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          View all active and past vehicle allocations.
        </p>

      <div className="glass-panel">
        {loading ? (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading history...</div>
        ) : allocations.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No parking history found.</div>
        ) : (
          <div className="history-table-container">
            <table className="history-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Vehicle</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                  <th style={{ textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allocations.map((item) => (
                  <tr key={item._id}>
                    <td style={{ fontWeight: 500 }}>{item.name}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ textTransform: 'capitalize' }}>{item.vehicleType}</span>
                        <span style={{ background: 'var(--border)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                          {item.vehicleNumber}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ textTransform: 'uppercase', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 600 }}>
                          {item.parkingLot}
                        </span>
                        <span>Spot #{item.spotNumber}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`history-status ${item.status}`}>
                        {item.status === 'active' ? 'Active' : 'Checked Out'}
                      </span>
                    </td>
                    <td>
                      {new Date(item.createdAt).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td>
                      {item.checkoutTime ? new Date(item.checkoutTime).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-'}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button 
                        onClick={() => handleDelete(item._id)}
                        style={{
                          background: 'rgba(239, 68, 68, 0.15)',
                          color: '#ef4444',
                          border: '1px solid rgba(239, 68, 68, 0.4)',
                          padding: '0.4rem 0.75rem',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          width: 'auto'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.25)' }}
                        onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)' }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
