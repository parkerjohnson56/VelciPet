export default function Home() {
  return (
   
    <main className="bg-gray-50 font-sans">
     
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap flex-col sm:flex-row items-center sm:justify-between p-4">
          <a href="#top" className="mb-4 sm:mb-0">
            <img src="images/logo.png" alt="VelciPet Logo" className="h-12" />
          </a>
          <nav className="flex gap-4 mb-4 sm:mb-0">
            <a href="#about" className="text-gray-700 hover:text-blue-500">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-blue-500">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
          </nav>
          <a
            href="conversion.html"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto text-center"
          >
            Make an Appointment
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[url('/images/hero.jpg')] bg-cover bg-center bg-fixed h-[100vh] flex items-center justify-center text-center">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>

        {/* Content */}
        <div className="relative p-8 rounded">
          <h1 className="text-4xl font-bold text-white">
            Compassionate Care for Your Pets
          </h1>
          <p className="text-white mt-4">
            Where pets feel at home with personalized care and professional services.
          </p>
          <a
            href="conversion.html"
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded inline-block hover:bg-blue-600"
          >
            Make an Appointment
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pb-10">
          {/* Service 1 */}
          <div className="bg-white shadow-md rounded p-6 text-center">
            <img
              src="/images/services-1.png"
              alt="Preventative Care"
              className="h-25 w-30 rounded mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Preventative Care</h3>
            <p className="text-gray-600 mt-2">
              Keep your pets healthy with regular check-ups and vaccinations.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white shadow-md rounded p-6 text-center">
            <img
              src="/images/services-2.png"
              alt="Surgery"
              className="h-25 w-30 rounded mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Surgery</h3>
            <p className="text-gray-600 mt-2">
              Advanced surgical care for your beloved pets.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white shadow-md rounded p-6 text-center">
            <img
              src="/images/services-3.png"
              alt="Emergency Services"
              className="h-25 w-30 rounded mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Emergency Services</h3>
            <p className="text-gray-600 mt-2">
              We&#39;re here when you need us most, 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="bg-gray-100 p-8 pb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-md rounded p-6 text-center">
            <img
              src="/images/team-member1.png"
              alt="Dr. Jane Smith"
              className="h-24 w-24 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Dr. Jane Smith</h3>
            <p className="text-gray-600 mt-2">
              Senior Veterinarian with 15 years of experience specializing in preventative care
              and advanced surgical procedures.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white shadow-md rounded p-6 text-center">
            <img
              src="/images/team-member2.png"
              alt="Emily Johnson"
              className="h-24 w-24 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Emily Johnson</h3>
            <p className="text-gray-600 mt-2">
              Certified Veterinary Technician dedicated to assisting with surgeries and
              educating pet owners.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white shadow-md rounded p-6 text-center">
            <img
              src="/images/team-member3.png"
              alt="Sarah Martinez"
              className="h-24 w-24 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Sarah Martinez</h3>
            <p className="text-gray-600 mt-2">
              Client Service Coordinator ensuring every client feels welcomed and supported.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white p-8">
        <div className="container mx-auto text-center">
          <p>123 Pet Street, Anytown, USA | (555) 123-4567 | info@velcipet.com</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-400">Facebook</a>
            <a href="#" className="text-blue-400">Instagram</a>
          </div>
          <a
            href="conversion.html"
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded inline-block hover:bg-blue-600"
          >
            Make an Appointment
          </a>
        </div>
      </footer>
    </main>
  );
}
