# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it. another test

## Development Tools

Command-Line Interface (CLI): Use the terminal (bash, PowerShell, etc.) to manage files and run tools. Check tools with commands like git --version or aws --version .
Git & GitHub Workflow:

Initialize a repo: git init creates a hidden .git directory .

Stage and commit changes:
$ git add . # commit to local repo
$ git commit -m "msg" # view tracked/untracked files
$ git status # stage all changes

Running git status shows staged vs. unstaged files .
Push to GitHub: git push origin main (after setting remote with git remote add origin ).
Use branches ( git branch, git checkout -b feature ) and pull requests for team
collaboration.
Best Practices: Write clear commit messages, use .gitignore to skip config or sensitive files, pull
( git pull ) before pushing to avoid conflicts. Always merge feature branches into the main branch
via PRs.
Common Mistakes: Forgetting to git add files (they remain untracked), committing large build/
artifact files (use 4 3
.gitignore ), or pushing without pulling first (can cause merge conflicts) .
AWS EC2 (Web Servers & DNS):
Set up a cloud VM: In AWS, launch an EC2 instance (Linux/Ubuntu). Configure security (SSH key, open
port 22/80/443). Map a custom domain to the instance via Route 53 (DNS). AWS “made it possible to
5
experiment with DNS, create web servers, and host project content” .
Connect via SSH: Use the AWS CLI or SSH client. For example:
$ ssh -i my-key.pem ec2-user@ec2-12-34-56-78.compute-1.amazonaws.com
The AWS CLI’s EC2 connect command is documented: “Connect to your EC2 instance using your
6
OpenSSH client” . You may also use aws ec2-instance-connect ssh --instance-id
i-1234567890abcdef .

Best Practices: Keep your private key secure, use ssh-agent or aws configure for credential
management, update and patch your server regularly. Use HTTPS with certificates (Let’s Encrypt) for
secure sites.
Common Mistakes: Opening unnecessary ports; forgetting to set file permissions (e.g., your .pem
should be chmod 600 ). Not specifying the correct user ( ec2-user for Amazon Linux, ubuntu
for Ubuntu AMIs).

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps,
wget, sudo do?
chmod - change permissions, pwd - print working directory, cd - change directory, ls - list files, vim/nano - text
editors, mkdir - make directory, mv - move/rename, rm - remove, man - manual, ssh - remote shell, ps -
processes, wget - download files, sudo - run as admin

Which of the following is true when the -la parameter is specified for the ls console command?
ls -la lists all files (including hidden) in long format

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top
level domain, which is a subdomain, which is a root domain?
TLD: .click, root domain: bozo.click, subdomain: fruit.bozo.click (and banana.fruit.bozo.click is a nested
subdomain)

Is a web certificate is necessary to use HTTPS.
Yes, HTTPS requires a valid SSL/TLS certificate.
Can a DNS A record can point to an IP address or another A record.
A DNS A record points to an IP address; it should not point to another A record.
Port 443, 80, 22 is reserved for which protocol?
443 -> HTTPS, 80 -> HTTP, 22 -> SSH



## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was not to bad. It was difficult trying to figure out the format of everything especially since with html you are slighly limited on what you are able to do. So I tried my best in formatting it the way I think it should be but I am not sure if I am may want to change things once I start using css.
Also figuring out place holders for things was difficult

Document Structure: Start every page with the HTML5 doctype and basic skeleton :
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>My Page</title>
</head>
<body>
<h1>Hello World</h1>
<p>This is a paragraph.</p>
</body>
</html>

This defines the root <html> , a <head> (metadata) and <body> (visible content). Include a
<title> in <head> for the browser tab title .

Semantic Tags: Use meaningful tags: <h1>– <h6> for headings, <p> for paragraphs, <ul> /
<ol> for lists, <nav> for navigation, <main> , <header> , <footer> , etc. This improves
accessibility and SEO.
Linking CSS & Scripts: In <head> , link external stylesheets with <link> :
  <link href="styles.css" rel="stylesheet">
And include JS with <script src="app.js"></script> (see next section).

HTML Examples: The MDN “Basic HTML syntax” shows a minimal page like above . Remember to
close tags and nest elements properly.

Best Practices: Keep HTML well-indented and validate with [W3C validator]. Use lowercase tags/
attributes and quotation marks. Use id and class attributes for styling and scripting hooks.

Common Mistakes: Forgetting to include <!doctype html> (can trigger quirks mode) .
Mismatched or unclosed tags. Placing block elements (like <div> ) inside inline tags incorrectly

🏗 Purpose

HTML defines the structure and content of a web page.

📄 Basic Structure
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Web Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is a paragraph.</p>
</body>
</html>
<meta charset="UTF-8">
Ensures the page correctly displays Unicode characters.
🧱 Common Elements
Element	Description	Example
<h1>–<h6>	Headings	<h1>Main Title</h1>
<p>	Paragraph	<p>Text here</p>
<a>	Link (anchor)	<a href="https://byu.edu">BYU</a>
<img>	Image	<img src="image.jpg" alt="Description">
<ul> / <ol>	Lists	<ul><li>Item</li></ul>
<div>	Block container	<div>Content</div>
<span>	Inline container	<span>Text</span>
<table>	Table	<table><tr><td>Cell</td></tr></table>
<form>	Form	<form><input type="text"></form>
🧩 Attributes

Attributes give extra info to elements.

<a href="https://example.com" target="_blank">Open link</a>
<img src="pic.jpg" alt="A picture" width="200">

⚙️ Semantic Tags (HTML5)

Help browsers and developers understand page structure:

<header> – top section

<nav> – navigation menu

<main> – main content

<article> – independent content

<section> – thematic grouping, represents a standalone section of content, usually with a heading. 

<aside> – sidebar

<footer> – bottom section

<div> is a container element used to group other HTML elements together. It has no visual
effect by itself, but helps structure the page for styling and layout using CSS. Commonly used
for sections, wrappers, and layout blocks.
<a href="https://www.example.com">
 <img src="images/photo.jpg" alt="Example image">
</a>
This code wraps an image inside a hyperlink. Clicking the image takes the user to the linked page.
Your folder structure could look like this:
project-folder/
■■■ index.html
■■■ images/
■ ■■■ photo.jpg
You can also use an external image URL:
<a href="https://openai.com">
 <img src="https://example.com/image.png" alt="External image">
</a>
The DOM represents the HTML document as a tree of objects. You can use JavaScript to access and modify
DOM elements. Each HTML element is a node in the DOM.
By default, the HTML span element has a default CSS display property value of:
inline
Paragraph: <p>, Ordered list: <ol>, Unordered list: <ul>, h2: <h2>, h1: <h1>, h3: <h3>
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## CSS
it wasn't too bad to create, it was hard with not knowing exactly what I can possibly do with css, but once I learned how css and html work together it made it easier

I learned that the html is more important than I thought in shaping how it looked like where to put headings and pargraph can help shape the way its suppose to be. 

I learned how to make a multi colored text and also a gradient background

I learned how to make the forms more colorful through highlight box when submitting

also I learned how to create shadows over blocks to create a more dynamics in the css

Syntax & Linking: Write CSS rules with selectors and declarations. Example in styles.css :
  body {
background-color: #f0f0f0;
font-family: Arial, sans-serif;
margin: 0;
padding: 0;
}
.container {
display: flex;
flex-direction: column;
align-items: center;
}
Link this file via <link href="styles.css" rel="stylesheet"> in your HTML head .
Selectors & Properties: Use element selectors ( p {} ), class ( .button {} ), and ID ( #main {} )
to target elements. Assign class or id in HTML and define matching rules in CSS. You can also
use pseudo-classes (like :hover ) or media queries for responsive design.
Responsive Layout: Use flexible units (%, vh , vw ) or CSS Flexbox/Grid for layout. For example, a
responsive navbar with display: flex lets elements wrap on smaller screens. MDN’s CSS guides
cover these patterns.
Best Practices: Keep CSS separated from HTML ( <style> tags only for quick tests). Minimize
repeated code by using classes. Use comments to annotate sections. Organize styles logically (e.g.
global settings first, then layout, then components).
Common Mistakes: Overly specific selectors (makes reuse hard). Relying too much on absolute
units (px); prefer relative units or responsive queries. Forgetting to add the viewport <meta> tag
for mobile (noted in many responsive guides).
🎯 Purpose

CSS controls presentation — layout, colors, fonts, spacing, etc.

🔗 Ways to Apply CSS

Inline:
<p style="color:red;">Hello</p>

Internal (in <head>):

<style>
  p { color: red; }
</style>


External:
<link rel="stylesheet" href="style.css">

🎨 Basic Syntax
selector {
  property: value;
}


Example:

h1 {
  color: navy;
  font-size: 2em;
}

📚 Common Selectors
Selector	Example	Meaning
Element	p {}	All <p> elements
Class	.note {}	Elements with class="note"
ID	#header {}	Element with id="header"
Descendant	div p {}	<p> inside <div>
Pseudo-class	a:hover {}	When hovering over a link
🧭 Box Model

Every element is a box made of:

+--------------------+
|    margin          |
|  +---------------+ |
|  |   border       | |
|  | +------------+ | |
|  | | padding    | | |
|  | | +--------+ | | |
|  | | | content | | | |
|  | | +--------+ | | |
|  | +------------+ | |
|  +---------------+ |
+--------------------+


Properties:

margin: space outside border

border: edge around padding

padding: space inside border

content: actual text/image area

🧭 Layout Basics

Display: block, inline, inline-block, flex, grid

Positioning:

static (default)

relative (offset from normal)

absolute (positioned inside nearest relative parent)

fixed (relative to viewport)

Flexbox: simplifies responsive layout

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
 padding: 20px;
}
This adds 20 pixels of space inside the div, between its content and its border. Padding increases the
internal spacing, unlike margin which affects the space outside the element.

#title selects an element by ID (unique). .grid selects elements by class (can apply to multiple elements)
Padding: space inside the element (between content and border). Margin: space outside the element (between
border and other elements).
If the container uses display: flex;, the images will be displayed in a row by default, side by side, unless
flex-direction: column; is specified.
Example: padding: 10px 20px; adds 10px top/bottom and 20px left/right inside the element

How would you use CSS to change all the div elements to have a background color of red?
div { background-color: red; }

Order: Content -> Padding -> Border -> Margin
Diagram:
+----------------+
| Margin |
| +------------+ |
| | Border | |
| | +--------+ | |
| | |Padding | | |
| | |Content | | |
| | +--------+ | |
| +------------+ |
+----------------+
Padding increases size inside border; margin creates space between elements.

 Given <p><span class="trouble">trouble</span> double</p>, use .trouble { color: green; }
 inline	Flows within text, width/height ignored
block	Takes full width, starts on a new line
inline-block	Like inline but respects width/height

relative: Positioned relative to its normal position

absolute: Positioned relative to nearest positioned ancestor

fixed: Stays fixed on the screen

sticky: Acts like relative until scroll passes it

px: Fixed pixels

em: Relative to parent element font size

rem: Relative to root font size

%: Relative to parent container

## Javascript Basics
Embedding JS: You can place JavaScript in <script> tags either inline or via src . For example:
<!-- In HTML file -->
<script src="main.js"></script>
<script>
console.log("Inline JS here");
</script>
(Linking scripts is shown on MDN ). Place scripts at the end of <body> or use defer so that the DOM is loaded first 

Basic Syntax:
'''
// variables
let name = "Alice"; const PI = 3.14; // mutable
// constant
// function definition
function add(a, b) {
return a + b;
}
// arrow function (ES6)
const multiply = (x, y) => x * y;
// control flow
for (let i = 0; i < 3; i++) {
console.log(i);
}
if (name === "Alice") {
console.log("Hello, Alice!");
}
'''
DOM Manipulation & Events: Use document.querySelector / getElementById to grab
elements, then change content or style:
const btn = document.querySelector("#myButton");
btn.addEventListener("click", () => {
document.querySelector("h1").textContent = "Clicked!";
});
This adds a click handler to update the <h1> .
Using External APIs: Use fetch() for HTTP requests or WebSocket APIs for real-time data. Node/
Express backends (covered later) would serve JSON endpoints that the frontend JavaScript can call.
Best Practices: Put scripts in separate .js files for clarity. Use const / let instead of var .
Keep functions small and focused. Test code with browser consoles or JSFiddle/CodePen.
Common Mistakes: Forgetting to include type="module" or enclosing code in
DOMContentLoaded if needed. Not handling asynchronous fetches (use .then() or async/
await ). Off-by-one errors in loops. Not checking for null when selecting DOM elements.
🧠 Purpose

Adds interactivity and dynamic behavior to web pages.

🧩 How to Include JS

Inline:
<button onclick="alert('Hi!')">Click me</button>

Internal:

<script>
  console.log("Hello!");
</script>


External:
<script src="script.js"></script>

🔤 Basic Syntax
let name = "Ash";
const age = 20;
var oldVar = true;

⚡ Data Types

String – "hello"

Number – 42

Boolean – true / false

Array – [1, 2, 3]

Object – { name: "Ash", age: 20 }

Null, Undefined

🧮 Operators

+, -, *, /, %

== vs === (strict equality)

Logical: &&, ||, !

🔁 Control Structures
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (true) {
  break;
}

🔧 Functions
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Ash"));


Arrow function:

const greet = name => `Hello ${name}`;

🧱 DOM Manipulation

The Document Object Model (DOM) lets JS change HTML/CSS dynamically.

document.getElementById("demo").innerHTML = "Changed!";
document.querySelector(".title").style.color = "blue";


Events:

document.querySelector("button").addEventListener("click", function() {
  alert("Button clicked!");
});

🧠 Common Built-in Functions

alert("Message")

prompt("Enter your name:")

console.log("Debug info")

💡 Summary Table
Concept	HTML	CSS	JavaScript
Purpose	Structure	Style	Behavior
Syntax	Tags <tag>	Selectors {}	Statements ;
File Type	.html	.css	.js
Example	<p>	p {color:red;}	alert('Hi')

Comments

HTML: <!-- comment -->

CSS: /* comment */

JS: // comment

Responsive Design: @media queries

Linking Files: <link> and <script>

Debugging: Using console.log()

Best Practices: Indentation, semantic HTML, separation of concerns (HTML = structure, CSS = style, JS = behavior)

const greet = (name) => {
 return 'Hello, ' + name;
}
console.log(greet('Amur'));
This defines an arrow function named greet that takes one argument name and returns a greeting
string.
const square = x => x * x;
console.log(square(5));
Here, square takes a number and returns its square. The arrow syntax allows concise one-line
functions.
const add = (a, b) => a + b;
console.log(add(2, 3));
This function takes two arguments and returns their sum. Arrow functions are common in modern JS,
especially with array methods.

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
Output: [2, 4, 6] — The map() function applies a transformation to each element, returning a new array.
const students = [{name: 'Amy'}, {name: 'Ben'}];
const names = students.map(s => s.name);
console.log(names);
Output: ['Amy', 'Ben'] — This extracts the 'name' property from each object. Map doesn't change the
original array.
'''
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
 alert('Button clicked!');
});
getElementById() selects the HTML element with the specified id. addEventListener() waits for an event
(like a click) and runs the provided function when triggered. It doesn’t execute immediately—it listens
for the event.
const input = document.getElementById('username');
input.addEventListener('change', () => {
 console.log('Input changed');
});
Listens for a change in an input field and logs a message when the value changes.
const form = document.getElementById('loginForm');
form.addEventListener('submit', e => {
 e.preventDefault();
 console.log('Form submitted');
});
'''
Prevents form refresh on submit and handles the event using JS.
const heading = document.getElementById('title');
heading.style.color = 'green';
This example changes the text color of an element with id='title' to green.

What does the following line of Javascript do using a # selector?
document.querySelector('#title') selects the first element that matches the CSS selector #title (elemequerySelector accepts any CSS selector (classes, attributes, pseudos).

for (let i = 0; i < 3; i++) { console.log(i); }
This initializes i=0, checks i<3 each loop, runs body and increments i++ after each iteration. Output 

Option 1 (direct):
document.getElementById('byu').style.color = 'green';
Option 2 (variable):
const byu = document.getElementById('byu');
byu.style.color = 'green';
Explanation: getElementById returns the DOM element. Assigning to variable avoids querying repeatedly.

if (x > 5) { ... } else { ... } for (...) { ... } while (...) { ... } switch (x) { case 1: ...; break; default: ... }
const person = { name: "John", age: 30 };

Is it possible to add new properties to javascript objects?
Yes. Example: person.city = "Provo";

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and
leave the "fish" text unaffected?
HTML:
'''
<p id="animal">animal</p>
<p id="fish">fish</p>
Option 1 (direct):
document.getElementById('animal').textContent = 'crow';
Option 2 (variable):
const animal = document.getElementById('animal');
animal.textContent = 'crow';
'''
Both work; second is clearer if reusing element.

Which of the following correctly describes JSON?
JSON (JavaScript Object Notation) is a text-based format for structured data using key-value pairs. Example: {
"name": "John", "age": 25 }


What will the following code using Promises output when executed?
Many possibilities depending on promise behavior. Examples:
1) Promise.resolve('Done').then(console.log) -> 'Done'
2) Promise.reject('Error').catch(console.error) -> 'Error'
3) new Promise(res => setTimeout(() => res('Hi'),1000)).then(console.log) -> 'Hi' after 1s
4) Async function returns value -> printed when awaited or .then
5) Promise chain: Promise.resolve(2).then(x=>x*2).then(x=>x+1).then(console.log) -> 5
6) Reject handled -> shows error via catch.
## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
## Midterm study guide
🧱 1. HTML — Structure and Semantics
Core Concepts

Purpose: Defines the structure and content of a webpage.

Common Tags:

Element	Description	Example
<div>	Block-level container for layout	<div class="content"></div>
<span>	Inline container for text styling	<span class="highlight">Hi</span>
<p>	Paragraph	<p>Hello!</p>
<a>	Hyperlink	<a href="https://byu.edu">BYU</a>
<img>	Image	<img src="images/pic.jpg" alt="Description">
<ol> / <ul>	Ordered / Unordered lists	<ul><li>Item</li></ul>
<h1>–<h6>	Headings (1 = largest)	<h2>Subheading</h2>
Important

Always declare document type:

<!DOCTYPE html>


<link> tags connect external CSS:

<link rel="stylesheet" href="style.css">


<script> tags load JavaScript:

<script src="script.js"></script>

Practice

Write HTML that displays an image linking to Google.

Create a list of your favorite foods with an <h2> title.

🎨 2. CSS — Styling and Layout
Core Concepts

Selectors

Selector	Example	Meaning

# id
. class
ID	#title	Selects element with id="title"
Class	.grid	Selects all elements with class="grid"
Element	p	Selects all <p> tags

Box Model

Content → Padding → Border → Margin


Each layer affects spacing differently.

Padding vs Margin

Padding: Space inside element border

Margin: Space outside element border

Display types:

block → takes full width (<div>, <p>)

inline → takes only needed width (<span>, <a>)

inline-block → inline but respects width/height

flex → enables flexible layout for children

Flexbox basics

.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: center; /* horizontal alignment */
  align-items: center; /* vertical alignment */
}

Practice

Write CSS to make all <div> elements have a red background.

Create a flex container that places three boxes side by side.

What happens if you set display: flex; flex-direction: column;?

⚙️ 3. JavaScript — Logic and Functionality
Syntax & Flow

Variables:
let, const, var

Conditionals:

if (x > 5) { ... } else { ... }


Loops:

for (let i = 0; i < 3; i++) { console.log(i); }


Objects:

const person = { name: "John", age: 30 };
person.city = "Provo"; // add new property

Arrow Functions

Compact syntax:

const add = (a, b) => a + b;
const square = x => x * x;
if and else
=condition ? true statemnt : false statemnt

⚠️ Arrow functions don’t bind their own this.

Arrays and Methods
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2,4,6]


Common methods:

map() → transform each element

filter() → keep elements matching a condition

forEach() → run function for each element

reduce() → combine values


🧩 4. The DOM — Document Object Model
Core Concepts

DOM = in-memory representation of HTML as a tree of nodes

You can manipulate it using JS.

Selecting elements:

document.getElementById('title')
document.querySelector('.className') // accepts any CSS selector


Changing content or style:

const el = document.getElementById('byu');
el.style.color = 'green';
el.textContent = 'crow';


Handling events:

const btn = document.getElementById('btn');
btn.addEventListener('click', () => console.log('Clicked!'));

🔒 5. Networking and Web Fundamentals
DNS Structure

Example: banana.fruit.bozo.click

TLD (Top-Level Domain): .click

Root Domain: bozo.click

Subdomain: fruit.bozo.click

Nested Subdomain: banana.fruit.bozo.click

Ports
Port	Protocol
80	HTTP
443	HTTPS
22	SSH
HTTPS

Requires an SSL/TLS certificate for encryption and authentication.

DNS Records

A Record: maps domain → IP address
(❌ should not point to another A record)

💻 6. Terminal & Linux Commands
Command	Description
pwd	print working directory
cd	change directory
ls / ls -la	list files (with -la = show hidden + detailed)
mkdir	make directory
rm	remove files
mv	move or rename
chmod	change permissions
man	manual/help
vim, nano	text editors
ssh	connect remotely (secure shell)
wget	download files
sudo	run command as admin/root
⏳ 7. Promises & Async JavaScript
Promises

Represent future values (async operations).

Examples:

Promise.resolve('Done').then(console.log); // Done
Promise.reject('Error').catch(console.error); // Error

Chaining
Promise.resolve(2)
  .then(x => x * 2)
  .then(x => x + 1)
  .then(console.log); // 5

Async/Await
async function getData() {
  const data = await fetch('api/data');
  console.log(data);
}

🧠 8. JSON — Data Format

JSON = JavaScript Object Notation

Text-based, key-value pairs.

Example:

{
  "name": "John",
  "age": 25
}


Used for API responses and configuration files.

💡 Common Pitfalls to Watch For

Forgetting to close tags in HTML.

Using = instead of == or === in JS.

Forgetting quotes around attribute values.

Confusing padding and margin.

Not using getElementById or querySelector correctly.

Expecting map() to change the original array — it doesn’t.

Using flex-direction: column when you meant row layout.
[array].map()
((input=> {input+1})
It will return 
[2,3,4,5]

Document. queryselector(id
Id- specific
Class-can be put on multiple elements
Css .classname #idname

Promise is something that will return a value but doesn’t yet
Html what the elements do
Css how to implement
Pseudo-allows you to be an admin and run
let a= ['cow', 'rat', 'fish'];
let b= a.reduce((a,v)=>[a,v].join(':'));
console.log(b)
cow:rat:fish

document.querySelectorAll(".class")

Returns a NodeList of all elements with class "class"
const obj = JSON.parse('{"name":"Alice","age":25}');
element.classList.remove("active");

element.addEventListener("click", handler);
element.addEventListener("mouseover", handler);

innerHTML: Gets/sets HTML content

innerText: Gets visible text, respects styling

textContent: Gets all text, ignores style

const div = document.createElement("div");
div.textContent = "Hello";
document.body.appendChild(div);
sync/await vs .then()

async/await: Synchronous-looking, cleaner for multiple Promises

.then(): Chains callbacks

Q41: Rejected Promise with no .catch()

Throws an unhandled promise rejection

Q42: Run multiple Promises in parallel

Promise.all([promise1, promise2]).then(values => console.log(values));

###Midterm study guide
In the following code, what does the link element do?
It links an external resource (usually a CSS file) to the HTML document. Example: <link rel="stylesheet"
href="styles.css"> applies styles from styles.css to the page.
In the following code, what does a div tag do?
A &lt;div&gt; is a block-level container that groups other elements. It's used for structure and layout.
Examples (use in layouts):
&lt;div class="header"&gt; ... &lt;/div&gt;
&lt;div class="content"&gt; ... &lt;/div&gt;
Divs have default display:block and take full width. They don't add behavior by themselves.
In the following code, what is the difference between the #title and .grid selector?
#title selects an element by ID (unique). .grid selects elements by class (can apply to multiple elements).
In the following code, what is the difference between padding and margin?
Padding: space inside the element (between content and border). Margin: space outside the element (between
border and other elements).
Given this HTML and this CSS how will the images be displayed using flex?
If the container uses display: flex;, the images will be displayed in a row by default, side by side, unless
flex-direction: column; is specified.
What does the following padding CSS do?
Example: padding: 10px 20px; adds 10px top/bottom and 20px left/right inside the element.
What does the following code using arrow syntax function declaration do?
Arrow functions are a compact function syntax. (a, b) => a + b means a function with parameters a and b that
returns a+b.
Examples:
const add = (a, b) => a + b;
const greet = name => `Hi ${name}`;
const square = x => { return x * x; } // block form
Note: arrow functions do not bind their own 'this' and are not suitable as constructors.
What does the following code using map with an array output?
map() transforms every element of an array and returns a new array without mutating the original.
Examples:
const nums = [1,2,3];
const doubled = nums.map(n => n * 2); // [2,4,6]
const names = ['Amy','Bob'];
const greetings = names.map(n => `Hi ${n}`); // ['Hi Amy','Hi Bob']
What does the following code output using getElementByID and addEventListener?
Typical pattern:
const btn = document.getElementById('btn');
btn.addEventListener('click', () => console.log('Clicked!'));
Behavior: When user clicks the element with id 'btn', the callback runs and prints 'Clicked!'.
What does the following line of Javascript do using a # selector?
document.querySelector('#title') selects the first element that matches the CSS selector #title (elemequerySelector accepts any CSS selector (classes, attributes, pseudos).
Which of the following are true? (mark all that are true about the DOM)
The DOM represents the HTML document as a tree of objects. You can use JavaScript to access and modify
DOM elements. Each HTML element is a node in the DOM.
By default, the HTML span element has a default CSS display property value of:
inline
How would you use CSS to change all the div elements to have a background color of red?
div { background-color: red; }
How would you display an image with a hyperlink in HTML?
Wrap the &lt;img&gt; element with an &lt;a&gt; tag. Ensure the image file is in the correct folder (public or
images/) and the src path points to it.
Example:
&lt;a href="https://example.com"&gt;
 &lt;img src="images/logo.png" alt="Logo"&gt;
&lt;/a&gt;
Folder scheme example:
project/
 index.html
 images/
 logo.png
 css/
 styles.css
If using a framework, the image may need to be in a 'public' or 'static' folder so it is served directly.
In the CSS box model, what is the ordering of the box layers starting at the inside and working
out?
Order: Content -> Padding -> Border -> Margin
Diagram:
+----------------+
| Margin |
| +------------+ |
| | Border | |
| | +--------+ | |
| | |Padding | | |
| | |Content | | |
| | +--------+ | |
| +------------+ |
+----------------+
Padding increases size inside border; margin creates space between elements.
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave
the "double" text unaffected?
Given <p><span class="trouble">trouble</span> double</p>, use .trouble { color: green; }
What will the following code output when executed using a for loop and console.log?
for (let i = 0; i < 3; i++) { console.log(i); }
This initializes i=0, checks i<3 each loop, runs body and increments i++ after each iteration. Output How would you use JavaScript to select an element with the id of “byu” and change the text
color of that element to green?
Option 1 (direct):
document.getElementById('byu').style.color = 'green';
Option 2 (variable):
const byu = document.getElementById('byu');
byu.style.color = 'green';
Explanation: getElementById returns the DOM element. Assigning to variable avoids querying repeatedly.
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level
heading, first level heading, third level heading?
Paragraph: <p>, Ordered list: <ol>, Unordered list: <ul>, h2: <h2>, h1: <h1>, h3: <h3>
How do you declare the document type to be html?
<!DOCTYPE html>
What is valid javascript syntax for if, else, for, while, switch statements?
if (x > 5) { ... } else { ... } for (...) { ... } while (...) { ... } switch (x) { case 1: ...; break; default: ... }
What is the correct syntax for creating a javascript object?
const person = { name: "John", age: 30 };
Is it possible to add new properties to javascript objects?
Yes. Example: person.city = "Provo";
If you want to include JavaScript on an HTML page, which tag do you use?
<script src="script.js"></script>
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and
leave the "fish" text unaffected?
HTML:
<p id="animal">animal</p>
<p id="fish">fish</p>
Option 1 (direct):
document.getElementById('animal').textContent = 'crow';
Option 2 (variable):
const animal = document.getElementById('animal');
animal.textContent = 'crow';
Both work; second is clearer if reusing element.
Which of the following correctly describes JSON?
JSON (JavaScript Object Notation) is a text-based format for structured data using key-value pairs. Example: {
"name": "John", "age": 25 }
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps,
wget, sudo do?
chmod - change permissions, pwd - print working directory, cd - change directory, ls - list files, vim/nano - text
editors, mkdir - make directory, mv - move/rename, rm - remove, man - manual, ssh - remote shell, ps -
processes, wget - download files, sudo - run as admin
Which of the following console command creates a remote shell session?
ssh
Which of the following is true when the -la parameter is specified for the ls console command?
ls -la lists all files (including hidden) in long format
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top
level domain, which is a subdomain, which is a root domain?
TLD: .click, root domain: bozo.click, subdomain: fruit.bozo.click (and banana.fruit.bozo.click is a nested
subdomain)
Is a web certificate is necessary to use HTTPS.
Yes, HTTPS requires a valid SSL/TLS certificate.
Can a DNS A record can point to an IP address or another A record.
A DNS A record points to an IP address; it should not point to another A record.
Port 443, 80, 22 is reserved for which protocol?
443 -> HTTPS, 80 -> HTTP, 22 -> SSH
What will the following code using Promises output when executed?
Many possibilities depending on promise behavior. Examples:
1) Promise.resolve('Done').then(console.log) -> 'Done'
2) Promise.reject('Error').catch(console.error) -> 'Error'
3) new Promise(res => setTimeout(() => res('Hi'),1000)).then(console.log) -> 'Hi' after 1s
4) Async function returns value -> printed when awaited or .then
5) Promise chain: Promise.resolve(2).then(x=>x*2).then(x=>x+1).then(console.log) -> 5
6) Reject handled -> shows error via catch.

What does a div tag do?
<div> is a container element used to group other HTML elements together. It has no visual
effect by itself, but helps structure the page for styling and layout using CSS. Commonly used
for sections, wrappers, and layout blocks.
<div>
 <p>This is inside a div</p>
</div>
In this example, the paragraph is grouped inside a div, which can be styled or positioned together.
What does the following padding CSS do?
div {
 padding: 20px;
}
This adds 20 pixels of space inside the div, between its content and its border. Padding increases the
internal spacing, unlike margin which affects the space outside the element.
What does the following code using arrow syntax function declaration do?
const greet = (name) => {
 return 'Hello, ' + name;
}
console.log(greet('Amur'));
This defines an arrow function named greet that takes one argument name and returns a greeting
string.
const square = x => x * x;
console.log(square(5));
Here, square takes a number and returns its square. The arrow syntax allows concise one-line
functions.
const add = (a, b) => a + b;
console.log(add(2, 3));
This function takes two arguments and returns their sum. Arrow functions are common in modern JS,
especially with array methods.
What does the following code using map with an array output?
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
Output: [2, 4, 6] — The map() function applies a transformation to each element, returning a new array.
const students = [{name: 'Amy'}, {name: 'Ben'}];
const names = students.map(s => s.name);
console.log(names);
Output: ['Amy', 'Ben'] — This extracts the 'name' property from each object. Map doesn't change the
original array.
What does the following code output using getElementById and addEventListener?
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
 alert('Button clicked!');
});
getElementById() selects the HTML element with the specified id. addEventListener() waits for an event
(like a click) and runs the provided function when triggered. It doesn’t execute immediately—it listens
for the event.
const input = document.getElementById('username');
input.addEventListener('change', () => {
 console.log('Input changed');
});
Listens for a change in an input field and logs a message when the value changes.
const form = document.getElementById('loginForm');
form.addEventListener('submit', e => {
 e.preventDefault();
 console.log('Form submitted');
});
Prevents form refresh on submit and handles the event using JS.
const heading = document.getElementById('title');
heading.style.color = 'green';
This example changes the text color of an element with id='title' to green.
How would you display an image with a hyperlink in HTML?
<a href="https://www.example.com">
 <img src="images/photo.jpg" alt="Example image">
</a>
This code wraps an image inside a hyperlink. Clicking the image takes the user to the linked page.
Your folder structure could look like this:
project-folder/
■■■ index.html
■■■ images/
■ ■■■ photo.jpg
You can also use an external image URL:
<a href="https://openai.com">
 <img src="https://example.com/image.png" alt="External image">
</a>

🧠 CS 260 Web Programming Final Exam Study Guide

This exam covers HTTP, Express, MongoDB, WebSockets, React, Node, and deployment tools. The goal is to recognize what things do, not to write long code.

🌐 Networking & HTTP
Default Ports
Protocol	Port
HTTP	80
HTTPS	443
SSH	22
HTTP Status Code Ranges
Range	Meaning
200–299	Success
300–399	Redirects (resource moved)
400–499	Client errors (bad request, unauthorized, not found)
500–599	Server errors (crash, exception, bad backend logic)
Content-Type HTTP Header

Tells the client how to interpret the body of the response.

Examples:

Content-Type: application/json
Content-Type: text/html
Content-Type: text/plain


Why it matters:

Browser knows how to render data

fetch() knows how to parse (.json(), .text())

🍪 Cookies & Security
Secure Cookie

Only sent over HTTPS

Prevents sniffing on insecure networks

HttpOnly Cookie

Not accessible via JavaScript

Prevents XSS attacks

SameSite Cookie

Controls cross-site cookie sending:

Strict → never sent cross-site

Lax → sent on safe navigations

None → sent everywhere (must be Secure)

⚙️ Express & Middleware
Middleware Execution

Middleware runs in order, top → bottom.

app.use('/api', (req, res, next) => {
  console.log('A');
  next();
});

app.get('/api/document', (req, res) => {
  console.log('B');
});


➡️ Console output for GET /api/document:

A
B


Key idea:

next() passes control forward

Middleware matches path prefixes

🔁 Fetch API
What does fetch() do?

Makes an HTTP request

Returns a Promise

Does not throw on 4xx/5xx automatically

Example:

const response = await fetch('/api/data');
const data = await response.json();

🗄️ MongoDB
Query { name: "Mark" }

Matches:

{ "name": "Mark" }


Does not match:

{ "name": "mark" }
{ "name": "Markus" }


MongoDB queries are:

Case-sensitive

Exact matches unless using operators

🔐 Password Storage (VERY IMPORTANT)
Correct Way

✅ Hashed + Salted

bcrypt(password + salt)

❌ Never store:

Plain text

Encrypted passwords

Base64 encoded strings

🔌 WebSockets
Purpose

Provide:

Persistent connection

Full-duplex communication

Real-time updates

Used for:

Chat

Multiplayer games

Live notifications

WebSocket Console Output

If backend sends:

ws.send("hello");


Frontend:

socket.onmessage = (event) => {
  console.log(event.data);
};


➡️ Output:

hello

🧩 Acronyms
Acronym	Meaning
JSX	JavaScript XML
JS	JavaScript
AWS	Amazon Web Services
NPM	Node Package Manager
NVM	Node Version Manager
⚛️ React Basics
What Does a React Component Do?

Returns JSX

Describes UI based on props + state

React Component with Parameters
function Hello({ name }) {
  return <p>Hello {name}</p>;
}


Rendered as:

<Hello name="Ashley" />


➡️ Output:

Hello Ashley

Component Nesting
function A() {
  return <B />;
}

function B() {
  return <p>Hi</p>;
}


➡️ Output:

Hi


Components render inside each other.

🪝 React Hooks
What are Hooks Used For?

Add state & lifecycle logic to function components

Avoid class components

React.useState

Stores component-local state

Triggers re-render on change

const [count, setCount] = useState(0);

Common Hooks & What They Do
Hook	Purpose
useState	Local component state
useContext	Shared/global state
useRef	Persist values without re-render
useEffect	Side effects (fetching, timers)
useMemo / useCallback	Performance optimization
🧭 React Router
What React Router Does

Client-side navigation

Changes URL without reloading page

Key facts:

<Route path="/x" element={<X/>} />

Only one route matches

Uses browser history API

📦 Node & Tooling
What does node.js do?

Runs JavaScript outside the browser

Powers servers, APIs, tooling

What does package.json do?

Defines project metadata

Lists dependencies

Defines scripts

"scripts": {
  "start": "node index.js"
}

What does PM2 do?

Keeps Node apps running

Restarts on crash

Manages background processes

Used in production servers.

What does Vite do?

Frontend build tool

Fast dev server

Optimized production builds

Replaces older tools like Webpack.

🧠 Exam Tips

Think conceptually, not code-heavy

Middleware runs in order

React = functions → JSX → UI

WebSockets ≠ HTTP

Hash passwords, never encrypt

Fetch returns a Promise

HTTP status ranges matter


CS 260 Final Exam Questions
This exam covers all instruction given since the midterm.
You may use any notes that you have added to your Start Up repository notes.md. No other references or applications may be used.
Pick the best answer to each question.
What is the default port for HTTP/HTTPS/SSH? 
443http  80 httpsPort 22 for ssh
What does an HTTP status code in the range of 300/400/500 indicate?
Status code starts with a 5 server error
Starts 4 page not found, client side error, typed a wrong url
Starts 300 redirects 
What does the HTTP header content-type allow you to do?
Content-type what kind of type we are sending over like json, what kind of component, application, image, client to server requests and server to client request, 
What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do? https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
Same-site cookie- banking information, no other website can get that cookie
Http only-cokkie doesn’t allow code or java script write with it
Secure cookie- sent over https, 
Using HTTP cookies
A cookie (also known as a web cookie or browser cookie) is a small piece of data a server sends to a user's web browser. The browser may store cookies, create new cookies, modify existing ones, and send them back to the same server with later requests. Cookies enable web applications to store limited amounts of data and remember state information; by default the HTTP protocol is stateless.
In this article we will explore the main uses of cookies, explain best practices for using them, and look at their privacy and security implications.
In this article
What cookies are used for
Creating, removing, and updating cookies
Security
Privacy and tracking
Cookie-related regulations
See also
What cookies are used for
Typically, the server will use the contents of HTTP cookies to determine whether different requests come from the same browser/user and then issue a personalized or generic response as appropriate. The following describes a basic user sign-in system:
The user sends sign-in credentials to the server, for example via a form submission.
If the credentials are correct, the server updates the UI to indicate that the user is signed in, and responds with a cookie containing a session ID that records their sign-in status on the browser.
At a later time, the user moves to a different page on the same site. The browser sends the cookie containing the session ID along with the corresponding request to indicate that it still thinks the user is signed in.
The server checks the session ID and, if it is still valid, sends the user a personalized version of the new page. If it is not valid, the session ID is deleted and the user is shown a generic version of the page (or perhaps shown an "access denied" message and asked to sign in again).

Cookies are mainly used for three purposes:
Session management: User sign-in status, shopping cart contents, game scores, or any other user session-related details that the server needs to remember.
Personalization: User preferences such as display language and UI theme.
Tracking: Recording and analyzing user behavior.
Data storage
In the early days of the web when there was no other option, cookies were used for general client-side data storage purposes. Modern storage APIs are now recommended, for example the Web Storage API (localStorage and sessionStorage) and IndexedDB.
They are designed with storage in mind, never send data to the server, and don't come with other drawbacks of using cookies for storage:
Browsers are generally limited to a maximum number of cookies per domain (varies by browser, generally in the hundreds), and a maximum size per cookie (usually 4KB). Storage APIs can store larger amounts of data.
Cookies are sent with every request, so they can worsen performance (for example on slow mobile data connections), especially if you have a lot of cookies set.
Note: To see stored cookies (and other storage that a web page is using) you can use the Storage Inspector in Firefox Developer Tools, or the Application panel in Chrome Developer Tools.
Creating, removing, and updating cookies
After receiving an HTTP request, a server can send one or more Set-Cookie headers with the response, each one of which will set a separate cookie. A cookie is set by specifying a name-value pair like this:
httpCopy
Set-Cookie: <cookie-name>=<cookie-value>

The following HTTP response instructs the receiving browser to store a pair of cookies:
httpCopy
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=chocolate
Set-Cookie: tasty_cookie=strawberry


[page content]

Note: Find out how to use the Set-Cookie header in various server-side languages/frameworks: PHP, Node.js, Python, Ruby on Rails.
When a new request is made, the browser usually sends previously stored cookies for the current domain back to the server within a Cookie HTTP header:
httpCopy
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry

Removal: defining the lifetime of a cookie
You can specify an expiration date or time period after which the cookie should be deleted and no longer sent. Depending on the attributes set within the Set-Cookie header when the cookies are created, they can be either permanent or session cookies:
Permanent cookies are deleted after the date specified in the Expires attribute:
httpCopy
Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;


or after the period specified in the Max-Age attribute:
httpCopy
Set-Cookie: id=a3fWa; Max-Age=2592000


Note: Expires has been available for longer than Max-Age, however Max-Age is less error-prone, and takes precedence when both are set. The rationale behind this is that when you set an Expires date and time, they're relative to the client the cookie is being set on. If the server is set to a different time, this could cause errors.
Session cookies — cookies without a Max-Age or Expires attribute – are deleted when the current session ends. The browser defines when the "current session" ends, and some browsers use session restoring when restarting. This can cause session cookies to last indefinitely.
Note: If your site authenticates users, it should regenerate and resend session cookies, even ones that already exist, whenever a user authenticates. This approach helps prevent session fixation attacks, where a third-party can reuse a user's session.
To immediately remove a cookie, set the cookie again with the same name, path, and domain (if specified), and set its Expires attribute to a date in the past or its Max-Age attribute to 0 or negative. This instructs the browser to delete the cookie right away. For example:
httpCopy
Set-Cookie: id=a3fWa; Max-Age=0

You can also clear all cookies associated with a registrable domain using the Clear-Site-Data response header. For example, the following header sent from https://foo.example.com/ would clear all cookies sent by example.com and all of its subdomains, such as all.bar.example.com.
httpCopy
Clear-Site-Data: "cookies"

There are some techniques designed to recreate cookies after they're deleted. These are known as "zombie" cookies. These techniques violate the principles of user privacy and control, may violate data privacy regulations, and could expose a website using them to legal liability.
Updating cookie values
To update a cookie via HTTP, the server can send a Set-Cookie header with the existing cookie's name and a new value. For example:
httpCopy
Set-Cookie: id=new-value

There are several reasons why you might want to do this, for example if a user has updated their preferences and the application wants to reflect the changes in client-side data (you could also do this with a client-side storage mechanism such as Web Storage).
Updating cookies via JavaScript
In the browser, you can create new cookies via JavaScript using the Document.cookie property, or the asynchronous Cookie Store API. Note that all examples below use Document.cookie, as it is the most widely supported/established option.
jsCopy
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";

You can also access existing cookies and set new values for them:
jsCopy
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"


document.cookie = "yummy_cookie=blueberry";


console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"

For security purposes, you can't change cookie values by sending an updated Cookie header directly when initiating a request, for example, via fetch() or XMLHttpRequest.
There are good reasons why you shouldn't allow JavaScript to modify cookies at all. You can prevent JavaScript from accessing a cookie by specifying the HttpOnly attribute during its creation. See the Security section for more details.
Security
When you store information in cookies, by default all cookie values are visible to, and can be changed by, the end user. You really don't want your cookies to be misused — for example accessed/modified by bad actors, or sent to domains where they shouldn't be sent. The potential consequences can range from annoying — apps not working or exhibiting strange behavior — to catastrophic. A criminal could for example steal a session ID and use it to set a cookie that makes it look like they are logged in as someone else, taking control of their bank or e-commerce account in the process.
You can secure your cookies in a variety of ways, which are reviewed in this section.
Block access to your cookies
You can ensure that cookies are sent securely and aren't accessed by unintended parties or scripts in one of two ways: with the Secure attribute and the HttpOnly attribute:
httpCopy
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly

A cookie with the Secure attribute is only sent to the server with an encrypted request over the HTTPS protocol. It's never sent with unsecured HTTP (except on localhost), which means man-in-the-middle attackers can't access it easily. Insecure sites (with http: in the URL) can't set cookies with the Secure attribute. However, don't assume that Secure prevents all access to sensitive information in cookies. For example, someone with access to the client's hard disk (or JavaScript if the HttpOnly attribute isn't set) can read and modify the information.
A cookie with the HttpOnly attribute can't be accessed by JavaScript, for example using Document.cookie; it can only be accessed when it reaches the server. Cookies that persist user sessions for example should have the HttpOnly attribute set — it would be really insecure to make them available to JavaScript. This precaution helps mitigate cross-site scripting (XSS) attacks.
Note: Depending on the application, you may want to use an opaque identifier that the server looks up rather than storing sensitive information directly in cookies, or investigate alternative authentication/confidentiality mechanisms such as JSON Web Tokens.
Define where cookies are sent
The Domain and Path attributes define the scope of a cookie: what URLs the cookies are sent to.
The Domain attribute specifies which server can receive a cookie. If specified, cookies are available on the specified server and its subdomains. For example, if you set Domain=mozilla.org from mozilla.org, cookies are available on that domain and subdomains like developer.mozilla.org.
httpCopy
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org


If the Set-Cookie header does not specify a Domain attribute, the cookies are available on the server that sets it but not on its subdomains. Therefore, specifying Domain is less restrictive than omitting it. Note that a server can only set the Domain attribute to its own domain or a parent domain, not to a subdomain or some other domain. So, for example, a server with domain foo.example.com could set the attribute to example.com or foo.example.com, but not bar.foo.example.com or elsewhere.com (the cookies would still be sent to subdomains such as bar.foo.example.com though). See Invalid domains for more details.
The Path attribute indicates a URL path that must exist in the requested URL in order to send the Cookie header. For example:
httpCopy
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs


The %x2F ("/") character is considered a directory separator, and subdirectories match as well. For example, if you set Path=/docs, these request paths match:
/docs
/docs/
/docs/Web/
/docs/Web/HTTP
But these request paths don't:
/
/docsets
/fr/docs
Note: The path attribute lets you control what cookies the browser sends based on the different parts of a site. It is not intended as a security measure, and does not protect against unauthorized reading of the cookie from a different path.
Controlling third-party cookies with SameSite
The SameSite attribute lets servers specify whether/when cookies are sent with cross-site requests — i.e., third-party cookies. Cross-site requests are requests where the site (the registrable domain) and/or the scheme (http or https) do not match the site the user is currently visiting. This includes requests sent when links are clicked on other sites to navigate to your site, and any request sent by embedded third-party content.
SameSite helps to prevent leakage of information, preserving user privacy and providing some protection against cross-site request forgery attacks. It takes three possible values: Strict, Lax, and None:
Strict causes the browser to only send the cookie in response to requests originating from the cookie's origin site. This should be used when you have cookies relating to functionality that will always be behind an initial navigation, such as authentication or storing shopping cart information.
httpCopy
Set-Cookie: cart=110045_77895_53420; SameSite=Strict


Note: Cookies that are used for sensitive information should also have a short lifetime.
Lax is similar, except the browser also sends the cookie when the user navigates to the cookie's origin site (even if the user is coming from a different site). This is useful for cookies affecting the display of a site — for example you might have partner product information along with an affiliate link on your website. When that link is followed to the partner website, they might want to set a cookie stating that the affiliate link was followed, which displays a reward banner and provides a discount if the product is purchased.
httpCopy
Set-Cookie: affiliate=e4rt45dw; SameSite=Lax


None specifies that cookies are sent on both originating and cross-site requests. This is useful if you want to send cookies along with requests made from third-party content embedded in other sites, for example, ad-tech or analytics providers. Note that if SameSite=None is set then the Secure attribute must also be set — SameSite=None requires a secure context.
httpCopy
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly


If no SameSite attribute is set, the cookie is treated as Lax by default.
Cookie prefixes
Because of the design of the cookie mechanism, a server can't confirm that a cookie was set from a secure origin or even tell where a cookie was originally set.
An application on a subdomain can set a cookie with the Domain attribute, which gives access to that cookie on all other subdomains. This mechanism can be abused in a session fixation attack.
As a defense-in-depth measure, you can use cookie prefixes to impose specific restrictions on a cookie's attributes in supporting user-agents. All cookie prefixes start with a double-underscore (__) and end in a dash (-). Four prefixes are available:
__Secure-: Cookies with names starting with __Secure- must be set with the Secure attribute by a secure page (HTTPS).
__Host-: Cookies with names starting with __Host- must be set with the Secure attribute by a secure page (HTTPS). In addition, they must not have a Domain attribute specified, and the Path attribute must be set to /. This guarantees that such cookies are only sent to the host that set them, and not to any other host on the domain. It also guarantees that they are set host-wide and cannot be overridden on any path on that host. This combination yields a cookie that is as close as can be to treating the origin as a security boundary.
__Http-: Cookies with names starting with __Http- must be set with the Secure flag by a secure page (HTTPS) and in addition must have the HttpOnly attribute set to prove that they were set via the Set-Cookie header (they can't be set or modified via JavaScript features such as Document.cookie or the Cookie Store API).
__Host-Http-: Cookies with names starting with __Host-Http- must be set with the Secure flag by a secure page (HTTPS) and must have the HttpOnly attribute set to prove that they were set via the Set-Cookie header. In addition, they also have the same restrictions as __Host--prefixed cookies. This combination yields a cookie that is as close as can be to treating the origin as a security boundary while at the same time ensuring developers and server operators know that its scope is limited to HTTP requests.
The browser will reject cookies with these prefixes that don't comply with their restrictions. As the application server only checks for a specific cookie name when determining if the user is authenticated or a CSRF token is correct, this effectively acts as a defense measure against session fixation.
Note: On the server, the web application must check for the full cookie name including the prefix. User agents do not strip the prefix from the cookie before sending it in a request's Cookie header.
For more information about cookie prefixes and the current state of browser support, see the Prefixes section of the Set-Cookie reference article.
Privacy and tracking
Earlier on we talked about how the SameSite attribute can be used to control when third-party cookies are sent, and that this can help preserve user privacy. Privacy is a very important consideration when building websites which, when done right, can build trust with your users. If done badly, it can completely erode that trust and cause all kinds of other problems.
Third-party cookies can be set by third-party content embedded in sites via <iframe>s. They have many legitimate uses include sharing user profile information, counting ad impressions, or collecting analytics across different related domains.
However, third-party cookies can also be used to create creepy, invasive user experiences. A third-party server can create a profile of a user's browsing history and habits based on cookies sent to it by the same browser when accessing multiple sites. The classic example is when you search for product information on one site and are then chased around the web by adverts for similar products wherever you go.
Browser vendors know that users don't like this behavior, and as a result have all started to block third-party cookies by default, or at least made plans to go in that direction. Third-party cookies (or just tracking cookies) may also be blocked by other browser settings or extensions.
Note: Cookie blocking can cause some third-party components (such as social media widgets) not to function as intended. As browsers impose further restrictions on third-party cookies, developers should start to look at ways to reduce their reliance on them.
See our Third-party cookies article for detailed information on third-party cookies, the issues associated with them, and what alternatives are available. See our Privacy landing page for more information on privacy in general.
Cookie-related regulations
Legislation or regulations that cover the use of cookies include:
The General Data Privacy Regulation (GDPR) in the European Union
The ePrivacy Directive in the EU
The California Consumer Privacy Act
These regulations have global reach. They apply to any site on the World Wide Web that users from these jurisdictions access (the EU and California, with the caveat that California's law applies only to entities with gross revenue over 25 million USD, among things).
These regulations include requirements such as:
Notifying users that your site uses cookies.
Allowing users to opt out of receiving some or all cookies.
Allowing users to use the bulk of your service without receiving cookies.
There may be other regulations that govern the use of cookies in your locality. The burden is on you to know and comply with these regulations. There are companies that offer "cookie banner" code that helps you comply with these regulations.


Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?
apiRouter.post- post request, run the function,  /* it would go in order of the document to what matches first in requests.
With get it is sending something
Given the following Express service code: What does the following front end JavaScript that performs a fetch return?
Given the following MongoDB query, select all of the matching documents {name:Mark}*** on the github
How should user passwords be stored?
Encrypted, hashed*, salt- adding stuff to password before you hash
Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?


What is the websocket protocol intended to provide?
Instead of the client having to ask the server everytime for the service until they find something, the server can just can find as many as it wants, you don’t have hit refresh to get new data 
What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM’
jsx - java script 
Aws- amazon web service
Npm- node packet manager
Nvm- node virtual manager- work with the node
Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.
Props- pass things into other components
Java script object {username }
Given a set of React components that include each other, what will be generated
What does a React component with React.useState do?
Whatever the state changes, update elements
What are React Hooks used for?
Adding functionality to a component. Tell react you want to do render. All these hook do specific things to do with react 
What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks
Use effect- connects a component to an external system, when  a variable changes, when something finishes a rendering
No performance or ref hook
State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.
To add state to a component, use one of these Hooks:
useState declares a state variable that you can update directly.
useReducer declares a state variable with the update logic inside a reducer function.
function ImageGallery() {
 const [index, setIndex] = useState(0);
 // ...


Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.
useContext reads and subscribes to a context.
function Button() {
 const theme = useContext(ThemeContext);
 // ...


Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.
useRef declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
useImperativeHandle lets you customize the ref exposed by your component. This is rarely used.
function Form() {
 const inputRef = useRef(null);
 // ...


Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.
useEffect connects a component to an external system.
function ChatRoom({ roomId }) {
 useEffect(() => {
   const connection = createConnection(roomId);
   connection.connect();
   return () => connection.disconnect();
 }, [roomId]);
 // ...
Effects are an “escape hatch” from the React paradigm. Don’t use Effects to orchestrate the data flow of your application. If you’re not interacting with an external system, you might not need an Effect.
There are two rarely used variations of useEffect with differences in timing:
useLayoutEffect fires before the browser repaints the screen. You can measure layout here.
useInsertionEffect fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.

These Hooks are mostly useful to library authors and aren’t commonly used in the application code.
useDebugValue lets you customize the label React DevTools displays for your custom Hook.
useId lets a component associate a unique ID with itself. Typically used with accessibility APIs.
useSyncExternalStore lets a component subscribe to an external store.
useActionState allows you to manage state of actions.


Given React Router code, select statements that are true.
Routes each have a path and element, 
What does the package.json file do?
Npm nvm is defined in there, it defines the project main, and conversion node version handler
What does the fetch function do?
Simplifies making http requests, 
What does node.js do?
Javascript, runs backends, 
What does pm2 do?
Is a daman 
What does Vite do?
Turns all jsx into stuff the computer can read, it builds it as well, it doenst just work with react but with other languages. It can build anything to readable code like javascript and html, packaging, helps with debugging and building it, with other websframework, because you haven’t bundled it yet you can still debug, like the predebugged part. 
User password should not be saved in plain text
Which http status code range represents redirection messages 300-399
What does the authorization header in a http request represent
The credentials of user authentication
Which mongodb query would find all json objects with a username value of cosmo 25
{username: “cosmo25”
What does node.js do
Runs javascript code outside of an internet browser
Which http status code range represent server error responses
200-299
Which http method is invalid
Remove
What is the default port for https
443
What does a vite.config.js file do
Defines commands for building and deployign your startup to aws
Which mongodb query would find all json objects with username contain ‘cs260 as a substring”
(username: /.cs260./}
What does js stand for
Javascript
What does jsx stand for
Javascript eXtra
Which http status code represent client error response
200-299
Use effect
Allowing react component to run code after a page finished rendering or after a specific react state is updated 
Http default prot
80
useState
Allowing react components to declare variables update variables and to trigger re-renders when the variable is updated
http only flag on cookies prevents a client browser from reading or writing a cookie half truth?

GUIDE

1️⃣ Internet Fundamentals & Networking
Client–Server Model
Client → initiates requests (browser)


Server → responds (Express / Node)


Stateless by default (HTTP does not remember users)


DNS
Converts domain names → IP addresses


Happens before HTTP request



2️⃣ HTTP Deep Dive
HTTP Request Components
Method: GET, POST, PUT, DELETE


Path: /api/data


Headers: metadata


Body: data (POST/PUT)


HTTP Methods (Know These!)
Method
Purpose
GET
Retrieve data
POST
Create data
PUT
Replace data
PATCH
Update part
DELETE
Remove data


Status Codes (Expanded)
Code
Meaning
200
OK
201
Created
204
No Content
301
Moved permanently
302
Temporary redirect
400
Bad request
401
Unauthorized
403
Forbidden
404
Not found
500
Server error
503
Service unavailable


Headers You Should Recognize
Header
Purpose
Content-Type
Body format
Authorization
Auth token
Cookie
Client state
Set-Cookie
Server sets cookies
Cache-Control
Caching rules
CORS headers
Cross-origin access


3️⃣ Cookies, Sessions & Authentication
Cookies vs Sessions
Cookie: stored in browser


Session: stored on server


Session ID often stored in cookie



Cookie Flags (Expanded)
Flag
Protection
Secure
HTTPS only
HttpOnly
JS cannot read
SameSite
CSRF protection
Max-Age
Expiration


Authentication Patterns
Username/password → session cookie


Token-based auth (JWT)


OAuth (Google login)



4️⃣ Express.js Internals
Request Lifecycle
Request received


Middleware executes


Route handler runs


Response sent



Middleware Types
app.use(express.json());      // body parser
app.use(express.static());   // static files
app.use(authMiddleware);     // custom logic

Key rule:
Middleware runs in order declared

Route Matching
app.get('/api/:id', ...)

:id is a URL parameter


Accessible via req.params.id



5️⃣ Fetch API (Advanced)
Fetch Behavior
Returns a Promise


Requires manual parsing


Does NOT throw on 404/500


if (!response.ok) {
  throw new Error("Request failed");
}


Sending Data
fetch('/api', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});


6️⃣ MongoDB Concepts
Document Model
JSON-like documents


Flexible schema



Common Queries
{ age: { $gt: 18 } }
{ name: { $regex: /^Mark/ } }


ObjectId
MongoDB primary key


Automatically generated


Not a string



7️⃣ Security (HIGH VALUE)
Hashing vs Encryption
Hashing
Encryption
One-way
Two-way
Passwords
Data storage
bcrypt
AES/RSA


Common Attacks
Attack
Protection
XSS
HttpOnly cookies
CSRF
SameSite cookies
SQL Injection
Parameterized queries
Brute force
Rate limiting


8️⃣ WebSockets (Advanced)
WebSocket vs HTTP
Feature
HTTP
WebSocket
Connection
Short
Persistent
Direction
Client → Server
Full duplex
Real-time
❌
✅


WebSocket Lifecycle
HTTP handshake


Upgrade protocol


Persistent socket



9️⃣ React (Expanded)
React Philosophy
UI = function(state)


Declarative


Component-based



Props vs State
Props
State
Read-only
Mutable
Passed in
Local
From parent
Internal


JSX Rules
One root element


Expressions in { }


Class → className



React Rendering Rules
State change → re-render


Props change → re-render


Re-render ≠ DOM update



🔟 React Hooks (Full)
useEffect Patterns
useEffect(() => {
  fetchData();
}, []); // runs once

useEffect(() => {
  update();
}, [count]); // runs on count change


useRef
Access DOM elements


Store mutable values


No re-render



Context Hook
Avoid prop drilling


Global app state



1️⃣1️⃣ React Router
Routing Concepts
Single Page Application (SPA)


URL changes without reload



Common Router Components
Component
Purpose
BrowserRouter
Wrap app
Routes
Route container
Route
Path mapping
Link
Navigation


1️⃣2️⃣ Tooling & Deployment
Node.js
JS runtime


Event-driven


Non-blocking I/O



NPM
Dependency management


Scripts runner



PM2
Production process manager


Keeps apps alive


Load balancing



Vite
Dev server


Fast HMR


Bundles for production



1️⃣3️⃣ CORS (Common Exam Trap)
What Is CORS?
Browser security rule preventing:
JS from calling APIs on another origin

How to Fix
Server sends CORS headers


OR same origin



1️⃣4️⃣ Static Files
express.static
app.use(express.static('public'));

Serves HTML, CSS, JS


No route handler needed



1️⃣5️⃣ Performance Concepts
Optimization Techniques
Memoization


Debouncing


Lazy loading


Code splitting



1️⃣6️⃣ Environment Variables
process.env.PORT

Secrets


Config


Never commit .env



1️⃣7️⃣ Exam Strategy
✔ Read the question carefully
 ✔ Identify what layer it refers to
 ✔ Eliminate obviously wrong answers
 ✔ Look for security-focused answers
 ✔ Prefer declarative over imperative

📌 Final Advice
If you can confidently explain:
How HTTP works


Why cookies need flags


How React re-renders


Why WebSockets exist


How Express processes requests


👉 You will do very well on this exam.
For the projects in this course that require data services, we will use MongoDB. Mongo increases developer productivity by using JSON objects as its core data model. This makes it easy to have an application that uses JSON from the top to the bottom of the technology stack. A mongo database is made up of one or more collections that each contain JSON documents. You can think of a collection as a large array of JavaScript objects, each with a unique ID. The following is a sample of a collection of houses that are for rent.
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];
Unlike relational databases that require a rigid table definition where each column must be strictly typed and defined beforehand, Mongo has no strict schema requirements. Each document in the collection usually follows a similar schema, but each document may have specialized fields that are present, and common fields that are missing. This allows the schema of a collection to morph organically as the data model of the application evolves. To add a new field to a Mongo collection you just insert the field into the documents as desired. If the field is not present, or has a different type in some documents, then the document simply doesn't match the query criteria when the field is referenced.
The query syntax for Mongo also follow a JavaScript-inspired flavor. Consider the following queries on the houses for rent collection that was shown above.
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
Insert
You do not have to do anything special to insert a JavaScript object as a Mongo document. You just call the insertOne function on the collection object and pass it the JavaScript object. When you insert a document, if the database or collection does not exist, Mongo will automatically create them for you. When the document is inserted into the collection it will automatically be assigned a unique ID.
const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);
Query
To query for documents you use the find function on the collection object. Note that the find function is asynchronous and so we use the await keyword to wait for the promise to resolve before we write them out to the console.
const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
If you do not supply any parameters to the find function then it will return all documents in the collection. In this case we only get back the single document that we previously inserted. Notice that the automatically generated ID is returned with the document.
Output
[
  {
    _id: new ObjectId('639a96398f8de594e198fc13'),
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  },
];
You can provide a query and options to the find function. In the example below we query for a property_type of Condo that has less than two bedrooms. We also specify the options to sort by descending name, and limit our results to the first 10 documents.
const query = { property_type: 'Condo', beds: { $lt: 2 } };
const options = {
  sort: { name: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
The query matches the document that we previously inserted and so we get the same result as before.
Delete
Using the a query you can delete any matching documents with the deleteMany function.
const query = { property_type: 'Condo', beds: { $lt: 2 } };
await collection.deleteMany(query);
You can also delete a single document with deleteOne and providing the document's ID as the query.
const insertResult = await collection.insertOne(house);

const deleteQuery = { _id: insertResult.insertedId };
await collection.deleteOne(deleteQuery);
There is a lot more functionality that MongoDB provides, but this is enough to get you started. If you are interested you can explore the tutorials on their website.
Testing the connection on startup
It is nice to know that your connection string is correct before your application attempts to access any data. We can do that when the application starts by making an asynchronous request to ping the database. If that fails then either the connection string is incorrect, the credentials are invalid, or the network is not working. The following is an example of testing the connection.
try {
  await db.command({ ping: 1 });
  console.log(`DB connected to ${config.hostname}`);
} catch (ex) {
  console.log(`Error with ${url} because ${ex.message}`);
  process.exit(1);
}
If your server is not starting, then check your logs to see if an exception what thrown.
Complete example
With that all done, you should be good to use Atlas from both your development and production environments. You can test that things are working correctly with the following example.
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// Connect to the database cluster
const client = new MongoClient(url);
const db = client.db('rental');
const collection = db.collection('house');

async function main() {
  try {
    // Test that you can connect to the database
    await db.command({ ping: 1 });
    console.log(`DB connected to ${config.hostname}`);
  } catch (ex) {
    console.log(`Connection failed to ${url} because ${ex.message}`);
    process.exit(1);
  }

  try {
    // Insert a document
    const house = {
      name: 'Beachfront views',
      summary: 'From your bedroom to the beach, no shoes required',
      property_type: 'Condo',
      beds: 1,
    };
    await collection.insertOne(house);

    // Query the documents
    const query = { property_type: 'Condo', beds: { $lt: 2 } };
    const options = {
      sort: { name: -1 },
      limit: 10,
    };
    const cursor = collection.find(query, options);
    const rentals = await cursor.toArray();
    rentals.forEach((i) => console.log(i));

    // Delete documents
    await collection.deleteMany(query);
  } catch (ex) {
    console.log(`Database (${url}) error: ${ex.message}`);
  } finally {
    await client.close();
  }
}

main();
Running the above example should return something like the following if everything is working correctly.
DB connected to cs260.3452434.mongodb.net
{
_id: new ObjectId("639b51b74ef1e953b884ca5b"),
name: 'Beachfront views',
summary: 'From your bedroom to the beach, no shoes required',
property_type: 'Condo',
beds: 1
}
Functions
📖 Deeper dive reading: MDN Functions
In JavaScript functions are first class objects. That means that they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable.
The basic syntax of a function begins with the function keyword followed by zero or more parameters and a body that may contain zero or more return statements. The return statement may return a single value. Note that there are no type declarations, as the type is always inferred by the assignment of the value to the parameter.
function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
A function without a return value usually exists to produce some side effect like modifying a parameter or interacting with an external program. In the following example the side effect of the function is to output text to the debugger console.
function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world
Function parameters
When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is undefined when the function executes.
In addition to explicitly passing the value of a parameter to a function, the function can define a default value. This is done by assigning a value to the parameter in the function declaration.
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
Anonymous functions
Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable.
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
You can also use the abbreviated arrow syntax to write an anonymous function. The following is equivalent to the more verbose call demonstrated above. We will dive deeper into arrow functions in a later topic.
console.log(doMath((a, b) => a - b, 5, 3));
Creating, passing, and returning functions
Here are examples of assigning functions to variables, as well as using functions as parameters and return values.
// Anonymous declaration of the function that is later assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Function that logs as a side effect of its execution
function labeler(label, value) {
  console.log(label + '=' + value);
}

// Function that takes a function as a parameter and then executes the function as a side effect
function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

// Passing a function to a function
addAndLabel(labeler, 'a+b', add, 1, 3);
// OUTPUT: a+b=4

// Function that returns a function
function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

// Assign a function from the return value of the function
const nameLabeler = labelMaker('name');

// Calling the returned function
nameLabeler('value');
// OUTPUT: name=value
Inner functions
Functions can also be declared inside other functions. This allows you to modularize your code without always exposing private details.
function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish
Components
📖 Recommended reading: React.dev - Your First Component
React components allow you to modularize the functionality of your application. This allows the underlying code to directly represent the components that a user interacts with. It also enables code reuse as common application components often show up repeatedly.
Rendering JSX
One of the primary purposes of a component is to generate the user interface. This is done with the JSX returned from a component. Whatever is returned, inserted into the component HTML element.
As a simple example, a JSX file containing a React component element named Demo would cause React to load the Demo component, get the JSX returned from the component, and insert the result into the place of the Demo element.
JSX
<div>
  Component: <Demo />
</div>
Notice that Demo is not a valid HTML element. The transpiler will replace this tag with the resulting rendered HTML.
React component
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
Resulting HTML
<div>Component: <b>Hello world</b></div>
You should note that you can use JSX even without a function. A simple variable representing JSX will work anyplace you would otherwise provide a component.
const hello = <div>Hello</div>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(hello);
Resulting HTML
<div>Hello</div>
Styling components
If you don't want to directly style your components with inline CSS rule sets, you can reference and external CSS file and then reference the rules in your JSX just like you would normally do with HTML. For example, if you had a CSS file named index.css with the following styles.
div {
  font-family: sans-serif;
}

.code {
  color: green;
}
You could apply the style rules using importing the CSS. The styles will then apply as they would normally, with the exception that you need to use className attribute on an element instead of class because class is a keyword in JavaScript.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div>
      <pre className='code'>console.log(1+1);</pre>
      <p>Simple math</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
This results in the following.

Child components
The JSX that a component returns may reference other components. This allows you to build up a complex tree of interrelated components. Consider the following application that has a header with navigational elements, main content, and a footer. The App component is the parent of all the other components.
index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Header() {
  return (
    <nav className='app-bar'>
      <Link label='home' />
      <Link label='users' />
      <Link label='about' />
    </nav>
  );
}

function Link(label) {
  return <div>{label.label}</div>;
}

function Content() {
  return <div className='content'>Here is the content</div>;
}

function Footer() {
  return <div className='app-bar'>Footer</div>;
}

function App() {
  return (
    <div className='app'>
      <Header />

      <Content />

      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
index.css
.app {
  font-family: sans-serif;
}

.app-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ddd;
}

.app-bar div {
  padding: 0.25em;
}

.content {
  margin: 1em;
}
This results in the following.

Properties
React components also allow you to pass information to them in the form of element properties. The component receives the properties in its constructor and then can display them when it renders.
JSX
<div>Component: <Demo who="Walke" /><div>
React component
function Demo(props) {
  return <b>Hello {props.who}</b>;
}
State
In addition to properties, a component can have internal state. Component state is created by calling the React.useState hook function. The useState function returns a variable that contains the current state and a function to update the state. The following example creates a state variable called clicked and toggles the click state in the updateClicked function that gets called when the paragraph text is clicked.
function App() {
  const [clicked, updateClicked] = React.useState(false);

  function onClicked() {
    updateClicked(!clicked);
  }

  return <p onClick={onClicked}>clicked: {`${clicked}`}</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
Reactivity
A component's properties and state are used by the React framework to determine the reactivity of the interface. Reactivity controls how a component reacts to actions taken by the user or events that happen within the application. Whenever a component's state or properties change, the render function for the component and all of its dependent component render functions are called.

Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.
This is a function in arrow syntax that takes no parameters and always returns 3.
() => 3;
The following two invocations of sort are equivalent.
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
Besides being compact, the arrow function syntax has some important semantic differences from the standard function syntax. This includes how a return value is specified and the scope of variables that an arrow function can access.
Return values
Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
Closure
Next, arrow functions inherit the this pointer from the scope in which they are created. This makes what is known as a closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, but just remember that a closure includes a function and its creation scope.
The function makeClosure returns an anonymous function using the arrow syntax. The function create a variable from an initialization parameter. Both the parameter and the locally scoped variables are included in closure for the returned function.
function makeClosure(init) {
  let closureValue = init;
  return () => {
    return `closure ${++closureValue}`;
  };
}
Now, when we call the createClosure function it returns the arrow function that includes the closure of the variables that existed when it was created. That is why the closure function can reference a variable that is declared outside of the scope that it executes in. We demonstrate this by calling the closure function multiple times with different resulting values.
const closure = makeClosure(0);

console.log(closure());
// OUTPUT: closure 1

console.log(closure());
// OUTPUT: closure 2
Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page. This is because it remembers the values of variables that were in scope when the function was created.
Using arrow functions with React
React components are a great place to learn how to use arrow functions. The following is a simple React application that increments and decrements a counter when the appropriate buttons are pressed. This code uses standard JavaScript functions.
function App() {
  const [count, setCount] = React.useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>n++</button>
      <button onClick={Decrement}>n--</button>
    </div>
  );
}
By using arrow functions the counter logic can be moved directly into the JSX. This makes the code much more concise and actually clarifying what the buttons are doing.
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>n++</button>
      <button onClick={() => setCount(count - 1)}>n--</button>
    </div>
  );
}
There is however, a problem with this code. Setting state with the function provided by the React useState function is asynchronous. That means you don't know if other, concurrently running code, has changed the value of count between when you read it and when you set it. That can lead to the counter being incremented multiple time in some cases or not at all in others. To fix this we need to supply an arrow function to the setCount function that sets the state instead of simply supplying the desired value. The following compares the two versions.
// may corrupt value
setCount(count + 1);

// safe
setCount((prevCount) => prevCount + 1);
This works because React can control when the state variable is updated instead of allowing your code to do the read operation. Our counter app now looks like this:
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>n++</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>n--</button>
    </div>
  );
}
However, our nice concise code is now looking a little clunky as we put more duplicated logic inline for the onClick handler. We can fix this by moving the creation of the arrow function out of the JSX and in to the component body. At the same time let's reduce the duplication of code caused by the different counter operations and make it easy to add new operations by using the factory pattern to create our operations. Notice the use of closure to reference the operation that is used by the arrow function that is returned from the factory.
function App() {
  const [count, setCount] = React.useState(0);

  function counterOpFactory(op) {
    return () => setCount((prevCount) => op(prevCount));
  }

  const incOp = counterOpFactory((c) => c + 1);
  const decOp = counterOpFactory((c) => c - 1);
  const tenXOp = counterOpFactory((c) => c * 10);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incOp}>n++</button>
      <button onClick={decOp}>n--</button>
      <button onClick={tenXOp}>n*10</button>
    </div>
  );
}
This results in concise, simple, thread safe code in a functional programming style.
An advanced example
If you are still wanting more, take a look at this complex example that demonstrates the use of functions, arrow functions, parameters, a function as a parameter (callback), closures, and browser event listeners. This is done by implementing a debounce function.
The point of a debounce function is to only execute a specified function once within a given time window. Any requests to execute the debounce function more frequently than this will case the time window to reset. This is important in cases where a user can trigger expensive events thousands of times per second. Without a debounce the performance of your application can greatly suffer.
The following code calls the browser's window.addEventListener function to add a callback function that is invoked whenever the user scrolls the browser's web page. The first parameter to addEventListener specifies that it wants to listen for scroll events. The second parameter provides the function to call when a scroll event happens. In this case we call a function named debounce.
The debounce function takes two parameters, the time window for executing the window function, and the window function to call within that limit. In this case we will execute the arrow function at most every 500 milliseconds.
window.addEventListener(
  'scroll',
  debounce(500, () => {
    console.log('Executed an expensive calculation');
  })
);
The debounce function implements the execution of windowFunc within the restricted time window by creating a closure that contains the current timeout and returning a function that will reset the timeout every time it is called. The returned function is what the scroll event will actually call when the user scrolls the page. However, instead of directly executing the windowFunc it sets a timer based on the value of windowMs. If the debounce function is called again before the window times out then it resets the timeout.
function debounce(windowMs, windowFunc) {
  let timeout;
  return function () {
    console.log('scroll event');
    clearTimeout(timeout);
    timeout = setTimeout(() => windowFunc(), windowMs);
  };
}
You can experiment with this in CodePen. In this example, the background color will change as long as the user is scrolling. When they stop the background reverts back to white.
A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.
Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).
const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.
Note
The different uses of the term object. Object can refer to the standard JavaScript objects (e.g. Promise, Map, Object, Function, Date, ...), or it can refer specifically to the JavaScript Object object (i.e. new Object()), or it can refer to any JavaScript object you create (e.g. {a:'a', b:2} ). This overloaded usage can be a bit confusing.
Object-literals
You can also declare a variable of object type with the object-literal syntax. This syntax allows you to provide the initial composition of the object.
const obj = {
  a: 3,
  b: 'fish',
  c: [1, true, 'dog'],
  d: { e: false },
  f: function () {
    return 'hello';
  },
};
Object functions
Object has several interesting static functions associated with it. Here are some of the commonly used ones.
Function
Meaning
entries
Returns an array of key value pairs
keys
Returns an array of keys
values
Returns an array of values

const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
Constructor
Any function that returns an object is considered a constructor and can be invoked with the new operator.
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
Because objects can have any type of property value you can create methods on the object as part of its encapsulation.
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
This pointer
Notice in the last example the use of the keyword this when we referred to the name property (this.name). The meaning of this depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the this pointer in the instruction on scope.
Classes
You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one-off object. Class declarations look similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
You can make properties and functions of classes private by prefixing them with a #.
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
Inheritance
Classes can be extended by using the extends keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the super function. Any functions defined on the child that have the same name as the parent override the parent's implementation. A parent's function can be explicitly accessed using the super keyword.
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
Timeout and interval
setTimeout
It is common to want to delay the execution of something until after a certain period has expired. JavaScript support this with the setTimeout function. setTimeout takes a function that will be called once the given milliseconds delay has passed. In the following example, the message is sent to the console log after waiting 2000 milliseconds.
setTimeout(() => console.log('time is up'), 2000);

console.log('timeout will happen later');
It is important to realize that the JavaScript code continues to execute after setTimeout is called. Then, once the delay has expired, the JavaScript runtime will stop whatever JavaScript code is currently executing, run the setTimout callback function, and then return to the code that was halted previously. That is why the phrase timeout will happen later is printed before the timeout phrase is printed.
setInterval
Sometimes you need to execute a block of code periodically at a given time interval. That is where the setInterval function comes into play. setInterval works in a similar manner as setTimeout, however it will continually call the function every time the delay has passed.
setInterval(() => console.log('do something'), 1000);
You can cancel a setInterval request by capturing the result of the setInterval call and then passing that result to the clearInterval function. This is demonstrated by first setting a interval to print a message every second and then after five seconds clearing the interval.
const interval = setInterval(() => console.log('do something'), 1000);

setTimeout(() => clearInterval(interval), 5000);
React hooks
📖 Recommended reading: Reactjs.org - Hooks Overview
React hooks allow React function style components to be able to do everything that a class style component can do and more. Additionally, as new features are added to React they are including them as hooks. This makes function style components the preferred way of doing things in React. You have already seen one use of hooks to declare and update state in a function component with the useState hook.
function Clicker({ initialCount }) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker initialCount={3} />);
useEffect hook
The useEffect hook allows you to represent lifecycle events. For example, if you want to run a function every time the component completes rendering, you could do the following.
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseEffectHookDemo />);
UseEffect dependencies
By default, the useEffect callback is called every time the component is rendered. You can control what triggers a useEffect hook by specifying its dependencies. In the following example we have two state variables, but we only want the useEffect hook to be called when the component is initially called and when the first variable is clicked. To accomplish this you pass an array of dependencies as a second parameter to the useEffect call.
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseEffectHookDemo />);
If you specify an empty array [] as the hook dependency then it is only called when the component is first rendered.
Note
Hooks must be called at the top scope of the function and cannot be called inside of a loop or conditional. This restriction ensures that hooks are always called in the same order when a component is rendered.
useEffect clean up
You can also take action when the component cleans up by returning a cleanup function when you call useEffect. Consider the example where a component creates a database connection. The database connection is a resource that needs to be released when the component is destroyed. In the example, the function returned from useEffect when get called when the component gets destroyed. This is triggered after a user clicks five times on the clicker component.
function Clicker() {
  const [count, update] = React.useState(5);

  return (
    <div onClick={() => update(count - 1)}>
      Click count: {count}
      {count > 0 ? <Db /> : <div>DB Connection Closed</div>}
    </div>
  );
}

function Db() {
  React.useEffect(() => {
    console.log('connected');

    return function cleanup() {
      console.log('disconnected');
    };
  }, []);

  return <div>DB Connection</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
The App component creates a React state variable by calling the React.useState function. This creates an entry in React's state table that tracks the current and desired value of every state object.
const [color, updateColor] = React.useState('#737AB0');
The value of color is passed as a property to both the App's child components. Whenever React detects a change to the color state it will rerender any component that depends on that state.
The updateColor state function is also passed as a property to the ColorPicker component. This gives the ColorPicker the ability to modify the value of the color state that is registered in the App parent compone
Be careful about your assumptions of when state is updated. Just because you called updateState does not mean that you can access the updated state on the next line of code. Updates happen asynchronously, and therefore you never really know when it is going to happen. You only know that it will eventually happen.
The following is code for the color picker components. Take some time to understand every line of the code. If you want to debug the application you can experiment with the complete application found in the example code.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  const [color, updateColor] = React.useState('#737AB0');

  return (
    <div>
      <h1>Pick a color</h1>
      <ColorDisplay color={color} />
      <ColorPicker color={color} updateColor={updateColor} />
    </div>
  );
}

function ColorDisplay({ color }) {
  return (
    <div>
      Your color: <span style={{ color: color }}>{color}</span>
    </div>
  );
}

function ColorPicker({ color, updateColor }) {
  function onChange(e) {
    updateColor(e.target.value);
  }

  return (
    <div>
      <span>Pick a color: </span>
      <input type='color' onChange={onChange} value={color} />
    </div>
  );
}

JavaScript Object Notation (JSON) was conceived by Douglas Crockford in 2001 while working at Yahoo! JSON, pronounced like the name Jason, received official standardization in 2013 and 2017 (ECMA-404, RFC 8259).
JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This makes it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.
Format
A JSON document contains one of the following data types:
Type
Example
string
"crockford"
number
42
boolean
true
array
[null,42,"crockford"]
object
{"a":1,"b":"crockford"}
null
null

Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.
Here is an example of a JSON document.
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
JSON is always encoded with UTF-8. This allows for the representation of global data.
Converting to JavaScript
You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
Note that in this example, JSON cannot represent the JavaScript undefined object and so it gets dropped when converting from JavaScript to JSON.
Ports
When you connect to a device on the internet you need both an IP address and a numbered port. Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication). The ports may be exposed externally, or they may only be used internally on the device. For example, the HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device.
The internet governing body, IANA, defines the standard usage for port numbers. Ports from 0 to 1023 represent standard protocols. Generally a web service should avoid these ports unless it is providing the protocol represented by the standard. Ports from 1024 to 49151 represent ports that have been assigned to requesting entities. However, it is very common for these ports to be used by services running internally on a device. Ports from 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device. Here is the link to IANA's registry.
Here is a list of common port numbers that you might come across.
Port
Protocol
20
File Transfer Protocol (FTP) for data transfer
22
Secure Shell (SSH) for connecting to remote devices
25
Simple Mail Transfer Protocol (SMTP) for sending email
53
Domain Name System (DNS) for looking up IP addresses
80
Hypertext Transfer Protocol (HTTP) for web requests
110
Post Office Protocol (POP3) for retrieving email
123
Network Time Protocol (NTP) for managing time
161
Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
194
Internet Relay Chat (IRC) for chatting
443
HTTP Secure (HTTPS) for secure web requests

Your ports
As an example of how ports are used we can look at your web server. When you built your web server you externally exposed port 22 so that you could use SSH to open a remote console on the server, port 443 for secure HTTP communication, and port 80 for unsecure HTTP communication.

Your web service, Caddy, is listening on ports 80 and 443. When Caddy gets a request on port 80, it automatically redirects the request to port 443 so that a secure connection is used. When Caddy gets a request on port 443 it examines the path provided in the HTTP request (as defined by the URL) and if the path matches a static file, it reads the file off disk and returns it. If the HTTP path matches one of the definitions it has for a gateway service, Caddy makes a connection on that service's port (e.g. 3000 or 4000) and passes the request to the service.
Internally on your web server, you can have as many web services running as you would like. However, you must make sure that each one uses a different port to communicate on. You run your Simon service on port 3000 and therefore cannot use port 3000 for your startup service. Instead you use port 4000 for your startup service. It does not matter what high range port you use. It only matters that you are consistent and that they are only used by one service.
HTTP
📖 Deeper dive reading: MDN An overview of HTTP
Hypertext Transfer Protocol (HTTP) is how the web talks. When a web browser makes a request to a web server it does it using the HTTP protocol. In previous instruction we discussed how to use HTTP. Now, we will talk about the internals of HTTP. Just like becoming fluent in a foreign language makes a visit to another country more enjoyable, understanding how to speak HTTP helps you communicate effectively when talking on the web.
When a web client (e.g. a web browser) and a web server talk they exchange HTTP requests and responses. The browser will make an HTTP request and the server will generate an HTTP response. You can see the HTTP exchange by using the browser's debugger or by using a console tool like curl. For example, in your console you can use curl to make the following request.
curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html
Request
The HTTP request for the above command would look like the following.
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
An HTTP request has this general syntax.
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
The first line of the HTTP request contains the verb of the request, followed by the path, parameters, and anchor of the URL, and finally the version of HTTP being used. The following lines are optional headers that are defined by key value pairs. After the headers you have an optional body. The body start is delimited from the headers with two new lines.
In the above example, we are asking to GET a resource found at the path /hypertext/WWW/Helping.html. The version used by the request is HTTP/1.1. This is followed by two headers. The first specifies the requested host (i.e. domain name). The second specifies what type of resources the client will accept. The resource type is always a MIME type as defined by internet governing body IANA. In this case we are asking for HTML.
Response
The response to the above request looks like this.
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
An HTTP response has the following syntax.
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
You can see that the response syntax is similar to the request syntax. The major difference is that the first line represents the version and the status of the response.
Understanding the meaning of the common HTTP verbs, status codes, and headers is important for you to understand, as you will use them in developing a web application. Take some time to internalize the following common values.
Verbs
There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.
Verb
Meaning
GET
Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.
POST
Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
PUT
Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.
DELETE
Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
OPTIONS
Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.

Status codes
It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.
1xx - Informational.
2xx - Success.
3xx - Redirect to some other location, or that the previously cached resource is still valid.
4xx - Client errors. The request is invalid.
5xx - Server errors. The request cannot be satisfied due to an error on the server.
Within those ranges here are some of the more common codes. See the MDN documentation for a full description of status codes.
Code
Text
Meaning
100
Continue
The service is working on the request
200
Success
The requested resource was found and returned as appropriate.
201
Created
The request was successful and a new resource was created.
204
No Content
The request was successful but no resource is returned.
304
Not Modified
The cached version of the resource is still valid.
307
Permanent redirect
The resource is no longer at the requested location. The new location is specified in the response location header.
308
Temporary redirect
The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400
Bad request
The request was malformed or invalid.
401
Unauthorized
The request did not provide a valid authentication token.
403
Forbidden
The provided authentication token is not authorized for the resource.
404
Not found
An unknown resource was requested.
408
Request timeout
The request takes too long.
409
Conflict
The provided resource represents an out of date version of the resource.
418
I'm a teapot
The service refuses to brew coffee in a teapot.
429
Too many requests
The client is making too many requests in too short of a time period.
500
Internal server error
The server failed to properly process the request.
503
Service unavailable
The server is temporarily down. The client should try again with an exponential back off.

Headers
📖 Deeper dive reading: MDN HTTP headers
HTTP headers specify metadata about a request or response. This includes things like how to handle security, caching, data formats, and cookies. Some common headers that you will use include the following.
Header
Example
Meaning
Authorization
Bearer bGciOiJIUzI1NiIsI
A token that authorized the user making the request.
Accept
image/*
The format the client accepts. This may include wildcards.
Content-Type
text/html; charset=utf-8
The format of the content being sent. These are described using standard MIME types.
Cookie
SessionID=39s8cgj34; csrftoken=9dck2
Key value pairs that are generated by the server and stored on the client.
Host
info.cern.ch
The domain name of the server. This is required in all requests.
Origin
cs260.click
Identifies the origin that caused the request. A host may only allow requests from specific origins.
Access-Control-Allow-Origin
https://cs260.click
Server response of what origins can make a request. This may include a wildcard.
Content-Length
368
The number of bytes contained in the response.
Cache-Control
public, max-age=604800
Tells the client how it can cache the response.
User-Agent
Mozilla/5.0 (Macintosh)
The client application making the request.

Body
The format of the body of an HTTP request or response is defined by the Content-Type header. For example, it may be HTML text (text/html), a binary image format (image/png), JSON (application/json), or JavaScript (text/javascript). A client may specify what formats it accepts using the accept header.
Cookies

📖 Deeper dive reading: MDN Using HTTP cookies
HTTP itself is stateless. This means that one HTTP request does not know anything about a previous or future request. However, that does not mean that a server or client cannot track state across requests. One common method for tracking state is the cookie. Cookies are generated by a server and passed to the client as an HTTP header.
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
The client then caches the cookie and returns it as an HTTP header back to the server on subsequent requests.
HTTP/2 200
Cookie: myAppCookie=tasty
This allows the server to remember things like the language preference of the user, or the user's authentication credentials. A server can also use cookies to track, and share, everything that a user does. However, there is nothing inherently evil about cookies; the problem comes from web applications that use them as a means to violate a user's privacy or inappropriately monetize their data.
HTTP Versions
HTTP continually evolves in order to increase performance and support new types of applications. You can read about the evolution of HTTP on MDN.
Year
Version
Features
1990
HTTP0.9
one line, no versions, only get
1996
HTTP1
get/post, header, status codes, content-type
1997
HTTP1.1
put/patch/delete/options, persistent connection
2015
HTTP2
multiplex, server push, binary representation
2022
HTTP3
QUIC for transport protocol, always encrypted

JavaScript running on a browser can initiate a WebSocket connection with the browser's WebSocket API. Assuming the browser is addressing an appropriate host and port (e.g., localhost:9900), first you create a WebSocket object: the first line below queries the browser to determine which protocol is being used (http or https) and selects the appropriate websocket upgrade (unsecure or secure, respectively); the second line creates the WebSocket object, using the selected protocol and the hostname and port currently being used by the browser:
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}`);
You can then register a callback using the onmessage function to specify how to handle incoming messages (does this look like an event listener?):
socket.onmessage = (event) => {
  console.log('received: ', event.data);
};
and, you can send messages using the send function:
socket.send('I am listening');
The server uses the ws package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer, you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a connection: Upgrade header.
When a connection is detected it calls the server's on connection callback. The server can then send messages with the send function, and register a callback using the on message function to receive messages.
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
In a later instruction we will show you how to run and debug this example.
Web application security, sometimes called AppSec, is a subset of cybersecurity that specifically focuses on preventing security vulnerabilities within end-user applications. Web application security involves securing the frontend code running on the user's device and also the backend code running on the web server.
Here is a list of common phrases used by the security community that you should be familiar with.
Hacking - The process of making a system do something it's not supposed to do.
Exploit - Code or input that takes advantage of a programming or configuration flaw.
Attack Vector - The method that a hacker employs to penetrate and exploit a system.
Attack Surface - The exposed parts of a system that an attacker can access. For example, open ports (22, 443, 80), service endpoints, or user accounts.
Attack Payload - The actual code, or data, that a hacker delivers to a system in order to exploit it.
Input sanitization - "Cleaning" any input of potentially malicious data.
Black box testing - Testing an application without knowledge of the internals of the application.
White box testing - Testing an application by with knowledge of the source code and internal infrastructure.
Penetration Testing - Attempting to gain access to, or exploit, a system in ways that are not anticipated by the developers.
Mitigation - The action taken to remove, or reduce, a threat.
Motivation for attackers
The following lists some common motivations at drives a system attack.
Disruption - By overloading a system, encrypting essential data, or deleting critical infrastructure, an attacker can destroy normal business operations. This may be an attempt at extortion, or simply be an attempt to punish a business that that attacker does not agree with.
Data exfiltration - By privately extracting, or publicly exposing, a system's data, an attacker can embarrass the company, exploit insider information, sell the information to competitors, or leverage the information for additional attacks.
Resource consumption - By taking control of a company's computing resources an attacker can use it for other purposes such as mining cryptocurrency, gathering customer information, or attacking other systems.
Examples of security failures
Security should always be a primary objective of any application. Building a web application that looks good and performs well, is a lot less important than building an application that is secure.
Here are a few examples where companies failed to properly prevent attacks to their systems.
$100 million dollars stolen through insider trading using SQL injection vulnerability
Log4Shell remote code execution vulnerability, 93% of cloud vulnerable at time of discovery, dubbed "the most severe vulnerability ever"
Russian hackers install backdoor on 18,000 government and Fortune 500 computers
Hackers Hold Computers of 23 Texas Towns For Ransom
Common hacking techniques
There are a few common exploitation techniques that you should be aware of. These include the following.
Injection: When an application interacts with a database on the backend, a programmer will often take user input and concatenate it directly into a search query. This allows a hacker to use a specially crafted query to make the database reveal hidden information or even delete the database.
Cross-Site Scripting (XSS): A category of attacks where an attacker can make malicious code execute on a different user's browser. If successful, an attacker can turn a website that a user trusts, into one that can steal passwords and hijack a user's account.
Denial of Service: This includes any attack where the main goal is to render any service inaccessible. This can be done by deleting a database using an SQL injection, by sending unexpected data to a service endpoint that causes the program to crash, or by simply making more requests than a server can handle.
Credential Stuffing: People have a tendency to reuse passwords or variations of passwords on different websites. If a hacker has a user's credentials from a previous website attack, then there is a good chance that they can successfully use those credentials on a different website. A hacker can also try to brute force attack a system by trying every possible combination of password.
Social engineering - Appealing to a human's desire to help, in order to gain unauthorized access or information.
What can I do about it?
Taking the time to learn the techniques a hacker uses to attack a system is the first step in preventing them from exploiting your systems. From there, develop a security mindset, where you always assume any attack surface will be used against you. Make security a consistent part of your application design and feature discussions. Here is a list of common security practices you should include in your applications.
Sanitize input data - Always assume that any data you receive from outside your system will be used to exploit your system. Consider if the input data can be turned into an executable expression, or can overload computing, bandwidth, or storage resources.
Logging - It is not possible to think of every way that your system can be exploited, but you can create an immutable log of requests that will expose when a system is being exploited. You can then trigger alerts, and periodically review the logs for unexpected activity.
Traps - Create what appears to be valuable information and then trigger alarms when the data is accessed.
Educate - Teach yourself, your users, and everyone you work with, to be security minded. Anyone who has access to your system should understand how to prevent physical, social, and software attacks.
Reduce attack surfaces - Do not open access anymore than is necessary to properly provide your application. This includes what network ports are open, what account privileges are allowed, where you can access the system from, and what endpoints are available.
Layered security - Do not assume that one safeguard is enough. Create multiple layers of security that each take different approaches. For example, secure your physical environment, secure your network, secure your server, secure your public network traffic, secure your private network traffic, encrypt your storage, separate your production systems from your development systems, put your payment information in a separate environment from your application environment. Do not allow data from one layer to move to other layers. For example, do not allow an employee to take data out of the production system.
Least required access policy - Do not give any one user all the credentials necessary to control the entire system. Only give a user what access they need to do the work they are required to do.
Safeguard credentials - Do not store credentials in accessible locations such as a public GitHub repository or a sticky note taped to a monitor. Automatically rotate credentials in order to limit the impact of an exposure. Only award credentials that are necessary to do a specific task.
Public review - Do not rely on obscurity to keep your system safe. Assume instead that an attacker knows everything about your system and then make it difficult for anyone to exploit the system. If you can attack your system, then a hacker will be able to also. By soliciting public review and the work of external penetration testers, you will be able to discover and remove potential exploits.



