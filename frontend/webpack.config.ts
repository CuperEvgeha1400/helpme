import webpack from 'webpack'
import buildWebPackConfig from './config/buildWebPackConfig'
import { DevServer, EnvBuild, Path } from './config/types/config'
import path from 'path'


export default  (env : EnvBuild)=> {
   const mode  = env.mode || "development"
   const paths : Path = {
     entry : path.resolve(__dirname,'src'),
     output : path.resolve(__dirname, 'dist'),
     plugin : path.resolve(__dirname, 'public', 'index.html'), 
     devserver : path.resolve(__dirname, 'dist', 'index.html'),
     src : path.resolve(__dirname, 'src')
   }
   const server : DevServer = {
      port : env.port || 3000,
      directory : paths.devserver
   }
   const isDev = mode === 'development'
   const config : webpack.Configuration = buildWebPackConfig({
      mode : mode,
      path : paths,
      isDev : isDev,
      server
    })

 return config
}



