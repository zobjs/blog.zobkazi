import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import AuthSessionProvider from "@providers/AuthSessionProvider";
import AntdConfigProvider from "@providers/AntdConfigProvider";
import "@styles/globals.sass";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to the blog by Zobkazi",
  description: "This is the blog by Zobkazi",
  icons: { icon: "/logos/next-icon.svg" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <AntdRegistry>
        <AntdConfigProvider>
          <AuthSessionProvider session={session}>
            <body className={inter.className}>{children}</body>
          </AuthSessionProvider>
        </AntdConfigProvider>
      </AntdRegistry>
    </html>
  );
}
