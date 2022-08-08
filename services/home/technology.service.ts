import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class TechnologyService extends BaseService {
  baseUrl = "technologies";

  public getTechnologies(): Promise<AxiosResponse<Technology[]>> {
    return this.get();
  }
}

export default new TechnologyService();
