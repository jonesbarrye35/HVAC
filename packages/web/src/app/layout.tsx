import './globals.css';
import { LayoutDashboard, Calendar, Users, ClipboardList, Package, Settings, LogOut, Wrench, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'HVAC Pro | Owner Dashboard',
    description: 'Manage your field services with ease.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="dashboard-container">
                    <aside className="sidebar">
                        <div className="sidebar-logo">
                            <Wrench size={32} className="text-secondary" />
                            <span>HVAC Pro</span>
                        </div>

                        <nav className="nav-links">
                            <Link href="/" className="nav-link active">
                                <LayoutDashboard size={20} />
                                Dashboard
                            </Link>
                            <Link href="/jobs" className="nav-link">
                                <Calendar size={20} />
                                Scheduling
                            </Link>
                            <Link href="/customers" className="nav-link">
                                <Users size={20} />
                                Customers
                            </Link>
                            <Link href="/invoices" className="nav-link">
                                <ClipboardList size={20} />
                                Invoices
                            </Link>
                            <Link href="/reporting" className="nav-link">
                                <TrendingUp size={20} />
                                Reporting
                            </Link>
                            <Link href="/inventory" className="nav-link">
                                <Package size={20} />
                                Inventory
                            </Link>
                        </nav>

                        <div style={{ marginTop: 'auto' }} className="nav-links">
                            <Link href="/settings" className="nav-link">
                                <Settings size={20} />
                                Settings
                            </Link>
                            <button className="nav-link" style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}>
                                <LogOut size={20} />
                                Log Out
                            </button>
                        </div>
                    </aside>

                    <main className="main-content">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
