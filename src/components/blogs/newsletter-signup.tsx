"use client";

interface NewsletterSignupProps {
  serviceUrl?: string;
}

const NewsletterSignup = ({ serviceUrl }: NewsletterSignupProps) => {
  const handleClick = () => {
    if (serviceUrl) {
      window.open(serviceUrl, "_blank", "noopener,noreferrer");
    } else {
      console.log("Newsletter signup - service URL not configured");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Join the newsletter"
      className="w-full bg-green text-background font-bold py-3 px-6 rounded-lg hover:bg-yellow transition-colors flex items-center justify-center gap-2 uppercase tracking-wide"
    >
      <span>JOIN THE NEWSLETTER</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-4 h-4"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export default NewsletterSignup;

