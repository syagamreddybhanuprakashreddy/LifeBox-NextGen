import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { 
  ShieldCheck, 
  XCircle, 
  Loader2, 
  Calendar, 
  Building2, 
  User, 
  Award, 
  Linkedin, 
  Search, 
  Copy, 
  Check, 
  Briefcase, 
  ExternalLink,
  Sparkles
} from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
  certificate_type?: string;
}

const VerifyCertificate = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [loading, setLoading] = useState(Boolean(id));
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [searchQuery, setSearchQuery] = useState(id || "");
  const [copied, setCopied] = useState(false);
  const [hasSearched, setHasSearched] = useState(Boolean(id));

  useEffect(() => {
    if (!id) {
      setCertificate(null);
      setLoading(false);
      return;
    }

    const fetchCertificate = async () => {
      setLoading(true);
      setHasSearched(true);
      try {
        const trimmed = id.trim();
        const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(trimmed);

        let certData: Certificate | null = null;

        // 1. If it's a UUID, look up by primary key id
        if (isUuid) {
          const { data, error } = await supabase
            .from("certificates")
            .select("*")
            .eq("id", trimmed)
            .maybeSingle();
          if (!error && data) certData = data as Certificate;
        }

        // 2. If not found by UUID or not a UUID, look up by certificate_id (e.g. LBX-INT-2025-001)
        if (!certData) {
          const { data, error } = await supabase
            .from("certificates")
            .select("*")
            .ilike("certificate_id", trimmed)
            .maybeSingle();
          if (!error && data) certData = data as Certificate;
        }

        // 3. Fallback: try case-insensitive match on id column if text
        if (!certData && !isUuid) {
          const { data } = await supabase
            .from("certificates")
            .select("*")
            .eq("id", trimmed)
            .maybeSingle();
          if (data) certData = data as Certificate;
        }

        setCertificate(certData);
      } catch (error) {
        console.error("Verification query error:", error);
        setCertificate(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [id]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/verify/${encodeURIComponent(searchQuery.trim())}`);
  };

  const isInternship = certificate ? (
    certificate.certificate_type === "internship" ||
    certificate.workshop_name?.toLowerCase().includes("intern") ||
    certificate.certificate_id?.toLowerCase().includes("int")
  ) : false;

  const certTypeLabel = isInternship ? "Internship Certificate" : "Workshop Certificate";
  const roleOrTopicLabel = isInternship ? "Internship Domain / Role" : "Workshop Name";

  // Pre-formatted LinkedIn Certification Name
  const getLinkedInCertName = () => {
    if (!certificate) return "";
    const name = certificate.workshop_name || "";
    if (isInternship) {
      if (name.toLowerCase().includes("intern")) {
        return name;
      }
      return `${name} Internship`;
    }
    return `${name} Workshop`;
  };

  // Base Verification URL (prefer public domain, fallback to origin)
  const canonicalDomain = window.location.origin.includes("localhost")
    ? window.location.origin
    : "https://www.lifeboxnextgen.com";

  const verificationUrl = certificate
    ? `${canonicalDomain}/verify/${certificate.certificate_id || certificate.id}`
    : "";

  const startDate = certificate?.start_date ? new Date(certificate.start_date) : new Date();
  const issueYear = !isNaN(startDate.getTime()) ? startDate.getFullYear() : new Date().getFullYear();
  const issueMonth = !isNaN(startDate.getTime()) ? startDate.getMonth() + 1 : new Date().getMonth() + 1;

  const linkedInUrl = certificate
    ? `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(
        getLinkedInCertName()
      )}&organizationName=${encodeURIComponent("LifeBox NextGen")}&issueYear=${issueYear}&issueMonth=${issueMonth}&certId=${encodeURIComponent(
        certificate.certificate_id || certificate.id
      )}&certUrl=${encodeURIComponent(verificationUrl)}`
    : "";

  const copyVerificationLink = () => {
    if (!verificationUrl) return;
    navigator.clipboard.writeText(verificationUrl);
    setCopied(true);
    toast({
      title: "Link Copied!",
      description: "Direct verification link copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-start relative overflow-hidden bg-black text-white px-4 sm:px-6">
      <Seo 
        title={`${isInternship ? "Internship" : "Workshop"} Certificate Verification - LifeBox NextGen`} 
        description="Verify official LifeBox NextGen physical and digital certificates with verified authentic accreditation." 
      />

      {/* Cyber Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[250px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-2xl z-10 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <Link to="/" className="inline-block transition-transform hover:scale-105">
            <span className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tighter text-white">
              Life<span className="text-[#00ffff]">Box</span> <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono border border-cyan-400/40 px-2 py-0.5 rounded ml-1">NextGen</span>
            </span>
          </Link>
          <h1 className="text-2xl sm:text-4xl font-bold font-['Space_Grotesk'] tracking-wide uppercase">
            Certificate <span className="neon-text-cyan">Verification</span>
          </h1>
          <p className="text-slate-400 font-['Inter'] text-xs sm:text-sm max-w-md mx-auto">
            Scan the QR code on your LifeBox NextGen certificate or enter the Certificate ID below to confirm authenticity.
          </p>
        </div>

        {/* Certificate ID Search Input */}
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/70" />
            <Input
              type="text"
              placeholder="Enter Certificate ID (e.g. LBX-INT-2025-001)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-black/80 border-white/20 text-white pl-10 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-mono text-sm h-12"
            />
          </div>
          <Button 
            type="submit" 
            className="btn-tech h-12 rounded-none px-6 font-['Space_Grotesk'] tracking-wider uppercase"
          >
            Verify
          </Button>
        </form>

        {/* Loading State */}
        {loading && (
          <div className="tech-card tech-border-glow p-12 bg-black/80 flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
            <p className="font-['Space_Grotesk'] text-slate-400 uppercase tracking-widest text-xs">
              Verifying Certificate in Secure Registry...
            </p>
          </div>
        )}

        {/* Verified Authentic Result */}
        {!loading && certificate && (
          <div className="tech-card tech-border-glow p-6 sm:p-8 bg-black/90 relative overflow-hidden border border-cyan-500/40 shadow-[0_0_50px_rgba(0,255,255,0.15)]">
            {/* Top Seal Badge */}
            <div className="flex flex-col items-center text-center space-y-4 pb-6 border-b border-white/10">
              <div className="relative">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border-2 border-green-400/50 shadow-[0_0_25px_rgba(34,197,94,0.3)]">
                  <ShieldCheck className="w-10 h-10 text-green-400" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-cyan-500 text-black p-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-['Space_Grotesk'] uppercase tracking-wider mb-2 font-semibold">
                  {certTypeLabel}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 font-['Space_Grotesk'] uppercase tracking-wider">
                  Verified Authentic
                </h2>
                <p className="text-slate-400 font-['Inter'] text-sm mt-1">
                  This official accreditation was issued and confirmed by <span className="text-white font-medium">LifeBox NextGen</span>.
                </p>
              </div>

              {/* Certificate Number Display */}
              <div className="bg-cyan-500/10 border border-cyan-500/30 px-5 py-2.5 rounded-none flex items-center gap-3">
                <span className="text-xs uppercase font-['Space_Grotesk'] text-slate-400 tracking-wider">No:</span>
                <span className="text-cyan-400 font-mono font-bold tracking-widest text-sm sm:text-base">
                  {certificate.certificate_id}
                </span>
              </div>

              {/* Action Buttons: Add to LinkedIn & Copy Link */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full pt-2">
                <Button 
                  onClick={() => window.open(linkedInUrl, "_blank", "noopener,noreferrer")}
                  className="w-full sm:flex-1 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-none font-['Space_Grotesk'] tracking-wide uppercase px-6 h-12 flex items-center justify-center gap-2 border border-[#0A66C2]/60 hover:border-[#0A66C2] shadow-lg shadow-[#0A66C2]/20 transition-all font-semibold"
                >
                  <Linkedin className="w-5 h-5 fill-current" />
                  Add to LinkedIn Profile
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </Button>

                <Button
                  onClick={copyVerificationLink}
                  variant="outline"
                  className="w-full sm:w-auto rounded-none border-white/20 text-white hover:bg-white/10 h-12 font-['Space_Grotesk'] uppercase tracking-wider text-xs px-4"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2 text-green-400" />
                      Link Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2 text-cyan-400" />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Candidate & Internship/Workshop Details Grid */}
            <div className="grid gap-5 py-6 font-['Inter']">
              {/* Candidate Name */}
              <div className="flex items-start gap-4 p-3 bg-white/[0.02] border border-white/5">
                <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-['Space_Grotesk'] font-bold mb-0.5">
                    Candidate Name
                  </p>
                  <p className="text-lg font-semibold text-white tracking-wide">
                    {certificate.candidate_name}
                  </p>
                </div>
              </div>

              {/* Internship Domain or Workshop Topic */}
              <div className="flex items-start gap-4 p-3 bg-white/[0.02] border border-white/5">
                <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  {isInternship ? <Briefcase className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-['Space_Grotesk'] font-bold mb-0.5">
                    {roleOrTopicLabel}
                  </p>
                  <p className="text-lg font-semibold text-cyan-400">
                    {certificate.workshop_name}
                  </p>
                  {isInternship && (
                    <p className="text-xs text-slate-400 mt-0.5">
                      Professional Internship Track by LifeBox NextGen
                    </p>
                  )}
                </div>
              </div>

              {/* Institution & Department */}
              <div className="flex items-start gap-4 p-3 bg-white/[0.02] border border-white/5">
                <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-['Space_Grotesk'] font-bold mb-0.5">
                    Institution & Department
                  </p>
                  <p className="text-base font-medium text-white">
                    {certificate.college_name}
                  </p>
                  <p className="text-sm text-slate-400">
                    {certificate.department_name}
                  </p>
                </div>
              </div>

              {/* Duration / Tenure */}
              <div className="flex items-start gap-4 p-3 bg-white/[0.02] border border-white/5">
                <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-['Space_Grotesk'] font-bold mb-0.5">
                    Tenure / Duration
                  </p>
                  <p className="text-base font-medium text-white font-mono">
                    {new Date(certificate.start_date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date(certificate.end_date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Official Registry Reference Footer */}
            <div className="pt-6 border-t border-white/10 text-center flex flex-col items-center space-y-1">
              <p className="text-xs text-slate-500 font-mono">
                Verification Ref: <span className="text-slate-400">{certificate.id}</span>
              </p>
              <p className="text-xs text-slate-500 font-mono">
                Registry Timestamp: {new Date(certificate.created_at).toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-600 mt-2">
                Certified by LifeBox NextGen Corporate & Academic Accreditation Registry.
              </p>
            </div>
          </div>
        )}

        {/* Not Found / Invalid State */}
        {!loading && hasSearched && !certificate && (
          <div className="tech-card tech-border-glow p-8 bg-black/90 flex flex-col items-center text-center space-y-4 border border-red-500/30">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/40">
              <XCircle className="w-10 h-10 text-red-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-red-400 font-['Space_Grotesk'] uppercase tracking-wider">
                Certificate Not Found
              </h2>
              <p className="text-slate-400 font-['Inter'] text-sm mt-2 max-w-md">
                We could not find an authentic certificate matching{" "}
                <span className="font-mono text-white bg-white/10 px-1.5 py-0.5 rounded">
                  {id || searchQuery}
                </span>
                . Please verify the Certificate ID printed on the credential or re-scan the QR code.
              </p>
            </div>
          </div>
        )}

        {/* Initial Prompt when visiting /verify without search */}
        {!loading && !hasSearched && !certificate && (
          <div className="tech-card tech-border-glow p-8 bg-black/80 text-center space-y-4 border border-dashed border-slate-700">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto text-cyan-400">
              <Search className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-['Space_Grotesk'] uppercase text-white tracking-wide">
                Ready to Verify
              </h3>
              <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">
                Scan the QR code printed on your physical/digital internship certificate or enter the ID above to view instant verified status and add to LinkedIn.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default VerifyCertificate;
