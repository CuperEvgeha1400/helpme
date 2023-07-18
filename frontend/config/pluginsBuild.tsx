import  webpack  from "webpack"
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssWebpackPlugin from 'mini-css-extract-plugin'
import { Path } from "./types/config"
import dotenv from 'dotenv';
dotenv.config();
function  pluginsBuild (path : Path, isDev : boolean): webpack.WebpackPluginInstance[] {
   return [
    new HtmlWebpackPlugin({
        template: path.plugin
      }) ,
      new webpack.ProgressPlugin(),
      new MiniCssWebpackPlugin({
         filename : isDev? "css/[name].css" :  "css/[name].[contenthash:8].css",
         chunkFilename : isDev ? "css/[name].css": "css/[id].[contenthash:8].css"
      }),
      new webpack.DefinePlugin({
         'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
      })

   ]
}
export default pluginsBuild