import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar: Fixed on the left */}
        <AppSidebar />

        <div className="flex flex-col w-full">
          {/* Navbar: Fixed at the top */}
          <Navbar />

          {/* Main Content: Ensures full height usage */}
          <main className="bg-[#f9fbfc]">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
