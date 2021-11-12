import fetch from "node-fetch";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const start = async () => {
  for (let i = 0; i <= 1000; i++) {
    const url = `http://localhost:4002/webhook/strapi`;
    console.info(url);
    try {
      await fetch(url, { method: 'POST' });
      await sleep(3000);
    } catch (error) {
      console.error(error);
    }
  }
};

start();
