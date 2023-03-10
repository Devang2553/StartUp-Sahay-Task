
  
  const required = ({ value, message }) =>
    !value && (message || 'Required...');
  
  const email = ({ value, message }) =>
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) &&
    (message || 'Please enter valid email');
  
  const tel = ({ value, message }) =>
    (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) &&
      message) ||
    'Please enter valid email';
  
  const url = ({ value, message }) =>
    (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) &&
      message) ||
    'Please enter valid email';
  
  const min = ({ value, validation, message }) =>
    value.length < Number(validation) &&
    (message || `min ${validation} items required...`);
  
  const max = ({ value, message, validation }) =>
    value.length > Number(validation) &&
    (message || `min ${validation} items required...`);
  
  const length = ({ value, message, validation }) =>
    value.length !== Number(validation) &&
    (message || `min ${validation} items required...`);
  
  const pattern = ({ value, message, validation }) => {
    if (validation) {
      const reg = new RegExp(validation);
      return (
        !reg.test(value) && (message || 'Please enter valid email')
      );
    }
    return false;
  };
  
  export default {
    required,
    email,
    tel,
    url,
    min,
    max,
    length,
    pattern,
  };