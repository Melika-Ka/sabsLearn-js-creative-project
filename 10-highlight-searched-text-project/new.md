- how to write regex in js :

```js
replaceThis = "dvvvbb";
const re = `/${replaceThis}/`;
const re = new RegExp(`${replaceThis}`, "g");
```

- innerHTML vs textContent :

  - [innerhtml-vs-innertext-vs-textcontent](https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/)

  1.  innerHTML parses content as HTML, so it takes longer.
  2.  nodeValue uses straight text, does not parse HTML, and is faster.
  3.  textContent uses straight text, does not parse HTML, and is faster.
  4.  innerText Takes styles into consideration. It won't get hidden text for instance.
