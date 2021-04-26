import { scheduleJob, Job } from "node-schedule";
import { checkAndUpdateApis } from "../../controllers/apis";

export class SanitizeApis {
  private static instance: Job | undefined;

  private constructor() {}

  public static getInstance = () => {
    if (!SanitizeApis.instance) {
      const executeSanitization = async () => {
        console.log("Running job :)");
        await checkAndUpdateApis();
      };
      // Every day at 00:00
      SanitizeApis.instance = scheduleJob("* 00 * * *", executeSanitization);
    }

    return SanitizeApis.instance;
  };
}
