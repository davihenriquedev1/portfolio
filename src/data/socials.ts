import { LiaLinkedin } from "react-icons/lia";
import {
  SiGithub,
  SiInstagram,
  SiTiktok,
} from "react-icons/si";
import type { Social } from "../types/social";
import { CgMail } from "react-icons/cg";

export const socials: Social[] = [
  {
    title: "E-mail",
    description: "Entre em contato comigo.",
    icon: CgMail,
    href: "mailto:contato@davihenriquedev.com",
    value: "contato@davihenriquedev.com",
  },
  {
    title: "GitHub",
    description: "Veja meus projetos.",
    icon: SiGithub,
    href: "https://github.com/davihenriquedev1",
    value: "@davihenriquedev1",
  },
  {
    title: "LinkedIn",
    description: "Vamos conectar.",
    icon: LiaLinkedin,
    href: "https://linkedin.com/in/davihenriquedev",
    value: "in/davihenriquedev",
  },
  {
    title: "Instagram",
    description: "Conteúdo e bastidores.",
    icon: SiInstagram,
    href: "https://instagram.com/davihenriquedev",
    value: "@davihenriquedev",
  },
  {
    title: "TikTok",
    description: "Tecnologia e programação.",
    icon: SiTiktok,
    href: "https://tiktok.com/@davihenriquedev",
    value: "@davihenriquedev",
  },
];