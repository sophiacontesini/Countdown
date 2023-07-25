import React, { useState } from 'react';

const CountdownContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
const CountdownProvider = ({ children }) => {
  const [event, setEvent] = useState(null);

  return (
    <CountdownContext.Provider value={{ event, setEvent }}>
      {children}
    </CountdownContext.Provider>
  );
};

export { CountdownContext, CountdownProvider };
