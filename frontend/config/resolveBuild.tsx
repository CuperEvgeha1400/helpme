import webpack from 'webpack'
import { BuildOption } from './types/config'
function  resolveBuild (options : BuildOption) : webpack.ResolveOptions {
  return  {
    extensions : [ '.ts', '.js', '.tsx', '.scss'],
    modules : [options.path.src, "node_modules"],
    preferAbsolute : true,
    alias : {
      '@mui/styled-engine': '@mui/styled-engine-sc'
    },
    mainFiles : ['index']
  }
}
export default resolveBuild