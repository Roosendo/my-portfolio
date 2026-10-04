import type { ImageMetadata } from "astro";
import { getI18N } from "@c/i18n";
import ExampleCertImg from "@imgs/git.webp";

export interface Certificate {
  id: string;
  title: string;
  image: ImageMetadata;
  alt: string;
  site: string;
  topics: string[];
  url?: string;
  date?: string;
}

export type LocalizedCertificate = Certificate & {
  description: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    id: "example-cert",
    title: "Git & GitHub Professional (Example)",
    image: ExampleCertImg,
    alt: "Placeholder certificate image for Git and GitHub course",
    site: "Platzi",
    topics: ["Git", "GitHub", "Version Control"],
    url: "https://github.com/Roosendo",
    date: "2025",
  },
];

export const getCertificates = (currentLocale: string): LocalizedCertificate[] => {
  const i18n = getI18N({ currentLocale });
  const items = (i18n as Record<string, any>).CERTIFICATES?.ITEMS ?? {};

  return CERTIFICATES.map((cert) => ({
    ...cert,
    description: items[cert.id]?.DESCRIPTION ?? "",
  }));
};
