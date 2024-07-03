import { getEnvironmentVariables } from "src/env/env";
import { fetchGet } from "src/Utils/Helpers/fetch";

export class HomePageApi {
  static getTodos() {
    return fetchGet(`${getEnvironmentVariables().API_URI}/todos`);
  }
}
