"use client";
import { Navbar } from "ui";
import "../styles/globals.css";
import { CartProvider } from "../context/cart.context.provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" data-theme="black">
        <body>
          <link
            href="https://cdn.jsdelivr.net/npm/daisyui@3.5.1/dist/full.css"
            rel="stylesheet"
            type="text/css"
          />
          {/* <script src="https://cdn.tailwindcss.com"></script> */}
          <CartProvider>{children}</CartProvider>
        </body>
      </html>
    </>
  );
}
