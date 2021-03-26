// redux util

export const convertCallingCodes = (callingCodes) =>
  callingCodes === ""
    ? [""]
    : callingCodes
        .split(",")
        .map((callingCode) => callingCode.replace(/[ .]/gi, ""));

export const findMatchKeyword = (obj, keyword) => {
  return Object.values(obj).some((value) => {
    const isArray = Array.isArray(value);

    if (isArray) value = value.join(",");
    if (value === null || value === undefined) value = "";

    return value.toLowerCase().includes(keyword);
  });
};
