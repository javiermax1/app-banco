import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <div className="dashboard-content">
                <h1>Dashboard Principal</h1>
                <p>Bienvenido a tu panel de control bancario.</p>
                <div className="stats-grid">
                    <div className="stat-card">
                        <span>Saldo Total</span>
                        <h2>$15,000.00</h2>
                    </div>
                    <div className="stat-card">
                        <span>Último Ingreso</span>
                        <h2>+$1,200.00</h2>
                    </div>
                </div>
                <button onClick={() => navigate('/')} className="btn-secondary">
                    Cerrar Sesión (Ir a Login)
                </button>
            </div>
        </div>
    );
}

export default Dashboard;
