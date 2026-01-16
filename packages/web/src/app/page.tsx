import { TrendingUp, Users, DollarSign, CheckCircle2 } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div>
            <header className="header">
                <h1>Dashboard Overview</h1>
                <button className="btn-primary">Add New Job</button>
            </header>

            <section className="stats-grid">
                <div className="card stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className="stat-label">Total Revenue (MTD)</span>
                        <DollarSign size={20} className="text-muted-foreground" />
                    </div>
                    <span className="stat-value">$12,450.00</span>
                    <span style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 600 }}>+12% from last month</span>
                </div>

                <div className="card stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className="stat-label">Active Jobs</span>
                        <TrendingUp size={20} className="text-muted-foreground" />
                    </div>
                    <span className="stat-value">8</span>
                    <span style={{ color: '#64748b', fontSize: '0.75rem' }}>3 technicians in field</span>
                </div>

                <div className="card stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className="stat-label">Jobs Completed</span>
                        <CheckCircle2 size={20} className="text-muted-foreground" />
                    </div>
                    <span className="stat-value">24</span>
                    <span style={{ color: '#64748b', fontSize: '0.75rem' }}>This week</span>
                </div>

                <div className="card stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className="stat-label">New Customers</span>
                        <Users size={20} className="text-muted-foreground" />
                    </div>
                    <span className="stat-value">5</span>
                    <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Last 7 days</span>
                </div>
            </section>

            <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <div className="card">
                    <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Today's Schedule</h2>
                    <div className="calendar-grid">
                        {/* Simple skeleton for schedule */}
                        {['Time', 'Job', 'Technician', 'Status'].map(h => (
                            <div key={h} className="calendar-header">{h}</div>
                        ))}
                        <div style={{ gridColumn: 'span 4', padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                            No jobs remaining for today.
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Recent Activity</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { type: 'Payment', desc: 'Received $450 from John Doe', time: '2h ago' },
                            { type: 'Job', desc: 'Marked "On Site" by Tech Barry', time: '3h ago' },
                            { type: 'Invoice', desc: 'Sent to Jane Smith', time: '5h ago' }
                        ].map((activity, i) => (
                            <div key={i} style={{ borderLeft: '2px solid var(--secondary)', paddingLeft: '1rem' }}>
                                <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>{activity.desc}</p>
                                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{activity.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
