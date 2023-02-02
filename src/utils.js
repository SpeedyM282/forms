const TODAY = new Date();
const YEAR = TODAY.getFullYear();
const MONTH = TODAY.getMonth() < 10 ? '0' + TODAY.getMonth() : TODAY.getMonth();
const DATE = TODAY.getDate() < 10 ? '0' + TODAY.getDate() : TODAY.getDate();

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
  };
}

export function cardInfoObjGenerator() {
  return {
    cardOwner: '',
    cardNumber: '',
    cardExpDate: '',
  };
}

export function updateState(setState) {
  return (field, value) => {
    setState(prev => ({ ...prev, [field]: value }));
  };
}

export function cardStatusGenerator() {
  return {
    Basic: false,
    Standard: false,
    Premium: false
  };
}

export { TODAY, YEAR, MONTH, DATE };