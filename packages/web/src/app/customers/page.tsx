import { Search, UserPlus, Phone, Mail, MapPin } from 'lucide-react';

export default function CustomersPage() {
    return (
        <div>
            <header className="header">
                <h1>Customer Management</h1>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground)' }} />
                        <input
                            type="text"
                            placeholder="Search customers..."
                            style={{ padding: '0.625rem 1rem 0.625rem 2.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', width: '300px' }}
                        />
                    </div>
                    <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <UserPlus size={20} /> Add Customer
                    </button>
                </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {[
                    { name: 'John Doe', email: 'john@example.com', phone: '(555) 123-4567', address: '123 Oak St, Springfield', tags: ['Membership', 'HVAC'] },
                    { name: 'Sarah Miller', email: 'sarah@example.com', phone: '(555) 987-6543', address: '456 Maple Ln, Springfield', tags: ['Warranty'] },
                    { name: 'Acme Corp', email: 'info@acme.com', phone: '(555) 000-1111', address: 'Industrial Park #4', tags: ['Commercial', 'VIP'] }
                ].map((customer, i) => (
                    <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h3 style={{ fontSize: '1.125rem' }}>{customer.name}</h3>
                            <div style={{ display: 'flex', gap: '0.25rem' }}>
                                {customer.tags.map(tag => (
                                    <span key={tag} style={{ fontSize: '0.625rem', padding: '0.125rem 0.375rem', backgroundColor: 'var(--muted)', borderRadius: '0.25rem', fontWeight: 600 }}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Phone size={14} /> {customer.phone}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Mail size={14} /> {customer.email}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MapPin size={14} /> {customer.address}
                            </div>
                        </div>

                        <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                            <button style={{ flex: 1, backgroundColor: 'var(--muted)', color: 'var(--foreground)', fontSize: '0.75rem' }}>View History</button>
                            <button style={{ flex: 1, backgroundColor: 'var(--muted)', color: 'var(--foreground)', fontSize: '0.75rem' }}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
