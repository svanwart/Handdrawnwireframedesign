import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WireframeBox } from "./WireframeBox";
import { SketchyBox } from "./SketchyBox";

interface CaseStudySheetProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudyIndex: number;
}

const caseStudies = [
  {
    client: "Childcare Network of Evanston",
    title: "Website Redesign for Clarity & Access",
    overview: "Childcare Network of Evanston needed a refreshed website that better reflected its mission: connecting young children and families with high-quality, equitable early childhood education, resources, and community support. The existing site contained valuable information, but the organization needed a clearer structure, a more modern and mobile-friendly design, and a simpler way for staff to update content over time.",
    challengeTitle: "The Challenge",
    challengeText: "CNE serves several audiences at once: families looking for early childhood programs and resources, educators seeking professional development, community members interested in events and giving opportunities, and staff who need to keep the website current. The redesign needed to make information easier to find while also giving CNE staff more control over day-to-day updates.",
    whatWeBuilt: [
      {
        subtitle: "A clearer path for families",
        description: "We created a step-by-step guide to help families understand how to access CNE's services—translating a complex process into an approachable sequence with links to relevant information."
      },
      {
        subtitle: "A more flexible CMS structure",
        description: "Key content was moved into Webflow's CMS so staff could update partner information, events, and resources without rebuilding pages manually."
      },
      {
        subtitle: "Reusable templates and components",
        description: "We used reusable design patterns to maintain consistency across the site and reduce visual drift as new content was added over time."
      }
    ],
    images: [
      { label: "family pathway guide" },
      { label: "partner directory page" }
    ],
    resultText: "The redesigned website gave CNE a clearer, more modern, and more maintainable web presence. The new structure helps visitors find information based on who they are and what they need. The Webflow CMS gives staff a more intuitive way to manage content and maintain consistency.",
    highlights: [
      "Reorganized navigation around CNE's primary audiences",
      "Created a clearer pathway for families seeking early childhood resources",
      "Built dynamic Webflow templates for easier content updates",
      "Moved partner information into a structured CMS",
      "Supported a more mobile-friendly and maintainable site experience"
    ],
    details: {
      platform: "Webflow",
      timeline: "6 months",
      team: "Developers, UX designers, researcher, brand designer, PM",
      services: "Website redesign, Webflow development, CMS architecture"
    }
  },
  {
    client: "The AUX",
    title: "Community Hub for Healing & Equity",
    overview: "The AUX is a commercial hub in Evanston dedicated to healing, wellness, and racial equity. The space brings together businesses led by members of historically marginalized groups across wellness, beauty, food, creative industries, and community care. Tapestri supported The AUX with a WordPress website redesign that helped communicate the organization's mission, showcase its tenants, support fundraising, and make the site easier to navigate and maintain.",
    challengeTitle: "The Challenge",
    challengeText: "The AUX needed a website that could do more than describe a physical space. It needed to tell the story of a community-centered project, introduce tenants, support an equity campaign, share news and press, and help visitors understand how to get involved. The project also required careful collaboration with the client to understand The AUX's goals, existing materials, audience needs, communication style, and visual identity.",
    whatWeBuilt: [
      {
        subtitle: "A clearer site structure",
        description: "We helped organize the site around the most important information visitors would need: who The AUX is, what it does, its story, tenant profiles, news, contact information, and equity-investor FAQs."
      },
      {
        subtitle: "Tenant profiles",
        description: "The team created tenant profile pages to showcase businesses and community partners such as The Aux Wellness Collective, The Laundry Cafe, Chicky's Kitchen Creations, Embrace Your Crown, and others."
      },
      {
        subtitle: "Fundraising and equity-campaign support",
        description: "We prioritized calls to invest or donate, added equity-campaign information, and incorporated fundraising features such as a timeline and thermometer-style progress indicator."
      },
      {
        subtitle: "A more organized news section",
        description: "The team restructured the news area to better showcase different types of updates, including press, featured stories, and general news."
      }
    ],
    images: [
      { label: "tenant directory page" },
      { label: "fundraising campaign section" }
    ],
    resultText: "The final website gave The AUX a more organized and expressive digital home. The site better communicates The AUX's identity as a hub for healing, wellness, culture, connection, and racial equity. It also gives visitors clearer paths to learn about tenants, explore events, read news, and understand opportunities to support the project.",
    highlights: [
      "Clarified site structure around mission, story, tenants, news, and contact pathways",
      "Created tenant profile pages to showcase businesses and partners",
      "Supported equity-campaign messaging with visible invest/donate pathways",
      "Added fundraising features such as timeline and progress indicators",
      "Reorganized news content into clearer categories",
      "Built and launched the site in WordPress with attention to security and backups"
    ],
    details: {
      platform: "WordPress",
      timeline: "Full SDLC process",
      team: "Developers, designers, project manager",
      services: "Website redesign, WordPress development, discovery, tenant profiles, fundraising support"
    }
  },
  {
    client: "Embrace Your Crown",
    title: "Beauty Salon Digital Presence",
    overview: "Embrace Your Crown is a beauty salon located at The AUX in Evanston. The salon offers hair, beauty, lash, brow, and beard care services, with a focus on helping clients refresh their style, express themselves, and 'own their royalty.' Tapestri supported Embrace Your Crown with a WordPress website that helped translate the salon's personality, services, and visual identity into a clear, welcoming digital presence.",
    challengeTitle: "The Challenge",
    challengeText: "Embrace Your Crown needed a website that could help new and returning clients quickly understand what the salon offers, learn about the owner, view service categories, browse photos, and get in touch or book an appointment. Because this was a small business with a strong personal brand, the website needed to feel polished without losing the warmth and individuality of the salon.",
    whatWeBuilt: [
      {
        subtitle: "A welcoming homepage",
        description: "The homepage introduces Embrace Your Crown with a strong, memorable message: 'Your Crown is HERE!' It positions the salon as an all-in-one destination for hair, beauty, and beard care, giving visitors a quick sense of the salon's services and personality."
      },
      {
        subtitle: "Organized service categories",
        description: "Services are organized into client-friendly categories such as Natural Vibes, Care for the Crown, Relax it Out, and Protective. These categories help visitors scan options and find what they need without reading through one long, overwhelming list."
      },
      {
        subtitle: "A stronger personal brand",
        description: "The site includes an About Tiffany section, giving the business a more personal, trust-building presence and helping visitors connect the salon experience to the person behind it."
      },
      {
        subtitle: "Gallery and visual storytelling",
        description: "The site includes a hair gallery with the heading 'Let the Crown be Placed,' giving prospective clients a visual sense of the salon's work and style."
      }
    ],
    images: [
      { label: "services page layout" },
      { label: "hair gallery section" }
    ],
    resultText: "The final website gives Embrace Your Crown a clear and professional digital home. Visitors can quickly understand the salon's services, browse categories and pricing, view a gallery, read testimonials, learn about Tiffany, and find ways to connect or book. The site reflects the salon's confidence-centered brand while making practical information easier to find.",
    highlights: [
      "Created a clear website structure for a small beauty business",
      "Organized services into easy-to-scan categories",
      "Highlighted the owner's story through an 'About Tiffany' page",
      "Added gallery and testimonial sections to build trust",
      "Simplified content for web visitors who skim",
      "Used client feedback to revise the site direction",
      "Built the site in WordPress for a maintainable small-business web presence"
    ],
    details: {
      platform: "WordPress",
      timeline: "Full SDLC process",
      team: "Developers, designers, project manager",
      services: "Website design, WordPress development, service organization, gallery support"
    }
  }
];

export function CaseStudySheet({ isOpen, onClose, caseStudyIndex }: CaseStudySheetProps) {
  const caseStudy = caseStudies[caseStudyIndex];
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 z-40"
          />

          {/* Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[80vw] bg-white z-50 overflow-y-auto"
            style={{ fontFamily: 'Patrick Hand, cursive' }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10"
            >
              <SketchyBox padding="p-2" className="bg-white hover:bg-gray-100 cursor-pointer">
                <X size={24} />
              </SketchyBox>
            </button>

            <div className="p-8 space-y-8">
              {/* Header */}
              <div className="space-y-4 pt-8">
                <SketchyBox variant="dashed" padding="p-2" className="inline-block">
                  <span className="text-xs text-gray-600">[Client logo]</span>
                </SketchyBox>
                <SketchyBox padding="p-4">
                  <h2 className="text-2xl" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                    {caseStudy.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">{caseStudy.client}</p>
                </SketchyBox>
              </div>

              {/* Hero Image */}
              <WireframeBox height="300px" label={`${caseStudy.client} homepage screenshot`} />

              {/* Overview */}
              <SketchyBox padding="p-6" className="space-y-3">
                <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  Project Overview
                </h3>
                <p className="text-base leading-relaxed">
                  {caseStudy.overview}
                </p>
              </SketchyBox>

              {/* The Challenge */}
              <SketchyBox padding="p-6" className="space-y-3">
                <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  {caseStudy.challengeTitle}
                </h3>
                <p className="text-base leading-relaxed">
                  {caseStudy.challengeText}
                </p>
              </SketchyBox>

              {/* What We Built */}
              <SketchyBox padding="p-6" className="space-y-4">
                <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  What We Built
                </h3>
                <div className="space-y-4">
                  {caseStudy.whatWeBuilt.map((item, idx) => (
                    <div key={idx}>
                      <div className="font-black text-2xl mb-2" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                        {item.subtitle}
                      </div>
                      <p className="text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SketchyBox>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                {caseStudy.images.map((img, idx) => (
                  <WireframeBox key={idx} height="200px" label={img.label} />
                ))}
              </div>

              {/* Results */}
              <SketchyBox padding="p-6" className="space-y-4">
                <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  The Result
                </h3>
                <p className="text-base leading-relaxed">
                  {caseStudy.resultText}
                </p>
                <div className="pt-4 space-y-2">
                  <div className="text-2xl font-black" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                    Project Highlights
                  </div>
                  <ul className="space-y-2 text-base leading-relaxed">
                    {caseStudy.highlights.map((highlight, idx) => (
                      <li key={idx}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
              </SketchyBox>

              {/* Project Details */}
              <SketchyBox padding="p-6" className="space-y-3">
                <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                  Project Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-black mb-1 text-lg" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                      Platform
                    </div>
                    <div className="text-gray-700">{caseStudy.details.platform}</div>
                  </div>
                  <div>
                    <div className="font-black mb-1 text-lg" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                      Timeline
                    </div>
                    <div className="text-gray-700">{caseStudy.details.timeline}</div>
                  </div>
                  <div>
                    <div className="font-black mb-1 text-lg" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                      Team
                    </div>
                    <div className="text-gray-700">{caseStudy.details.team}</div>
                  </div>
                  <div>
                    <div className="font-black mb-1 text-lg" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                      Services
                    </div>
                    <div className="text-gray-700">{caseStudy.details.services}</div>
                  </div>
                </div>
              </SketchyBox>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
