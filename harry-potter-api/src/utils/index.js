export const genderTranslator = genderText => {
  if (genderText === 'male') return 'masculino';
  if (genderText === 'female') return 'feminino';
  return genderText;
};

export const brazilDateFormatter = dataText => {
  return dataText.replaceAll('-', '/');
};
