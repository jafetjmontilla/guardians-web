import { BancoImagen, ImageComponets } from "@/components/ImageComponet"

function Home() {

  const bancoImagen: BancoImagen[] = [
    {
      categoria: "home",
      id: "0",
      label: "Leyenda uno",
      labelPosition: "bl",
      imageUrl: "https://media.revistagq.com/photos/646645b4c7bd305ac9c231f4/4:3/w_1920,c_limit/Mortal%20Kombat%201.png"
    }, {
      categoria: "home",
      id: "1",
      label: "Leyenda dos",
      labelPosition: "tr",
      imageUrl: "https://www.infobae.com/resizer/v2/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg?auth=4dbb84a1e5b92e9729f0a8939402342e9e18fbffffa9084efcc57a11d40a7e5d&smart=true&width=1200&height=675&quality=85"
    }, {
      categoria: "home",
      id: "2",
      label: "Leyenda tres",
      labelPosition: "br",
      imageUrl: "https://socialite360.com/wp-content/uploads/2023/11/Spiritual-Rift-Series-Clausura-2023-800x445.jpg"
    }, {
      categoria: "home",
      id: "3",
      label: "Leyenda cuatro",
      labelPosition: "bl",
      imageUrl: "https://media.diarioversionfinal.com/wp-content/uploads/2023/04/Guardians-scaled.jpg"
    }, {
      categoria: "home",
      id: "4",
      label: "Leyenda cinco",
      labelPosition: "bl",
      imageUrl: "https://scontent.fmrd1-1.fna.fbcdn.net/v/t39.30808-6/396732658_1122237812416699_31630091728762187_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bZQfnkeehQUQ7kNvgGcFhOW&_nc_zt=23&_nc_ht=scontent.fmrd1-1.fna&_nc_gid=AEArJMR0cqm-viC6tqa80nN&oh=00_AYAarstpyztswmjSn0o4fH8bFUV0kr6mgQFMpSq9JGpPbw&oe=67C6D2F9"
    }, {
      categoria: "home",
      id: "5",
      label: "Leyenda seis",
      labelPosition: "tr",
      imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1711128146"
    }, {
      categoria: "home",
      id: "6",
      label: "Leyenda siete",
      labelPosition: "tr",
      imageUrl: "https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/styles/imagen_noticia/public/field/image/mundial-lol-worlds-copa_0.jpg?itok=7daJomOw"
    },
  ]

  return (
    <div className="bg-black w-full grid lg:grid-cols-12 p-4 gap-4">
      <div className="md:col-span-7 grid lg:grid-cols-12 gap-4">
        <div className="lg:col-span-12 h-[calc(68vh-32px)]">
          <ImageComponets item={bancoImagen[0]} />
        </div>
        <div className="lg:col-span-6 h-[calc(32vh-16px)]">
          <ImageComponets item={bancoImagen[1]} />
        </div>
        <div className="lg:col-span-6 h-[calc(32vh-16px)]">
          <ImageComponets item={bancoImagen[2]} />
        </div>
      </div>
      <div className="lg:col-span-5 grid lg:grid-cols-12 gap-4">
        <div className="lg:col-span-12 h-[calc(40vh-32px)]">
          <ImageComponets item={bancoImagen[3]} />
        </div>
        <div className="lg:col-span-6 h-[calc(28vh-16px)]">
          <ImageComponets item={bancoImagen[4]} />
        </div>
        <div className="lg:col-span-6 h-[calc(28vh-16px)]">
          <ImageComponets item={bancoImagen[5]} />
        </div>
        <div className="lg:col-span-12 h-[calc(32vh-16px)]">
          <ImageComponets item={bancoImagen[6]} />
        </div>
      </div>
    </div>
  )
}

export default Home