import { Plus } from 'lucide-react';

export default function JobsPage() {
    return (
        <div>
            <header className="header">
                <h1>Work Orders & Scheduling</h1>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Plus size={20} /> New Work Order
                </button>
            </header>

            <div className="card">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '1rem', borderBottom: '1px solid var(--border)', fontWeight: 600, color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
                    <div>Customer</div>
                    <div>Location</div>
                    <div>Technician</div>
                    <div>Time Window</div>
                    <div>Status</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* Placeholder for real data mapping */}
                    {[
                        { customer: 'John Smith', location: '123 Oak St', tech: 'Barry Jones', time: '8:00 AM - 12:00 PM', status: 'en_route' },
                        { customer: 'Alice Cooper', location: '789 Pine Rd', tech: 'Unassigned', time: '1:00 PM - 5:00 PM', status: 'scheduled' }
                    ].map((job, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '1.25rem 1rem', borderBottom: '1px solid var(--border)', alignItems: 'center', fontSize: '0.9375rem' }}>
                            <div style={{ fontWeight: 600 }}>{job.customer}</div>
                            <div style={{ color: 'var(--muted-foreground)' }}>{job.location}</div>
                            <div>{job.tech}</div>
                            <div>{job.time}</div>
                            <div>
                                <span style={{
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    backgroundColor: `var(--status-${job.status.replace('_', '-')})`,
                                    color: 'white'
                                }}>
                                    {job.status.toUpperCase().replace('_', ' ')}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
