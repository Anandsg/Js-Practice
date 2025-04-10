const pr = new Promise((res, rej) => {
  setTimeout(() => {
    res("data fetched!");
  }, 2000);
});

pr.then((res) => {
  console.log("pr resolve:", res);
}).catch((err) => {
  console.log("pr reject:", err);
});

console.log("Promise created");

// async always returns a promise

async function getData() {
  return "data fetched!";
}

getData().then((res) => {
  console.log(res);
});

const p = new Promise((resolve, reject) => {
  resolve("Data fetched value!");
});

// await can only be used inside async functions
async function handlePromise() {
  const result = await p;
  console.log(result);
}

handlePromise();
