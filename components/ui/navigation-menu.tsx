"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScanFace, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-end px-3 py-5 fixed top-0 bg-white left-0 right-0 container mx-auto z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
        aria-label="Mobile menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <Link
        href="#"
        className={cn(
          buttonVariants({ size: "lg" }),
          "gap-2 hidden sm:flex justify-center rounded-full font-semibold",
        )}
      >
        <ScanFace />
        SignIn
      </Link>

      <Link
        href="/campaign/create"
        className={cn(
          buttonVariants({ size: "lg", variant: "outline" }),
          "gap-2 hidden sm:flex justify-center rounded-full font-semibold ml-2",
        )}
      >
        Create Campaign
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="sm:hidden fixed left-0 right-0 top-16 bg-white shadow-lg z-30"
          >
            <div className="container p-4 space-y-4">
              <Link
                href="#"
                className={cn(
                  "flex gap-2 items-center p-3 hover:bg-gray-100 rounded-lg w-full",
                  buttonVariants({ size: "lg" }),
                )}
                onClick={() => setIsOpen(false)}
              >
                <ScanFace className="text-primary" />
                <span className="font-semibold">Sign In</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
