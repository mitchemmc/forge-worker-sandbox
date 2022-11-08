// Just doing
// `new Worker(new URL("./worker.js", import.meta.url))`
// will lead to a 404

const url = new URL("./worker.js", import.meta.url);
const worker = new Worker(url.pathname.split("/").slice(-2).join("/"));

worker.postMessage("Hello from worker!");
