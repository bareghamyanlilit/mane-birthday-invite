import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Մանե",
  description: "Մանե",
  openGraph: {
    title: "Մանեի ատամհատիկի և ծննդյան հրավիրատոմս",
    description: "Հրավիրատոմս",
    url: "https://mane-birthday-invite.vercel.app",
    siteName: "Մանե",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
