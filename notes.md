# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it. another test

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was not to bad. It was difficult trying to figure out the format of everything especially since with html you are slighly limited on what you are able to do. So I tried my best in formatting it the way I think it should be but I am not sure if I am may want to change things once I start using css.
Also figuring out place holders for things was difficult

## CSS
it wasn't too bad to create, it was hard with not knowing exactly what I can possibly do with css, but once I learned how css and html work together it made it easier

I learned that the html is more important than I thought in shaping how it looked like where to put headings and pargraph can help shape the way its suppose to be. 

I learned how to make a multi colored text and also a gradient background

I learned how to make the forms more colorful through highlight box when submitting

also I learned how to create shadows over blocks to create a more dynamics in the css

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
