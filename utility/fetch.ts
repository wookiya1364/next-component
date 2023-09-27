async function getData() {
  return await fetch("https://jsonplaceholder.typicode.com/albums/1/photos", {
    method: "GET",
    cache: "no-cache",
  }).then((response) => response.json());
}

export { getData };
