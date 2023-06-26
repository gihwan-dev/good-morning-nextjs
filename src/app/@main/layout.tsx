import MainNav from "@/components/@main/main.nav";
import SignOutButton from "@/components/@main/signout.button";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
