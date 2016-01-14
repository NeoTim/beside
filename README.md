# Beside

A UI library to make an element beside another.

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

# UI component base on Beside

* [`fo-popover`] A nice popover for Angular.
* [`fo-tooltop`] A nice tooltip for Angular.

```js
beside.init({
  me: document.getElementById('me'),
  you: document.getElementById('you'),
  where: where
});
```

# Browser compatibility

- IE7+
- Firefox
- Chrome
- Safari
- Opera
