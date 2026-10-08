export function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M6.5 4H12v5.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Mail() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3.5" width="13" height="9" stroke="currentColor" strokeWidth="1.2" />
      <path d="m2 4 6 5 6-5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Orcid() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="5.2" r="0.8" fill="currentColor" />
      <path d="M8 7.2v4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function GitHub() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.2a6.8 6.8 0 0 0-2.15 13.25c.34.06.46-.15.46-.33v-1.16c-1.89.41-2.29-.91-2.29-.91-.31-.78-.76-1-.76-1-.62-.42.05-.41.05-.41.68.05 1.04.7 1.04.7.6 1.04 1.59.74 1.98.56.06-.44.24-.74.43-.91-1.51-.17-3.1-.76-3.1-3.36 0-.74.26-1.35.7-1.82-.07-.17-.3-.87.07-1.81 0 0 .57-.18 1.86.7a6.4 6.4 0 0 1 3.38 0c1.29-.88 1.86-.7 1.86-.7.37.94.14 1.64.07 1.81.44.47.7 1.08.7 1.82 0 2.61-1.59 3.19-3.11 3.36.25.21.46.63.46 1.28v1.9c0 .18.12.4.47.33A6.8 6.8 0 0 0 8 1.2Z" />
    </svg>
  );
}

export function MenuIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {open ? (
        <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.4" />
      ) : (
        <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.4" />
      )}
    </svg>
  );
}
