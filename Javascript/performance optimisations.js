/*Document fragments (DocumentFragment) are used in JavaScript to create and manipulate DOM elements more efficiently, especially when dealing with multiple elements or complex DOM manipulations. Here are some reasons why you might want to use DocumentFragment:

Performance Optimization:
When you append elements to the DOM one by one, the browser has to re-render the document each time, which can be inefficient, especially when dealing with a large number of elements.
DocumentFragment allows you to build up a DOM structure off-screen without causing reflows or repaints. Once the fragment is complete, you can append it to the document in one operation, minimizing performance overhead.
Reduced Browser Repaints:
Manipulating the DOM directly can cause the browser to repaint the document multiple times, leading to poor performance, especially on older browsers or devices.
By using DocumentFragment, you can make all your changes to the fragment first and then append it to the document, reducing the number of repaints and improving performance.
Cleaner Code:
Using DocumentFragment can make your code cleaner and easier to understand, especially when dealing with complex DOM manipulations or dynamic content generation.
Instead of manipulating the DOM directly with multiple append operations, you can create and modify elements within the fragment, leading to more concise and maintainable code.
Batch Operations:
DocumentFragment allows you to perform batch operations on DOM elements, which can be useful when you need to append or remove multiple elements at once.
For example, if you're generating a list of items dynamically, you can create a fragment, add all the items to it, and then append the fragment to the document in one step, improving performance.*/

// Ex

const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const div = document.createElement("div");
  div.textContent = `Item ${i}`;
  fragment.appendChild(div);
}
document.body.appendChild(fragment);

// In this example, we create a DocumentFragment, create 1000 <div> elements, add text content to each div, and then append all the divs to the fragment. Finally, we append the fragment to the document body in one operation. This is much more efficient than appending each div individually.
