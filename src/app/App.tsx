import { useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { WireframeBox } from "./components/WireframeBox";
import { SketchyBox } from "./components/SketchyBox";
import { CaseStudySheet } from "./components/CaseStudySheet";

export default function App() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number>(0);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Patrick Hand, cursive' }}>
      {/* Header */}
      <header className="p-4 mb-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <SketchyBox padding="px-6 py-3">
            <span className="text-xl font-bold" style={{ fontFamily: 'Architects Daughter, cursive' }}>TAPESTRI</span>
          </SketchyBox>
          <nav className="hidden md:flex gap-6 text-sm">
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "How we work", href: "#how-we-work" },
              { label: "Contact", href: "#contact" }
            ].map((item) => (
              <a key={item.label} href={item.href}>
                <SketchyBox padding="px-4 py-2" className="hover:bg-gray-100 cursor-pointer">
                  {item.label}
                </SketchyBox>
              </a>
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl leading-none font-black" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  Websites and digital support for people-centered work
                </h1>
                <p className="text-2xl leading-relaxed">
                  Tapestri helps organizations build, improve, and maintain digital tools that are clear, accessible, and easy to manage.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Strategy · Design · Development · Training · Ongoing Support
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <SketchyBox padding="px-8 py-4" className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer">
                  Work with us
                </SketchyBox>
                <SketchyBox padding="px-8 py-4" className="bg-white hover:bg-gray-100 cursor-pointer">
                  See what we do
                </SketchyBox>
              </div>
            </div>
            <WireframeBox height="400px" label="collaborative workspace illustration" />
          </div>
        </div>
      </section>

      {/* Short Intro Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <SketchyBox padding="p-8 md:p-12">
            <h2 className="text-4xl font-black text-center mb-6" style={{ fontFamily: 'Architects Daughter, cursive' }}>
              Thoughtfully woven digital support
            </h2>
            <p className="text-xl leading-relaxed text-center">
              Good technology is woven from many kinds of knowledge: strategy, design, development, communication, training, and care. Tapestri brings those threads together to create digital tools that are practical, accessible, and sustainable.
            </p>
          </SketchyBox>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-black mb-3" style={{ fontFamily: 'Architects Daughter, cursive' }}>
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different threads of digital support, brought together in one place.
            </p>
          </div>

          {/* Connecting thread visual */}
          <div className="relative mt-16">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <filter id="thread-sketchy">
                  <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                </filter>
              </defs>
              {/* Winding thread path connecting services */}
              <path
                d="M 50 50 Q 150 80, 250 50 T 450 50 T 650 50 T 850 50 T 1050 50"
                stroke="#999"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8,4"
                filter="url(#thread-sketchy)"
                opacity="0.3"
              />
            </svg>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative" style={{ zIndex: 1 }}>
              {[
                {
                  title: "Strategy",
                  description: "We help clarify goals, audiences, structure, and priorities so digital work starts from a strong foundation."
                },
                {
                  title: "Design",
                  description: "We shape content and interfaces that are clear, approachable, and aligned with the people you serve."
                },
                {
                  title: "Development",
                  description: "We build and improve websites and digital tools that are functional, accessible, and maintainable."
                },
                {
                  title: "Training",
                  description: "We help teams feel confident updating and managing their own tools through practical, supportive training."
                },
                {
                  title: "Ongoing Support",
                  description: "We provide continued help with updates, troubleshooting, and improvements after launch."
                }
              ].map((service, idx) => (
                <SketchyBox key={idx} padding="p-6" className="space-y-4 hover:bg-gray-50 bg-white relative">
                  {/* Small thread connector dot */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full border-2 border-white" />

                  <h3 className="text-3xl font-black leading-snug" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                    {service.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {service.description}
                  </p>

                  {/* Subtle stitched bottom border */}
                  <div className="pt-4 mt-4 border-t-2 border-dashed border-gray-300" />
                </SketchyBox>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Work With Us Section */}
      <section id="how-we-work" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-3" style={{ fontFamily: 'Architects Daughter, cursive' }}>
              Ways to Work With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Defined Projects",
                description: "Website redesigns, new pages, CMS setup, accessibility improvements, analytics, or digital tools with a clear scope and timeline."
              },
              {
                title: "Launch & Cleanup Support",
                description: "QA, content cleanup, forms, accessibility checks, analytics setup, DNS support, and final launch troubleshooting."
              },
              {
                title: "Training & Handoff",
                description: "Practical support so your team can update content, manage your CMS, and feel confident maintaining the site."
              },
              {
                title: "Ongoing Support",
                description: "Small updates, troubleshooting, maintenance, analytics review, and continued improvements after launch."
              }
            ].map((item, idx) => (
              <SketchyBox key={idx} padding="p-6" className="space-y-3 hover:bg-white">
                <h3 className="text-3xl font-black" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </SketchyBox>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed text-center text-gray-700">
              Every engagement begins with a conversation about goals, scope, timeline, responsibilities, and budget, so the work is clear before it begins.
            </p>
          </div>
        </div>
      </section>

      {/* Why Tapestri Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <SketchyBox padding="p-6">
                <h2 className="text-3xl mb-4" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  Why Tapestri?
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Tapestri is a learning-centered technology collective. We bring together professional consulting, mentorship, collaborative problem-solving, and real-world project experience.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Our model grew from a community of women and early-career technologists building skills in design, data, and engineering while supporting real organizations with real digital needs.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  When you work with us, you receive thoughtful, structured digital support, while also contributing to a more inclusive pathway into technology work.
                </p>
                <p className="text-lg leading-relaxed">
                  We are built around shared responsibility, clear communication, and practical outcomes: useful tools, stronger organizations, and technologists who grow through meaningful work.
                </p>
              </SketchyBox>
            </div>
            <WireframeBox height="350px" label="team collaboration photo" />
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-black mb-3" style={{ fontFamily: 'Architects Daughter, cursive' }}>
              Who We Serve
            </h2>
          </div>
          <SketchyBox padding="p-8">
            <p className="text-xl leading-relaxed text-center">
              We work with nonprofits, educators, community organizations, and small businesses that need practical
              technology support but may not have a full in-house web or data team. If you need a partner who can help
              clarify the problem, organize the work, and build something maintainable, we'd love to talk.
            </p>
          </SketchyBox>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-3" style={{ fontFamily: 'Architects Daughter, cursive' }}>
              Recent Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {[
              { client: "Childcare Network of Evanston", subtitle: "Website redesign for clarity and access" },
              { client: "The AUX", subtitle: "Community hub for healing and equity" },
              { client: "Embrace Your Crown", subtitle: "Digital presence for a beauty and wellness business" }
            ].map((project, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedCaseStudy(i);
                  setIsSheetOpen(true);
                }}
                className="text-left group h-full w-full"
              >
                <SketchyBox padding="p-6" className="space-y-4 hover:bg-gray-50 h-full flex flex-col">
                  <WireframeBox height="250px" label={`${project.client} screenshot`} />
                  <div className="space-y-2 flex-grow">
                    <h3 className="text-2xl font-black" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                      {project.client}
                    </h3>
                    <p className="text-base text-gray-600">
                      {project.subtitle}
                    </p>
                  </div>
                  <SketchyBox padding="px-6 py-3" className="hover:bg-gray-800 hover:text-white inline-block text-sm mt-6">
                    <div className="flex flex-row items-center gap-2">
                      <span>View case study</span>
                      <ArrowRight size={16} />
                    </div>
                  </SketchyBox>
                </SketchyBox>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <SketchyBox padding="p-6" className="inline-block mb-4">
              <h2 className="text-3xl" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                Let's Talk
              </h2>
            </SketchyBox>
          </div>
          <SketchyBox padding="p-8 md:p-12" className="space-y-6">
            <p className="text-xl leading-relaxed text-center">
              Tell us what your organization is trying to do, where you're stuck, and what kind of support would help.
            </p>
            <div className="flex justify-center">
              <SketchyBox padding="px-8 py-4" className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer">
                Start a conversation
              </SketchyBox>
            </div>
          </SketchyBox>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <SketchyBox padding="px-6 py-3" className="inline-block">
                <span className="text-xl font-bold" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  Tapestri
                </span>
              </SketchyBox>
              <p className="text-sm text-gray-600">
                A learning-centered technology collective supporting mission-driven organizations.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-sm font-bold">Navigate</div>
              <div className="space-y-2 text-sm text-gray-600">
                {["About", "Services", "How we work", "Who we serve", "Contact"].map(link => (
                  <div key={link} className="hover:underline cursor-pointer">{link}</div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-sm font-bold">Get in touch</div>
              <p className="text-sm text-gray-600">
                info@tapestri.tech
              </p>
              <p className="text-sm text-gray-600">
                We respond within 2 business days.
              </p>
            </div>
          </div>
          <div className="border-t-2 border-gray-300 mt-8 pt-8 text-center text-xs text-gray-500">
            © 2026 Tapestri Tech Collective · Built with care
          </div>
        </div>
      </footer>

      {/* Case Study Sheet */}
      <CaseStudySheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} caseStudyIndex={selectedCaseStudy} />
    </div>
  );
}