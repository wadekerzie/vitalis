import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FileText, Rocket, Shield, Zap } from "lucide-react";

export default function CapabilityStatement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="container py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Credential Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
            <Shield className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">Applied AI Competency: 98/100 — Top 2% Globally</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            You're Building Something That Doesn't Exist Yet
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            A fully automated, AI-powered longevity clinic built from the ground up. No retrofitting broken processes. No generic cloud integrations. A greenfield opportunity to build the future of healthcare.
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-12"></div>

          {/* Value Delivered Statement */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
              I've already analyzed your market, mapped your competitive landscape, identified your differentiation strategy, and outlined a comprehensive AI framework. You have clarity on what's possible.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed font-semibold">
              The question now is: what kind of engagement do you want?
            </p>
          </div>
        </div>

        {/* Two Paths */}
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Two Paths Forward
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Path 1: Generic Consulting */}
            <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-600 to-slate-700"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="h-8 w-8 text-slate-400" />
                  <h3 className="text-2xl font-bold text-slate-300">The Report</h3>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Hire a consultant who delivers long, detailed documents. Beautiful slide decks. Impressive jargon. But when you hand it to your development team, they'll ask:
                </p>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 mt-1">•</span>
                    <span>"Where's the architecture?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 mt-1">•</span>
                    <span>"How do we actually build this?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 mt-1">•</span>
                    <span>"What about HIPAA compliance?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 mt-1">•</span>
                    <span>"Who's responsible for FDA regulatory risk?"</span>
                  </li>
                </ul>
                <p className="text-slate-500 mt-6 italic text-sm">
                  You'll spend months translating strategy into execution. You'll hire another consultant to fix the first consultant's gaps.
                </p>
              </CardContent>
            </Card>

            {/* Path 2: Execution-Ready Framework */}
            <Card className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border-2 border-emerald-500/30 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="h-8 w-8 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">The Framework</h3>
                </div>
                <p className="text-slate-200 mb-6 leading-relaxed">
                  Work with someone who's shipped production AI systems. Someone who understands healthcare regulations, clinical workflows, and infrastructure. You get:
                </p>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold text-white">Technical architecture</span> your developers can execute immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold text-white">Healthcare compliance frameworks</span> covering FDA, HIPAA, and medical liability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold text-white">Working prototypes</span> that validate feasibility before full investment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold text-white">Implementation playbooks</span> with step-by-step build instructions</span>
                  </li>
                </ul>
                <p className="text-emerald-400 mt-6 font-semibold text-sm">
                  No translation required. No gaps. No second consultant. Just execution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What I Bring */}
        <div className="max-w-5xl mx-auto mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What I Bring to This Engagement
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
                  From first contact to ongoing care. Conversational AI intake. Personalized AI agents per patient. Wearable integration. The Apple Store experience for healthcare.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Healthcare-Grade Infrastructure</h3>
                <p className="text-slate-300 leading-relaxed">
                  On-premises LLMs. HIPAA compliance. FDA regulatory pathways. Medical liability frameworks. Disaster recovery. I understand healthcare AI—most consultants don't.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Greenfield Advantage</h3>
                <p className="text-slate-300 leading-relaxed">
                  You're not retrofitting broken processes. You're building AI-first from day one. I design systems for scale without adding headcount. That's the opportunity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Credentials */}
        <div className="max-w-4xl mx-auto mt-20">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-2 border-slate-700">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white font-bold text-4xl flex-shrink-0">
                  WK
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Wade Kerzie</h3>
                  <p className="text-lg text-slate-300 mb-4">AI Solutions Architect</p>
                  <div className="space-y-2 text-slate-400">
                    <p className="flex items-center justify-center md:justify-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>98/100 Applied AI Competency (Top 2% globally)</span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Production AI systems deployed at scale</span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Healthcare AI regulatory expertise</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <div className="max-w-3xl mx-auto mt-20">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                The Next Conversation
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed text-center">
                You have the market analysis. You understand the opportunity. You know what's possible.
              </p>

              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 mb-8">
                <p className="text-lg text-slate-200 leading-relaxed text-center">
                  The next conversation is about <span className="text-emerald-400 font-semibold">commitment</span>: scope, timing, funding, and when you're ready to move from strategy to execution.
                </p>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed text-center">
                I have the expertise to design every detail of this system. That's what a comprehensive engagement looks like. When you're ready to have that conversation, let's talk.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8">
            <p className="text-lg text-white/90 mb-2">
              Wade Kerzie — AI Solutions Architect
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
