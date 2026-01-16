import { Package, AlertTriangle, RefreshCcw } from 'lucide-react';

export default function InventoryPage() {
    return (
        <div>
            <header className="header">
                <h1>Inventory & Truck Stock</h1>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <RefreshCcw size={20} /> Update Stock
                </button>
            </header>

            <div className="card">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', padding: '1rem', borderBottom: '1px solid var(--border)', fontWeight: 600, color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
                    <div>Item Name</div>
                    <div>Part Number</div>
                    <div>Location</div>
                    <div>In Stock</div>
                    <div>Unit Price</div>
                    <div>Status</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {[
                        { name: '45uF Run Capacitor', part: 'CAP-45-440', location: 'Truck 1 (Barry)', stock: 12, price: '$18.50', status: 'ok' },
                        { name: 'MERV 11 Filter (16x25x1)', part: 'FLT-16251', location: 'Warehouse', stock: 4, price: '$12.00', status: 'low' },
                        { name: 'Honeywell T6 Pro', part: 'TH6220U2000', location: 'Truck 2 (Sam)', stock: 2, price: '$85.00', status: 'critical' }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', padding: '1.25rem 1rem', borderBottom: '1px solid var(--border)', alignItems: 'center', fontSize: '0.9375rem' }}>
                            <div style={{ fontWeight: 600 }}>{item.name}</div>
                            <div style={{ color: 'var(--muted-foreground)' }}>{item.part}</div>
                            <div style={{ fontSize: '0.875rem' }}>{item.location}</div>
                            <div>{item.stock}</div>
                            <div>{item.price}</div>
                            <div>
                                {item.status !== 'ok' ? (
                                    <span style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.375rem',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: item.status === 'low' ? '#f59e0b' : '#ef4444'
                                    }}>
                                        <AlertTriangle size={14} /> {item.status.toUpperCase()}
                                    </span>
                                ) : (
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981' }}>GOOD</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
