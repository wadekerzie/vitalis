import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap } from "lucide-react";

export default function CapabilityStatement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="container py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Credential Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
            <Shield className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">Applied AI Competency: 98/100</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            I Know How to Build This
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            You're talking to one of the top-tier AI consultants in the industry. I've analyzed your market, I understand your vision, and I have the expertise to deliver a fully automated, AI-powered longevity clinic from the ground up.
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-12"></div>

          {/* Direct Statement */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
              I've delivered significant value already: market analysis, competitive intelligence, differentiation strategy, and a comprehensive AI framework. That's easily <span className="text-emerald-400 font-bold">$5,000-$10,000</span> worth of strategic consulting.
            </p>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-semibold">
              This is enough free work.
            </p>
          </div>
        </div>

        {/* What I Can Deliver */}
        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What I Can Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Patient Journey Automation</h3>
                <p className="text-slate-300 leading-relaxed">
                  From first contact to ongoing care, I'll design an AI-powered patient experience that eliminates administrative burden and creates a concierge-level experience.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Clinic Operations Framework</h3>
                <p className="text-slate-300 leading-relaxed">
                  Inventory management, physician workflows, biomarker tracking, wearable integration, and personalized AI agents per patient—all designed for scale without adding headcount.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Healthcare-Grade Infrastructure</h3>
                <p className="text-slate-300 leading-relaxed">
                  HIPAA-compliant, FDA-aware, on-premises LLM strategy with disaster recovery. I understand healthcare AI regulations and medical liability—most consultants don't.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Me */}
        <div className="max-w-4xl mx-auto mt-20">
          <Card className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-2 border-emerald-500/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Work With Me</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-200">
                    <span className="font-bold text-white">98/100 Applied AI Competency</span> — Top 2% of AI practitioners globally with verified production systems
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-200">
                    <span className="font-bold text-white">Healthcare AI Expertise</span> — I understand FDA regulatory pathways, clinical workflows, medical liability, and HIPAA compliance
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-200">
                    <span className="font-bold text-white">Greenfield Advantage</span> — I design AI-first systems from scratch, not retrofits of broken processes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-200">
                    <span className="font-bold text-white">Execution-Ready Frameworks</span> — I deliver implementation playbooks your team can execute, not vague strategy decks
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Move Forward?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            I'm at a stopping point. I don't plan to continue any more work until we've come to an agreement on:
          </p>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 mb-8">
            <ul className="text-left space-y-3 text-lg text-slate-200">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                What the actual engagement looks like
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                The timing and scope
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                Who's funding it
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                When you're ready to write a check
              </li>
            </ul>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            I have all the know-how to add the complexities and details. That would be part of the engagement. Let's talk when you're serious.
          </p>
        </div>

        {/* Footer CTA */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8">
            <p className="text-2xl font-bold text-white mb-4">
              Wade Kerzie
            </p>
            <p className="text-lg text-white/90 mb-2">
              AI Solutions Architect
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
