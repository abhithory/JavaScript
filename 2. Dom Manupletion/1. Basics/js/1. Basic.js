"use strict"

// Dom - The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree-like hierarchy, with each node in the tree representing a different aspect of the document, such as an element, an attribute, or text. The DOM allows developers to programmatically access and manipulate the content, structure, and style of a document


// DOM is not a part of javascript but it is programming interface for html
// check dom1.jpg

// JavaScript can be used to access and manipulate the DOM, but other programming languages can also be used, such as Python, Java, C#, etc.
// The DOM provides a way for a program to access and update the content, structure, and style of a document, and JavaScript is often used to interact with the DOM in web development.

// DOM is a part of WEB apis in browser
/*
there also some other webapis also there:--
DOM (Document Object Model) API: Allows JavaScript to access and manipulate the content, structure and style of a web page.
Geolocation API: Allows web applications to access the user's location information.
Web Storage API: Allows web applications to store and retrieve data on the client side, such as local storage and session storage.
Web Workers API: Allows web applications to run scripts in the background, separate from the main page, improving performance.
WebSocket API: Enables real-time communication between a client and a server.
WebRTC API: Enables peer-to-peer communication between browsers.
Web Audio API: Allows web developers to process and manipulate audio on the web.
Media Capture and Streams API: Allows web developers to access the user's camera and microphone.
*/

//----------------------

// select any element 

// console.log(document.querySelector("#mainText"));
// console.log(document.querySelector("#mainText").textContent);

// document.querySelector("#mainText").textContent = "Hello";

// document.querySelector("#newText").value = "nnn"

// console.log(document.querySelector("#newText").value);


//---------------- event listing


document.querySelector("#changeMainText").addEventListener(
    'click', function (e) {
        document.querySelector("#mainText").textContent = document.querySelector("#newText").value;
    }
)

document.querySelector("#changeSubText").addEventListener(
    'click', function (e) {
        document.querySelector(".subText").textContent = document.querySelector("#newText").value;
    }
)


// ---------------- changing css using js

document.querySelector(".changeColorButtons").style.marginTop = "2rem";

document.querySelector("#changeMainTextColor").addEventListener(
    'click', function (e) {
        if (document.querySelector("#mainText").style.color == 'red') {
            document.querySelector("#mainText").style.color = 'black';
        } else {
            document.querySelector("#mainText").style.color = 'red';
        }
    }
)



/// -------- Refeting the code or

/*
Refactoring code refers to the process of making changes to the structure of existing code without changing its external behavior. The goal of refactoring is to improve the maintainability, readability, and performance of the code. This can be done by:

Removing duplicate code
Simplifying complex logic
Splitting large functions into smaller ones
Renaming variables, classes, and methods to make them more meaningful
Extracting common functionality into reusable functions or classes
Replacing complex data structures with simpler ones
Updating the code to use modern syntax or best practices
*/


/// ----------- 