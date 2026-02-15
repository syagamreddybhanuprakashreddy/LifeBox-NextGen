import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Target, Eye, ShieldCheck, Users, Award, Building2 } from "lucide-react";
import Seo from "@/components/Seo";

const stats = [
  { label: "Active Users", value: "10k+" },
  { label: "Institutions", value: "50+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Data Processed", value: "1TB+" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Security",
    desc: "We treat data privacy and security as foundational, not an afterthought. SOC-2 compliant practices tailored for institution-critical data."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    desc: "Complex enterprise software doesn't have to be complicated. We obsess over usability and accessibility for all stakeholders."
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    desc: "We write clean, maintainable, and scalable code. Our technical debt is low, and our performance standards are high."
  }
];

const About = () => {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Seo
        title="About Us"
        description="LifeBox NextGen is an enterprise technology company building the digital backbone for modern institutions."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
            Building the digital backbone <br /> for modern institutions.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mx-auto max-w-2xl">
            LifeBox NextGen was founded on a simple premise: Enterprise software should be powerful, scalable, and delightful to use.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            {stats.map(s => (
              <div key={s.label} className="px-4">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{s.value}</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision split */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                To deliver enterprise-grade digital infrastructure that empowers organizations to operate efficiently, scale confidently, and innovate continuously.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                We believe that technology should be an enabler, not a bottleneck. Our platforms are designed to remove friction and unlock potential.
              </p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the trusted technology partner for institutions and enterprises across sectors — building platforms that define the next generation of digital operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Engineering Values</h2>
            <p className="text-gray-400 text-lg">
              Our culture is built on technical excellence and customer obsession.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl">
                <v.icon className="h-8 w-8 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Team Abstract */}
      <section className="py-24 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-16">Leadership</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Bhanu Prakash Syagam Reddy",
                role: "Founder & CEO",
                image: "https://i.ibb.co/JR5JnxxD/Whats-App-Image-2026-02-15-at-09-32-05.jpg"
              },
              { title: "Harsha Bala Subramanian", role: "CTO", image: "https://i.ibb.co/cc1680yw/Whats-App-Image-2026-02-15-at-09-42-04.jpg" },
              { title: "Head of Product", role: "Product" },
              { title: "Uday Kiran K", role: "Head of Operations", image: "https://i.ibb.co/5WzKB6yg/Whats-App-Image-2025-09-27-at-10-32-48.jpg" },
              { title: "Head of QA & Security", role: "Testing & Compliance" }
            ].map((l, i) => (
              <div key={i} className="group flex flex-col items-center">
                <Avatar className="h-48 w-48 rounded-2xl mb-4 bg-gray-100">
                  <AvatarImage src={l.image} alt={l.title} className="object-cover" />
                  <AvatarFallback className="rounded-2xl bg-gray-100">
                    <Building2 className="h-12 w-12 text-gray-300" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-gray-900">{l.title}</h3>
                <p className="text-sm text-gray-500">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
