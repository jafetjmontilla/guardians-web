import React from 'react';

export const TestFigure: React.FC = () => {
  const styles = `
    .luna {
    width: 250px;
      height: 250px;
      border-radius: 50%;
      background: radial-gradient(circle at 100% 50%, #d170db, transparent 50%);
      mask: radial-gradient(circle at -25% 50%, transparent, black 70%);
      -webkit-mask: radial-gradient(circle at -25% 50%, transparent, black 70%); /* Para WebKit */
    }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="luna bg-violet-600">Intento hacer una luna y nada</div>
    </>
  );
};

