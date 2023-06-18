export default (formData: any) => {
  const advantages = formData.advantages.map((advantage: { value: string }) => advantage.value);
  const checkboxGroup = formData.checkboxGroup.map((checkbox: [string]) => Number(checkbox));
  const radioGroup = Number(formData.radioGroup);
  const jsonData = {
    ...formData,
    advantages,
    checkboxGroup,
    radioGroup,
  };
  return JSON.stringify(jsonData);
};
