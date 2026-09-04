import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, Eye } from 'lucide-react';

export function ResumePreviewModal({ isOpen, onClose, resumes = [], resumeUrl }) {
  const effectiveResumes = resumes.length > 0 ? resumes : (resumeUrl ? [{ name: "Resume", url: resumeUrl }] : []);
  
  // Auto-select if there's only one resume
  const [selectedResume, setSelectedResume] = useState(effectiveResumes.length === 1 ? effectiveResumes[0] : null);

  // Reset selection when modal closes or opens
  React.useEffect(() => {
    if (isOpen) {
      setSelectedResume(effectiveResumes.length === 1 ? effectiveResumes[0] : null);
    }
  }, [isOpen, effectiveResumes.length]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            onClose();
            setSelectedResume(null);
          }}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#171514] border border-cream/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cream/10 bg-background/50">
            <h3 className="text-2xl font-sans font-bold text-cream tracking-tight">
              {selectedResume ? "Preview Resume" : "Select Resume"}
            </h3>
            <button 
              onClick={() => {
                onClose();
                setSelectedResume(null);
              }}
              className="p-2 text-cream/60 hover:text-terra transition-colors rounded-full hover:bg-cream/5"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-auto p-6 flex flex-col min-h-[400px]">
            {!selectedResume ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
                {effectiveResumes.map((resume) => (
                  <button
                    key={resume.name}
                    onClick={() => setSelectedResume(resume)}
                    className="flex flex-col items-center justify-center p-8 gap-4 rounded-xl border border-cream/10 bg-background/40 hover:bg-cream/5 hover:border-terra/50 transition-all group"
                  >
                    <div className="w-16 h-16 rounded-full bg-terra/10 flex items-center justify-center group-hover:bg-terra/20 transition-colors">
                      <FileText className="w-8 h-8 text-terra" />
                    </div>
                    <span className="font-sans font-medium text-cream text-lg text-center">{resume.name}</span>
                    <span className="text-cream/50 text-sm flex items-center gap-2 mt-2">
                      <Eye className="w-4 h-4" /> Click to preview
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-center justify-between">
                  {effectiveResumes.length > 1 ? (
                    <button 
                      onClick={() => setSelectedResume(null)}
                      className="text-cream/60 hover:text-cream text-sm font-mono flex items-center gap-2 transition-colors"
                    >
                      ← Back to options
                    </button>
                  ) : (
                    <div />
                  )}
                  <a
                    href={selectedResume.url}
                    download={`Bhargav_${selectedResume.name}.pdf`}
                    className="flex items-center gap-2 bg-terra hover:bg-terra/90 text-cream px-6 py-2.5 rounded-full font-mono text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(217,125,85,0.4)]"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
                
                <div className="w-full flex-1 min-h-[60vh] bg-background/80 rounded-xl border border-cream/10 overflow-hidden relative">
                  <iframe 
                    src={`${selectedResume.url}#toolbar=0&navpanes=0`} 
                    className="absolute inset-0 w-full h-full"
                    title={`${selectedResume.name} Preview`}
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
