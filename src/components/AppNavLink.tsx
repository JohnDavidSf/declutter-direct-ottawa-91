import * as React from "react";
import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";

type AppNavLinkProps = NavLinkProps & {
  scrollToTop?: boolean;
  scrollBehavior?: ScrollBehavior; // "auto" | "smooth"
};

const AppNavLink = React.forwardRef<HTMLAnchorElement, AppNavLinkProps>(
  (
    { onClick, to, scrollToTop = true, scrollBehavior = "smooth", ...rest },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;

      let href = "";
      if (typeof to === "string") {
        href = to;
      } else if (to) {
        href = `${to.pathname ?? ""}${to.search ?? ""}${to.hash ?? ""}`;
      }
      const hasHash = href.includes("#");

      if (scrollToTop && !hasHash && typeof window !== "undefined") {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: scrollBehavior });
        });
      }
    };

    return <RouterNavLink ref={ref} to={to} onClick={handleClick} {...rest} />;
  }
);

AppNavLink.displayName = "AppNavLink";
export default AppNavLink;
