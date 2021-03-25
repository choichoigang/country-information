export const convertCallingCodes = (callingCodes) =>
  callingCodes === ""
    ? [""]
    : callingCodes
        .split(",")
        .map((callingCode) => callingCode.replace(/[ .]/gi, ""));
