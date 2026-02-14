import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FileText, Rocket, Shield, Zap } from "lucide-react";

export default function CapabilityStatement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Branded Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="container py-5">
          <div className="flex items-center gap-4">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/102801090/kXJWEbVYDRxyQqCQ.png"
              alt="Vitalis Clinic"
              className="h-16 w-auto"
            />
            <div className="hidden md:block h-12 w-px bg-slate-700"></div>
            <div className="hidden md:block">
              <p className="text-slate-300 text-sm font-medium tracking-wide">Data-Driven Longevity & Recovery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container py-20 md:py-32 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Credential Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
            <Shield className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">30+ Years Building Production Systems</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            You're Building Something That Doesn't Exist Yet
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            A fully automated, AI-powered longevity clinic built from the ground up. No retrofitting broken processes. No generic cloud integrations. A greenfield opportunity to build the future of healthcare.
          </p>

          {/* Clinic Interior Vision */}
          <div className="mb-12">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg overflow-hidden">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/102801090/qfrEPvVOWKcRiwSg.png"
                alt="Vitalis Clinic Interior"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-slate-400 text-center mt-4 italic">
              Minimalist. Tech-forward. More Apple Store than medical office.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-12"></div>

          {/* Value Delivered Statement */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Over the past few weeks, we've analyzed your market, mapped the competitive landscape, identified your differentiation strategy, and outlined a comprehensive AI framework. You now have clarity on what's possible.
            </p>
          </div>
        </div>

        {/* Two Approaches */}
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What This Level of Work Requires
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Approach 1: Generic Consulting */}
            <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-600 to-slate-700"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="h-8 w-8 text-slate-400" />
                  <h3 className="text-2xl font-bold text-slate-300">Generic Consulting</h3>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Most consultants deliver impressive documents and slide decks. But when you hand them to your development team, they ask:
                </p>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 mt-1">•</span>
                    <span>"Where's the actual architecture?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 mt-1">•</span>
                    <span>"How do we build this?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 mt-1">•</span>
                    <span>"What about HIPAA compliance?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 mt-1">•</span>
                    <span>"Where do we even start?"</span>
                  </li>
                </ul>
                <p className="text-slate-500 mt-6 text-sm italic">
                  Result: You've paid for strategy, but you still need to hire someone else to figure out execution.
                </p>
              </CardContent>
            </Card>

            {/* Approach 2: Execution-Ready Framework */}
            <Card className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 backdrop-blur-sm border-emerald-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="h-8 w-8 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">Execution-Ready Framework</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I build systems that ship. My frameworks include architecture, compliance, infrastructure, and implementation playbooks that your team can execute immediately.
                </p>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Production-grade AI architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Healthcare compliance frameworks (HIPAA, FDA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>On-premises infrastructure design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Working prototypes and validation</span>
                  </li>
                </ul>
                <p className="text-emerald-400 mt-6 text-sm font-semibold">
                  Result: Your team knows exactly what to build, how to build it, and what success looks like.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Credentials */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why This Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/30 border-slate-700">
              <CardContent className="p-6">
                <Zap className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Production Systems</h3>
                <p className="text-sm text-slate-400">
                  <span className="font-semibold text-white">Unison</span> — Live AI SaaS platform with $500/month recurring revenue. <span className="font-semibold text-white">Zorli</span> — Consumer AI app in production.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Healthcare Expertise</h3>
                <p className="text-sm text-slate-400">
                  FDA regulatory pathways, HIPAA compliance, clinical workflow integration, medical liability frameworks, and health equity considerations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700">
              <CardContent className="p-6">
                <Rocket className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">30+ Years Experience</h3>
                <p className="text-sm text-slate-400">
                  Telecom → SaaS → AI. Countless websites rebuilt, automation workflows via GHL and Zapier, and production code that ships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Brand Vision */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            A Glimpse of What's Possible
          </h2>

          <p className="text-lg text-slate-300 text-center mb-8 leading-relaxed">
            This isn't just about AI architecture. A comprehensive engagement includes brand strategy, visual identity, and patient experience design. Here's an example of what that could look like for your clinic.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <Card className="bg-slate-800/30 border-slate-700 overflow-hidden">
              <CardContent className="p-12 flex items-center justify-center bg-white">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/102801090/kXJWEbVYDRxyQqCQ.png"
                  alt="Vitalis Clinic Logo"
                  className="w-full h-auto object-contain"
                />
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-slate-800/30 border border-slate-700 rounded-xl p-8">
            <p className="text-slate-300 leading-relaxed text-center mb-4">
              <span className="font-semibold text-white">Vitalis</span> (Latin: "vital, life force") — A premium medical brand that communicates longevity, data-driven optimization, and comprehensive care. The logo combines a rising vitality curve with a heartbeat line, symbolizing continuous health monitoring and improvement.
            </p>
            <p className="text-sm text-slate-400 text-center italic">
              This is just one example of the strategic thinking that goes into a comprehensive engagement.
            </p>
          </div>

        </div>

        {/* Don't Take My Word For It */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Don't Take My Word For It
          </h2>

          <p className="text-lg text-slate-300 text-center mb-8 leading-relaxed">
            If you're wondering what market-rate pricing looks like for this level of expertise, ask an AI yourself. Copy the prompt below and paste it into ChatGPT, Claude, or Grok.
          </p>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-emerald-500/30">
            <CardContent className="p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wide">Research Prompt</p>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(`I'm evaluating a consulting engagement for a greenfield AI-powered longevity clinic. The consultant has:\n\n- 30+ years building production systems (Telecom → SaaS → AI)\n- Live AI SaaS platform (Unison) with recurring revenue\n- Consumer AI app (Zorli) in production\n- Healthcare AI expertise: FDA regulatory pathways, HIPAA compliance, clinical workflow integration, medical liability frameworks, health equity, interoperability standards (FHIR/LOINC/SNOMED/ICD-10)\n- Infrastructure design: on-premises LLMs, hybrid cloud architecture, disaster recovery\n\nThe engagement deliverables include:\n- AI architecture design (patient intake automation, clinic operations, optimization scorecard)\n- Healthcare compliance frameworks (FDA assessment, clinical validation protocols, HIPAA privacy-by-design)\n- Infrastructure & disaster recovery architecture (on-premises GPU servers, cloud integration, ROI analysis)\n- Working prototypes and validation\n- Implementation playbooks (150-200 pages)\n- AI governance framework and lifecycle management\n\nTimeframe: 30 days\n\nWhat is the market-rate pricing for this level of expertise and scope? Compare to Big 4 consulting firms and specialized boutique consultancies. What hourly rate and total engagement fee would be appropriate?`);
                  }}
                  className="px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg text-sm text-emerald-400 font-semibold transition-all duration-200"
                >
                  Copy Prompt
                </button>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-6 font-mono text-sm text-slate-300 leading-relaxed overflow-x-auto">
                <p className="mb-4">I'm evaluating a consulting engagement for a greenfield AI-powered longevity clinic. The consultant has:</p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>30+ years building production systems (Telecom → SaaS → AI)</li>
                  <li>Live AI SaaS platform (Unison) with recurring revenue</li>
                  <li>Consumer AI app (Zorli) in production</li>
                  <li>Healthcare AI expertise: FDA regulatory pathways, HIPAA compliance, clinical workflow integration, medical liability frameworks, health equity, interoperability standards (FHIR/LOINC/SNOMED/ICD-10)</li>
                  <li>Infrastructure design: on-premises LLMs, hybrid cloud architecture, disaster recovery</li>
                </ul>
                <p className="mb-4">The engagement deliverables include:</p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>AI architecture design (patient intake automation, clinic operations, optimization scorecard)</li>
                  <li>Healthcare compliance frameworks (FDA assessment, clinical validation protocols, HIPAA privacy-by-design)</li>
                  <li>Infrastructure & disaster recovery architecture (on-premises GPU servers, cloud integration, ROI analysis)</li>
                  <li>Working prototypes and validation</li>
                  <li>Implementation playbooks (150-200 pages)</li>
                  <li>AI governance framework and lifecycle management</li>
                </ul>
                <p className="mb-4">Timeframe: 30 days</p>
                <p>What is the market-rate pricing for this level of expertise and scope? Compare to Big 4 consulting firms and specialized boutique consultancies. What hourly rate and total engagement fee would be appropriate?</p>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-slate-400 text-center mt-6 italic">
            This gives you an independent benchmark for what this work is worth in the market.
          </p>
        </div>

        {/* Where We Are Now */}
        <div className="max-w-3xl mx-auto mt-20">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Where We Are Now
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                We've made significant progress together. You have market clarity, competitive intelligence, a brand vision, and a comprehensive understanding of what's required to build this clinic successfully.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                We're at a natural pause point. The work we've done so far represents substantial strategic value—$10,000 to $15,000 in consulting that's already been delivered.
              </p>
              <p className="text-lg text-white leading-relaxed font-semibold mb-6">
                Our meeting next week is the decision point.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                That's when we'll align on who's writing the checks, what the timeline looks like, and how this moves forward. This is the time to get the framework right—<span className="font-semibold text-white">before</span> you pitch it to your funding authority. A solid, execution-ready plan makes that conversation much easier.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8">
            <p className="text-lg text-white/90 mb-2">
              Wade Kerzie — AI Architect & Builder
            </p>
            <p className="text-sm text-white/80">
              wadekerzie.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
