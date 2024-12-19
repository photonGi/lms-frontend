import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/sonner";
import { useGetProfileQuery } from "./features/api/authApi";
import LoadingSpinner from "./components/LoadingSpinner";

const SplashScreen = ({ children }) => {
  const { isLoading } = useGetProfileQuery();
  return <>{isLoading ? <LoadingSpinner /> : <>{children}</>}</>;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <SplashScreen>
        <App />
        <Toaster />
      </SplashScreen>
    </Provider>
  </StrictMode>
);
