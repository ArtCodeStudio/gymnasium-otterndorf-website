import fetch from "node-fetch";

const start = async () => {
  for (let i = 0; i <= 1000; i++) {
    const url = `http://localhost:4002/?${i}`;
    console.info(url);
    try {
      await fetch(url);
    } catch (error) {
      console.error(error);
    }
  }
};

start();
