import "./globals.css";

export const metadata = {
  title: "Test Application",
  description: "This is a test application for code cleanup.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
