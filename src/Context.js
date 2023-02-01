import React, { useState, useEffect } from "react"

const Context = React.createContext();

function ContextProvider({ children }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [subscription, setSubscription] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(null);
  const [cardOwnerName, setCardOwnerName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpDate, setCardExpDate] = useState('');

  return (
    <Context.Provider
      value={{
        username, password,
        subscription, firstName,
        lastName, birthdate,
        email, gender,
        cardOwnerName, cardNumber,
        cardExpDate
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }