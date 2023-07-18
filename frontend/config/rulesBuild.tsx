import  webpack  from "webpack"
import MiniCssWebpackPlugin from 'mini-css-extract-plugin'
import { BuildOption } from "./types/config"
import { type } from "os"
function rulesBuild(options : BuildOption) : webpack.RuleSetRule[]{
   const tsrule =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
   const style=  {
        test: /\.s[ac]ss$/i,
        use: [
         options.isDev ? "style-loader" :  MiniCssWebpackPlugin.loader,
         {
          loader : "css-loader",
          options : {
            modules : {
              auto : (resPath: string)=> Boolean(resPath.includes(".module.")),
              localIdentName : options.isDev ?  "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
            }
          }
         },
          "sass-loader",
        ],
      }



      const img = {
          test: /\.(png|pdf|svg|jpg|gif|txt)$/,
          type : 'asset/resource',
          generator: {
            filename: 'images/[name].[contenthash:8].[ext]',
          },
      }


    return [
      tsrule,
      style,
      img,
    ]
} 
export default rulesBuild