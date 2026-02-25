"use client";

import React from 'react';
import {
    BrainCircuit,
    AlertCircle,
    Info,
    ArrowRight,
    ShieldCheck
} from 'lucide-react';

const alerts = [
    {
        id: 1,
        type: 'critical',
        title: 'Centrifuge B Bearing Fatigue',
        description: 'AI detected anomalous vibration patterns (9.2mm/s). Estimated failure in 42 hours.',
        action: 'Schedule bearing replacement during next shift change.',
        saving: '$12,400'
    },
    {
        id: 2,
        type: 'warning',
        title: 'Evaporator Bank 3 Scaling',
        description: 'Heat Transfer Coefficient (HTC) dropped by 15%. Efficient boiling impacted.',
        action: 'Initiate CIP (Clean-In-Place) cycle in 12 hours.',
        saving: '$3,200'
    },
    {
        id: 3,
        type: 'info',
        title: 'Throughput Optimization',
        description: 'Feed rate auto-adjusted to +5% based on high sucrose density in current batch.',
        action: 'Balanced across all 4 mills.',
        saving: '$1,500'
    }
];

export default function AITriage() {
    return (
        <div className="glass-card" style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
                <div style={{ background: 'var(--accent-glow)', padding: '10px', borderRadius: '12px', color: 'var(--accent)' }}>
                    <BrainCircuit size={24} />
                </div>
                <div>
                    <h2 style={{ fontSize: '20px', fontWeight: '700' }}>SugarNexus AI Triage</h2>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Autonomous monitoring & predictive alerts</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: `1px solid ${alert.type === 'critical' ? 'var(--error)' : alert.type === 'warning' ? 'var(--warning)' : 'var(--border)'}`,
                            borderRadius: '12px',
                            padding: '16px',
                            display: 'flex',
                            gap: '16px',
                            transition: 'var(--transition)',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ color: alert.type === 'critical' ? 'var(--error)' : alert.type === 'warning' ? 'var(--warning)' : 'var(--accent)' }}>
                            {alert.type === 'critical' ? <AlertCircle size={20} /> : alert.type === 'warning' ? <ShieldCheck size={20} /> : <Info size={20} />}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                <h4 style={{ fontWeight: '600', fontSize: '15px' }}>{alert.title}</h4>
                                <div style={{ color: 'var(--success)', fontSize: '12px', fontWeight: '700' }}>
                                    Potential Saving: {alert.saving}
                                </div>
                            </div>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>{alert.description}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--accent)', fontWeight: '600' }}>
                                Recommendation: {alert.action} <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
