const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.VUE_APP_MODE === "production";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const VConsolePlugin = require("vconsole-webpack-plugin");

module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {
    console.log('Node环境 ', process.env.VUE_APP_MODE)
  },
  configureWebpack: (config) => {
    // config.plugins [
    //   // 测试环境引入 vconsole
    //   new VConsolePlugin({ enable: !isProd }),
    // ];
    return {
      plugins: [new VConsolePlugin({ enable: !isProd })],
      resolve: {
        unsafeCache: false,
      },
    };
    // console.log('config', config)
  },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    // open: process.platform === 'darwin',
    //将服务启动后默认打开浏览器
    open: true,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 设置代理
      "/api": {
        target: "http://www.lzzyaf.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
};
