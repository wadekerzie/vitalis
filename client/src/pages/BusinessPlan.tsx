// Business Plan page - full investor plan + one-pager tab
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, BarChart2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import InvestorOnePager from "@/components/InvestorOnePager";
import { Streamdown } from 'streamdown';

export default function BusinessPlan() {
  const [activeTab, setActiveTab] = useState<"onepager" | "fullplan">("onepager");
  const [planContent, setPlanContent] = useState<string>("");

  useEffect(() => {
    if (activeTab === "fullplan" && !planContent) {
      fetch("/business-plan.md")
        .then((r) => r.text())
        .then(setPlanContent)
        .catch(() => setPlanContent("# Error\nCould not load business plan."));
    }
  }, [activeTab, planContent]);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Fixed logo */}
      <div className="fixed top-2 left-2 z-50">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/102801090/MTioXterhBgvPFrr.png"
          alt="Kerzie AI"
          className="w-10 h-10 object-contain drop-shadow-lg hover:scale-105 transition-transform"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-[#0a0f1a]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm">
              <ArrowLeft className="h-4 w-4" />
              Market Study
            </button>
          </Link>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("onepager")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "onepager"
                  ? "bg-emerald-500 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              <BarChart2 className="h-4 w-4" />
              Investor One-Pager
            </button>
            <button
              onClick={() => setActiveTab("fullplan")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "fullplan"
                  ? "bg-emerald-500 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              <FileText className="h-4 w-4" />
              Full Business Plan
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {activeTab === "onepager" && <InvestorOnePager />}

      {activeTab === "fullplan" && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card className="bg-white shadow-xl">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle className="text-2xl">Vitalis — Full Business Plan</CardTitle>
              <CardDescription>Confidential Investor Document — February 2026</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {planContent ? (
                <div className="prose prose-slate max-w-none">
                  <Streamdown>{planContent}</Streamdown>
                </div>
              ) : (
                <div className="flex items-center justify-center py-16">
                  <div className="animate-spin h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
