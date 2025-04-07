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

// async

async function getData() {
  return "data fetched";
}

const dataPromise = getData();

dataPromise.then((res) => {
  console.log(res);
});
