import { checkEmail, onlyNumbers, onlyLetters } from "./RegExp";

const validateForm = (name: string, value: string) => {
  const errors = { nameCompany: '', address: '', email: '', phone: '' };

  switch (name) {
    case 'nameCompany':
      if (value.match(onlyLetters)) {
        errors.nameCompany = '';
      } else {
        errors.nameCompany = 'только буквы';
      }
      break;
    case 'address':
      if (value.length < 6) {
        errors.address = 'номер не может быть меньше 6 цифр';
      } else {
        errors.address = '';
      }
      break;
    case 'email':
      if (!value.match(checkEmail)) {
        errors.email = 'невалидный email';
      } else {
        errors.email = '';
      }
      break;
    case 'phone':
      if (value.match(onlyNumbers)) {
        errors.phone = '';
      } else {
        errors.phone = 'только цифры';
      }
      break;
    default:
      return '';
  }
  return errors;
};

export default validateForm;
