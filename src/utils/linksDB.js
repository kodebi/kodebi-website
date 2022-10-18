import React from "react"
import { FaInstagram, FaGithub } from "react-icons/fa"

const header = [
  { id: 1, text: "So funktioniert es", url: "#howto" },
  { id: 2, text: "Was hast du davon?", url: "#benefits" },
  { id: 3, text: "Warum machen wir das?", url: "#about" },
]

const footerLinks = [
  { to: "/imprint", children: "Impressum" },
  { to: "/security", children: "Datenschutz" },
  { to: "/faq", children: "FAQ" },
]

const footerIcons = [
  {
    href: "https://www.instagram.com/kodebi_bookshare/",
    children: <FaInstagram />,
  },
  {
    href: "https://github.com/kodebi/kodebi-website",
    children: <FaGithub />,
  },
]

export { header, footerLinks, footerIcons }
