import { createContext, useContext, useState } from 'react';

const SelectedFlightContext = createContext(null)

export default function SelectedFlightProvider({ children }) {
  const [currentFlight, setCurrentFlight] = useState(-1)

  return (
    <SelectedFlightContext.Provider value={{ currentFlight, setCurrentFlight }}>
      {children}
    </SelectedFlightContext.Provider>
  )
}

export function useSelectedFlight() {
  const context = useContext(SelectedFlightContext)
  if (!context) throw new Error('useSelectedFlight must be used within SelectedFlightProvider')
  return context
}
