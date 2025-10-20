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

<section> – thematic grouping

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

## Javascript Basics
Embedding JS: You can place JavaScript in <script> tags either inline or via src . For example:
<!-- In HTML file -->
<script src="main.js"></script>
<script>
console.log("Inline JS here");
</script>
(Linking scripts is shown on MDN ). Place scripts at the end of <body> or use defer so that the DOM is loaded first 

Basic Syntax:
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