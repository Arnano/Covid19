import { RESTDataSource } from "apollo-datasource-rest";
import { summaryReducer } from "./reducers";

interface AllCountriesObject {
  Country: number;
  Slug: string;
  ISO2: any;
}

interface IGetSummaryResponse {
  Global: Object;
  Countries: [];
}

interface IGetAllCountriesResponse extends Array<AllCountriesObject> {}

interface ICovidAPI {
  getCountries: () => Promise<IGetAllCountriesResponse>;
}

class CovidAPI extends RESTDataSource implements ICovidAPI {
  constructor() {
    super();
    this.baseURL = process.env.COVID_API_URL;
  }

  public async getSummary() {
    try {
      const response = await this.get<IGetSummaryResponse>(
        `${this.baseURL}/summary`
      );
      return summaryReducer(response);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getCountries() {
    try {
      const response = await this.get<IGetAllCountriesResponse>(
        `${this.baseURL}/countries`
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default CovidAPI;
