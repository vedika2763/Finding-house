import { Environment } from "./env";

export const DevEnvironment: Environment = {
  API_URI: process.env.NEXT_PUBLIC_DEV_API_URI,
};
