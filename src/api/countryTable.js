import { baseUrl } from "./url";
import { COUNTRY_INFORMATION } from "./path";
import axios from "axios";

export const getCountryTable = () =>
  axios
    .get(`${baseUrl}${COUNTRY_INFORMATION}`)
    .then((res) => res)
    .then((err) => err);
