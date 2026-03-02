// Design: Dark executive theme, two-column layout, data-dense but scannable
// Audience: Dr. Barnes - experienced PE/franchise investor, "one pager" preference
// Tone: Direct, numbers-first, no fluff

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, MapPin, Users, Zap, Building2, ArrowRight, Target } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function MetricBlock({ label, value, sub, accent = false }: { label: string; value: string; sub?: string; accent?: boolean }) {
  return (
    <div className={`p-4 rounded-lg border ${accent ? "bg-emerald-500/10 border-emerald-500/30" : "bg-white/5 border-white/10"}`}>
      <div className={`text-2xl font-bold tracking-tight ${accent ? "text-emerald-400" : "text-white"}`}>{value}</div>
      <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mt-0.5">{label}</div>
      {sub && <div className="text-xs text-white/40 mt-1">{sub}</div>}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="h-px flex-1 bg-white/10" />
      <span className="text-xs font-bold uppercase tracking-widest text-white/40">{children}</span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export default function InvestorOnePager() {
  return (
    <div className="bg-[#0a0f1a] text-white min-h-screen py-12 px-4 print:py-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div {...fadeIn} className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">Confidential Investment Summary</div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">Vitalis</h1>
              <p className="text-lg text-white/50 mt-1 font-light">Biometric Optimization Franchise Platform</p>
            </div>
            <div className="text-right text-sm text-white/30">
              <div>Dallas, Texas — Flagship</div>
              <div>Prepared by Wade Kerzie, Kerzie AI</div>
              <div>February 2026</div>
            </div>
          </div>
        </motion.div>

        {/* Two-path thesis */}
        <motion.div {...fadeIn} className="mb-10">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">Path One</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Flagship Unit Economics</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Single 2,500 sqft location in Park Cities / Preston Hollow. Direct-pay membership model. 
                Break-even Month 8. Mature EBITDA margin of 38% on $2.1M revenue.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Path Two</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Franchise Platform</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                2–3 corporate stores prove the model. Proprietary AI operating system licenses to franchisees. 
                15 locations by Y5. Enterprise value $34–41M at 10–12x EBITDA.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Numbers */}
        <motion.div {...fadeIn} className="mb-10">
          <SectionLabel>The Numbers</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <MetricBlock label="Startup Capital" value="$865K" sub="Build-out + equipment + working capital" />
            <MetricBlock label="Break-Even" value="Month 8" sub="107 active members" />
            <MetricBlock label="Mature Revenue" value="$2.1M" sub="Annual, single location" accent />
            <MetricBlock label="Mature EBITDA" value="38%" sub="$815K annual at maturity" accent />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricBlock label="Y5 Locations" value="15" sub="3 corporate + 12 franchise" />
            <MetricBlock label="Y5 System Revenue" value="$28.2M" sub="All locations combined" />
            <MetricBlock label="Y5 Franchisor EBITDA" value="$3.4M" sub="Corporate + royalties + tech fees" accent />
            <MetricBlock label="Y5 Enterprise Value" value="$34–41M" sub="10–12x EBITDA multiple" accent />
          </div>
        </motion.div>

        {/* Two column: Membership + Market */}
        <motion.div {...fadeIn} className="mb-10 grid md:grid-cols-2 gap-6">
          {/* Membership Model */}
          <div>
            <SectionLabel>Membership Model (Direct-Pay Only)</SectionLabel>
            <div className="space-y-2">
              {[
                { tier: "Essential", price: "$499/mo", annual: "$5,388/yr", target: "80 members at maturity" },
                { tier: "Optimize", price: "$999/mo", annual: "$10,788/yr", target: "60 members at maturity" },
                { tier: "Elite", price: "$1,999/mo", annual: "$21,588/yr", target: "30 members at maturity" },
              ].map((t) => (
                <div key={t.tier} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <div className="font-bold text-white text-sm">{t.tier}</div>
                    <div className="text-xs text-white/40">{t.target}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-400 text-sm">{t.price}</div>
                    <div className="text-xs text-white/40">{t.annual}</div>
                  </div>
                </div>
              ))}
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center">
                <div className="text-sm text-white/60">170 members × avg $12,553/yr</div>
                <div className="font-bold text-white text-sm">$2.1M ARR</div>
              </div>
            </div>
          </div>

          {/* Market */}
          <div>
            <SectionLabel>Target Market — Dallas</SectionLabel>
            <div className="space-y-2">
              {[
                { icon: MapPin, label: "Park Cities / Preston Hollow", value: "Primary target submarket" },
                { icon: Users, label: "Dallas Millionaires (2024)", value: "72,400" },
                { icon: DollarSign, label: "Park Cities Median HHI", value: "$156,062" },
                { icon: Target, label: "Median Age (Park Cities)", value: "41 years" },
                { icon: DollarSign, label: "Concierge Medicine Benchmark", value: "$24K/yr (MD2)" },
                { icon: TrendingUp, label: "Longevity Market CAGR", value: "12.2% through 2030" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-white/30 flex-shrink-0" />
                    <span className="text-sm text-white/60">{item.label}</span>
                  </div>
                  <span className="text-sm font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Revenue Ramp Table */}
        <motion.div {...fadeIn} className="mb-10">
          <SectionLabel>Revenue Ramp & Break-Even</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 px-3 text-white/40 font-semibold text-xs uppercase tracking-wider">Month</th>
                  <th className="text-right py-2 px-3 text-white/40 font-semibold text-xs uppercase tracking-wider">Members</th>
                  <th className="text-right py-2 px-3 text-white/40 font-semibold text-xs uppercase tracking-wider">Monthly Rev</th>
                  <th className="text-right py-2 px-3 text-white/40 font-semibold text-xs uppercase tracking-wider">Monthly EBITDA</th>
                  <th className="text-right py-2 px-3 text-white/40 font-semibold text-xs uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { m: "M1", members: 17, rev: "$19,483", ebitda: "-$62,984", status: "Pre-revenue" },
                  { m: "M3", members: 39, rev: "$47,780", ebitda: "-$34,687", status: "Ramping" },
                  { m: "M6", members: 80, rev: "$92,750", ebitda: "-$8,717", status: "Near break-even" },
                  { m: "M8", members: 107, rev: "$122,233", ebitda: "+$1,766", status: "BREAK-EVEN", highlight: true },
                  { m: "M12", members: 151, rev: "$163,613", ebitda: "+$43,146", status: "Profitable" },
                  { m: "M18", members: 170, rev: "$177,830", ebitda: "+$67,889", status: "Mature" },
                ].map((row) => (
                  <tr key={row.m} className={`border-b border-white/5 ${row.highlight ? "bg-emerald-500/10" : "hover:bg-white/5"}`}>
                    <td className="py-2.5 px-3 font-mono text-white/70">{row.m}</td>
                    <td className="py-2.5 px-3 text-right text-white/70">{row.members}</td>
                    <td className="py-2.5 px-3 text-right text-white/70">{row.rev}</td>
                    <td className={`py-2.5 px-3 text-right font-semibold ${row.ebitda.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{row.ebitda}</td>
                    <td className={`py-2.5 px-3 text-right text-xs font-bold uppercase tracking-wider ${row.highlight ? "text-emerald-400" : "text-white/30"}`}>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Franchise 5-Year */}
        <motion.div {...fadeIn} className="mb-10">
          <SectionLabel>5-Year Franchise Expansion</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 px-3 text-white/40 font-semibold text-xs uppercase tracking-wider">Year</th>
                  <th className="text-right py-2 px-3 text-white/40 font-semibold text-xs uppercase tracking-wider">Locations</th>
                  <th className="text-right py-2 px-3 text-white/40 font-semibold text-xs uppercase tracking-wider">Franchisor Rev</th>
                  <th className="text-right py-2 px-3 text-white/40 font-semibold text-xs uppercase tracking-wider">Franchisor EBITDA</th>
                  <th className="text-right py-2 px-3 text-white/40 font-semibold text-xs uppercase tracking-wider">System Revenue</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { yr: "Y1", loc: "1 (corp)", rev: "$854K", ebitda: "-$174K", sys: "$854K" },
                  { yr: "Y2", loc: "2 (corp)", rev: "$3.2M", ebitda: "$472K", sys: "$3.2M" },
                  { yr: "Y3", loc: "3 corp + 2 fran", rev: "$6.8M", ebitda: "$1.8M", sys: "$10.0M" },
                  { yr: "Y4", loc: "3 corp + 6 fran", rev: "$7.4M", ebitda: "$2.4M", sys: "$17.3M" },
                  { yr: "Y5", loc: "3 corp + 12 fran", rev: "$8.4M", ebitda: "$3.4M", sys: "$28.2M", highlight: true },
                ].map((row) => (
                  <tr key={row.yr} className={`border-b border-white/5 ${row.highlight ? "bg-emerald-500/10" : "hover:bg-white/5"}`}>
                    <td className="py-2.5 px-3 font-bold text-white">{row.yr}</td>
                    <td className="py-2.5 px-3 text-right text-white/60 text-xs">{row.loc}</td>
                    <td className="py-2.5 px-3 text-right text-white/70">{row.rev}</td>
                    <td className={`py-2.5 px-3 text-right font-semibold ${row.ebitda.startsWith("-") ? "text-red-400" : "text-emerald-400"}`}>{row.ebitda}</td>
                    <td className="py-2.5 px-3 text-right text-white/70">{row.sys}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <div className="text-sm text-white/50">Y5 Enterprise Valuation (10–12x EBITDA)</div>
            <div className="flex gap-4">
              <div className="text-center"><div className="text-lg font-bold text-white">$27M</div><div className="text-xs text-white/30">8x</div></div>
              <div className="text-center"><div className="text-lg font-bold text-emerald-400">$34M</div><div className="text-xs text-white/30">10x</div></div>
              <div className="text-center"><div className="text-lg font-bold text-emerald-400">$41M</div><div className="text-xs text-white/30">12x</div></div>
            </div>
          </div>
        </motion.div>

        {/* Capital Use + Franchise Structure */}
        <motion.div {...fadeIn} className="mb-10 grid md:grid-cols-2 gap-6">
          <div>
            <SectionLabel>Use of Capital — Flagship</SectionLabel>
            <div className="space-y-2">
              {[
                { item: "Build-out (2,500 sqft @ $120/sqft)", amount: "$300,000" },
                { item: "Equipment & Technology", amount: "$335,400" },
                { item: "Working Capital (3 months)", amount: "$120,000" },
                { item: "Pre-Opening Marketing", amount: "$75,000" },
                { item: "Legal, Licensing & Compliance", amount: "$35,000" },
              ].map((row) => (
                <div key={row.item} className="flex justify-between items-center py-2 border-b border-white/5 text-sm">
                  <span className="text-white/60">{row.item}</span>
                  <span className="font-semibold text-white">{row.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 text-sm font-bold">
                <span className="text-white">Total Startup Capital</span>
                <span className="text-emerald-400 text-base">$865,400</span>
              </div>
            </div>
          </div>
          <div>
            <SectionLabel>Franchise Structure</SectionLabel>
            <div className="space-y-2">
              {[
                { item: "Franchise Fee", value: "$75,000" },
                { item: "Royalty Rate", value: "7% of gross revenue" },
                { item: "Technology Licensing", value: "$2,500/mo per location" },
                { item: "Marketing Fund", value: "2% of gross revenue" },
                { item: "Franchisee Total Investment", value: "$900K–$1.1M" },
                { item: "Franchisee Payback Period", value: "18–24 months" },
              ].map((row) => (
                <div key={row.item} className="flex justify-between items-center py-2 border-b border-white/5 text-sm">
                  <span className="text-white/60">{row.item}</span>
                  <span className="font-semibold text-white">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* The Moat */}
        <motion.div {...fadeIn} className="mb-10">
          <SectionLabel>The Competitive Moat</SectionLabel>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Zap,
                title: "Proprietary AI Backbone",
                desc: "On-premise LLM + custom EMR — not Epic, not Cerner. The technology is owned, not licensed. Every franchise location runs on the same platform.",
              },
              {
                icon: Target,
                title: "The Vitalis Score",
                desc: "A proprietary 0–100 vitality index calculated from 5 biomarker domains. The score improves with every member, at every location. Network effect.",
              },
              {
                icon: TrendingUp,
                title: "Outcomes Data",
                desc: "Aggregated, de-identified outcomes data across all locations creates a compounding clinical intelligence asset that grows more valuable with scale.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <item.icon className="h-6 w-6 text-emerald-400 mb-3" />
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Clinical Leadership */}
        <motion.div {...fadeIn} className="mb-10">
          <SectionLabel>Clinical Leadership</SectionLabel>
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">T</div>
            <div>
              <div className="font-bold text-white text-lg">Dr. Truei — Medical Director</div>
              <div className="text-sm text-white/50 mb-2">Active concierge medicine practice, Dallas</div>
              <p className="text-sm text-white/60 leading-relaxed">
                Dr. Truei's existing concierge practice provides immediate clinical credibility, an established patient referral network within the target demographic, and the physician oversight required for hormone protocols and advanced lab interpretation. The Medical Director structure — part-time oversight supported by full-time RNs — is the standard model for high-performing longevity clinics and is reflected in the proforma.
              </p>
            </div>
          </div>
        </motion.div>

        {/* AI Engagement Structure */}
        <motion.div {...fadeIn} className="mb-10">
          <SectionLabel>AI Engagement — Kerzie AI (Three-Phase Structure)</SectionLabel>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Phase 1 */}
            <div className="p-5 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Phase 0 — Strategic Architecture Engagement</div>
              <div className="text-sm font-bold text-white mb-1">30-Day Engagement · Full IP Ownership Transferred to Vitalis</div>
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                A time-bounded engagement delivering the complete proprietary AI infrastructure blueprint: on-premise LLM architecture, custom EMR design, HIPAA compliance framework, Vitalis Score algorithm, lab API integration specs, franchise replication guide, and working prototypes. This is the intellectual property event. All deliverables are owned by Vitalis upon completion.
              </p>
              <div className="text-xs text-white/30 italic">25% at signing · 50% at prototype delivery (Day 15) · 25% at final handoff (Day 30). Non-contingent. No equity. No deferred compensation.</div>
            </div>
            {/* Phase 2 */}
            <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">Phase 2 — Managed Services Retainer</div>
              <div className="text-sm font-bold text-white mb-1">Monthly · Fixed Operating Expense · Scales with Franchise</div>
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                One dedicated AI engineer employed under Kerzie AI, assigned exclusively to Vitalis. Wade Kerzie serves as principal architect and orchestrator. Covers LLM monitoring, lab API maintenance, Vitalis Score recalibration, security audits, HIPAA compliance reviews, new franchise location onboarding, and feature development.
              </p>
              <div className="space-y-1">
                {[
                  { label: "Monthly Retainer", value: "$20,000/mo" },
                  { label: "Annual Cost", value: "$240K" },
                  { label: "Initial Term", value: "12 months, renewable" },
                  { label: "vs. In-House Senior AI Engineer (Dallas)", value: "~$280K fully-loaded" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between text-xs">
                    <span className="text-white/40">{r.label}</span>
                    <span className="font-semibold text-emerald-400">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div {...fadeIn}>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/30">
              This document is confidential and intended solely for the named recipient. Not a securities offering.
            </div>
            <button
              onClick={() => window.open("https://api.leadconnectorhq.com/widget/bookings/wade-kerzie", "_blank")}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-lg transition-colors text-sm"
            >
              Schedule a Conversation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
