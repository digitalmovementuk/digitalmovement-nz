import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <section
      data-surface="dark"
      className="surface-dark relative min-h-[100svh] flex items-center justify-center px-6"
    >
      <div className="text-center max-w-[560px]">
        <p className="eyebrow text-white/55">404</p>
        <h1
          className="mt-5 text-white"
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: "1.04",
            letterSpacing: "-0.034em",
            fontWeight: 700,
          }}
        >
          Nothing here.
        </h1>
        <p className="mt-5 text-[15px] sm:text-[17px] text-white/65 leading-relaxed">
          The page you were looking for doesn't exist. Maybe it moved, maybe we never built it. Either way — back to the start.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-[15px] px-6 py-3 transition-colors"
        >
          <ArrowLeft size={15} />
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
