/////////////////  lets learn about fetch API ///////////////

// The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.

// Fetch is the modern replacement for XMLHttpRequest: unlike XMLHttpRequest, which uses callbacks, Fetch is promise-based.

// With the Fetch API, you make a request by calling fetch(). You pass it a Request object or a string containing the URL to fetch, along with an optional argument to configure the request.

// The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. You can then check the request status and extract the body of the response in various formats, including text and JSON, by calling the appropriate method on the response.

// Here's a minimal function that uses fetch() to retrieve some JSON data from a server:

async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

async function getDataFromAPI() {
  let URL = "abcd/salks/1";
  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Got some error ${response.status}`);
    }
    let jsonResponse = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error.message);
  }
}

// The fetch() function will reject the promise on some errors, but not if the server responds with an error status like 404: so we also check the response status and throw if it is not OK.

// HOW TO MAKE CALLS OTHER THAN GET USING FETCH

// By default, fetch() makes a GET request, but you can use the method option to use a different request method:

// const response = await fetch("https://example.org/post", {
//   method: "POST",
//   // ...
// });

// we can use body as well to post

// const response2 = await fetch("", {
//   method: "POST",
//   body: JSON.stringify({
//     name: "shivam",
//     age: 25,
//   }),
// });

///////////////////// HOW TO CREATE A REQUEST OBJECT ///////////////////////////

let request1 = new Request("", {
  method: "POST",
  body: JSON.stringify({
    name: "shivam",
  }),
});

console.log(request1);

// thing to note here is that request1 is

////////////////////////////////////////////////////////////////////////////////////////////////
