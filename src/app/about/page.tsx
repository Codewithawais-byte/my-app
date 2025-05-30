import Header from "@/components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-[#E5E5E5]">
      <Header />

      <main className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* About Me Section */}
          <section className="text-center mb-16 mt-12">
            <div className="inline-block border-4 border-black px-8 py-3 mb-8">
              <h1 className="text-2xl md:text-3xl mb-0 font-bold tracking-wider">
                ABOUT ME
              </h1>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
              Nullam rhoncus lorem nec fermentum condimentum. Nullam congue
              mollit vel sem varius lobortis. Sed egestas vel urna et pharetra.
              Sed elementum elit vel nunc eget blandit tellus cursus lobortis
              sed a elit.
            </p>

            <button className="mt-8 border border-gray-400 px-6 py-2 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-colors">
              EXPLORE
            </button>
          </section>

          {/* Decorative Divider */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-gray-400"></div>
              <div className="w-4 h-4 border border-gray-400 rotate-45"></div>
              <div className="w-4 h-4 border border-gray-400 rotate-45"></div>
              <div className="w-8 h-px bg-gray-400"></div>
            </div>
          </div>

          {/* Services Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Design */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold mb-4 tracking-wider">DESIGN</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                I can design like the layout of your needs and suggestions. I
                can also design like the form layouts and content including
                branding.
              </p>
            </div>

            {/* Development */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold mb-4 tracking-wider">
                DEVELOPMENT
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                I can develop like the layout of your needs and suggestions. I
                can also design like the form layouts and content including
                branding.
              </p>
            </div>
          </section>

          {/* Maintenance Section */}
          <section className="text-center mb-16">
            <h2 className="text-xl font-bold mb-4 tracking-wider">
              MAINTENANCE
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
              I can always look after your needs and suggestions. I can also
              design like the form layouts and content including branding.
            </p>
          </section>

          {/* Bottom Decorative Divider */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-gray-400"></div>
              <div className="w-4 h-4 border border-gray-400 rotate-45"></div>
              <div className="w-4 h-4 border border-gray-400 rotate-45"></div>
              <div className="w-8 h-px bg-gray-400"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
