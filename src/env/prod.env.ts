import { Environment } from "./env";

export const ProdEnvironment: Environment = {
  API_URI: process.env.NEXT_PUBLIC_PROD_API_URI,
};
