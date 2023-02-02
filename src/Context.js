import React, { useState } from "react";
import { userDataObjGenerator, cardInfoObjGenerator, updateState } from './utils';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [userData, setUserData] = useState(userDataObjGenerator());
  const [subscription, setSubscription] = useState('');
  const [cardInfo, setCardInfo] = useState(cardInfoObjGenerator());
  const [ageConfirm, setAgeConfirm] = useState(false);

  const updateUserData = updateState(setUserData);
  const updateCardInfo = updateState(setCardInfo);

  function updateSubscription(type) {
    setSubscription(type);
  }

  function updateAgeConfirm() {
    setAgeConfirm(prev => !prev);
  }

  return (
    <Context.Provider
      value={{
        userData, subscription, cardInfo, ageConfirm,
        updateUserData, updateSubscription, updateCardInfo,
        updateAgeConfirm
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };