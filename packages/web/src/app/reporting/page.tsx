import { BarChart3, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function ReportingPage() {
    return (
        <div>
            <header className="header">
                <h1>Business Insights & Reporting</h1>
            </header>

            <div className="stats-grid">
                <div className="card stat-card">
                    <span className="stat-label">Total Revenue (30d)</span>
                    <span className="stat-value">$48,290</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#10b981', fontSize: '0.875rem' }}>
                        <ArrowUpRight size={16} /> 8.5%
                    </div>
                </div>
                <div className="card stat-card">
                    <span className="stat-label">Avg. Invoice Value</span>
                    <span className="stat-value">$645</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ef4444', fontSize: '0.875rem' }}>
                        <ArrowDownRight size={16} /> 2.1%
                    </div>
                </div>
                <div className="card stat-card">
                    <span className="stat-label">Close Rate (Estimates)</span>
                    <span className="stat-value">72%</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#10b981', fontSize: '0.875rem' }}>
                        <ArrowUpRight size={16} /> 4.2%
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.125rem' }}>Monthly Revenue</h3>
                        <BarChart3 size={20} color="var(--muted-foreground)" />
                    </div>
                    <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '12px', paddingBottom: '20px' }}>
                        {[40, 60, 45, 90, 75, 100].map((h, i) => (
                            <div key={i} style={{ flex: 1, backgroundColor: 'var(--secondary)', height: `${h}%`, borderRadius: '4px 4px 0 0', opacity: i === 5 ? 1 : 0.6 }}></div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--muted-foreground)', fontSize: '0.75rem' }}>
                        <span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span style={{ fontWeight: 700 }}>Jan</span>
                    </div>
                </div>

                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.125rem' }}>Job Distribution</h3>
                        <PieChart size={20} color="var(--muted-foreground)" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { label: 'Repair', value: '45%', color: '#3b82f6' },
                            { label: 'Maintenance', value: '35%', color: '#10b981' },
                            { label: 'Installation', value: '20%', color: '#f59e0b' }
                        ].map(item => (
                            <div key={item.label}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.875rem' }}>
                                    <span>{item.label}</span>
                                    <span style={{ fontWeight: 600 }}>{item.value}</span>
                                </div>
                                <div style={{ height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: item.value, backgroundColor: item.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
