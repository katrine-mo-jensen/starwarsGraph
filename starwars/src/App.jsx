import "./App.css";
import { Layout } from "./layout/Layout";
import { Main } from "./page/Main";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterDetails } from "./page/Character";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="/character/:id" element={<CharacterDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
