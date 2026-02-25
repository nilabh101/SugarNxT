"use client";

import React from 'react';
import {
    Tractor,
    Settings,
    Droplets,
    Wind,
    Hexagon,
    RotateCw,
    Thermometer,
    Package,
    ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const stages = [
    { id: 'prep', name: 'Cane Prep', icon: Tractor, status: 'active' },
    { id: 'crush', name: 'Crushing', icon: Settings, status: 'active' },
    { id: 'clarify', name: 'Clarification', icon: Droplets, status: 'active' },
    { id: 'evap', name: 'Evaporation', icon: Wind, status: 'active' },
    { id: 'cryst', name: 'Crystallization', icon: Hexagon, status: 'active' },
    { id: 'centri', name: 'Centrifugation', icon: RotateCw, status: 'warning' },
    { id: 'dry', name: 'Drying', icon: Thermometer, status: 'active' },
    { id: 'bag', name: 'Bagging', icon: Package, status: 'active' },
];

export default function ProcessFlow() {
    return (
        <div className="glass-card" style={{ gridColumn: 'span 12', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: '1000px', padding: '10px 0' }}>
                {stages.map((stage, index) => (
                    <React.Fragment key={stage.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '12px',
                                position: 'relative',
                                flex: 1
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: stage.status === 'warning' ? 'rgba(255, 171, 64, 0.1)' : 'rgba(0, 209, 255, 0.1)',
                                border: `1px solid ${stage.status === 'warning' ? 'var(--warning)' : 'var(--accent)'}`,
                                boxShadow: stage.status === 'warning' ? '0 0 15px rgba(255, 171, 64, 0.2)' : '0 0 15px var(--accent-glow)',
                                color: stage.status === 'warning' ? 'var(--warning)' : 'var(--accent)',
                            }}>
                                <stage.icon size={24} />
                            </div>
                            <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', textAlign: 'center' }}>
                                {stage.name}
                            </span>

                            {stage.status === 'warning' && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-5px',
                                    right: '15px',
                                    width: '10px',
                                    height: '10px',
                                    background: 'var(--warning)',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 10px var(--warning)'
                                }} />
                            )}
                        </motion.div>

                        {index < stages.length - 1 && (
                            <div style={{ color: 'var(--border)', padding: '0 5px' }}>
                                <ChevronRight size={16} />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
