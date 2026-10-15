1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
 The main difference is that getElementById() works with an id, getElementsByClassName() works with class names, querySelector() returns the first matching element, and querySelectorAll() returns all matching elements.

 2. How do you create and insert a new element into the DOM?
 Answer:
 To create a new element in the DOM, we can use document.createElement(). Then we can insert it into the DOM using a method like before() or after(). The new paragraph will be added right after the element with the id title.
 3. What is Event Bubbling? And how does it work?
 Answer:
 Event Bubbling means when an event happens on a child element, the same event also moves up to its parent elements. For example, if a button is inside a div and we click the button, the click event happens on the button first. After that, it goes to the div, then to the body, and continues upward. 
 4. What is Event Delegation in JavaScript? Why is it useful?
 Answer:
 Event Delegation is a technique where we add one event listener to a parent element instead of adding separate event listeners to every child element. It works because of event bubbling. When we click a child element, the event moves up to the parent, and the parent can detect which child was clicked. Event Delegation is useful because it makes the code shorter, uses fewer event listeners, and also works for new child elements that are added later.
 5. What is the difference between preventDefault() and stopPropagation() methods?
 Answer:
 preventDefault() is used to stop the default behavior of an element. stopPropagation() is used to stop the event from moving to parent elements. So, preventDefault() stops the browser's default action, while stopPropagation() stops the event from bubbling up to parent elements.