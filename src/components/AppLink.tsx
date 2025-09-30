import * as React from "react";
import { Link as RouterLink, type LinkProps } from "react-router-dom";

type AppLinkProps = LinkProps & {
  scrollToTop?: boolean;
  scrollBehavior?: ScrollBehavior; // "auto" | "smooth"
};

const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  (
    { onClick, to, scrollToTop = true, scrollBehavior = "smooth", ...rest },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;

      // Build a safe string for detection without assuming fields exist
      let href = "";
      if (typeof to === "string") {
        href = to;
      } else if (to) {
        href = `${to.pathname ?? ""}${to.search ?? ""}${to.hash ?? ""}`;
      }
      const hasHash = href.includes("#");

      if (scrollToTop && !hasHash && typeof window !== "undefined") {
        // run after the route renders
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: scrollBehavior });
        });
      }
    };

    return <RouterLink ref={ref} to={to} onClick={handleClick} {...rest} />;
  }
);

AppLink.displayName = "AppLink";
export default AppLink;
