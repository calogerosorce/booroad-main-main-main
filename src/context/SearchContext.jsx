import { createContext, useContext, useState } from "react";
import viaggiData from "../data/viaggi";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const [trips, setTrips] = useState(viaggiData);

  function addTrip(newTrip) {
    setTrips([...trips, newTrip]);
  }

  return (
    <SearchContext.Provider value={{ search, setSearch, trips, setTrips, addTrip }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
