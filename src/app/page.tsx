"use client";

import React from 'react';
import {
  BarChart,
  Settings,
  Users,
  LayoutDashboard,
  LogOut,
  ChevronDown,
  Bell,
  Search
} from 'lucide-react';
import ProcessFlow from '@/components/ProcessFlow';
import EquipmentCard from '@/components/EquipmentCard';
import AITriage from '@/components/AITriage';
import ROICalculator from '@/components/ROICalculator';

// Mock data generator for charts
const generateHistory = (base: number, variance: number) => {
  return Array.from({ length: 20 }, () => ({
    value: base + (Math.random() * variance - variance / 2)
  }));
};

const equipment = [
  {
    name: 'Shredder S-101',
    vibration: 2.4,
    temp: 58,
    power: 1200,
    rul: 45,
    status: 'active' as const,
    history: generateHistory(2, 0.5)
  },
  {
    name: 'Mill-1 Roller',
    vibration: 3.1,
    temp: 64,
    power: 850,
    rul: 22,
    status: 'active' as const,
    history: generateHistory(3, 1)
  },
  {
    name: 'Centrifuge B-02',
    vibration: 8.9,
    temp: 82,
    power: 450,
    rul: 2,
    status: 'critical' as const,
    history: [2, 3, 4, 6, 8, 9, 8.5].map(v => ({ value: v }))
  }
];

export default function Home() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        borderRight: '1px solid var(--border)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        background: 'rgba(255,255,255,0.01)',
        backdropFilter: 'blur(20px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'var(--accent)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px var(--accent-glow)'
          }}>
            <Settings color="black" size={24} />
          </div>
          <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.03em' }}>SugarNexus</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={BarChart} label="Analytics" />
          <NavItem icon={Users} label="Personnel" />
          <NavItem icon={Settings} label="Mill Config" />
        </nav>

        <div style={{ marginTop: 'auto' }}>
          <div style={{
            padding: '16px',
            background: 'var(--glass)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#444' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '600' }}>Admin User</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Shift Supervisor</div>
            </div>
            <ChevronDown size={14} color="var(--text-secondary)" />
          </div>
          <NavItem icon={LogOut} label="Emergency Stop" color="var(--error)" />
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, height: '100vh', overflowY: 'auto' }}>
        {/* Top Header */}
        <header style={{
          height: '80px',
          borderBottom: '1px solid var(--border)',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          background: 'rgba(10, 11, 16, 0.8)',
          backdropFilter: 'blur(10px)',
          zIndex: 10
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
            <Search size={18} />
            <span style={{ fontSize: '14px' }}>Search sensors, alerts, or equipment...</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ position: 'relative' }}>
              <Bell size={20} color="var(--text-secondary)" />
              <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: 'var(--error)', borderRadius: '50%' }} />
            </div>
            <button style={{
              background: 'var(--accent)',
              color: 'black',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
              Generate ROI Report
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-grid">
          {/* Section: Process Status */}
          <div style={{ gridColumn: 'span 12', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '-8px' }}>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '4px' }}>Mill Performance</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Real-time Zero-Touch operational flow</p>
            </div>
            <div style={{ color: 'var(--success)', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', background: 'var(--success)', borderRadius: '50%', boxShadow: '0 0 10px var(--success)' }} />
              System Online: 98.4% Efficiency
            </div>
          </div>

          <ProcessFlow />

          {/* Section: Critical Equipment */}
          <div style={{ gridColumn: 'span 12', marginTop: '12px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Health Monitoring</h2>
          </div>

          {equipment.map(e => (
            <EquipmentCard key={e.name} {...e} />
          ))}

          {/* Section: AI Intelligence & ROI */}
          <AITriage />
          <ROICalculator />

          {/* Footer filler */}
          <div style={{ gridColumn: 'span 12', height: '40px' }} />
        </div>
      </main>
    </div>
  );
}

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  color?: string;
}

function NavItem({ icon: Icon, label, active, color }: NavItemProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px',
      borderRadius: '12px',
      background: active ? 'var(--glass)' : 'transparent',
      color: active ? 'var(--accent)' : color || 'var(--text-secondary)',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: active ? '700' : '500',
      transition: 'var(--transition)'
    }}>
      <Icon size={20} />
      {label}
    </div>
  );
}
