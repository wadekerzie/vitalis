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

        {/* Production Systems */}
        <div className="max-w-5xl mx-auto mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            I Build Production AI Systems
          </h2>
          <p className="text-xl text-slate-300 text-center mb-12">
            Not slide decks. Not strategy documents. Real systems that ship.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Unison */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Unison</h3>
                    <p className="text-sm text-slate-400">Production SaaS Platform</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  AI-powered unified customer communication platform. Multi-channel automation (phone, SMS, web chat, Facebook, Instagram, email). 24/7 availability. Live in production serving small businesses.
                </p>
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>$500/month recurring revenue model</span>
                </div>
              </CardContent>
            </Card>

            {/* Zorli */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Zorli</h3>
                    <p className="text-sm text-slate-400">Consumer AI Mobile App</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Voice-activated personal information retrieval app. Secure storage and instant retrieval of documents, passwords, insurance info, medical records. Voice-first design for seamless user experience.
                </p>
                <div className="flex items-center gap-2 text-sm text-purple-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Coming soon to iOS & Android</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-slate-800/30 border border-slate-700 rounded-xl p-6">
            <p className="text-slate-300 leading-relaxed text-center">
              <span className="font-semibold text-white">Plus:</span> Countless websites rebuilt, business automation systems (GoHighLevel, Zapier), 30+ years telecom-to-SaaS experience. I don't just consult—I ship.
            </p>
          </div>
        </div>

        {/* What I Bring */}
        <div className="max-w-5xl mx-auto mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What I Bring to Your Longevity Clinic
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
                  From first contact to ongoing care. Conversational AI intake. Personalized AI agents per patient. Wearable integration. The same multi-channel expertise that powers Unison.
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
                  On-premises LLMs. HIPAA compliance. FDA regulatory pathways. Medical liability frameworks. Disaster recovery. Telecom background means I understand infrastructure—not just cloud APIs.
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
                  <p className="text-lg text-slate-300 mb-4">AI Architect & Builder</p>
                  <div className="space-y-2 text-slate-400">
                    <p className="flex items-center justify-center md:justify-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>30+ years building production systems (Telecom → SaaS)</span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Shipped: Unison (AI SaaS), Zorli (consumer app), countless websites</span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Healthcare AI regulatory expertise (FDA, HIPAA, medical liability)</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Do Your Own Research */}
        <div className="max-w-4xl mx-auto mt-24">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-2 border-blue-500/30">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Don't Take My Word For It
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed text-center">
                Before we discuss pricing, I want you to do your own research. Copy the prompt below and paste it into ChatGPT, Claude, or Grok. Ask AI what top-tier expertise costs.
              </p>

              <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 mb-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-emerald-400">Copy this prompt ↓</span>
                  <button
                    onClick={() => {
                      const prompt = document.getElementById('research-prompt')?.innerText || '';
                      navigator.clipboard.writeText(prompt);
                    }}
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Copy Prompt
                  </button>
                </div>
                <div id="research-prompt" className="text-sm text-slate-300 leading-relaxed font-mono whitespace-pre-wrap">
{`I'm evaluating a consulting engagement for an AI-powered healthcare clinic. I need to understand market rates for top-tier AI consulting expertise. Please provide:

1. What are the typical hourly rates for AI consultants with the following credentials:
   - 30+ years building production systems (Telecom → SaaS)
   - Shipped production AI systems: Unison (AI SaaS platform), Zorli (consumer AI app)
   - Healthcare AI expertise (FDA regulatory, HIPAA compliance, medical liability)
   - Infrastructure architecture (on-premises LLMs, disaster recovery)
   - Business automation (GoHighLevel, Zapier, countless websites)

2. What would a 30-day comprehensive AI framework engagement typically cost, including:
   - Patient journey automation design
   - Clinical operations AI architecture
   - Healthcare compliance frameworks (FDA, HIPAA, medical liability)
   - Infrastructure design (on-premises LLMs, disaster recovery)
   - Working prototypes
   - Implementation playbooks
   - 150-200+ pages of technical documentation

3. How does this compare to:
   - Big 4 consulting firms (Deloitte, Accenture, PwC)
   - MBB firms (McKinsey, BCG, Bain)
   - Specialized healthcare AI consultants
   - General AI strategy consultants

Please provide specific dollar ranges and justify the pricing based on expertise level and deliverable scope.`}
                </div>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed text-center">
                This is how you get an unbiased answer. When you see what the market says, we can have an informed conversation about value.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Brand Vision */}
        <div className="max-w-5xl mx-auto mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Zap className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-400">Example: What Your Brand Could Look Like</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vitalis Clinic
            </h2>
            <p className="text-xl text-slate-300">
              Data-Driven Longevity & Recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Logo Showcase - Light */}
            <Card className="bg-white border-slate-300 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-12 flex items-center justify-center">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/um8cNwHtyUYcQBRbRUzXgb/sandbox/IFlbuUGDAcozWwuOWAgX6t_1771096763551_na1fn_dml0YWxpcy1jbGluaWMtbG9nbw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdW04Y053SHR5VVljUUJSYlJVelhnYi9zYW5kYm94L0lGbGJ1VUdEQWNveld3dU9XQWdYNnRfMTc3MTA5Njc2MzU1MV9uYTFmbl9kbWwwWVd4cGN5MWpiR2x1YVdNdGJHOW5idy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pWpyhVRM8f63W4e7KjJd9w0gagtvhrw3MwVduvQPVhWgbcQoFU~XSXmFgrF-NXj~0ratogZDvYEKqXC8ey0nVXiSEa28y-Yta7Avcy714IqTKuTd5xY6TwBvJ4lyY6t85p87J0eVmERF-i0h21WekYpHCQDh4ZXB5KIvbgOz~tmNahy2dD7wdS4XRsZCsuUTIzIJvhv33kTlU4N94eq7X-O~ukofg15DUrc1oDfSWl00rMTkRh9ksXLaOaYKgueiUjvfwWlWhDeVehlnHd-kg5jNeWYpSGWtP3ooYlcK34iZ4mIr7kozvjcd6WVd7a4zVNQ94Br9RndiXa3vCD8R~g__"
                  alt="Vitalis Clinic Logo - Light"
                  className="w-64 h-64 object-contain"
                />
              </CardContent>
            </Card>

            {/* Logo Showcase - Dark */}
            <Card className="bg-slate-900 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-12 flex items-center justify-center">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/um8cNwHtyUYcQBRbRUzXgb/sandbox/IFlbuUGDAcozWwuOWAgX6t_1771096763552_na1fn_dml0YWxpcy1jbGluaWMtbG9nby1kYXJr.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdW04Y053SHR5VVljUUJSYlJVelhnYi9zYW5kYm94L0lGbGJ1VUdEQWNveld3dU9XQWdYNnRfMTc3MTA5Njc2MzU1Ml9uYTFmbl9kbWwwWVd4cGN5MWpiR2x1YVdNdGJHOW5ieTFrWVhKci5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iP51nmFeQIRZpvK4Hx9VoMGWy7vU1ed5~~i7mD~oPjA6NpwWa6L9ehdODwDKW~W4u3lMPr0QF2-6vIlEb4AG7t3EXHLHjhhZW82BxLr~e079vxSlG8pCcYJArAzuGIBKfgYdb53m~ceiGtbPfdvjOFyGFl2cdLv3gnSwTXVG8L6Vz6L6STPEXT1aAMTk9iNUFT4oudW5xpQ~pel2rQWcaeNX5kE4cozqmZgLo46X0B1r-zCCt0~5mnusPI-c~oGVHYBO5c~6Pm2fMRh49OQxv33GMV-8QnXPDmSj9Tjkbul~qxpRVDKI6SeEb-R-yTw5i7CjA2iedQrUBwqbwy8FTA__"
                  alt="Vitalis Clinic Logo - Dark"
                  className="w-64 h-64 object-contain"
                />
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-slate-800/30 border border-slate-700 rounded-xl p-8">
            <p className="text-slate-300 leading-relaxed text-center mb-4">
              <span className="font-semibold text-white">Vitalis</span> (Latin: "vital, life force") — A premium medical brand that communicates longevity, data-driven optimization, and comprehensive care. The logo combines a rising vitality curve with a heartbeat line, symbolizing continuous health monitoring and improvement.
            </p>
            <p className="text-sm text-slate-400 text-center italic">
              This is just one example. Your comprehensive engagement includes brand strategy, visual identity, and patient experience design—not just AI architecture.
            </p>
          </div>
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
