import { createContext, useContext, useState } from 'react';

const BookingContext = createContext(null);

export default function BookingProvider({ children }) {
  const [isOverBooked, setIsOverBooked] = useState(false);

  const setOverbooking = () => setIsOverBooked(!isOverBooked);

  return (
    <BookingContext.Provider value={{ isOverBooked, setOverbooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within BookingProvider');
  return context;
}
