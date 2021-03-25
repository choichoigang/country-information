export const checkCallingCodes = (callingCodes) => {
  const result = callingCodes
    .split(",")
    .map((callingCode) => callingCode.replace(/[ .]/gi, ""));

  const includeNaN = result.some((callingCode) => isNaN(Number(callingCode)));

  if (includeNaN) return false;

  return result;
};

("callingCodes can contain only numbers.");
