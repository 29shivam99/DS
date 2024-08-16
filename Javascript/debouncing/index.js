counter = 0;

// a function to make API call/fetch data
function getData(context, args) {
  console.log("fetching data", counter++);
  //console.log(context, args);
}

function debounce(fn, delay) {
  let timerId;
  return function (name, age) {
    //just clear the time out if it exists (it exists means setTimeout ka callback is not executed yet and in between user typed something so execution came to this place again so just clear it we dont want to make previous API call now.)
    clearTimeout(timer);
    let context = this,
      args = arguments;
    timerId = setTimeout(() => {
      console.log(arguments);
      // call getData after 'delay' time and pass the context(this) and arguments passed to 'debouncedSearch'
      getData(context, arguments);
    }, delay);
  };
}

// debouncedSearch is a fn that gets a fn returned by debounce
const debouncedSearch = debounce(getData, 400);
