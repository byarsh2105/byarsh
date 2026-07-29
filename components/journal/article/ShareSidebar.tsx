import { FaTwitter, FaLinkedinIn, FaLink, FaEnvelope } from 'react-icons/fa6';

interface ShareSidebarProps {
  title: string;
}

export default function ShareSidebar({ title }: ShareSidebarProps) {
  return (
    <div className="text-muted-foreground sticky top-32 flex flex-col items-center gap-6 pt-16">
      <span className="text-[13px] font-medium">Share</span>
      <button
        aria-label="Share on Twitter"
        className="hover:text-primary p-2 transition-colors"
      >
        <FaTwitter size={18} />
      </button>
      <button
        aria-label="Share on LinkedIn"
        className="hover:text-primary p-2 transition-colors"
      >
        <FaLinkedinIn size={18} />
      </button>
      <button
        aria-label="Copy Link"
        className="hover:text-primary p-2 transition-colors"
      >
        <FaLink size={18} />
      </button>
      <button
        aria-label="Share via Email"
        className="hover:text-primary p-2 transition-colors"
      >
        <FaEnvelope size={18} />
      </button>
    </div>
  );
}
