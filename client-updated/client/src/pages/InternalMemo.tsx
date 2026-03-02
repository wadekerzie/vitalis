import { useState } from "react";
import { motion } from "framer-motion";

// Internal document — not linked from public-facing pages
// Audience: Hap & Jojo only
// Tone: Direct, professional, unambiguous

export default function InternalMemo() {
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleUnlock = () => {
    if (pin === "vitalis2026") {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
        <div className="w-full max-w-sm text-center">
          <div className="mb-8">
            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <p className="text-zinc-500 text-sm tracking-widest uppercase">Internal Document</p>
            <p className="text-zinc-600 text-xs mt-1">Kerzie AI — Restricted Access</p>
          </div>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
            placeholder="Access code"
            className="w-full bg-zinc-900 border border-zinc-700 text-zinc-200 rounded px-4 py-3 text-sm text-center tracking-widest focus:outline-none focus:border-zinc-500 placeholder:text-zinc-600"
          />
          {error && <p className="text-red-500 text-xs mt-2">Incorrect access code.</p>}
          <button
            onClick={handleUnlock}
            className="mt-3 w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm py-3 rounded transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-zinc-200 font-sans">
      {/* Header */}
      <div className="border-b border-zinc-800 px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-xs text-zinc-500 tracking-widest uppercase">Kerzie AI — Internal Correspondence</p>
          <p className="text-xs text-zinc-600 mt-0.5">Not for distribution · Confidential</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-500">March 2026</p>
          <p className="text-xs text-zinc-600">To: Hap & Jojo · From: Wade Kerzie</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-16">

        {/* Subject */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-zinc-500 text-xs tracking-widest uppercase mb-3">Re:</p>
          <h1 className="text-3xl font-bold text-white leading-tight">
            Where We Stand, What Comes Next,<br />and What It Costs to Move Forward
          </h1>
          <div className="mt-4 h-px bg-zinc-800" />
        </motion.div>

        {/* Section 1 — What's already been done */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xs text-zinc-500 tracking-widest uppercase mb-4">01 — Work Already Delivered</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Everything you have seen to this point — the market viability study, the Dallas competitive analysis, the franchise platform architecture, the Vitalis Score biomarker protocol, the wearable integration strategy, the physician dashboard specification, the HIPAA compliance framework, the two-path investor business plan, and the full proforma financial model — was produced by Kerzie AI as <span className="text-white font-semibold">pre-engagement sweat equity</span>.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            This work was done to validate the concept, demonstrate the depth of expertise required to execute it, and give you and your investors a credible, investor-grade foundation to take to the table. It was not billed. It was not invoiced. It was a professional contribution made in good faith to help determine whether this opportunity is worth pursuing together.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            To be direct: the body of work already delivered would represent a significant consulting engagement at market rates. It has been provided at no cost as a demonstration of capability and commitment to the Vitalis vision. That phase is now complete.
          </p>
        </motion.section>

        {/* Divider */}
        <div className="h-px bg-zinc-800 mb-12" />

        {/* Section 2 — The gate */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xs text-zinc-500 tracking-widest uppercase mb-4">02 — The Gate</h2>
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 mb-6">
            <p className="text-white font-semibold text-lg leading-snug">
              No further strategic, architectural, or technical work will be performed without a signed agreement and payment on account.
            </p>
          </div>
          <p className="text-zinc-300 leading-relaxed mb-4">
            This is not a negotiating position. It is a professional boundary that protects both parties. Kerzie AI is not a speculative partner in the Vitalis venture — it is the technical architect and AI operations provider. Those are professional services, and they are priced accordingly.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            The next step is a <span className="text-white font-semibold">Phase 0 Strategic Architecture Engagement</span> — a paid, scoped, time-bound engagement that produces the complete technical blueprint for everything that follows. It is the foundation on which the entire deployment is built. It does not happen on spec.
          </p>
        </motion.section>

        {/* Divider */}
        <div className="h-px bg-zinc-800 mb-12" />

        {/* Section 3 — Phase 0 scope */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xs text-zinc-500 tracking-widest uppercase mb-4">03 — Phase 0: What You're Buying</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Phase 0 is a 30-day strategic architecture engagement. The deliverables are not slides or recommendations — they are production-ready blueprints, working prototypes, and documented frameworks that the deployment team executes directly. This is the intellectual property transfer that makes everything else possible.
          </p>

          <div className="space-y-3 mb-6">
            {[
              "Complete on-premise LLM + cloud hybrid architecture specification (hardware, software, network topology)",
              "Custom EMR/EHR data model — purpose-built for longevity, independent of Epic/Cerner/Athenahealth",
              "HIPAA compliance framework: encryption standards, RBAC design, audit logging architecture, BAA strategy",
              "Vitalis Score algorithm: weighted 4-pillar biomarker index with scoring logic and recalibration protocol",
              "Physician dashboard UX specification: triage view, risk coding, AI recommendation workflow, approval gates",
              "Wearable data ingestion architecture: 3-phase rollout from baseline trending to proactive protocol nudges",
              "Lab API integration blueprints: HL7 FHIR specifications for Quest, LabCorp, and partner labs",
              "Hardware procurement guide: per-location specifications, vendor recommendations, cost benchmarks",
              "Franchise replication playbook: technology deployment checklist for each new location",
              "Security audit checklist and HIPAA documentation package",
              "Working prototypes: local LLM inference, lab API integration, scoring engine, physician dashboard",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-zinc-600 text-xs mt-1 shrink-0">—</span>
                <p className="text-zinc-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Phase 0 Engagement Fee</p>
                <p className="text-white text-2xl font-bold">$110,000</p>
                <p className="text-zinc-400 text-sm mt-1">30-day engagement · Full IP ownership transferred to Vitalis at completion</p>
              <p className="text-zinc-500 text-xs mt-2">25% at signing · 50% at prototype delivery (Day 15) · 25% at final handoff (Day 30)</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Duration</p>
                <p className="text-white font-semibold">30 days</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px bg-zinc-800 mb-12" />

        {/* Section 4 — What follows */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-xs text-zinc-500 tracking-widest uppercase mb-4">04 — What Follows Phase 0</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Phase 0 produces the blueprint. Two additional engagements follow, each separately scoped and priced:
          </p>

          <div className="space-y-4">
            <div className="border border-zinc-800 rounded-lg p-5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-white font-semibold">Phase 1 — Production Deployment</p>
                <p className="text-zinc-300 font-semibold shrink-0">$200,000</p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The full build: on-premise LLM deployment, custom EMR implementation, scoring engine, physician dashboard, lab API integrations, wearable ingestion, security audit, staff training, go-live support. Milestone-gated payment structure. This is a capital expense and belongs inside the Vitalis investment raise.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-lg p-5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-white font-semibold">Phase 2 — AI Operations Retainer</p>
                <p className="text-zinc-300 font-semibold shrink-0">$20,000/mo</p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A dedicated AI engineer employed under Kerzie AI, with Wade Kerzie as principal orchestrator. Covers ongoing LLM monitoring, model retraining, lab API maintenance, wearable SDK updates, security reviews, franchise location onboarding, and feature development. This is a monthly operating expense — a fixed line item in the Vitalis P&L, not a capital cost.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px bg-zinc-800 mb-12" />

        {/* Section 5 — Closing */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xs text-zinc-500 tracking-widest uppercase mb-4">05 — The Bottom Line</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            The Vitalis concept is sound. The market is real. The technology is buildable. The franchise model is defensible. All of that has been validated through the work already done.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            What Vitalis needs now is a committed partner — not a consultant working on the if-come. Kerzie AI is prepared to be that partner, under a professional engagement structure that reflects the expertise, the risk, and the value being delivered.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            When the deal is agreed to and Phase 0 is funded, the work begins immediately. Until then, the blueprint stays on the shelf.
          </p>
        </motion.section>

        {/* Footer */}
        <div className="border-t border-zinc-800 pt-8 flex items-center justify-between">
          <div>
            <p className="text-zinc-400 font-semibold text-sm">Wade Kerzie</p>
            <p className="text-zinc-600 text-xs">Principal · Kerzie AI</p>
          </div>
          <p className="text-zinc-700 text-xs">Confidential · Internal Use Only</p>
        </div>

      </div>
    </div>
  );
}
