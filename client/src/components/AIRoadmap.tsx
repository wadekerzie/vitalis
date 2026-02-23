import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { 
  BookOpen, 
  Boxes, 
  CheckCircle2, 
  FileText, 
  Lightbulb, 
  Rocket, 
  Shield, 
  Sparkles, 
  Target, 
  Zap 
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Milestone {
  week: number;
  phase: string;
  outcome: string;
  deliverables: Array<{ icon: any; label: string }>;
  impact: string;
  color: string;
  gradient: string;
}

const milestones: Milestone[] = [
  {
    week: 1,
    phase: "Architecture & Compliance",
    outcome: "Complete blueprint for proprietary infrastructure: on-premise AI, custom EMR, HIPAA compliance without vendor lock-in",
    deliverables: [
      { icon: Shield, label: "HIPAA Compliance Framework" },
      { icon: Boxes, label: "On-Premise/Cloud Hybrid Design" },
      { icon: FileText, label: "Hardware Specifications" },
      { icon: Target, label: "Vitalis Score Algorithm Design" },
    ],
    impact: "Complete regulatory control + competitive moat",
    color: "from-blue-500 to-blue-600",
    gradient: "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
  },
  {
    week: 2,
    phase: "AI & Integration Design",
    outcome: "LLM fine-tuning strategy, lab API integrations, wearable data ingestion—all architected for franchise replication",
    deliverables: [
      { icon: Sparkles, label: "LLM Fine-Tuning Strategy" },
      { icon: Boxes, label: "Lab API Integration (HL7 FHIR)" },
      { icon: Target, label: "Wearable Data Ingestion" },
      { icon: FileText, label: "Physician Dashboard Wireframes" },
    ],
    impact: "Reduce development risk by 70%",
    color: "from-emerald-500 to-emerald-600",
    gradient: "bg-gradient-to-br from-emerald-500/10 to-emerald-600/10",
  },
  {
    week: 3,
    phase: "Prototyping & Validation",
    outcome: "Working prototypes prove technical feasibility: local LLM inference, lab integrations, Vitalis Score engine",
    deliverables: [
      { icon: Target, label: "Local LLM Inference Prototype" },
      { icon: Sparkles, label: "Lab API Integration PoC" },
      { icon: Lightbulb, label: "Vitalis Score Calculation Engine" },
      { icon: Shield, label: "Security Audit Checklist" },
    ],
    impact: "De-risk proprietary infrastructure investment",
    color: "from-purple-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-purple-500/10 to-cyan-500/10",
  },
  {
    week: 4,
    phase: "Implementation & Handoff",
    outcome: "Complete franchise replication guide: hardware specs, deployment playbooks, HIPAA audit documentation",
    deliverables: [
      { icon: BookOpen, label: "Franchise Replication Guide" },
      { icon: Boxes, label: "Hardware Procurement Specs" },
      { icon: FileText, label: "HIPAA Audit Documentation" },
      { icon: Rocket, label: "Execution Roadmap" },
    ],
    impact: "Built for multi-city scale from day one",
    color: "from-amber-500 to-orange-500",
    gradient: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
  },
];

function CountUpNumber({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <Card className={`overflow-hidden border-2 ${milestone.gradient} backdrop-blur-sm shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
          <CardContent className="p-6">
            {/* Week Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-bold text-sm`}>
                <span>Week {milestone.week}</span>
                <div className="w-12 h-12 rounded-full border-4 border-white/30 flex items-center justify-center">
                  <span className="text-lg">{milestone.week * 25}%</span>
                </div>
              </div>
            </div>

            {/* Phase Name */}
            <h3 className="text-2xl font-bold mb-3 text-foreground">{milestone.phase}</h3>

            {/* Outcome Statement */}
            <p className="text-base text-muted-foreground mb-6 leading-relaxed min-h-[4rem]">
              {milestone.outcome}
            </p>

            {/* Deliverables Grid */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              {milestone.deliverables.map((deliverable, idx) => {
                const Icon = deliverable.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card/50 backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-xs font-medium text-foreground">{deliverable.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Impact Metric */}
            <div className={`p-4 rounded-lg bg-gradient-to-r ${milestone.color} text-white`}>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span className="font-bold text-sm">{milestone.impact}</span>
              </div>
            </div>

            {/* Hover Reveal */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                  <span>Deliverables ready for execution team</span>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Connecting Line */}
      {index < milestones.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-border to-transparent" />
      )}
    </motion.div>
  );
}

export default function AIRoadmap() {
  return (
    <div className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-secondary/20 text-secondary rounded-full">
            AI Transformation Roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            30 Days to AI-Powered Operations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A strategic framework that de-risks execution and accelerates time-to-market
          </p>

          {/* Counter Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">
                <CountUpNumber end={30} />
              </div>
              <div className="text-sm text-muted-foreground font-medium">Days</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">
                <CountUpNumber end={4} />
              </div>
              <div className="text-sm text-muted-foreground font-medium">Milestones</div>
            </div>

          </div>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg shadow-md">
              <Zap className="h-5 w-5 text-secondary" />
              <div className="text-left">
                <div className="font-bold text-sm text-foreground">Fast</div>
                <div className="text-xs text-muted-foreground">Strategic framework in 30 days</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg shadow-md">
              <Target className="h-5 w-5 text-secondary" />
              <div className="text-left">
                <div className="font-bold text-sm text-foreground">Proven</div>
                <div className="text-xs text-muted-foreground">Built by 98/100 AI Architect</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg shadow-md">
              <Rocket className="h-5 w-5 text-secondary" />
              <div className="text-left">
                <div className="font-bold text-sm text-foreground">Executable</div>
                <div className="text-xs text-muted-foreground">Ready for immediate development</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 mb-16">
          {milestones.map((milestone, index) => (
            <MilestoneCard key={index} milestone={milestone} index={index} />
          ))}
        </div>

        {/* Confidence Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6 italic">
                "This isn't a research project. This is a battle-tested framework from someone who's shipped production AI systems that generate revenue. You'll have clarity, confidence, and a clear path forward."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl">
                  WK
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">Wade Kerzie</div>
                  <div className="text-sm text-muted-foreground">Applied AI Competency: 98/100</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Investment Summary */}

        {/* LLM Research Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-2 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-foreground">Don't Take My Word For It</h3>
              <p className="text-muted-foreground text-center mb-6">
                Want to know what top-tier AI consulting typically costs? Copy this prompt into ChatGPT, Claude, or Grok and see for yourself:
              </p>
              <div className="bg-background/80 border border-border rounded-lg p-6 font-mono text-sm text-foreground overflow-x-auto">
                <pre className="whitespace-pre-wrap">
{`I'm evaluating a consulting proposal for architecting a proprietary AI infrastructure for a healthcare franchise platform. The consultant has:

- 30+ years experience (Telecom → SaaS → AI)
- Built production AI systems (Unison SaaS platform, Zorli consumer app)
- Deep healthcare AI expertise (FDA compliance, clinical workflows, HIPAA security)
- Experience with on-premise LLM deployment, custom EMR architecture, and cloud infrastructure

The engagement scope includes:
- On-premise LLM + cloud hybrid architecture design
- Custom EMR/EHR system data models (independent from Epic/Cerner)
- HIPAA compliance framework without vendor lock-in
- Hardware specifications (GPU inference servers, encrypted storage)
- Lab API integration blueprints (HL7 FHIR for Quest/LabCorp)
- Wearable data ingestion architecture (Apple HealthKit, Oura, Whoop)
- Proprietary scoring algorithm design
- Working prototypes (local LLM inference, lab integrations, scoring engine)
- Franchise replication guide for multi-city deployment
- Security audit checklists and HIPAA documentation

What is the typical market rate range for this level of expertise and scope in 2026? Please provide:
1. Low-end (junior consultants or offshore)
2. Mid-range (experienced consultants)
3. High-end (top-tier experts with healthcare AI + infrastructure specialization)
4. How does proprietary infrastructure architecture affect pricing vs. standard integrations?
5. What premium does on-premise LLM deployment and HIPAA compliance expertise command?`}
                </pre>
              </div>
              <p className="text-muted-foreground text-center mt-6 text-sm">
                This is about transparency. You'll see the market range, and you'll understand where this proposal sits.
              </p>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}
