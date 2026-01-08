"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function TattooPortfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null)
  const [currentCardImageIndex, setCurrentCardImageIndex] = useState<{ [key: number]: number }>({})
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0)

  const videos = [
    { id: 1, src: "/realismo_video.mp4", title: "Realismo" },
    { id: 2, src: "/mascara_video.mp4", title: "Máscara" },
    { id: 3, src: "/letter_video.mp4", title: "Lettering" },
  ]

  const handleCardImageChange = (itemId: number, direction: 'next' | 'prev') => {
    const item = portfolioItems.find(i => i.id === itemId)
    if (!item) return
    
    const currentIndex = currentCardImageIndex[itemId] || 0
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
    
    if (newIndex < 0) newIndex = item.images.length - 1
    if (newIndex >= item.images.length) newIndex = 0
    
    setCurrentCardImageIndex({ ...currentCardImageIndex, [itemId]: newIndex })
  }

  const handleVideoChange = (direction: 'next' | 'prev') => {
    let newIndex = direction === 'next' ? currentVideoIndex + 1 : currentVideoIndex - 1
    
    if (newIndex < 0) newIndex = videos.length - 1
    if (newIndex >= videos.length) newIndex = 0
    
    setCurrentVideoIndex(newIndex)
  }

  const portfolioItems = [
    {
      id: 1,
      title: "REALISMO FRAGMENTADO",
      description: "Técnica de realismo con fragmentación artística",
      badge: "NUEVO",
      images: ["/realismo_fragmentado.jpeg", "/realismo_fragmentado2.jpeg"],
    },
    {
      id: 2,
      title: "REALISMO MÁSCARA",
      description: "Expresión artística en realismo detallado",
      badge: "DESTACADO",
      images: ["/realismo_mascara.jpeg", "/realismo_mascara2.jpeg"],
    },
    {
      id: 3,
      title: "REALISMO ROSTRO",
      description: "Precisión y detalle en cada trazo",
      badge: "NUEVO",
      images: ["/realismo_rostro.jpeg", "/realismo_rostro2.jpeg"],
    },
    {
      id: 4,
      title: "LETTERING",
      description: "Arte tipográfico en tinta",
      badge: "DESTACADO",
      images: ["/letter.jpeg"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 531 213" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
              <path d="M41.5 1H0.5V211.5H41.5V1Z" fill="#ffffff"/>
              <path d="M193 1H152V211.5H193V1Z" fill="#ffffff"/>
              <path d="M349 1H309V211.5H349V1Z" fill="#ffffff"/>
              <path d="M440 55.5L408.5 1H362.312L416 96L440 55.5Z" fill="#ffffff"/>
              <path d="M358 212L478.5 0.5H524.5L404 212H358Z" fill="#ffffff"/>
              <path d="M484.544 211.5L447.5 147.337L470.228 107.971L530 211.5H484.544Z" fill="#ffffff"/>
              <path d="M256.5 143C257.7 127 246.667 120.667 241 119.5H197.5V78.5H241.5C269 70.5 256 42.5 241.5 42.5H197.5V1.5L241.5 1.50001C300 -1.5 317.5 86 271.5 100.5C292.3 104.1 296.167 133.833 295.5 143V212H256.5V143Z" fill="#ffffff"/>
              <path d="M46.5 119.5V78.5L90 79C111 69 103 42.5 88.5 42.5H46.5V2H90C148 2 159.5 84.5 113.5 99C157.5 112.5 158 201.5 90.5 211.5H46.5V170.5L90.5 171C111.5 161 104.5 119.5 90 119.5H46.5Z" fill="#ffffff"/>
            </svg>
          </Link>
          <nav className="flex gap-6">
            <a href="#portfolio" className="text-zinc-300 hover:text-orange-500 transition-colors font-bold">Portafolio</a>
            <a href="#artist" className="text-zinc-300 hover:text-orange-500 transition-colors font-bold">Artista</a>
            <a href="#contact" className="text-zinc-300 hover:text-orange-500 transition-colors font-bold">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 py-20 overflow-hidden bg-zinc-950 pt-32">
        {/* Diagonal orange accent stripe */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-br from-orange-600 to-orange-700 -skew-x-12 -ml-8" />

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="relative z-20">
              <div className="mb-8 space-y-2">
                <p className="text-sm font-mono tracking-widest text-orange-500 uppercase font-bold">
                  Arte en Tatuajes Personalizados
                </p>
              </div>

              <div className="mb-6 leading-none text-balance tracking-tight">
                <svg width="531" height="213" viewBox="0 0 531 213" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mb-4">
                  <path d="M41.5 1H0.5V211.5H41.5V1Z" fill="#ffffff"/>
                  <path d="M193 1H152V211.5H193V1Z" fill="#ffffff"/>
                  <path d="M349 1H309V211.5H349V1Z" fill="#ffffff"/>
                  <path d="M440 55.5L408.5 1H362.312L416 96L440 55.5Z" fill="#ffffff"/>
                  <path d="M358 212L478.5 0.5H524.5L404 212H358Z" fill="#ffffff"/>
                  <path d="M484.544 211.5L447.5 147.337L470.228 107.971L530 211.5H484.544Z" fill="#ffffff"/>
                  <path d="M256.5 143C257.7 127 246.667 120.667 241 119.5H197.5V78.5H241.5C269 70.5 256 42.5 241.5 42.5H197.5V1.5L241.5 1.50001C300 -1.5 317.5 86 271.5 100.5C292.3 104.1 296.167 133.833 295.5 143V212H256.5V143Z" fill="#ffffff"/>
                  <path d="M46.5 119.5V78.5L90 79C111 69 103 42.5 88.5 42.5H46.5V2H90C148 2 159.5 84.5 113.5 99C157.5 112.5 158 201.5 90.5 211.5H46.5V170.5L90.5 171C111.5 161 104.5 119.5 90 119.5H46.5Z" fill="#ffffff"/>
                </svg>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none text-balance tracking-tight">
                  TATTOO<span className="text-orange-600">®</span>
                </h1>
              </div>

              <p className="text-base md:text-lg text-zinc-300 mb-8 max-w-md leading-relaxed">
                Tatuajes únicos diseñados para vos. Nos especializamos en realismo, tradicional, dot work, puntillismo y
                black work. Cada pieza es creada con precisión y pasión.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-6 text-base rounded-none border-2 border-orange-600 transition-all flex items-center justify-center gap-2"
                  asChild
                >
                  <a href="https://wa.me/5491234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    CONTACTATE
                  </a>
                </Button>
              </div>

              <div className="flex gap-6 items-center">
                <a
                  href="https://instagram.com/brixtattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5491234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-12 text-sm text-zinc-400 font-mono space-y-1">
                <p className="font-bold">La Plata & Buenos Aires</p>
                <p>Lunes - Viernes</p>
                <p className="text-orange-500 font-bold">www.BrixTattoo.com</p>
              </div>
            </div>

            {/* Right side - Video carousel (desktop only) */}
            <div className="relative h-[600px] lg:h-[700px] hidden lg:flex items-center justify-center">
              <div className="relative w-full h-full bg-zinc-900 rounded-lg overflow-hidden group">
                <video
                  key={videos[currentVideoIndex].src}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                >
                  <source src={videos[currentVideoIndex].src} type="video/mp4" />
                </video>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950" />
                
                {/* Navigation arrows */}
                <button
                  onClick={() => handleVideoChange('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-10 bg-black/50 p-3 rounded-full hover:bg-black/80 opacity-0 group-hover:opacity-100"
                  aria-label="Video anterior"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={() => handleVideoChange('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-10 bg-black/50 p-3 rounded-full hover:bg-black/80 opacity-0 group-hover:opacity-100"
                  aria-label="Siguiente video"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                
                {/* Video title and counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {videos[currentVideoIndex].title} • {currentVideoIndex + 1} / {videos.length}
                </div>
              </div>
            </div>
          </div>

          {/* Video carousel (mobile - below content) */}
          <div className="relative w-full h-[300px] lg:hidden mt-12">
            <div className="relative w-full h-full bg-zinc-900 rounded-lg overflow-hidden group">
              <video
                key={videos[currentVideoIndex].src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              >
                <source src={videos[currentVideoIndex].src} type="video/mp4" />
              </video>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950" />
              
              {/* Navigation arrows */}
              <button
                onClick={() => handleVideoChange('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-10 bg-black/50 p-3 rounded-full hover:bg-black/80 lg:opacity-0 lg:group-hover:opacity-100"
                aria-label="Video anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={() => handleVideoChange('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-10 bg-black/50 p-3 rounded-full hover:bg-black/80 lg:opacity-0 lg:group-hover:opacity-100"
                aria-label="Siguiente video"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              {/* Video title and counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                {videos[currentVideoIndex].title} • {currentVideoIndex + 1} / {videos.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="portfolio" className="px-4 py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none text-balance">NUESTRO TRABAJO</h2>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
              Explorá nuestro portafolio de diseños personalizados y descubrí por qué los clientes confían en nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Card
                key={item.id}
                className="group relative overflow-hidden rounded-none border-2 border-black bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-900">
                  <Image
                    src={item.images[currentCardImageIndex[item.id] || 0] || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-none border-2 border-black">
                      {item.badge}
                    </span>
                  </div>
                  {item.images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <button 
                        onClick={(e) => {
                          e.preventDefault()
                          handleCardImageChange(item.id, 'prev')
                        }}
                        className="text-white hover:text-orange-500 transition-colors bg-black/50 p-2 rounded-full hover:bg-black/80"
                      >
                        <ChevronLeft className="w-8 h-8" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.preventDefault()
                          handleCardImageChange(item.id, 'next')
                        }}
                        className="text-white hover:text-orange-500 transition-colors bg-black/50 p-2 rounded-full hover:bg-black/80"
                      >
                        <ChevronRight className="w-8 h-8" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-2 leading-tight text-balance">{item.title}</h3>
                  <p className="text-zinc-600 mb-4 leading-relaxed">{item.description}</p>
                  <Button
                    onClick={() => {
                      setSelectedImage(item.images[0])
                      setSelectedImageIndex(0)
                      setSelectedItemId(item.id)
                    }}
                    variant="outline"
                    className="w-full bg-black text-white hover:bg-orange-600 hover:border-orange-600 font-bold rounded-none border-2 border-black transition-all"
                  >
                    VER TRABAJO
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About the Artist Section */}
      <section id="artist" className="px-4 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none text-balance">
                CONOCÉ AL
                <br />
                <span className="italic">ARTISTA</span>
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed text-lg">
                <p>
                  Con años de experiencia, Fabricio combina precisión técnica con visión creativa para dar vida a tus
                  ideas.
                </p>
                <p>
                  Cada pieza es única, cada sesión es personal y cada diseño es elaborado con meticulosa atención al
                  detalle.
                </p>
                <p>
                  Especializados en realismo, tradicional, dot work, puntillismo y black work. Transformamos tu cuerpo
                  en un lienzo de autoexpresión.
                </p>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] rounded-none overflow-hidden border-4 border-white">
              <Image
                src="/tattoo-studio-workspace.jpg"
                alt="Espacio de trabajo del estudio de tatuajes"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Studio Hours Section */}
      <section id="contact" className="px-4 py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none text-balance">HORARIOS DE ATENCIÓN</h2>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
              Visitanos en nuestro estudio o agendá tu consulta previa
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="text-center p-12 border-4 border-black rounded-none bg-black text-white mb-12">
              <div className="space-y-4 text-xl">
                <div className="flex justify-between items-center border-b border-zinc-700 pb-4">
                  <span className="font-black">LUNES - VIERNES</span>
                  <span className="text-orange-500 font-bold">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-black">SÁBADO</span>
                  <span className="text-orange-500 font-bold">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-12 py-6 text-lg rounded-none border-2 border-orange-600 transition-all flex items-center justify-center gap-2"
                asChild
              >
                <a href="https://wa.me/5491234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  AGENDAR CONSULTA
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-orange-600 hover:text-white text-black font-bold px-12 py-6 text-lg rounded-none border-2 border-black hover:border-orange-600 transition-all flex items-center justify-center gap-2"
                asChild
              >
                <a href="https://instagram.com/brixtattoo" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                  SEGUINOS EN IG
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-4 py-12 border-t-4 border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black mb-2">BRIX TATTOO</h3>
              <p className="text-zinc-400 text-sm font-mono">EST. 2020 • TINTA PERSONALIZADA</p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://instagram.com/brixtattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5491234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
            <p>&copy; 2026 Brix Tattoo. Todos los derechos reservados. • Cada tatuaje cuenta una historia.</p>
          </div>
        </div>
      </footer>

      {selectedImage && selectedItemId !== null && (() => {
        const currentItem = portfolioItems.find(item => item.id === selectedItemId)
        const hasMultipleImages = currentItem && currentItem.images.length > 1
        
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <Image src={selectedImage || "/placeholder.svg"} alt="Imagen ampliada" fill className="object-contain" />
              
              {hasMultipleImages && (
                <>
                  <button
                    className="absolute left-4 text-white hover:text-orange-500 transition-colors z-20 bg-black/50 p-2 rounded-full hover:bg-black/80"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (currentItem) {
                        const newIndex = selectedImageIndex === 0 ? currentItem.images.length - 1 : selectedImageIndex - 1
                        setSelectedImageIndex(newIndex)
                        setSelectedImage(currentItem.images[newIndex])
                      }
                    }}
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    className="absolute right-4 text-white hover:text-orange-500 transition-colors z-20 bg-black/50 p-2 rounded-full hover:bg-black/80"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (currentItem) {
                        const newIndex = selectedImageIndex === currentItem.images.length - 1 ? 0 : selectedImageIndex + 1
                        setSelectedImageIndex(newIndex)
                        setSelectedImage(currentItem.images[newIndex])
                      }
                    }}
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded">
                    {selectedImageIndex + 1} / {currentItem?.images.length}
                  </div>
                </>
              )}
            </div>
          </div>
        )
      })()}
    </div>
  )
}
