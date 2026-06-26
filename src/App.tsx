import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Provider } from "react-redux";

import { Toaster } from "react-hot-toast";

import { persistor, store } from "./redux/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";
import Router from "./router/router";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Router />
            <ReactQueryDevtools position="bottom" initialIsOpen={false} />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
      <Toaster
        position="top-center"
        toastOptions={{
          error: {
            duration: 3000,
          },
        }}
      />
    </>
  );
}

export default App;
