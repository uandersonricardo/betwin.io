import axios from "axios";
import { injectable } from "tsyringe";

import environment from "../config/environment";

@injectable()
class SubsystemKambiApi {
  public async getMatches(filter: string) {
    const { data } = await axios.get(
      `https://eu-offering.kambicdn.org/offering/v2018/ub/listView${filter}.json?lang=pt_BR&market=BR`,
      {
        proxy: environment.proxyHost
          ? {
              host: environment.proxyHost,
              port: environment.proxyPort
            }
          : undefined,
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
        }
      }
    );

    return data;
  }

  public async getMatch(matchId: string) {
    const { data } = await axios.get(
      `https://eu-offering.kambicdn.org/offering/v2018/ub/betoffer/event/${matchId}.json?lang=pt_BR`,
      {
        proxy: environment.proxyHost
          ? {
              host: environment.proxyHost,
              port: environment.proxyPort
            }
          : undefined,
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
        }
      }
    );

    const { data: liveData } = await axios.get(
      `https://eu-offering.kambicdn.org/offering/v2018/ub/event/${matchId}/livedata.json?lang=pt_BR&market=BR`,
      {
        proxy: environment.proxyHost
          ? {
              host: environment.proxyHost,
              port: environment.proxyPort
            }
          : undefined,
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
        }
      }
    );

    data.liveData = liveData;

    return data;
  }
}

export default SubsystemKambiApi;
