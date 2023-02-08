import React, { useState } from "react";
import { createUserLocalStorage, updateState } from './utils';

const Context = React.createContext();
const user = createUserLocalStorage();

function ContextProvider({ children }) {
  const [userData, setUserData] = useState(user.userInfo);
  const [cardInfo, setCardInfo] = useState(user.cardInfo);
  const [subscription, setSubscription] = useState(user.subscription);
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