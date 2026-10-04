import type { ImageMetadata } from "astro";
import { getI18N } from "@c/i18n";
import CSharp01 from "@imgs/certificates/Csharp01.webp";

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
    id: "qj5dtlcpnk",
    title: "C#: Empieza tu camino en el lenguaje",
    image: CSharp01,
    alt: "C#: Empieza tu camino en el lenguaje en DevTalles",
    site: "DevTalles",
    topics: ["C#"],
    url: "https://cursos.devtalles.com/certificates/qj5dtlcpnk",
    date: "2026",
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
