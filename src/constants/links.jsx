import {
  BrandInstagramIcon,
  BrandXIcon,
  BrandYoutubeIcon,
  BrandTikTokIcon,
  FaBriefcaseIcon,
  FaCoffeeIcon,
  FaUserSecretIcon,
} from '../components/icons';

export const SOCIAL_LINKS = [
  { Icon: BrandInstagramIcon, href: "https://instagram.com/kaishiscd", label: "Instagram" },
  { Icon: BrandXIcon, href: "https://twitter.com/kaishiscd", label: "X (Twitter)" },
  { Icon: BrandYoutubeIcon, href: "https://youtube.com/@kaishiscd", label: "YouTube" },
  { Icon: BrandTikTokIcon, href: "https://tiktok.com/@kaishiscd", label: "TikTok" },
];

export const LINK_BUTTONS = [
  {
    icon: <FaBriefcaseIcon size={20} />,
    text: "My Portfolio",
    delay: "1.4s",
    href: "https://kaishi.netlify.app/",
  },
  {
    icon: <FaCoffeeIcon size={20} />,
    text: "Trakteer",
    delay: "1.6s",
    href: "https://trakteer.id/kaishiscd",
  },
  {
    icon: <FaUserSecretIcon size={20} />,
    text: "Bisik-bisik",
    delay: "1.7s",
    href: "https://bisik-bisik.vercel.app/",
  },
];