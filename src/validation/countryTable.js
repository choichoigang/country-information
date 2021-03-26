export const required = (value) => (value ? undefined : "is Required");
export const onlyNumber = (value) =>
  !isNaN(Number(value.replace(/[ .,]/gi, "")))
    ? undefined
    : "callingCodes can contain only number.";
