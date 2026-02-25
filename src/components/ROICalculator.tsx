"use client";

import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, BarChart3, Zap } from 'lucide-react';

export default function ROICalculator() {
    const [tcd, setTcd] = useState(5000);
    const [recovery, setRecovery] = useState(11.5);
    const [downtimeCost, setDowntimeCost] = useState(15000);

    const annualSavings = (downtimeCost * 48) + (tcd * 300 * 0.005 * 40); // Simple formula: Avoided downtime + Recovery efficiency

    return (
        <div className="glass-card" style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                <div style={{ background: 'rgba(0, 230, 118, 0.1)', padding: '8px', borderRadius: '10px', color: 'var(--success)' }}>
                    <Calculator size={20} />
                </div>
                <h2 style={{ fontSize: '18px', fontWeight: '700' }}>Maintenance ROI</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                    <label style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                        Mill Capacity (TCD)
                    </label>
                    <input
                        type="range" min="1000" max="15000" step="500" value={tcd}
                        onChange={(e) => setTcd(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--accent)' }}
                    />
                    <div style={{ textAlign: 'right', fontSize: '14px', fontWeight: '700', marginTop: '4px' }}>{tcd} TCD</div>
                </div>

                <div>
                    <label style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                        Downtime Cost ($/hr)
                    </label>
                    <input
                        type="number" value={downtimeCost}
                        onChange={(e) => setDowntimeCost(Number(e.target.value))}
                        style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--border)',
                            padding: '8px',
                            borderRadius: '8px',
                            color: 'white',
                            fontSize: '14px'
                        }}
                    />
                </div>

                <div style={{
                    marginTop: '10px',
                    padding: '20px',
                    background: 'linear-gradient(135deg, rgba(0, 230, 118, 0.1) 0%, transparent 100%)',
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 230, 118, 0.2)',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Projected Annual Savings
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <DollarSign size={24} /> {annualSavings.toLocaleString()}
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(0, 230, 118, 0.8)', marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                        <TrendingUp size={12} /> 22% Reduction in R&M Costs
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', fontSize: '10px', color: 'var(--text-secondary)' }}>
                <div style={{ flex: 1, padding: '8px', border: '1px solid var(--border)', borderRadius: '8px' }}>
                    <BarChart3 size={14} style={{ marginBottom: '4px', color: 'var(--accent)' }} />
                    Asset Life +15%
                </div>
                <div style={{ flex: 1, padding: '8px', border: '1px solid var(--border)', borderRadius: '8px' }}>
                    <Zap size={14} style={{ marginBottom: '4px', color: 'var(--warning)' }} />
                    Steam Efficiency +4%
                </div>
            </div>
        </div>
    );
}
