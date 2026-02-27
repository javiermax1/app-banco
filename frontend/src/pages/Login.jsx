import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de autenticación
        navigate('/dashboard');
    };

    return (
        <div className="page-container">
            <div className="login-card">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input type="text" placeholder="Ej: javier_dev" />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="btn-primary">Entrar al Dashboard</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
