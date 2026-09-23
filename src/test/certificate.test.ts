import { describe, it, expect } from "vitest";

describe("Certificate Utilities & LinkedIn URL Construction", () => {
  const detectInternship = (
    cert: { certificate_type?: string; workshop_name?: string; certificate_id?: string },
    urlType?: string
  ) => {
    const isExplicitWorkshop = Boolean(
      urlType === "workshop" ||
      cert.certificate_type === "workshop" ||
      cert.certificate_id?.toLowerCase().includes("ws-") ||
      cert.certificate_id?.toLowerCase().startsWith("lbx-ws") ||
      cert.workshop_name?.toLowerCase().includes("workshop")
    );

    const isExplicitInternship = Boolean(
      urlType === "internship" ||
      cert.certificate_type === "internship" ||
      cert.certificate_id?.toLowerCase().includes("int") ||
      cert.certificate_id?.toLowerCase().includes("intern") ||
      cert.workshop_name?.toLowerCase().includes("intern")
    );

    return isExplicitInternship || !isExplicitWorkshop;
  };

  const getCleanDomain = (rawTopic: string) => {
    return rawTopic
      .replace(/\s*\((?:Internship|Workshop)\)/gi, "")
      .replace(/\s*(?:Internship|Workshop)\s*$/gi, "")
      .trim() || rawTopic;
  };

  it("should correctly detect internship certificate type in all scenarios", () => {
    // 1. Explicit via certificate_type
    expect(detectInternship({ certificate_type: "internship", workshop_name: "AI & ML", certificate_id: "LBX-001" })).toBe(true);

    // 2. Explicit via URL parameter ?type=internship
    expect(detectInternship({ workshop_name: "Web Development", certificate_id: "LBX-002" }, "internship")).toBe(true);

    // 3. Fallback when type column is absent and domain doesn't say workshop
    expect(detectInternship({ workshop_name: "Full Stack Web Development", certificate_id: "LBX-2025-001" })).toBe(true);

    // 4. Stored with (Internship) fallback in workshop_name
    expect(detectInternship({ workshop_name: "Data Science (Internship)", certificate_id: "LBX-003" })).toBe(true);

    // 5. Explicit workshop
    expect(detectInternship({ certificate_type: "workshop", workshop_name: "Next-Gen AI Workshop", certificate_id: "LBX-WS-001" })).toBe(false);
    expect(detectInternship({ workshop_name: "Robotics Workshop", certificate_id: "LBX-004" })).toBe(false);
    expect(detectInternship({ workshop_name: "Cloud Computing", certificate_id: "LBX-WS-2025-001" })).toBe(false);
  });

  it("should clean domain name and format LinkedIn Certification Name properly", () => {
    expect(getCleanDomain("Full Stack Web Development (Internship)")).toBe("Full Stack Web Development");
    expect(getCleanDomain("AI & Machine Learning Internship")).toBe("AI & Machine Learning");
    expect(getCleanDomain("Robotics Workshop")).toBe("Robotics");

    const domain = getCleanDomain("Full Stack Web Development (Internship)");
    const linkedInTitle = `${domain} Internship`;
    expect(linkedInTitle).toBe("Full Stack Web Development Internship");
  });

  it("should construct proper LinkedIn certification prefill URL for internship with clean name", () => {
    const cert = {
      id: "test-uuid-1234",
      certificate_id: "LBX-INT-2025-001",
      candidate_name: "Jane Doe",
      workshop_name: "Full Stack Web Development (Internship)",
      start_date: "2025-01-15",
      certificate_type: "internship"
    };

    const isInternship = detectInternship(cert);
    const cleanDomain = getCleanDomain(cert.workshop_name);
    const certTitle = isInternship ? `${cleanDomain} Internship` : `${cleanDomain} Workshop`;

    const startDate = new Date(cert.start_date);
    const issueYear = startDate.getFullYear();
    const issueMonth = startDate.getMonth() + 1;
    const typeParam = isInternship ? "?type=internship" : "?type=workshop";
    const verifyUrl = `https://www.lifeboxnextgen.com/verify/${cert.certificate_id}${typeParam}`;

    const linkedInUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(
      certTitle
    )}&organizationName=${encodeURIComponent("LifeBox NextGen")}&issueYear=${issueYear}&issueMonth=${issueMonth}&certId=${encodeURIComponent(
      cert.certificate_id
    )}&certUrl=${encodeURIComponent(verifyUrl)}`;

    expect(linkedInUrl).toContain("startTask=CERTIFICATION_NAME");
    expect(linkedInUrl).toContain("name=Full%20Stack%20Web%20Development%20Internship");
    expect(linkedInUrl).toContain("organizationName=LifeBox%20NextGen");
    expect(linkedInUrl).toContain("issueYear=2025");
    expect(linkedInUrl).toContain("issueMonth=1");
    expect(linkedInUrl).toContain("certId=LBX-INT-2025-001");
    expect(linkedInUrl).toContain("certUrl=https%3A%2F%2Fwww.lifeboxnextgen.com%2Fverify%2FLBX-INT-2025-001%3Ftype%3Dinternship");
  });
});
