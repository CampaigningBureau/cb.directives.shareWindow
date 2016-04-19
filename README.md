#ShareWindow
[![npm](https://img.shields.io/npm/dt/cb-directives-sharewindow.svg)](https://www.npmjs.com/package/cb-directives-sharewindow)
[![Build Status](https://travis-ci.org/CampaigningBureau/cb.directives.shareWindow.svg?branch=master)](https://travis-ci.org/CampaigningBureau/cb.directives.shareWindow)

This directive makes it easy to open a social-media-share link inside a popup window. (But it will also work with any other link)

## Usage
#### Install
`npm install -S cb-directives-sharewindow`

#### Require in your angular app
```javascript
const angular      = require('angular'),
      myAngularApp = angular.module('myApp', [
          require('cb-directives-sharewindow')
      ]);
```

#### Use inside your website
```html
<!-- works with static links -->
<a share-window href="https://www.facebook.com/sharer/sharer.php?u=https%3A//github.com/CampaigningBureau/cb.directives.shareWindow">Share this!</a>

<!-- also works with dynamic links -->
<a share-window ng-href="{{ 'https://www.facebook.com/sharer/sharer.php?u=https%3A//github.com/CampaigningBureau/cb.directives.shareWindow' }}">Share this!</a>
```
