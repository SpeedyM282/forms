const TODAY = new Date();
const YEAR = TODAY.getFullYear();
const MONTH = TODAY.getMonth() < 10 ? '0' + TODAY.getMonth() : TODAY.getMonth();
const DATE = TODAY.getDate() < 10 ? '0' + TODAY.getDate() : TODAY.getDate();

const USER_LOCAL_STORAGE = JSON.parse(localStorage.getItem('user'));

// export function userDataObjGenerator() {
//   return {
//     username: '',
//     password: '',
//     confirmPassword: '',
//     firstName: '',
//     lastName: '',
//     birthDate: '',
//     email: '',
//     gender: null,
//   };
// }

// export function cardInfoObjGenerator() {
//   return {
//     cardOwner: '',
//     cardNumber: '',
//     cardExpDate: '',
//   };
// }

export function createUserLocalStorage() {
  const user = {
    userInfo: {
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
      gender: null,
    },
    cardInfo: {
      cardOwner: '',
      cardNumber: '',
      cardExpDate: '',
    },
    subscription: null
  };

  return user;
}

export function cardStatusGenerator() {
  return {
    Basic: false,
    Standard: false,
    Premium: false
  };
}

export function updateState(setState) {
  return (field, value) => {
    setState(prev => ({ ...prev, [field]: value }));
  };
}

export function linkStyle(btnState, step) {
  return {
    linkStyle: { 'cursor': btnState ? 'pointer' : 'not-allowed' },
    link: btnState ? `/step-${step}` : '#'
  };
}

export { TODAY, YEAR, MONTH, DATE, USER_LOCAL_STORAGE };