import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { ShieldCheck, XCircle, Loader2, Calendar, Building2, User, Award, Linkedin } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

interface Certificate {
  id: string;
  certificate_id: string;
  candidate_name: string;
  college_name: string;
  workshop_name: string;
  department_name: string;
  start_date: string;
  end_date: string;
  created_at: string;
}

const VerifyCertificate = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [certificate, setCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      if (!id) return;
      try {
        const { data, error } = await supabase
          .from("certificates")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setCertificate(data);
      } catch (error) {
        console.error("Verification failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-black">
        <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
      </div>
    );
  }

  const linkedInUrl = certificate ? `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(certificate.workshop_name)}&organizationName=${encodeURIComponent("LifeBox NextGen")}&issueYear=${new Date(certificate.start_date).getFullYear()}&issueMonth=${new Date(certificate.start_date).getMonth() + 1}&certId=${encodeURIComponent(certificate.certificate_id)}&certUrl=${encodeURIComponent(window.location.origin + "/verify/" + certificate.id)}` : "";

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center relative overflow-hidden bg-black text-white px-6">
      <Seo title="Certificate Verification - LifeBox NextGen" description="Verify your LifeBox NextGen workshop certificate." />
      
      <div className="w-full max-w-2xl z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <span className="font-['Space_Grotesk'] text-3xl font-bold tracking-tighter text-white">
              Life<span className="text-[#00ffff]">Box</span>
            </span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] tracking-wide uppercase">
            Certificate <span className="neon-text-cyan">Verification</span>
          </h1>
        </div>

        <div className="tech-card tech-border-glow p-8 bg-black/80 relative overflow-hidden">
          {certificate ? (
            <div className="space-y-8 relative z-10">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/30">
                  <ShieldCheck className="w-10 h-10 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-green-400 font-['Space_Grotesk'] uppercase tracking-wider">Verified Authentic</h2>
                  <p className="text-slate-400 font-['Inter'] text-sm mt-1">This certificate was officially issued by LifeBox NextGen.</p>
                  <div className="mt-4 inline-block bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded">
                    <p className="text-cyan-400 font-mono font-bold tracking-widest uppercase text-sm">No: {certificate.certificate_id}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 pt-6 border-t border-white/10 font-['Inter']">
                <div className="flex items-start gap-4">
                  <User className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-['Space_Grotesk'] font-bold mb-1">Candidate Name</p>
                    <p className="text-lg font-medium">{certificate.candidate_name}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Building2 className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-['Space_Grotesk'] font-bold mb-1">Institution & Department</p>
                    <p className="text-lg font-medium">{certificate.college_name}</p>
                    <p className="text-sm text-slate-300">{certificate.department_name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Award className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-['Space_Grotesk'] font-bold mb-1">Workshop Name</p>
                    <p className="text-lg font-medium text-cyan-400">{certificate.workshop_name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-['Space_Grotesk'] font-bold mb-1">Duration</p>
                    <p className="text-lg font-medium">
                      {new Date(certificate.start_date).toLocaleDateString()} - {new Date(certificate.end_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10 text-center flex flex-col items-center gap-6">
                <Button 
                  onClick={() => window.open(linkedInUrl, '_blank')}
                  className="bg-[#0A66C2] hover:bg-[#004182] text-white rounded-none font-['Space_Grotesk'] tracking-wide uppercase px-6 h-12 flex items-center gap-2 border border-[#0A66C2]/50 hover:border-[#0A66C2]"
                >
                  <Linkedin className="w-5 h-5" />
                  Add to LinkedIn Profile
                </Button>
                <p className="text-xs text-slate-500 font-mono">
                  Ref: {certificate.id}
                  <br />
                  Issued on: {new Date(certificate.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center space-y-4 py-8">
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30">
                <XCircle className="w-10 h-10 text-red-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-red-400 font-['Space_Grotesk'] uppercase tracking-wider">Not Verified</h2>
                <p className="text-slate-400 font-['Inter'] mt-2">
                  We could not find a valid certificate matching this ID. It may be invalid, expired, or tampered with.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
