/// <reference types="vite/client" />

interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
  scroll25?: boolean;
  scroll50?: boolean;
  scroll75?: boolean;
  scroll100?: boolean;
}
