import { useEffect, useState } from 'react';
import styles from './PolygonAnimation.module.css';

export const PolygonAnimation = () => {
  const [randomColor, setRandomColor] = useState<string>()

  // console.log(Math.random())
  // console.log(Math.floor(Math.random() * 4))


  useEffect(() => {
    const colors = ['#2e6dfc', '#2dd383', '#2db2d3', '#97d32d'];
    const idx = Math.floor(Math.random() * colors.length)
    console.log(idx)
    const randomColor = colors[idx];
    setRandomColor(randomColor)
  }, [])

  return (
    <>
      <div className='w-[100vw] h-[100vh] truncate'>
        <div className={styles.container}>
          {randomColor && <div className={styles.polygon} />}
        </div>
      </div>
      <style jsx global>
        {`
          :root {
            --color-animation: ${randomColor};
          }
        `}
      </style>
    </>
  );
};


