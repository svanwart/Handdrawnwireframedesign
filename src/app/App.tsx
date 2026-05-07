import { useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { WireframeBox } from "./components/WireframeBox";
import { SketchyBox } from "./components/SketchyBox";
import { CaseStudySheet } from "./components/CaseStudySheet";

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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SketchyBox padding="p-8">
                <h1 className="text-4xl md:text-5xl leading-tight" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  Technology support woven with care.
                </h1>
              </SketchyBox>
              <SketchyBox variant="dashed" padding="p-6">
                <p className="text-lg leading-relaxed">
                  Tapestri helps mission-driven organizations design, build, and maintain thoughtful digital tools.
                  We bring practical support, collaborative learning, and care to every project.
                </p>
              </SketchyBox>
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
            <p className="text-xl leading-relaxed text-center">
              Tapestri combines professional consulting, hands-on learning, and collaborative problem-solving.
              We support clients while creating real-world pathways for women and early-career technologists
              growing into design, data, and engineering work.
            </p>
          </SketchyBox>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <SketchyBox padding="p-6" className="max-w-2xl mx-auto">
              <h2 className="text-3xl" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                What We Do
              </h2>
            </SketchyBox>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Website Design & Development",
                description: "We design and build accessible, user-centered websites that help you reach the people you serve. Every site is built to grow with you."
              },
              {
                title: "Webflow Support",
                description: "From setup and design to training your team, we help you make the most of Webflow without needing to hire a full development team."
              },
              {
                title: "Training & Workshops",
                description: "We teach your staff practical skills like website editing, content strategy, and digital accessibility so you can manage your own tools with confidence."
              },
              {
                title: "Analytics & Digital Strategy",
                description: "We help you understand how people use your digital tools and make decisions based on real data, not guesswork."
              },
              {
                title: "Ongoing Maintenance",
                description: "Websites need care over time. We offer flexible support for updates, troubleshooting, monitoring, and small improvements as your needs change."
              }
            ].map((service, idx) => (
              <SketchyBox key={idx} padding="p-6" className="space-y-4 hover:bg-gray-50">
                <h3 className="text-lg font-bold leading-snug" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-700">
                  {service.description}
                </p>
              </SketchyBox>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <SketchyBox padding="p-6" className="max-w-2xl mx-auto">
              <h2 className="text-3xl" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                How We Work
              </h2>
            </SketchyBox>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "1. Listen first",
                description: "We start by understanding your organization, your people, and what you're actually trying to accomplish."
              },
              {
                step: "2. Design for real people",
                description: "Every decision is grounded in who will use your tools and what they need to do. No jargon, no assumptions."
              },
              {
                step: "3. Build with care",
                description: "We write clean code, design accessible interfaces, and create systems that are built to last and easy to maintain."
              },
              {
                step: "4. Teach as we go",
                description: "We don't keep knowledge to ourselves. We explain our work, share what we know, and help your team grow more confident."
              },
              {
                step: "5. Define the work clearly",
                description: "We scope projects transparently, set realistic timelines, and communicate openly about what's possible within your budget."
              }
            ].map((item, idx) => (
              <SketchyBox key={idx} padding="p-6" className="space-y-3 hover:bg-white">
                <h3 className="text-lg font-bold" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  {item.step}
                </h3>
                <p className="text-base leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </SketchyBox>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tapestri Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SketchyBox padding="p-6">
                <h2 className="text-3xl mb-4" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  Why Tapestri
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  Tapestri is not a traditional agency. We're a learning-centered consulting collective where
                  early-career technologists work on real projects with structure, mentorship, and shared responsibility.
                </p>
                <p className="text-base leading-relaxed">
                  When you work with us, you receive thoughtful digital support while helping create more inclusive
                  pathways into technology. You get skilled, attentive service. We build capacity and community.
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
            <SketchyBox padding="p-6" className="inline-block">
              <h2 className="text-3xl" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                Who We Serve
              </h2>
            </SketchyBox>
          </div>
          <SketchyBox padding="p-8">
            <p className="text-lg leading-relaxed text-center">
              We work with nonprofits, community organizations, educators, small businesses, and mission-driven
              teams that need practical technology support. If you're doing work that matters and need a partner
              who understands that technology is just one part of making change happen, we'd love to talk.
            </p>
          </SketchyBox>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <SketchyBox padding="p-6" className="max-w-2xl mx-auto">
              <h2 className="text-3xl" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                Recent Projects
              </h2>
            </SketchyBox>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Community Education Platform", client: "Nonprofit Educator Network" },
              { title: "Accessible Resource Hub", client: "Community Health Collective" }
            ].map((project, i) => (
              <button
                key={i}
                onClick={() => setIsSheetOpen(true)}
                className="text-left group"
              >
                <SketchyBox padding="p-6" className="space-y-4 hover:bg-gray-50">
                  <WireframeBox height="250px" label={`${project.title} screenshot`} />
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">{project.client}</div>
                    <div className="text-xl font-bold" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                      {project.title}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm group-hover:underline">
                    View case study <ArrowRight size={16} />
                  </div>
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
            <p className="text-lg leading-relaxed text-center">
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
                hello@tapestri.tech
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
      <CaseStudySheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </div>
  );
}