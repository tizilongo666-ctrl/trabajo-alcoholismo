'use client';

import React, { useState } from 'react';

export default function Home() {
  const [contador, setContador] = useState(0);

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', color: '#1e293b' }}>
      <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#e11d48', margin: '0 0 8px 0' }}>
          Alcoholismo en la Adolescencia
        </h1>
        <p style={{ margin: 0, color: '#64748b' }}>
          Informe de salud pública, factores de riesgo y recursos oficiales (SEDRONAR).
        </p>
      </div>

      <section style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>Estado del Proyecto en Vercel</h2>
        <p style={{ lineHeight: '1.6' }}>
          ¡El sitio web se ha desplegado correctamente! Este es el punto de partida optimizado para visualizar el contenido interactivo y la estructura completa de salud pública directamente desde tu dispositivo móvil.
        </p>
        <div style={{ marginTop: '16px', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button 
            onClick={() => setContador(contador + 1)}
            style={{ background: '#e11d48', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Contador interactivo: {contador}
          </button>
        </div>
      </section>

      <section style={{ background: '#0f172a', color: 'white', padding: '24px', borderRadius: '12px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Línea de Asistencia Gratuita (Argentina)</h3>
        <p style={{ margin: '0 0 12px 0', color: '#94a3b8', fontSize: '14px' }}>
          SEDRONAR - Atención y contención las 24 horas.
        </p>
        <a href="tel:141" style={{ display: 'inline-block', background: '#e11d48', color: 'white', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
          Llamar al 141
        </a>
      </section>
    </main>
  );
}
