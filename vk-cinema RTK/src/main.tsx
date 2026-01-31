import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient.ts";
import { BrowserRouter } from "react-router";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}

        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
