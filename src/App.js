import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Background from "./components/Background";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Outlet />
        <Background />
      </QueryClientProvider>
    </div>
  );
}

export default App;
