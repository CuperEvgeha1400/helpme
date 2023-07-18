import webpack from 'webpack'
import pluginsBuild from './pluginsBuild'
import devServerBuild from './devServerBuild'
import { BuildOption } from './types/config'
import rulesBuild from './rulesBuild'
import resolveBuild from './resolveBuild'
function buildWebPackConfig(options : BuildOption) : webpack.Configuration{
   const {mode, path,server, isDev} = options
    return {
        mode : mode,
        entry : path.entry,
        module: {
         rules: rulesBuild(options)
        },
        resolve: resolveBuild(options),
        output: {
           filename: "[name].[contenthash].js",
           path: path.output,
           clean: true
        },
        plugins: pluginsBuild(path, isDev),
        
        devServer: isDev ? devServerBuild(server) : undefined,

        devtool : isDev ? 'inline-source-map' : undefined
       }
}
export default buildWebPackConfig