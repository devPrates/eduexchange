
type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <header>Header do Dashboard</header>
        <aside>Menu Lateral do Dashboard</aside>
        <main>{children}</main>
      </body>
    </html>
  );
}