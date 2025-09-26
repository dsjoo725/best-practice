import { Outlet } from "react-router-dom";

import { Separator, SidebarInset, SidebarProvider, SidebarTrigger } from "@/base";

import { AppSidebar } from "./app-sidebar";
import { AppBreadcrumb } from "./app-breadcrumb";

export const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <AppBreadcrumb />
          </div>
        </header>
        <div className="flex-1 overflow-hidden p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
