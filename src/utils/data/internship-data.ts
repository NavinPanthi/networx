interface JobCardProps {
  id: number;
  title: string;
  image: string;
  datePosted: string;
  type: "Remote" | "Onsite" | "Hybrid";
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  payment: "Paid" | "Unpaid";
  company: string;
}

export const jobs: JobCardProps[] = [
  {
    id: 1,
    title: "Ethical Hacking Job",
    image: "/ethical-hacking.jpg",
    datePosted: "Nov 2, 2025",
    type: "Remote",
    skillLevel: "Intermediate",
    payment: "Paid",
    company: "Smart tech",
  },
  {
    id: 2,
    title: "Network Security Analyst Job",
    image: "/network-security.jpg",
    datePosted: "Oct 25, 2025",
    type: "Hybrid",
    skillLevel: "Advanced",
    payment: "Unpaid",
    company: "Cyber Safe",
  },
  {
    id: 3,
    title: "Cyber Threat Intelligence Job",
    image: "/cyber-threat.png",
    datePosted: "Nov 1, 2025",
    type: "Onsite",
    skillLevel: "Beginner",
    payment: "Paid",
    company: "Spark cyber",
  },
  {
    id: 4,
    title: "Penetration Testing Job",
    image: "/penetration-testing.jpeg",
    datePosted: "Oct 30, 2025",
    type: "Remote",
    skillLevel: "Advanced",
    payment: "Paid",
    company: "Panthi company",
  },
  {
    id: 5,
    title: "Digital Forensics Job",
    image: "/forensic.jpg",
    datePosted: "Oct 27, 2025",
    type: "Onsite",
    skillLevel: "Intermediate",
    payment: "Unpaid",
    company: "Panthi company",
  },
  {
    id: 6,
    title: "Cloud Security Job",
    image: "/csi.jpeg",
    datePosted: "Oct 28, 2025",
    type: "Hybrid",
    skillLevel: "Beginner",
    payment: "Paid",
    company: "Panthi company",
  },
  {
    id: 7,
    title: "SOC (Security Operations Center) Job",
    image: "/soc.jpg",
    datePosted: "Nov 3, 2025",
    type: "Onsite",
    skillLevel: "Intermediate",
    payment: "Paid",
    company: "Panthi company",
  },
  {
    id: 8,
    title: "Incident Response Job",
    image: "/is.jpg",
    datePosted: "Oct 26, 2025",
    type: "Remote",
    skillLevel: "Advanced",
    payment: "Unpaid",
    company: "Panthi company",
  },
  {
    id: 9,
    title: "Vulnerability Assessment Job",
    image: "/va.jpg",
    datePosted: "Oct 29, 2025",
    type: "Hybrid",
    skillLevel: "Beginner",
    payment: "Paid",
    company: "Panthi company",
  },
];
