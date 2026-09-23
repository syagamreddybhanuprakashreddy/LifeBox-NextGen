import { describe, it, expect } from "vitest";

describe("Certificate Utilities & LinkedIn URL Construction", () => {
  it("should correctly detect internship certificate type from certificate_type or keywords", () => {
    const isInternship = (cert: { certificate_type?: string; workshop_name?: string; certificate_id?: string }) => {
      return (
        cert.certificate_type === "internship" ||
        cert.workshop_name?.toLowerCase().includes("intern") ||
        cert.certificate_id?.toLowerCase().includes("int")
      );
    };

    expect(isInternship({ certificate_type: "internship", workshop_name: "AI & ML", certificate_id: "LBX-001" })).toBe(true);
    expect(isInternship({ workshop_name: "Web Development Internship", certificate_id: "LBX-002" })).toBe(true);
    expect(isInternship({ certificate_id: "LBX-INT-2025-001", workshop_name: "Data Science" })).toBe(true);
    expect(isInternship({ certificate_type: "workshop", workshop_name: "Next-Gen AI Workshop", certificate_id: "LBX-WS-001" })).toBe(false);
  });

  it("should construct proper LinkedIn certification prefill URL for internship", () => {
    const cert = {
      id: "test-uuid-1234",
      certificate_id: "LBX-INT-2025-001",
      candidate_name: "Jane Doe",
      workshop_name: "Full Stack Web Development",
      start_date: "2025-01-15",
      certificate_type: "internship"
    };

    const isInternship = true;
    const certTitle = isInternship 
      ? (cert.workshop_name.toLowerCase().includes("intern") ? cert.workshop_name : `${cert.workshop_name} Internship`)
      : cert.workshop_name;

    const startDate = new Date(cert.start_date);
    const issueYear = startDate.getFullYear();
    const issueMonth = startDate.getMonth() + 1;
    const verifyUrl = `https://www.lifeboxnextgen.com/verify/${cert.certificate_id}`;

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
    expect(linkedInUrl).toContain("certUrl=https%3A%2F%2Fwww.lifeboxnextgen.com%2Fverify%2FLBX-INT-2025-001");
  });
});
