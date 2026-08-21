export function AboutVideoSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden sm:min-h-[80vh]">
      {/* Hintergrund-Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-8BSLkbcYlJ8jZPJP8lC1j5KLvMbIEa.jpeg"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Team%20Bikeleasing-tlGfwJHSOX7vGINSVlujnbiz8Q9TFP.mov"
          type="video/mp4"
        />
      </video>

      {/* Abdunklung für Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#191340]/85 via-[#191340]/55 to-[#191340]/25" />

      {/* Inhalt */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">Ride Strong · Lead Bold</span>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-tight text-white text-balance sm:text-5xl lg:text-7xl">
            Mehr als Training —<br />
            eine Bewegung
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Wir bringen Frauen zusammen, fahren an unsere Grenzen und feiern die Momente danach. Coaching, das dich
            stärker macht — auf dem Rad und darüber hinaus.
          </p>
        </div>
      </div>
    </section>
  )
}
