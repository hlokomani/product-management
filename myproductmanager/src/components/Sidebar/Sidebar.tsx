'use client'
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command";
  import { LayoutDashboard, PackageSearch, ScatterChart } from "lucide-react";
  import { ModeToggle } from "../ModeToggle";
  import { useRouter } from "next/navigation";
  import React from 'react';
  
  export default function Sidebar() {
    const router = useRouter();
  
    const sidebarList = [
      {
        group: "General",
        items: [
          { link: "/products", text: "Browse Products", icon: <PackageSearch /> },
        ],
      },
    ];
  
    return (
      <div className="w-[300px] border-r min-h-80vh">
        <div className="grow">
          <Command className="shadow-md">
            <CommandList>
              {sidebarList.map((menu: any, key: number) => (
                <CommandGroup key={key} heading={menu.group}>
                  {menu.items.map((option: any, optionKey: number) => (
                    <CommandItem
                      key={optionKey}
                      className="flex gap-2 cursor-pointer"
                      onSelect={() => router.push(option.link)}
                    >
                      {option.icon} {option.text}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
              <CommandSeparator />
              <ModeToggle />
            </CommandList>
          </Command>
        </div>
      </div>
    );
  }
  