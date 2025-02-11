import { AnimatePresence, motion } from "framer-motion";
import { PolygonAnimation } from "@/components/PolygonAnimation";
import { Prueba } from "@/components/Prueba";


export default function Home() {

  return (
    <main className={`bg-black flex min-h-screen flex-col items-center justify-center vertical-content`}    >
      <PolygonAnimation />
      <AnimatePresence  >
        {true && <motion.div
          key={"1"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: true ? 1.8 : 0, duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className='absolute m-auto'
        >
          <Prueba />
        </motion.div>}
      </AnimatePresence>
    </main >
  )
}

//https://i.ibb.co/g69Zcf7/Logo-Guardians-Esports-black.png
//https://i.ibb.co/RYwPRkh/LOGO-CASCO-blanco.png
//https://i.ibb.co/wc6qf5p/Logo-Guardians-Esports-white-bg-black.png