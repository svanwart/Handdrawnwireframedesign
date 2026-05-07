import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WireframeBox } from "./WireframeBox";
import { SketchyBox } from "./SketchyBox";

interface CaseStudySheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudySheet({ isOpen, onClose }: CaseStudySheetProps) {
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
                    Community Education Platform
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">Nonprofit Educator Network</p>
                </SketchyBox>
              </div>

              {/* Hero Image */}
              <WireframeBox height="300px" label="project homepage screenshot" />

              {/* Overview */}
              <SketchyBox padding="p-6" className="space-y-3">
                <div className="text-base font-bold">Project Overview</div>
                <p className="text-base leading-relaxed">
                  A community-based education network needed a central platform where teachers could share
                  resources, coordinate workshops, and connect with families. The existing system was a
                  patchwork of Google Docs and email lists that made collaboration difficult and excluded
                  community members with limited tech access.
                </p>
              </SketchyBox>

              {/* What We Did */}
              <SketchyBox padding="p-6" className="space-y-4">
                <div className="text-base font-bold">What We Did</div>
                <ul className="space-y-3 text-base leading-relaxed">
                  <li>• Conducted user interviews with teachers, parents, and program coordinators</li>
                  <li>• Designed a simple, accessible resource library with clear categories and search</li>
                  <li>• Built custom Webflow components for event calendars and workshop registration</li>
                  <li>• Trained staff to manage content updates and troubleshoot common issues</li>
                  <li>• Set up basic analytics to track resource usage and identify gaps</li>
                </ul>
              </SketchyBox>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <WireframeBox height="200px" label="resource library view" />
                <WireframeBox height="200px" label="workshop calendar" />
              </div>

              {/* Results */}
              <SketchyBox padding="p-6" className="space-y-4">
                <div className="text-base font-bold">Impact</div>
                <div className="grid grid-cols-2 gap-4">
                  <SketchyBox variant="dashed" padding="p-4" className="space-y-2">
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-sm text-gray-600">Educators using the platform monthly</div>
                  </SketchyBox>
                  <SketchyBox variant="dashed" padding="p-4" className="space-y-2">
                    <div className="text-2xl font-bold">3x</div>
                    <div className="text-sm text-gray-600">Increase in workshop attendance</div>
                  </SketchyBox>
                </div>
                <p className="text-base leading-relaxed pt-2">
                  The network's coordinator now manages the site independently and regularly adds new resources
                  based on teacher requests. The platform has become the central hub for their community.
                </p>
              </SketchyBox>

              {/* Testimonial */}
              <SketchyBox padding="p-6" className="space-y-3">
                <div className="text-2xl text-gray-400">"</div>
                <p className="text-base leading-relaxed italic pl-4">
                  Tapestri didn't just build us a website—they helped us think through what we actually needed
                  and taught us how to keep it running. They made technology feel manageable instead of overwhelming.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <SketchyBox variant="dashed" padding="p-0" className="w-12 h-12 bg-gray-100 flex-shrink-0"></SketchyBox>
                  <div>
                    <div className="text-sm font-bold">Maria Santos</div>
                    <div className="text-xs text-gray-600">Program Coordinator</div>
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
