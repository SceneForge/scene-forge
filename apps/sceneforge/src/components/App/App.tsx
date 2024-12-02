import { DatabaseProvider } from "@sceneforge/data";
import {
  SidebarInset,
  SidebarProvider,
  SidebarWrapper,
  ThemeProvider,
} from "@sceneforge/ui";
import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  AppDataProvider,
  AppInstallProvider,
  AppProvider,
  AppTabsProvider,
  ServiceWorkerProvider,
} from "../../providers";
import {
  AppSidebar,
  AppSidebarContent,
  AppSidebarFooter,
  AppSidebarHeader,
} from "../AppSidebar";
import { AppTabs } from "../AppTabs";

export type AppProps = {
  children?: never;
  languages: string[];
  queryClient: QueryClient;
  theme?: string;
};

const App = ({
  languages,
  queryClient,
  theme,
}: AppProps) => {
  return (
    <AppProvider languages={languages}>
      <DatabaseProvider>
        <AppDataProvider>
          <QueryClientProvider client={queryClient}>
            <ServiceWorkerProvider>
              <ThemeProvider theme={theme}>
                <SidebarProvider>
                  <SidebarWrapper>
                    <AppInstallProvider>
                      <AppTabsProvider>
                        <AppSidebar>
                          <AppSidebarHeader />
                          <AppSidebarContent />
                          <AppSidebarFooter />
                        </AppSidebar>
                        <SidebarInset>
                          <AppTabs />
                        </SidebarInset>
                      </AppTabsProvider>
                    </AppInstallProvider>
                  </SidebarWrapper>
                </SidebarProvider>
              </ThemeProvider>
            </ServiceWorkerProvider>
          </QueryClientProvider>
        </AppDataProvider>
      </DatabaseProvider>
    </AppProvider>
  );
};

export default App;
