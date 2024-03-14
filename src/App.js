import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Background from "./components/Background";
import { Outlet } from "react-router-dom";
import useViewport from "./hooks/useViewport";
import IdProvider from "./context/IdProvider";
import ModalProvider from "./context/ModalProvider";
import Modal from "./components/Modal";
import PassWordModal from "./components/PassWordModal";
import ConfirmModal from "./components/ConfirmModal";
import SelectedModal from "./components/SelectedModal";
import BackgroundWrapper from "./components/BackgroundWrapper";

const queryClient = new QueryClient();

function App() {
  const { viewportmode, addressBar} = useViewport();

  return (
    <div className="app" style={{ height: `${addressBar}px` }}>
      <QueryClientProvider client={queryClient}>
        <IdProvider>
          <ModalProvider>
            <Header viewportmode={viewportmode} />
            <BackgroundWrapper>
              <Outlet />
            </BackgroundWrapper>
            {/* <Background viewportmode={viewportmode} /> */}
            <Modal />
            <PassWordModal />
            <ConfirmModal />
            <SelectedModal />
          </ModalProvider>
        </IdProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
