"use client";

import React from 'react';
import {
    Activity,
    Thermometer,
    Zap,
    Clock,
    AlertTriangle,
    CheckCircle2
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface EquipmentCardProps {
    name: string;
    vibration: number;
    temp: number;
    power: number;
    rul: number;
    status: 'active' | 'warning' | 'critical';
    history: { value: number }[];
}

export default function EquipmentCard({
    name,
    vibration,
    temp,
    power,
    rul,
    status,
    history
}: EquipmentCardProps) {
    const getStatusColor = () => {
        if (status === 'critical') return 'var(--error)';
        if (status === 'warning') return 'var(--warning)';
        return 'var(--accent)';
    };

    const getStatusBg = () => {
        if (status === 'critical') return 'rgba(255, 62, 62, 0.1)';
        if (status === 'warning') return 'rgba(255, 171, 64, 0.1)';
        return 'rgba(0, 209, 255, 0.1)';
    };

    return (
        <div className="glass-card" style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>{name}</h3>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        background: getStatusBg(),
                        color: getStatusColor(),
                        border: `1px solid ${getStatusColor()}`
                    }}>
                        {status === 'active' ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
                        {status}
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Remaining Life</div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: rul < 10 ? 'var(--warning)' : 'var(--text-primary)' }}>
                        {rul} <span style={{ fontSize: '14px', fontWeight: '500' }}>Days</span>
                    </div>
                </div>
            </div>

            <div style={{ height: '60px', width: '100%', margin: '10px 0' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={history}>
                        <defs>
                            <linearGradient id={`gradient-${name}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={getStatusColor()} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={getStatusColor()} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke={getStatusColor()}
                            fillOpacity={1}
                            fill={`url(#gradient-${name})`}
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', marginBottom: '4px' }}>
                        <Activity size={12} /> Vibration
                    </div>
                    <div style={{ fontWeight: '700', fontSize: '16px' }}>{vibration} <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>mm/s</span></div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', marginBottom: '4px' }}>
                        <Thermometer size={12} /> Temp
                    </div>
                    <div style={{ fontWeight: '700', fontSize: '16px' }}>{temp}<span style={{ fontSize: '12px' }}>°C</span></div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', marginBottom: '4px' }}>
                        <Zap size={12} /> Power
                    </div>
                    <div style={{ fontWeight: '700', fontSize: '16px' }}>{power}<span style={{ fontSize: '12px' }}>kW</span></div>
                </div>
            </div>
        </div>
    );
}
