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
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white z-50 overflow-y-auto"
            style={{ fontFamily: 'Patrick Hand, cursive' }}
          >
            {/* Close button */}
            <SketchyBox padding="p-2" className="absolute top-4 right-4 bg-white hover:bg-gray-100 cursor-pointer z-10">
              <X size={24} onClick={onClose} />
            </SketchyBox>

            <div className="p-8 space-y-8">
              {/* Header */}
              <div className="space-y-4 pt-8">
                <SketchyBox variant="dashed" padding="p-2" className="inline-block">
                  <span className="text-xs text-gray-600">[Client Logo]</span>
                </SketchyBox>
                <SketchyBox padding="p-4">
                  <h2 className="text-2xl" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                    Project Name
                  </h2>
                </SketchyBox>
              </div>

              {/* Hero Image */}
              <WireframeBox height="300px" label="Project Hero Image" />

              {/* Overview */}
              <SketchyBox padding="p-6" className="space-y-3">
                <div className="text-sm font-bold">Overview</div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 w-full rounded"></div>
                  <div className="h-2 bg-gray-300 w-11/12 rounded"></div>
                  <div className="h-2 bg-gray-300 w-10/12 rounded"></div>
                  <div className="h-2 bg-gray-300 w-9/12 rounded"></div>
                </div>
              </SketchyBox>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-2 gap-4">
                <SketchyBox padding="p-4" className="space-y-2">
                  <div className="text-xs font-bold">Challenge</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-300 w-full rounded"></div>
                    <div className="h-2 bg-gray-300 w-10/12 rounded"></div>
                    <div className="h-2 bg-gray-300 w-11/12 rounded"></div>
                  </div>
                </SketchyBox>
                <SketchyBox padding="p-4" className="space-y-2">
                  <div className="text-xs font-bold">Solution</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-300 w-full rounded"></div>
                    <div className="h-2 bg-gray-300 w-10/12 rounded"></div>
                    <div className="h-2 bg-gray-300 w-11/12 rounded"></div>
                  </div>
                </SketchyBox>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <WireframeBox height="200px" label="Screenshot 1" />
                <WireframeBox height="200px" label="Screenshot 2" />
              </div>

              {/* Results */}
              <SketchyBox padding="p-6" className="space-y-4">
                <div className="text-sm font-bold">Results & Impact</div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <SketchyBox key={i} variant="dashed" padding="p-4" className="text-center">
                      <div className="text-3xl text-gray-600">##%</div>
                      <div className="text-xs text-gray-500 mt-2">Metric {i}</div>
                    </SketchyBox>
                  ))}
                </div>
              </SketchyBox>

              {/* Testimonial */}
              <SketchyBox padding="p-6" className="space-y-3">
                <div className="text-xs text-gray-500">" "</div>
                <div className="space-y-2 pl-4">
                  <div className="h-2 bg-gray-300 w-full rounded"></div>
                  <div className="h-2 bg-gray-300 w-11/12 rounded"></div>
                  <div className="h-2 bg-gray-300 w-10/12 rounded"></div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <SketchyBox variant="dashed" padding="p-0" className="w-12 h-12 bg-gray-100"></SketchyBox>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-400 w-32 rounded"></div>
                    <div className="h-2 bg-gray-300 w-24 rounded"></div>
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
