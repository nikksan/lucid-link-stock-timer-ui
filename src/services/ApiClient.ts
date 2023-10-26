import { Dayjs } from "dayjs";
import { Solution } from "./types";

export default class ApiClient {
  private static DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

  static async calculateSolution(startDate: Dayjs, endDate: Dayjs): Promise<Solution | null> {
    const formattedStartDate = startDate.format(ApiClient.DATE_FORMAT);
    const formattedEndDate = endDate.format(ApiClient.DATE_FORMAT);

    type Response = {
      data: Solution | null,
      error: null,
    } | {
      error: {
        message: string,
      },
      data: null,
    }

    try {
      const response = await fetch(process.env.REACT_APP_API_URL + `/calculateEntryAndExit?from=${formattedStartDate}&to=${formattedEndDate}`)
        .then(response => response.json()) as Response;

      if (response.error !== null) {
        throw new Error(response.error.message);
      }

      return response.data;
    } catch (err) {
      console.warn(err);

      throw new Error(`General error, please try again later..`);
    }
  }
}
