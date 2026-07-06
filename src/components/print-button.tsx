"use client";

import { FaPrint } from "react-icons/fa6";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print fixed right-5 top-5 z-50 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-black/15 transition-transform hover:-translate-y-0.5 print:hidden"
    >
      <FaPrint aria-hidden />
      Print / Save as PDF
    </button>
  );
}
