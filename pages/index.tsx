import '@vidstack/react/player/styles/base.css';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { isHLSProvider, MediaPlayer, MediaProvider, ScreenOrientationLockType, MediaCanPlayDetail, MediaCanPlayEvent, MediaProviderAdapter, MediaProviderChangeEvent } from '@vidstack/react';
import { Channel, channelsList } from "../utils/channels"

interface MyScreenOrientation extends ScreenOrientation {
  lock(orientation: ScreenOrientationLockType): Promise<void>;
}


const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const router = useRouter()
  const [showVideo, setShowVideo] = useState<boolean>(false)
  const [channel, setChannel] = useState<Channel>(channelsList[3])
  // let player = useRef<MediaPlayerInstance>(null);

  function onProviderChange(
    provider: MediaProviderAdapter | null,
    nativeEvent: MediaProviderChangeEvent,
  ) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  // // We can listen for the `can-play` event to be notified when the player is ready.
  function onCanPlay(detail: MediaCanPlayDetail, nativeEvent: MediaCanPlayEvent) {
    console.log(10001, detail)
    // ...
  }

  useEffect(() => {
    const handlePopstate = () => {
      console.log('El usuario presionó el botón de volver');
      alert("algo1")
      // Aquí puedes agregar la lógica que deseas ejecutar
    };
    const handleFull = (e: any) => {
      if (!document.fullscreenElement) {
        const video: HTMLVideoElement | null = document.querySelector("video")
        if (video) {
          video.muted = true
        }
        setChannel({ id: 0, title: "", logo: "", src: "" })
        setShowVideo(false)
      }
      // Aquí puedes agregar la lógica que deseas ejecutar
    };
    // Agrega el evento al cargar el componente
    window.addEventListener('popstate', handlePopstate);
    window.addEventListener('fullscreenchange', handleFull);
    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('popstate', handlePopstate);
      window.removeEventListener('fullscreenchange', handleFull);
    };
  }, []);

  const handleSwithOn = () => {
    //setChannel(channel.src)
    setTimeout(() => {
      setShowVideo(true)
      setChannel(channelsList[3])
      setTimeout(() => {
        const video: HTMLVideoElement | null = document.querySelector("video")
        const container: any | null = document.getElementById("mediaplayer")
        if (video) {
          console.log("-------------->", 544411)
          video.muted = false
          video.volume = 0.5
          console.log(video?.volume)
          if (container?.requestFullscreen) {
            container?.requestFullscreen({ navigationUI: "hide" });
            (screen.orientation as MyScreenOrientation).lock('landscape')
              .then()
              .catch((error: any) =>
                console.log(10004, error)
              )
          }
        }
      }, 100);
    }, 100)
    setTimeout(() => {
      setChannel(channelsList[11])
      const video: HTMLVideoElement | null = document.querySelector("video")
      setTimeout(() => {
        if (video) {
          video.muted = false
        }
      }, 100);
    }, 4000);
  }

  useEffect(() => {
    console.log("-------------->", { channel })
  }, [showVideo])


  return (
    <main className={`bg-black flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}    >
      <div onClick={handleSwithOn} className="w-10 h-10 bg-red-400">
        hola  mundo
      </div>
      <Image style={{ objectFit: 'cover' }} height={40} width={100} alt={channel.title} src={channel.logo} />
      <div className={`w-[400] bg-red`}>
        {/* <button className='w-10 h-4 bg-green-300 text-white' type='button' onClick={handleSwithOn}>sound</button> */}
        <div className=' w-[400px]'>
          <MediaPlayer
            id='mediaplayer'
            muted={true}
            autoPlay={true}
            className={`${!showVideo && "!hidden"} aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4`}
            // title="Sprite Fight"
            src={[{ src: channel.src }]}
            crossOrigin={true}
            playsInline={true}
          >
            <MediaProvider />

          </MediaPlayer>
        </div>
        <style>{`
      video::-webkit-media-controls {
        display: none;
      }
      video::-webkit-media-controls-start-playback-button {
        display: none;
      }
      video::-webkit-media-controls-overlay-play-button {
        display: none !important;
      }
      `}</style>
      </div>
    </main >
  )
}
