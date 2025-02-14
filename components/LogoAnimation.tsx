import Image from 'next/image';
import "../public/Logo Guardians Esports white.png"

export const Prueba = () => {
  return (
    <div className="portrait:w-[60vw] portrait:h-[60vw] portrait:bg-violet-300* landscape:w-[50vh] landscape:h-[50vh] landscape:bg-red-400* rounded-3xl">
      <Image width={2000} height={2000} alt='logo guardians esports' src={"/Logo Guardians Esports white.png"} className='text-white' />
    </div>
  );
};