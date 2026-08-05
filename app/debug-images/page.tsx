'use client';

import { useState, useEffect } from 'react';

const imagesToTest = [
  { name: 'Logo GR (original)', path: '/logoGr.png' },
  { name: 'Logo GR (optimizado PNG)', path: '/logo-gr.png' },
  { name: 'Logo GR (optimizado JPG)', path: '/logo-gr.jpg' },
  { name: 'Fondo Inicio', path: '/fondoinicio.png' },
  { name: 'Cruce Andes', path: '/cruceDeLosAndesInicio.png' },
  { name: 'Avión', path: '/avion.png' },
  { name: 'Los Molles', path: '/cabalgataLosMolles.jpg' },
  { name: '3 Valles', path: '/cabalgata3valles.jpg' },
  { name: 'Ruta del Cóndor', path: '/expertosinicio.png' },
  { name: 'Semana Santa', path: '/cabalgatasemanasanta.png' },
  { name: 'Transfer', path: '/transfer.jpeg' },
  { name: 'Galería', path: '/galeria.jpg' },
  { name: 'Los Molles 2', path: '/cabalgatalosmolles2.jpg' },
  { name: 'Avión Uruguayos', path: '/cabalgata-avion-uruguayos.jpg' },
];

export default function DebugImages() {
  const [imageStatus, setImageStatus] = useState<Record<string, 'loading' | 'success' | 'error'>>({});

  useEffect(() => {
    imagesToTest.forEach(image => {
      setImageStatus(prev => ({ ...prev, [image.path]: 'loading' }));
      
      const img = new Image();
      img.onload = () => {
        setImageStatus(prev => ({ ...prev, [image.path]: 'success' }));
      };
      img.onerror = () => {
        setImageStatus(prev => ({ ...prev, [image.path]: 'error' }));
      };
      img.src = image.path;
    });
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return '#10b981'; // verde
      case 'error': return '#ef4444'; // rojo
      default: return '#f59e0b'; // amarillo
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🔍 Debug de Imágenes - Vercel vs Local</h1>
      <p>Esta página verifica qué imágenes se cargan correctamente en producción.</p>
      
      <div style={{ marginBottom: '30px' }}>
        <h2>📊 Estado de las Imágenes:</h2>
        {imagesToTest.map(image => (
          <div key={image.path} style={{ 
            margin: '10px 0', 
            padding: '10px', 
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <strong>{image.name}</strong>
              <span style={{ 
                color: getStatusColor(imageStatus[image.path] || 'loading'),
                fontWeight: 'bold'
              }}>
                {imageStatus[image.path] || 'loading'} {
                  imageStatus[image.path] === 'success' ? '✅' :
                  imageStatus[image.path] === 'error' ? '❌' : '⏳'
                }
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
              Ruta: {image.path}
            </div>
            <img 
              src={image.path} 
              alt={image.name}
              style={{ 
                width: '200px', 
                height: '150px', 
                objectFit: 'cover',
                border: '2px solid ' + getStatusColor(imageStatus[image.path] || 'loading'),
                borderRadius: '4px'
              }}
              onLoad={() => setImageStatus(prev => ({ ...prev, [image.path]: 'success' }))}
              onError={() => setImageStatus(prev => ({ ...prev, [image.path]: 'error' }))}
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
        <h3>🛠️ Información del Entorno:</h3>
        <ul>
          <li><strong>URL actual:</strong> {typeof window !== 'undefined' ? window.location.href : 'SSR'}</li>
          <li><strong>User Agent:</strong> {typeof window !== 'undefined' ? navigator.userAgent : 'SSR'}</li>
          <li><strong>Timestamp:</strong> {new Date().toISOString()}</li>
        </ul>
      </div>
    </div>
  );
}