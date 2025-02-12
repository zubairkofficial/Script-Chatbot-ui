import { Zap, CircleHelp, Gift } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-3 bg-[#f9fbfc]">
      <div className="container px-4 mx-auto text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight">Ai Chat</span>
          </div>
          <div className="flex justify-center space-x-7 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-xl bg-black text-white flex items-center space-x-1"
            >
              <Zap className="text-yellow-300 w-5 h-5" />
              <span>Upgrade</span>
            </a>
            <CircleHelp className="w-6 h-6 text-gray-700" />
            <Gift className="w-6 h-6 text-gray-700" />
            <DropdownMenu>
              <DropdownMenuTrigger>
              <img
              className="h-10 w-10 rounded-full border flex-shrink-0"
              src="https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small/robot-chat-bot-concept-illustration-vector.jpg"
              alt="User Avatar"
            />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
