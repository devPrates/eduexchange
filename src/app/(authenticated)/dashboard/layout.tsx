import Dash from "@/components/Dash";
import Nav from "@/components/Nav";

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
      <div className="min-h-screen w-full bg-white text-black flex">
        <Nav />
        <Dash>
          {children}
        </Dash>
      </div>
  );
}