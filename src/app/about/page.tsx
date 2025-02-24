import React from 'react';
import { Code2, Sparkles, Star, Rocket } from 'lucide-react';
import Image from 'next/image';

const PersonalHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D69F]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D69F]/10 rounded-full blur-[120px]" />

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - 3 columns */}
            <div className="lg:col-span-3 space-y-10">
              {/* Title Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 pr-6">
                <span className="bg-[#00D69F] rounded-full p-1">
                  <Code2 className="w-4 h-4 text-white" />
                </span>
                <span className="text-white/80 text-sm">Senior Developer</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-7xl font-bold">
                  <span className="text-white">Crafting</span>
                  <br />
                  <span className="text-[#00D69F]">
                    Digital Excellence
                  </span>
                </h1>
                <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
                  A passionate full-stack developer with expertise in creating
                  innovative web solutions and scalable applications that push
                  the boundaries of digital experiences.
                </p>
              </div>

              {/* Expertise Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00D69F]/50 transition-colors">
                  <Rocket className="w-8 h-8 text-[#00D69F] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Full Stack Development</h3>
                  <p className="text-gray-400">Creating seamless experiences from frontend to backend</p>
                </div>
                <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00D69F]/50 transition-colors">
                  <Star className="w-8 h-8 text-[#00D69F] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
                  <p className="text-gray-400">Crafting intuitive and engaging user interfaces</p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex items-center gap-6">
                <button className="group relative px-8 py-4 bg-[#00D69F] text-white rounded-full font-medium overflow-hidden hover:shadow-lg hover:shadow-[#00D69F]/20 transition-shadow">
                  <span className="flex items-center gap-2">
                    View Projects
                    <Sparkles className="w-4 h-4" />
                  </span>
                </button>
                <button className="px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/5 transition-colors">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right Content - 2 columns */}
            <div className="lg:col-span-2 relative">
              <div className="relative rounded-2xl overflow-hidden bg-[#00D69F] p-1">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/api/placeholder/600/800"
                    alt="Professional headshot"
                    className="w-full h-[700px] object-cover"
                    width={600}
                    height={800}

                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -left-12 bottom-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-3xl font-bold text-[#00D69F]">
                        8+
                      </p>
                      <p className="text-gray-400 mt-1">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#00D69F]">
                        100+
                      </p>
                      <p className="text-gray-400 mt-1">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalHeroSection;