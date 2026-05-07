import { useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { WireframeBox } from "./components/WireframeBox";
import { CaseStudySheet } from "./components/CaseStudySheet";
import { SketchyBox } from "./components/SketchyBox";

export default function App() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Patrick Hand, cursive' }}>
      {/* Header */}
      <header className="p-4 mb-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <SketchyBox padding="px-6 py-3">
            <span className="text-xl font-bold" style={{ fontFamily: 'Architects Daughter, cursive' }}>TAPESTRI</span>
          </SketchyBox>
          <nav className="hidden md:flex gap-6 text-sm">
            {["ABOUT", "SERVICES", "WORK", "CONTACT"].map((item) => (
              <SketchyBox key={item} padding="px-4 py-2" className="hover:bg-gray-100 cursor-pointer">
                {item}
              </SketchyBox>
            ))}
          </nav>
          <SketchyBox padding="p-2" className="md:hidden">
            <Menu size={24} />
          </SketchyBox>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SketchyBox padding="p-8">
                <h1 className="text-4xl md:text-5xl leading-tight" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  Strategic Websites for Organizations
                </h1>
              </SketchyBox>
              <SketchyBox variant="dashed" padding="p-6">
                <div className="space-y-3">
                  <div className="h-2 bg-gray-300 w-full rounded"></div>
                  <div className="h-2 bg-gray-300 w-11/12 rounded"></div>
                  <div className="h-2 bg-gray-300 w-10/12 rounded"></div>
                  <div className="text-xs text-gray-500 pt-2">[Subheading text]</div>
                </div>
              </SketchyBox>
              <div className="flex gap-4">
                <SketchyBox padding="px-8 py-4" className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer">
                  Get Started →
                </SketchyBox>
                <SketchyBox padding="px-8 py-4" className="bg-white hover:bg-gray-100 cursor-pointer">
                  View Work
                </SketchyBox>
              </div>
            </div>
            <WireframeBox height="400px" label="Hero Image / Illustration" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <WireframeBox height="400px" label="Team Photo" />
            <div className="space-y-6">
              <SketchyBox padding="p-4" className="inline-block">
                <span className="text-sm font-bold">About Us</span>
              </SketchyBox>
              <SketchyBox padding="p-8">
                <h2 className="text-3xl mb-4" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  Women-Owned Tech Collective
                </h2>
                <div className="space-y-2 pt-4">
                  <div className="h-2 bg-gray-300 w-full rounded"></div>
                  <div className="h-2 bg-gray-300 w-11/12 rounded"></div>
                  <div className="h-2 bg-gray-300 w-10/12 rounded"></div>
                  <div className="h-2 bg-gray-300 w-11/12 rounded"></div>
                  <div className="h-2 bg-gray-300 w-9/12 rounded"></div>
                </div>
              </SketchyBox>
              <SketchyBox variant="dashed" padding="p-6">
                <div className="text-xs text-gray-600">
                  [Born from technical training program]
                </div>
                <div className="space-y-2 mt-3">
                  <div className="h-2 bg-gray-300 w-10/12 rounded"></div>
                  <div className="h-2 bg-gray-300 w-11/12 rounded"></div>
                </div>
              </SketchyBox>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <SketchyBox padding="p-4" className="inline-block mb-6">
              <span className="text-sm font-bold">Services & Pricing</span>
            </SketchyBox>
            <SketchyBox padding="p-6" className="max-w-2xl mx-auto">
              <h2 className="text-3xl" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                What We Do
              </h2>
            </SketchyBox>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Content Organization", icon: "📋" },
              { title: "Strategic Design", icon: "🎨" },
              { title: "Web Development", icon: "💻" }
            ].map((service, idx) => (
              <SketchyBox key={idx} padding="p-8" className="space-y-4 hover:bg-gray-50">
                <SketchyBox variant="dashed" padding="p-0" className="w-16 h-16 flex items-center justify-center text-2xl">
                  {service.icon}
                </SketchyBox>
                <div className="text-xl font-bold" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  {service.title}
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 w-full rounded"></div>
                  <div className="h-2 bg-gray-300 w-11/12 rounded"></div>
                  <div className="h-2 bg-gray-300 w-10/12 rounded"></div>
                </div>
                <div className="pt-4">
                  <SketchyBox padding="p-3" className="text-sm">
                    From $$$
                  </SketchyBox>
                </div>
                <SketchyBox padding="px-4 py-2" className="text-sm hover:bg-gray-800 hover:text-white cursor-pointer w-full flex items-center justify-center gap-2">
                  Learn More <ArrowRight size={16} />
                </SketchyBox>
              </SketchyBox>
            ))}
          </div>

          {/* Pricing Table */}
          <div className="mt-12">
            <SketchyBox padding="p-0" className="overflow-hidden">
              <div className="grid md:grid-cols-4">
                <div className="bg-gray-800 text-white p-4 text-sm font-bold">Package</div>
                <div className="bg-gray-800 text-white p-4 text-sm font-bold">Starter</div>
                <div className="bg-gray-800 text-white p-4 text-sm font-bold">Professional</div>
                <div className="bg-gray-800 text-white p-4 text-sm font-bold">Enterprise</div>
              </div>
              {["Feature 1", "Feature 2", "Feature 3", "Feature 4"].map((feature, idx) => (
                <div key={idx} className="grid md:grid-cols-4 border-t-2 border-gray-300">
                  <div className="p-4 text-sm bg-gray-50">{feature}</div>
                  <div className="p-4 text-center">✓</div>
                  <div className="p-4 text-center">✓</div>
                  <div className="p-4 text-center">✓</div>
                </div>
              ))}
            </SketchyBox>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <SketchyBox padding="p-4" className="inline-block mb-6">
              <span className="text-sm font-bold">Our Work</span>
            </SketchyBox>
            <SketchyBox padding="p-6" className="max-w-2xl mx-auto">
              <h2 className="text-3xl" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                Case Studies
              </h2>
            </SketchyBox>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setIsSheetOpen(true)}
                className="text-left group"
              >
                <SketchyBox padding="p-6" className="space-y-4 hover:bg-white">
                  <WireframeBox height="250px" label={`Project ${i} Thumbnail`} />
                  <div className="text-xl font-bold" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                    Project Title {i}
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-300 w-full rounded"></div>
                    <div className="h-2 bg-gray-300 w-10/12 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2 text-sm group-hover:underline">
                    View Case Study <ArrowRight size={16} />
                  </div>
                </SketchyBox>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <SketchyBox padding="px-6 py-3" className="inline-block">
                <span className="text-xl font-bold" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  TAPESTRI
                </span>
              </SketchyBox>
              <div className="text-xs text-gray-600">
                [Tagline / Contact Info]
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-sm font-bold">Links</div>
              <div className="space-y-2 text-sm text-gray-600">
                {["About", "Services", "Work", "Contact"].map(link => (
                  <div key={link} className="hover:underline cursor-pointer">{link}</div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-sm font-bold">Connect</div>
              <div className="space-y-2 text-sm text-gray-600">
                {["LinkedIn", "Twitter", "Instagram"].map(social => (
                  <div key={social} className="hover:underline cursor-pointer">{social}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-300 mt-8 pt-8 text-center text-xs text-gray-500">
            © 2026 Tapestri Tech Collective
          </div>
        </div>
      </footer>

      {/* Case Study Sheet */}
      <CaseStudySheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </div>
  );
}