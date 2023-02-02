import React, { useState } from "react";
import { userDataObjGenerator, cardInfoObjGenerator, updateState } from './utils';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [userData, setUserData] = useState(userDataObjGenerator());
  const [subscription, setSubscription] = useState('');
  const [cardInfo, setCardInfo] = useState(cardInfoObjGenerator());

  const updateUserData = updateState(setUserData);
  const updateSubscription = updateState(setSubscription);
  const updateCardInfo = updateState(setCardInfo);

  return (
    <Context.Provider
      value={{
        userData, subscription, cardInfo,
        updateUserData, updateSubscription, updateCardInfo
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };