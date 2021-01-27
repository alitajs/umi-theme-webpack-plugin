# antd-theme-webpack-plugin

This webpack plugin is to  generate color specific less/css and inject into your `index.html` file so 
that you can change Ant Design specific color theme in browser.

## Live Theme Demo: 

https://mzohaibqc.github.io/antd-theme-webpack-plugin/index.html

https://antd-live-theme.firebaseapp.com/

In order to integrate with your webpack configurations, install the package and add following code in your webpack config file.

## Install
  - npm install -D umi-theme-webpack-plugin

```js
const AntDesignThemePlugin = require('umi-theme-webpack-plugin');

const options = {
  varFile: path.join(__dirname, "../../src/styles/variables.less"),
  antDir: path.join(__dirname, "../../node_modules/antd"),
  stylesDir: path.join(__dirname, "../../src/styles/antd"),
  themeVariables: ["@brand-primary"],
  generateOnce: false,
}

const themePlugin = new AntDesignThemePlugin(options);
// in config object
plugins: [
    themePlugin
  ]
```
Add this plugin in `plugins` array.


| Property | Type | Default | Descript |
| --- | --- | --- | --- |
| antDir | string | - | This is path to antd directory in your node_modules |
| stylesDir | string | - | This is path to your custom styles root directory, all files with .less extension in this folder and nested folders will be processed  |
| varFile | string | - | Path to your theme related variables file |
| themeVariables | array | ['@primary-color'] | List of variables that you want to dynamically change |
| generateOnce | boolean | false | Everytime webpack will build new code due to some code changes in development, this plugin will run again unless you specify this flag as `true` which will just compile your styles once |

```

This way you can better place your below script in your html file according to your needs.

```
<link rel="stylesheet/less" type="text/css" href="/color.less" />
```

Don't forget to add import Ant design default theme file i.e. antd/lib/style/themes/default.less in variables.less file.

# Enable Javascript for less-loader

You need to enable javascript for less-loader.

```
{
  javascriptEnabled: true
}

```

## Configurations using customize-cra
https://github.com/mzohaibqc/antd-theme-webpack-plugin/blob/master/examples/customize-cra/config-overrides.js

## Light/Dark Theme Switch
Here is a demo to switch between light and dark themes dynamically.
https://mzohaibqc.github.io/antd-theme-webpack-plugin/index.html

And here is code for this demo
https://github.com/mzohaibqc/antd-theme-webpack-plugin/tree/master/examples/customize-cra

Note: you don't necessarily

## [CHANGELOG](/CHNAGELOG.md)
