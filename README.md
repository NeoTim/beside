# Beside [![Build Status](https://travis-ci.org/forsigner/beside.svg?branch=master)](https://travis-ci.org/forsigner/beside)

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


```js
beside.init({
  me: document.getElementById('me'),
  you: document.getElementById('you'),
  where: where
});
```

# UI component base on Beside

* [fo-popover](https://github.com/forsigner/fo-popover) A nice popover for Angular.
* [fo-tooltop](https://github.com/forsigner/fo-tooltip) A nice tooltip for Angular.

# Browser compatibility

- IE7+
- Firefox
- Chrome
- Safari
- Opera
