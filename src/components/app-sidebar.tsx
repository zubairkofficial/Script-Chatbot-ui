import {
  CircleUserRound,
  FolderOpenDot,
  LayoutPanelTop,
  FileText,
  Search,
  History,
  Settings,
  Plus
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Projects",
    url: "#",
    icon: FolderOpenDot,
  },
  {
    title: "Templates",
    url: "#",
    icon: LayoutPanelTop,
  },
  {
    title: "Documents",
    url: "#",
    icon: FileText,
  },
  {
    title: "Community",
    url: "#",
    icon: CircleUserRound,
  },
  {
    title: "History",
    url: "#",
    icon: History,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-[#f9fbfc]">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center flex-shrink-0">
                <img
                  className="h-10 w-10 mr-2"
                  src="https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small/robot-chat-bot-concept-illustration-vector.jpg"
                  alt="logo"
                />
                <span className="text-xl tracking-tight font-semibold">Script</span>
              </div>
              <SidebarTrigger />
            </div>
            <div className="relative w-full max-w-xs rounded-full border">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#f9fbfc] text-gray-900 rounded-full pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-[#f9fbfc]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="bg-white py-2 mt-4 px-4 flex items-center rounded-full shadow-sm">
                <div className="bg-[#0b82ed] rounded-t rounded-br p-1">
                <Plus className="w-3 h-3" />
                </div>
              <a href="#" className="py-2 px-3 flex items-center space-x-1">
                <span className="font-medium">AI Chat</span>
              </a>
              </div>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="my-2 flex items-center space-x-3 text-md text-gray-700">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-[#f9fbfc]">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="border-t py-3 px-4 flex items-center">
              <img
                className="h-10 w-10 rounded-full mr-3 border flex-shrink-0"
                src="https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small/robot-chat-bot-concept-illustration-vector.jpg"
                alt="User Avatar"
              />
              <div className="text-gray-800 w-full">
                <span className="block text-sm font-medium leading-tight">
                  Muhammad Kamran
                </span>
                <p className="text-xs text-gray-600 leading-tight">
                  Kamran@gmail.com
                </p>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
