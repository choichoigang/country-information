export const nameRequired = (value) => (value ? undefined : "name is Required");
export const onlyNumber = (value) =>
  !isNaN(Number(value.replace(/[ .,]/gi, "")))
    ? undefined
    : "callingCodes can contain only number.";
