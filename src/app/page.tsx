export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-grace-landing-100 text-white font-montserrat">
      <div className="text-white text-7xl font-normal font-montserrat flex items-center tracking-[16px]">
        <span>G</span>
        <span>R</span>
        {/* Custom A as /\ */}
        <span className="relative text-6xl font-medium">
          <span className="absolute right-[20px] top-0">/</span>
          <span className="absolute left-[24px] top-0">\</span>
          {/* Invisible placeholder for letter spacing */}
          <span className="opacity-0">A</span>
        </span>
        <span>C</span>
        <span>E</span>
      </div>

      <h2 className="text-xl font-light tracking-widest">
        food & coffee culture
      </h2>
      <p
        className="animate-pulse tracking-[16px] flex text-4xl my-16 relative w-[max-content] font-montserrat before:absolute before:inset-0 before:animate-typewriter
      before:bg-grace-landing-100 after:absolute after:inset-0 after:w-[0.1em] after:animate-caret after:bg-black"
      >
        Coming soon
      </p>
      <div className="space-x-4">
        <a
          href="contact"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Contact & Reservations
        </a>
        <a
          href="https://maps.app.goo.gl/Z39iUTBrLEFd4UE17"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700"
        >
          Find Us on Google Maps
        </a>
      </div>
      <div className="my-8">
        <p className="text-xl text-center">
          Mullingar Presbyterian Church, Old, 10 Castle St <br />
          Mullingar, Co. Westmeath, N91HN83
        </p>
      </div>
    </main>
  );
}
