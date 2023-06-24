import MainNav from "@/components/@main/main.nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <MainNav />
      </header>
      {children}
    </div>
  );
}
