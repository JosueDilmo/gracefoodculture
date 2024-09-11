export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-grace-landing-100 text-white font-montserrat px-4 md:px-8">
      {/* Logo GRACE */}
      <div className="text-white text-5xl sm:text-6xl md:text-7xl font-normal flex items-center tracking-[8px] sm:tracking-[12px] md:tracking-[16px]">
        <span>G</span>
        <span>R</span>
        {/* Custom A as /\ */}
        <span className="relative text-[36px] sm:text-[48px] md:text-[56px] font-medium mx-2">
          <span className="absolute right-[13.5px] sm:right-[16px] md:right-[22px] top-0">
            /
          </span>
          <span className="absolute left-[13.5px] sm:left-[16px] md:left-[22px] top-0">
            \
          </span>
          {/* Invisible placeholder for letter spacing */}
          <span className="opacity-0">A</span>
        </span>
        <span>C</span>
        <span>E</span>
      </div>

      {/* Subtitle */}
      <div className="sm:ml-0 md:-ml-2">
        <h2 className="text-base sm:text-xl md:text-2xl font-light tracking-[3.5px] mt-1">
          food & coffee culture
        </h2>
      </div>

      {/* Coming Soon */}
      <p
        className="animate-pulse tracking-[10px] sm:tracking-[12px] md:tracking-[16px] flex text-2xl sm:text-3xl md:text-4xl my-8 sm:my-12 md:my-16 relative w-[max-content] font-montserrat before:absolute before:inset-0 before:animate-typewriter
      before:bg-grace-landing-100 after:absolute after:inset-0 after:w-[0.1em] after:animate-caret after:bg-black"
      >
        Coming soon
      </p>

      {/* Buttons - stacked on small screens, side by side on larger */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 my-4 sm:my-8">
        <a
          href="contact"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-green-800 text-white rounded-md hover:bg-green-900 text-sm sm:text-base"
        >
          Contact & Reservations
        </a>
        <a
          href="https://maps.app.goo.gl/Z39iUTBrLEFd4UE17"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-green-800 text-white rounded-md hover:bg-green-900 text-sm sm:text-base"
        >
          Find Us on Google Maps
        </a>
      </div>

      {/* Address */}
      <div className="my-4 sm:my-8">
        <p className="text-sm sm:text-lg md:text-xl text-center">
          Old Presbyterian Church, 10 Castle St <br />
          Mullingar, Co. Westmeath, N91HN83
        </p>
      </div>
    </main>
  );
}
