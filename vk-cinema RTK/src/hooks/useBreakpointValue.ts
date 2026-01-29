import { useEffect, useState } from "react";

type BreakpointFlags = {
//   xs: boolean;
//   sm: boolean;
//   md: boolean;
  lg: boolean;
  xl: boolean;
};

const BREAKPOINTS: Record<keyof BreakpointFlags, string> = {
//   xs: "(max-width: 575px)",
//   sm: "(min-width: 576px) and (max-width: 767px)",
//   md: "(min-width: 768px) and (max-width: 991px)",
  lg: "(min-width: 1000px)",
  xl: "(min-width: 1200px)",
};

export const useBreakpointsMap = (): BreakpointFlags => {
  const getMatches = (): BreakpointFlags => {
    return {
    //   xs: window.matchMedia(BREAKPOINTS.xs).matches,
    //   sm: window.matchMedia(BREAKPOINTS.sm).matches,
    //   md: window.matchMedia(BREAKPOINTS.md).matches,
      lg: window.matchMedia(BREAKPOINTS.lg).matches,
      xl: window.matchMedia(BREAKPOINTS.xl).matches,
    };
  };

  const [matches, setMatches] = useState<BreakpointFlags>(getMatches);

  useEffect(() => {
    const mediaQueries = Object.entries(BREAKPOINTS).map(([key, query]) => ({
      key,
      mql: window.matchMedia(query),
    }));

    const handler = () => setMatches(getMatches());

    mediaQueries.forEach(({ mql }) => {
      mql.addEventListener("change", handler);
    });

    return () => {
      mediaQueries.forEach(({ mql }) => {
        mql.removeEventListener("change", handler);
      });
    };
  }, []);

  return matches;
};



// import { useEffect, useState } from "react";

// export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

// const BREAKPOINTS: Record<Breakpoint, string> = {
//   xs: "(max-width: 575px)",
//   sm: "(min-width: 576px) and (max-width: 767px)",
//   md: "(min-width: 768px) and (max-width: 991px)",
// //   lg: "(min-width: 992px) and (max-width: 1199px)",
// lg: "(max-width: 1000px)",
//   xl: "(min-width: 1200px)",
// };

// export const useBreakpointValue = (): Breakpoint => {
//   const getActiveBreakpoint = (): Breakpoint => {
//     for (const [key, query] of Object.entries(BREAKPOINTS) as [Breakpoint, string][]) {
//       if (window.matchMedia(query).matches) return key;
//     }
//     return "xl"; // fallback
//   };

//   const [breakpoint, setBreakpoint] = useState<Breakpoint>(getActiveBreakpoint);

//   useEffect(() => {
//     const mediaQueries = Object.entries(BREAKPOINTS).map(([key, query]) => ({
//       key,
//       mql: window.matchMedia(query),
//     }));

//     const handler = () => {
//       setBreakpoint(getActiveBreakpoint());
//     };

//     mediaQueries.forEach(({ mql }) => mql.addEventListener("change", handler));
//     return () => {
//       mediaQueries.forEach(({ mql }) => mql.removeEventListener("change", handler));
//     };
//   }, []);

//   return breakpoint;
// };