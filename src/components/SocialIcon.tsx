type SocialIconProps = {
  label: string;
  size?: number;
};

export function SocialIcon({ label, size = 16 }: SocialIconProps) {
  if (label === "Instagram") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45Z" />
      </svg>
    );
  }

  if (label === "YouTube") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14c.5-1.88.5-5.81.5-5.81s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
      </svg>
    );
  }

  if (label === "X") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.51 11.24h-6.66l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.84L7.08 4.13H5.12l11.96 15.64Z" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 22v-7.5h2.6l.4-3h-3V9.6c0-.87.27-1.46 1.52-1.46H17V5.4c-.3-.04-1.27-.13-2.4-.13-2.37 0-4 1.45-4 4.1V11.5H8v3h2.6V22h2.9z" />
    </svg>
  );
}
