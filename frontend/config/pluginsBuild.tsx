import  webpack  from "webpack"
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssWebpackPlugin from 'mini-css-extract-plugin'
import { Path } from "./types/config"
function  pluginsBuild (path : Path, isDev : boolean): webpack.WebpackPluginInstance[] {
   return [
    new HtmlWebpackPlugin({
        template: path.plugin
      }) ,
      new webpack.ProgressPlugin(),
      new MiniCssWebpackPlugin({
         filename : isDev? "css/[name].css" :  "css/[name].[contenthash:8].css",
         chunkFilename : isDev ? "css/[name].css": "css/[id].[contenthash:8].css"
      })
   ]
}
export default pluginsBuild