import AIRoadmap from "@/components/AIRoadmap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BarChart3, Building2, DollarSign, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Streamdown } from 'streamdown';

export default function Home() {
  const [reportContent, setReportContent] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("executive-summary");

  useEffect(() => {
    fetch("/report.md")
      .then((res) => res.text())
      .then((text) => setReportContent(text))
      .catch((err) => console.error("Failed to load report:", err));
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: "executive-summary", label: "Executive Summary", icon: BarChart3 },
    { id: "market-analysis", label: "Market Analysis", icon: TrendingUp },
    { id: "competitive-landscape", label: "Competitive Landscape", icon: Building2 },
    { id: "differentiation", label: "Differentiation Strategy", icon: Users },
    { id: "ai-consulting", label: "AI Consulting Proposal", icon: DollarSign },
  ];

  return (
    <div className="min-h-screen">
      {/* Fixed Logo - Top Left */}
      <div className="fixed top-3 left-2 md:left-3 z-50">
        <img 
          src="https://files.manuscdn.com/user_upload_by_module/session_file/102801090/MTioXterhBgvPFrr.png" 
          alt="Kerzie AI" 
          className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg hover:scale-105 transition-transform duration-200"
        />
      </div>
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0yaDJ2Mmgtdi0yem0wIDBoLTJ2LTJoMnYyem0wIDBodjJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-secondary/20 rounded-full backdrop-blur-sm">
              Market Viability Study
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Vitalis: Biometric Optimization Franchise Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Market viability analysis for a subscription-first franchise system engineered for multi-city expansion in the longevity sector
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => {
                  const roadmapElement = document.querySelector('[data-section="roadmap"]');
                  if (roadmapElement) {
                    roadmapElement.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="font-semibold"
              >
                View Deliverables <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("executive-summary")}
                className="font-semibold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Read Full Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="bg-gradient-to-b from-card to-muted/20 border-b border-border/50">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">72,400</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Millionaires in Dallas</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-3">85%</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Millionaire Growth (10yr)</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">$18.2B</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">US Aesthetic Surgery Market</div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Roadmap Section */}
      <div data-section="roadmap">
        <AIRoadmap />
      </div>

      {/* Main Content with Sidebar Navigation */}
      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:w-64 lg:sticky lg:top-6 lg:self-start">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-md transition-all flex items-center gap-3 ${
                        activeSection === section.id
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{section.label}</span>
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </aside>

          {/* Report Content */}
          <main className="flex-1 min-w-0">
            <Card className="shadow-lg">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="text-2xl">Market Viability Report</CardTitle>
                <CardDescription className="text-base">
                  Prepared by Wade Kerzie • February 12, 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-slate max-w-none
                  prose-headings:font-bold 
                  prose-h1:text-4xl prose-h1:mb-6 prose-h1:text-primary prose-h1:border-b prose-h1:border-border prose-h1:pb-4
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-primary prose-h2:scroll-mt-6
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
                  prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-table:border-collapse prose-table:w-full
                  prose-thead:bg-muted prose-thead:border-b-2 prose-thead:border-border
                  prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-foreground
                  prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-border
                  prose-tr:hover:bg-muted/50
                  prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:pl-4 prose-blockquote:italic
                  prose-code:text-secondary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                  prose-ul:list-disc prose-ul:pl-6
                  prose-ol:list-decimal prose-ol:pl-6
                  prose-li:mb-2
                ">
                  {reportContent ? (
                    <Streamdown>{reportContent}</Streamdown>
                  ) : (
                    <div className="flex items-center justify-center py-12">
                      <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="mt-8 bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold mb-4">Ready to Move Forward?</h3>
                  <p className="text-lg mb-6 text-primary-foreground/90">
                    This comprehensive analysis demonstrates strong market viability for the longevity clinic concept. 
                    The proposed AI consulting engagement will provide the technical foundation needed for success.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      size="lg" 
                      variant="secondary"
                      className="font-semibold"
                      onClick={() => window.open('https://api.leadconnectorhq.com/widget/bookings/wade-kerzie', '_blank')}
                    >
                      Schedule Consultation
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="font-semibold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                      onClick={() => window.print()}
                    >
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Market Viability Study. Prepared by Wade Kerzie.
            </p>
            <p className="text-sm text-muted-foreground">
              For: Wade Kerzie • Hap & Joann Flaherty
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
