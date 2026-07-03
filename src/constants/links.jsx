import {
  BrandInstagramIcon,
  BrandXIcon,
  BrandYoutubeIcon,
  BrandTikTokIcon,
  FaBriefcaseIcon,
  FaCoffeeIcon,
  FaUserSecretIcon,
  KichiIcon,
} from '../components/icons';

export const SOCIAL_LINKS = [
  { Icon: BrandInstagramIcon, href: "https://instagram.com/kaishiscd", label: "Instagram" },
  { Icon: BrandTikTokIcon, href: "https://tiktok.com/@kaishiscd", label: "TikTok" },
  { Icon: BrandYoutubeIcon, href: "https://youtube.com/@kaishiscd", label: "YouTube" },
  { Icon: BrandXIcon, href: "https://twitter.com/kaishiscd", label: "X (Twitter)" },
];

export const LINK_BUTTONS = [
  {
    icon: <FaBriefcaseIcon size={18} />,
    text: "My Portfolio",
    delay: "1.4s",
    href: "https://kaishi.netlify.app/",
    variant: "featured",
    badge: "Under Maintenance",
    disabled: true,
  },
  {
    icon: <KichiIcon size={18} />,
    text: "Kichi",
    delay: "1.55s",
    href: "https://kichi.web.id",
    variant: "featured",
    badge: "Discord bot AI",
  },
  {
    icon: <FaUserSecretIcon size={18} />,
    text: "Bisik-bisik",
    delay: "1.7s",
    href: "https://bisik-bisik.vercel.app/",
    variant: "featured",
    badge: "Whisper whatever you want",
  },
];
