import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import ListaViaggi from "./pages/ListaViaggi";
import DettaglioViaggio from "./pages/DettaglioViaggio";
import PersonDetails from "./pages/PersonDetails";
import { SearchProvider } from "./context/SearchContext";
import NewTripPage from "./pages/NewTripPage";
import NewTravelerPage from "./pages/NewTravelerPage";


function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* <Route index element={<Homepage />} /> */}
            <Route /* path="/viaggi"  */ index element={<ListaViaggi />} />
            <Route path="/:id" element={<DettaglioViaggio />} />
            <Route path="/:id/:travelerID" element={<PersonDetails />} />
            <Route path="/tripForm" element={<NewTripPage />} />
            <Route path="/:id/travelerForm" element={<NewTravelerPage />} />
          </Route>
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
