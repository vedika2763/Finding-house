import { DevEnvironment } from "./dev.env";
import { ProdEnvironment } from "./prod.env";

export interface Environment {
  API_URI: any;
}

export function getEnvironmentVariables() {
  if (process.env.NODE_ENV === "production") {
    return ProdEnvironment;
  }
  return DevEnvironment;
}
