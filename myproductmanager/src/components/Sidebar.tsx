import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command";
import { LayoutDashboard, PackageSearch, ScatterChart} from "lucide-react";
import { ModeToggle } from "./ModeToggle";

  
  export default function Sidebar() {
  
    const sidebarList = [
      {
        group: "General",
        items: [
          { link: "/", text: "Dashboard", icon: <LayoutDashboard /> },
          { link: "/", text: "Products", icon: <PackageSearch /> },
          { link: "/", text: "Insights", icon: <ScatterChart /> },
        ],
      },
    ];
  
    return (
      <div className="w-[300px] border-r min-h-screen">
        <div className="grow">
          <Command className="shadow-md">
            <CommandList>
              {sidebarList.map((menu: any, key: number) => (
                <CommandGroup key={key} heading={menu.group}>
                  {menu.items.map((option: any, optionKey: number) => (
                    <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                      {option.icon} {option.text}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
              <CommandSeparator />
              <ModeToggle/>
            </CommandList>
          </Command>
        </div>
      </div>
    );
  }