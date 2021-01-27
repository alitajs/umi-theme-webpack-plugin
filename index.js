const { generateTheme } = require("umi-theme-generator");
const path = require("path");

class UmiThemePlugin {
  constructor(options) {
    const defaulOptions = {
      varFile: path.join(__dirname, "../../src/styles/variables.less"),
      antDir: path.join(__dirname, "../../node_modules/antd"),
      stylesDir: path.join(__dirname, "../../src/styles/antd"),
      themeVariables: ["@brand-primary"],
      generateOnce: false,
      outputFileName: 'color.less'
    };
    this.options = Object.assign(defaulOptions, options);
    this.generated = false;
  }

  apply(compiler) {
    const options = this.options;
    compiler.hooks.emit.tapAsync('AntDesignThemePlugin', (compilation, callback) => {
      if (options.generateOnce && this.colors) {
        compilation.assets[options.outputFileName] = {
          source: () => this.colors,
          size: () => this.colors.length
        };
        return callback();
      }
      options.customCss = '';
      Object.keys(compilation.assets).map((i) => {
        if (i.endsWith(".css")) {
          options.customCss = `${options.customCss}\n${compilation.assets[i].source()}`
        }
      })
      generateTheme(options)
        .then(css => {
          if (options.generateOnce) {
            this.colors = css;
          }
          compilation.assets[options.outputFileName] = {
            source: () => css,
            size: () => css.length
          };
          callback();
        })
        .catch(err => {
          callback(err);
        });
    });
  }
}

module.exports = UmiThemePlugin;
