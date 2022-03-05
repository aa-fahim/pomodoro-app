import React, { createContext, useState } from "react";

interface IStatsContext {
  totalTimeSpentStudying: number
  updateTotalTimeSpentStudying: (val: number) => void
}

export const StatsContext = createContext<IStatsContext>(null);

export const StatsContextProvider = ({ children }) => {
  const [totalTimeSpentStudying, setTotalTimeSpentStudying] = useState<number>(0);

  const updateTotalTimeSpentStudying = (timeToAdd: number) => {
    setTotalTimeSpentStudying((totalTimeSpentStudying + timeToAdd));
  }

  return (
    <StatsContext.Provider value={{
      totalTimeSpentStudying,
      updateTotalTimeSpentStudying
    }}>
      {children}
    </StatsContext.Provider>
  )
}
