export function userDataObjGenerator() {
  return {
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    gender: null,
  }
}

export function cardInfoObjGenerator() {
  return {
    cardOwner: '',
    cardNumber: '',
    cardExpDate: '',
  }
}

export function updateState(setState) {
  return (field, value) => {
    setState(prev => ({ ...prev, [field]: value }));
  }
}