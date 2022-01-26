import React from "react"
import { FaInstagram, FaGithub } from "react-icons/fa"

const header = [
  { id: 1, text: "So funktioniert es", url: "#howto" },
  { id: 2, text: "Was hast du davon?", url: "#benefits" },
  { id: 3, text: "Warum machen wir das?", url: "#about" },
]

const footerLinks = [
  { id: 1, text: "Impressum", url: "/imprint" },
  { id: 2, text: "Datenschutz", url: "/security" },
  { id: 3, text: "FAQ", url: "/faq" },
]

const footerIcons = [
  {
    id: 1,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/kodebi_bookshare/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    url: "https://github.com/chrizzlekicks/buecherregal-landing-page",
  },
]

export { header, footerLinks, footerIcons }
