"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="relative border-t bg-white text-neutral-950 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-50">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Stay Connected
            </h2>
            <p className="mb-6 text-neutral-500 dark:text-neutral-400">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-neutral-900 text-neutral-50 transition-transform hover:scale-105 dark:bg-neutral-50 dark:text-neutral-900"
              >
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-neutral-900/10 blur-2xl dark:bg-neutral-50/10" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#"
                className="block transition-colors hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                Home
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                About Us
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                Services
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                Products
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>TEST</p>
            </address>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © 2024 Pilar. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a
              href="#"
              className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-50"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-50"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
