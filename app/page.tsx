"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, MessageCircle, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function TattooPortfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const portfolioItems = [
    {
      id: 1,
      title: "LLEVA TU ARTE EN LA PIEL",
      description: "Diseños personalizados que cuentan tu historia",
      badge: "NUEVO",
      image: "/black-and-white-tattoo-sleeve-art.jpg",
    },
    {
      id: 2,
      title: "VISITA NUESTRO ESTUDIO",
      description: "Experimenta el arte en un entorno profesional",
      badge: "DESTACADO",
      image: "/tattoo-artist-studio.png",
    },
    {
      id: 3,
      title: "DISEÑOS ÚNICOS",
      description: "Arte único perfectamente ejecutado",
      badge: "NUEVO",
      image: "/unique-tattoo-design-detailed.jpg",
    },
    {
      id: 4,
      title: "LIBERA TU REBELDÍA",
      description: "Expresiones audaces con tinta",
      badge: "DESTACADO",
      image: "/rebellious-tattoo-art.jpg",
    },
    {
      id: 5,
      title: "OFERTA LIMITADA",
      description: "Reserva ahora y obtén 15% de descuento en tu primera sesión",
      badge: "NUEVO",
      image: "/tattoo-flash-sheet-designs.jpg",
    },
    {
      id: 6,
      title: "VEN CON UNA IDEA",
      description: "Vete con una obra maestra",
      badge: "DESTACADO",
      image: "/tattoo-artist-consultation.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 py-20 overflow-hidden bg-zinc-950">
        {/* Diagonal orange accent stripe */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-br from-orange-600 to-orange-700 -skew-x-12 -ml-8" />

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="relative z-20">
            <div className="mb-8 space-y-2">
              <p className="text-sm font-mono tracking-widest text-orange-500 uppercase font-bold">
                Arte en Tatuajes Personalizados
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none text-balance tracking-tight">
              BRIX
              <br />
              TATTOO<span className="text-orange-600">®</span>
            </h1>

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

          {/* Right side - Profile image with fade effect */}
          <div className="relative h-[600px] lg:h-[700px] hidden lg:block">
            {/* Profile image with gradient fade on sides */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/tattoo-artist-portrait-black-and-white.jpg"
                alt="Tattoo Artist"
                fill
                className="object-cover object-top grayscale"
                priority
              />
              {/* Gradient overlay to fade the sides */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            </div>

            {/* Decorative hand-drawn style icons */}
            <div className="absolute top-20 right-20 text-white opacity-80">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30 5L35 20L50 25L35 30L30 45L25 30L10 25L25 20L30 5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            <div className="absolute bottom-32 right-12 text-white opacity-80">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M40 15L40 25M40 55L40 65M15 40L25 40M55 40L65 40" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <div className="absolute top-1/2 left-8 text-white opacity-80">
              <svg width="50" height="70" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25 5C15 5 10 15 10 25C10 35 15 40 25 40C35 40 40 35 40 25C40 15 35 5 25 5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M15 45L35 45M20 50L30 50M22 55L28 55" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="px-4 py-20 bg-white text-black">
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
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-none border-2 border-black">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-2 leading-tight text-balance">{item.title}</h3>
                  <p className="text-zinc-600 mb-4 leading-relaxed">{item.description}</p>
                  <Button
                    onClick={() => setSelectedImage(item.image)}
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
      <section className="px-4 py-20 bg-black">
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
      <section className="px-4 py-20 bg-white text-black">
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

      {selectedImage && (
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
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage || "/placeholder.svg"} alt="Imagen ampliada" fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  )
}
