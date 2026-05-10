import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import dotenv from "dotenv";

dotenv.config();

const freecurrencyapi = new Freecurrencyapi(process.env.KEY);

export async function convertCurrency(fromCurrency, toCurrency, amount) {
  const response = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const multiplier = response.data[toCurrency];
  return multiplier * amount;
}
