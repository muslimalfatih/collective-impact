import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Link, NavLink, useLocation } from "react-router";

export type NavbarProps = {
  elevated?: boolean;
  onConnect?: () => void;
};

export default function Navbar({ elevated = false, onConnect }: NavbarProps) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const forceLight = useMemo(
    () =>
      pathname === "/campaign" ||
      pathname.startsWith("/campaign/") ||
      pathname.startsWith("/campaigns") ||
      pathname === "/campaigns",
    [pathname],
  );

  const light = forceLight || elevated;

  const linkBase = "block px-3 py-2 rounded-md font-medium hover:opacity-80";
  const linkLight = "text-black";
  const linkDark = "text-white";

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        light ? "bg-white shadow-sm text-black" : "bg-transparent text-white",
      )}
      role="navigation"
      aria-label="Primary"
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="inline-flex gap-5 items-center">
          <Link
            to="/"
            className="font-extrabold text-lg font-mono pl-4 md:pl-2"
          >
            $IMPACT
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-2">
            <li>
              <NavLink
                to="/"
                end
                className={() => cn(linkBase, light ? linkLight : linkDark)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/campaigns"
                className={() => cn(linkBase, light ? linkLight : linkDark)}
              >
                Campaigns
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={onConnect}
            className={cn(
              "px-4 py-1 rounded-full border font-bold hover:opacity-90",
              light ? "border-black text-black" : "border-white text-white",
            )}
          >
            Connect
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={cn(
            "md:hidden inline-flex items-center justify-center rounded-md p-2",
            light ? "text-black " : "text-white ",
          )}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "md:hidden transition-[max-height,opacity] duration-300 overflow-hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div
          className={cn(
            "container mx-auto px-4 pb-4",
            light ? "text-black" : "text-white",
          )}
        >
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block w-full px-3 py-2 rounded-md font-medium",
                    light ? "text-black" : "text-white",
                    isActive && "underline",
                  )
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/campaigns"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block w-full px-3 py-2 rounded-md font-medium",
                    light ? "text-black" : "text-white",
                    isActive && "underline",
                  )
                }
              >
                Campaigns
              </NavLink>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onConnect?.();
            }}
            className={cn(
              "mt-3 w-full px-4 py-2 rounded-full border font-bold hover:opacity-90",
              light ? "border-black text-black" : "border-white text-white",
            )}
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
}
