/**
 * Workaround script because place this config in "app/strapi/plugins/documentation/config/settings.json" is not working
 */

import { promises as fs } from "fs";
import { resolve } from "path";


const strapiTeacher = async () => {

  const settingsPath = ["../../app/strapi/node_modules/strapi-plugin-documentation/config/settings.json", "../../app/strapi/extensions/documentation/documentation/1.0.0/full_documentation.json"];

  const overwrites = {
    info: {
      version: "1.0.0",
      title: "Gymnasium Otterndorf Strapi REST API",
      description: "",
      termsOfService: "https://gym.artandcode.de/credits",
      contact: {
        name: "Art+Code Studio Team",
        email: "hi@artandcode.studio",
        url: "https://artandcode.studio/"
      }
    },
    servers: [
      {
        url: "https://gym-strapi.artandcode.de",
        description: "Development server"
      },
      {
        url: "https://strapi.gymnasium-otterndorf.de",
        description: "Production server"
      },
      {
        url: "http://localhost:1337",
        description: "Locale server"
      }
    ]
  };

  for (const _path of settingsPath) {
    const path = resolve(__dirname, _path);
    const fileRaw = await fs.readFile(path, "utf8");
    const data = JSON.parse(fileRaw);
    const merged = { ...data, ...overwrites };
    const writeData = JSON.stringify(merged, null, 2);
    await fs.writeFile(path, writeData);
    console.debug(`Write to ${path}`);
  }
}

const strapiStudents = async () => {

  const settingsPath = ["../../app/strapi-student/node_modules/strapi-plugin-documentation/config/settings.json", "../../app/strapi-student/extensions/documentation/documentation/1.0.0/full_documentation.json"];

  const overwrites = {
    info: {
      version: "1.0.0",
      title: "Gymnasium Otterndorf Strapi Students REST API",
      description: "",
      termsOfService: "https://gym.artandcode.de/credits",
      contact: {
        name: "Art+Code Studio Team",
        email: "hi@artandcode.studio",
        url: "https://artandcode.studio/"
      }
    },
    servers: [
      {
        url: "https://gym-strapi-student.artandcode.de",
        description: "Development server"
      },
      {
        url: "https://strapi-student.gymnasium-otterndorf.de",
        description: "Production server"
      },
      {
        url: "http://localhost:1337",
        description: "Locale server"
      }
    ]
  };

  for (const _path of settingsPath) {
    const path = resolve(__dirname, _path);
    const fileRaw = await fs.readFile(path, "utf8");
    const data = JSON.parse(fileRaw);
    const merged = { ...data, ...overwrites };
    const writeData = JSON.stringify(merged, null, 2);
    await fs.writeFile(path, writeData);
    console.debug(`Write to ${path}`);
  }
}

strapiTeacher();
strapiStudents();