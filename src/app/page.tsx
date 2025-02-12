export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-grace-color-100 text-white font-montserrat px-4 md:px-8">
        {/* Logo GRACE */}
      <div className="flex justify-center mt-8 w-full max-w-4xl">
        <img
          src="/GFC.png"
          alt="Grace Food & Coffee Culture logo"
          className="w-48 md:w-72 lg:w-96 xl:w-[400px]"
        />
        </div>

        {/* Social Media QR Code */}
        <div className="flex flex-col items-center mt-8">
          <a href="https://www.instagram.com/gracefoodcoffeeculture" target="_blank" rel="noopener noreferrer">
            <img
              src="/qrcode.svg"
              alt="QR code for Grace Food & Coffee Culture"
              className="w-40 sm:w-48 md:w-56"
            />
          </a>
          <img src="/insta.png" alt="Instagram logo" className="w-8 h-8 mt-2" />
        </div>

      {/* Buttons - stacked on small screens, side by side on larger */}
      <div className="flex flex-col font-light sm:flex-row sm:space-x-16 space-y-4 sm:space-y-0 my-6 sm:my-8">
        <a
          href="contact"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-montserrat rounded-2xl hover:bg-white hover:text-black text-sm sm:text-base md:text-lg transition-colors duration-300"
        >
          Contact & Reservations
        </a>
        <a
          href="https://maps.app.goo.gl/pVvyjgYrWiWx4Xsk9"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-montserrat rounded-2xl hover:bg-white hover:text-black text-sm sm:text-base md:text-lg transition-colors duration-300"
        >
          Find Us on Google Maps
        </a>
      </div>

      {/* Address */}
      <div className="my-6 sm:my-8">
        <p className="text-center text-sm font-montserrat sm:text-lg md:text-xl">
          Old Presbyterian Church, 10 Castle St <br />
          Mullingar, Co. Westmeath, N91HN83
        </p>
      </div>
    </main>
  );
}
