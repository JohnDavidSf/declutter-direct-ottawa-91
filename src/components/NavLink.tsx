import { forwardRef, MouseEvent } from "react";
import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";

type AppNavLinkProps = NavLinkProps & {
  scrollToTop?: boolean;
  scrollBehavior?: ScrollBehavior; // "auto" | "smooth"
};

const AppNavLink = forwardRef<HTMLAnchorElement, AppNavLinkProps>(
  ({ onClick, to, scrollToTop = true, scrollBehavior = "smooth", ...rest }, ref) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;

      const toStr =
        typeof to === "string" ? to : (to.pathname || "") + (to.hash || "");
      const hasHash = toStr.includes("#");

      if (scrollToTop && !hasHash) {
        // run after navigation renders
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: scrollBehavior });
        });
      }
    };

    return <RouterNavLink ref={ref} to={to} onClick={handleClick} {...rest} />;
  }
);

export default AppNavLink;
