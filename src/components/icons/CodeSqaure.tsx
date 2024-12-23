import React from 'react';

export function CodeSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m8 10 2 2-2 2" />
      <path d="m16 10-2 2 2 2" />
    </svg>
  );
}