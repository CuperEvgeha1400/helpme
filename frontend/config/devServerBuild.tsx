import { Configuration } from 'webpack-dev-server'
import { DevServer } from './types/config'
function devServerBuild(options : DevServer) : Configuration{
    const {port, directory} = options;
    return {
        static :{
            publicPath  : directory
        },
        port : port,
        historyApiFallback: true,
	allowedHosts: "all"
    }
}
export default devServerBuild
