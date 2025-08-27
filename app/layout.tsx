import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://users-notebook.vercel.app/"),
  title: {
    default: "UsersNotebook",
    template: "%s | UsersNotebook",
  },
  description: "An application to look for users from an external API and save them to a database.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Next.js",
    "React",
    "MongoDB",
    "Mongoose",
    "Random User API",
    "Users",
    "Save Users",
    "Look for Users",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Vladyslav Yarmoliuk", url: "https://users-notebook.vercel.app/" }],
  creator: "Vladyslav Yarmoliuk",
  openGraph: {
    title: "UsersNotebook",
    description: "An application to look for users from an external API and save them to a database.",
    url: "https://users-notebook.vercel.app/",
    siteName: "UsersNotebook",
    images: [
      {
        url: "/og-image.png",
        alt: "UsersNotebook",
      },
    ],
    locale: "en-US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <article
          className="min-h-full flex flex-col justify-between max-w-[1000px] mx-auto"
        >
          <Header />
          <main className="flex-1 flex flex-col items-center py-5">
            {children}
          </main>
          <Footer />
        </article>
      </body>
    </html>
  );
}
