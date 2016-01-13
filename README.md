# Beside

A library to make an element beside another.

# Demo

[demo](http://beside.mipinr.com/)

# Install

### bower

```bash
$ bower install beside --save
```

### npm

```bash
$ npm install beside --save
```

# Usage

```html
<script src="bower_components/beside/dist/js/beside.js"></script>
<div id="me">ME</div>
<div id="you">YOU</div>
```

```js
beside.init({
  me: document.getElementById('me'),
  you: document.getElementById('you'),
  where: where
});
```

# Browser compatibility

- IE8+
- Firefox
- Chrome
- Safari
- Opera
