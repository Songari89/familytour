import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Background from "./components/Background";
import { Outlet } from "react-router-dom";
import useViewport from "./hooks/useViewport";
import IdProvider from "./context/IdProvider";
import ModalProvider from "./context/ModalProvider";
import Modal from "./components/Modal";

const queryClient = new QueryClient();

function App() {
  const { viewportmode } = useViewport();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <IdProvider>
          <ModalProvider>
            <Header viewportmode={viewportmode} />
            <div className={viewportmode ? "mobilemode" : "deskmode"}>
              <Outlet />
            </div>
            <Background viewportmode={viewportmode} />
            <Modal/>
          </ModalProvider>
        </IdProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
