import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, Shield, Globe, Cpu, Layers, Zap, BarChart3, Lock
} from "lucide-react";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Seo
        title="Enterprise Digital Infrastructure"
        description="LifeBox NextGen builds scalable digital platforms, enterprise ERP systems, and AI-driven career intelligence solutions."
      />

      {/* Hero Section - Minimal & Strong */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-100 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:bg-gray-50">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-medium text-gray-600 tracking-wide uppercase">New: Gnan AI 2.0 Released</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Intelligent infrastructure <br className="hidden md:block" />
            for <span className="text-gray-500">modern enterprises.</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 font-[450]">
            We build the backbone of your digital transformation. From AI-driven assessment engines to scalable ERP systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Button size="lg" className="h-12 px-8 text-[15px] bg-gray-900 text-white hover:bg-gray-800 transition-all shadow-md rounded-md font-medium" asChild>
              <Link to="/products">Start Building</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-[15px] border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md font-medium bg-white shadow-sm" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof - Monochrome Strict */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale mix-blend-multiply">
            {/* Using text placeholders for logos to ensure "Enterprise" feel vs random icons */}
            <span className="text-xl font-bold font-mono text-gray-800">ACME Corp</span>
            <span className="text-xl font-bold font-mono text-gray-800">GlobalTech</span>
            <span className="text-xl font-bold font-mono text-gray-800">University.edu</span>
            <span className="text-xl font-bold font-mono text-gray-800">HealthPlus</span>
            <span className="text-xl font-bold font-mono text-gray-800">FinServe</span>
          </div>
        </div>
      </section>

      {/* Bento Grid layout for Products */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Unified Platform</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our suite of integrated tools creates a seamless ecosystem for education, management, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            {/* Card 1: Gnan AI (Large) */}
            <div className="md:col-span-2 row-span-1 rounded-xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="relative z-10 max-w-md">
                <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gnan AI</h3>
                <p className="text-gray-500 mb-6">Advanced interview intelligence. Automate technical rounds with AI-driven coding assessments and behavioral analysis.</p>
                <a href="https://gnan-ai.in" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-900 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                  Explore Gnan AI <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              {/* Abstract UI representation */}
              <div className="absolute right-[-40px] bottom-[-40px] w-96 h-64 bg-gray-100 rounded-xl border border-gray-200 transform -rotate-6 shadow-sm group-hover:-translate-y-2 transition-transform duration-500" />
            </div>

            {/* Card 2: ERP */}
            <div className="md:col-span-1 border border-gray-200 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise ERP</h3>
              <p className="text-sm text-gray-500 mb-6">Complete institutional management system. From admissions to alumni.</p>
              <div className="absolute bottom-6 right-6">
                <BarChart3 className="h-24 w-24 text-gray-50 opacity-50" />
              </div>
            </div>

            {/* Card 3: LifeOS */}
            <div className="md:col-span-1 border border-gray-200 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">LifeOS Ecosystem</h3>
              <p className="text-sm text-gray-500 mb-4">Unified identity. One login for all your campus and enterprise services.</p>
              <a href="https://lifebox-community.web.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-900 flex items-center gap-1 hover:text-emerald-600 transition-colors">
                Visit LifeOS <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Card 4: Services */}
            <div className="md:col-span-2 border border-blue-600 bg-blue-600 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="relative z-10 text-white">
                <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center text-white mb-6">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Engineering Services</h3>
                <p className="text-blue-100 mb-6 max-w-lg">Need custom infrastructure? Our engineering team builds bespoke solutions for high-scale problems.</p>
                <Link to="/services" className="inline-flex items-center justify-center h-10 px-6 rounded bg-white text-blue-600 font-medium text-sm transition-colors hover:bg-blue-50">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Minimal */}
      <section className="py-24 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Enterprise Grade Security</h3>
              <p className="text-gray-500 leading-relaxed text-sm">SOC-2 compliant architecture with end-to-end encryption for all sensitive institutional data.</p>
            </div>
            <div>
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Built on edge-computing principles ensuring low latency access from anywhere in the world.</p>
            </div>
            <div>
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Role-Based Access</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Granular permission controls designed for complex organizational hierarchies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple & Direct */}
      <section className="py-32 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to scale your infrastructure?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join 50+ institutions using LifeBox NextGen to power their operations.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base bg-white text-gray-900 hover:bg-gray-100 font-semibold" asChild>
              <Link to="/contact">Get accurate pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
