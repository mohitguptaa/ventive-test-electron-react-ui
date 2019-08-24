import App from './app';
import config from './config';


const isDevMode = process.execPath.match(/[\\/]electron/);

config.loadDevTools = isDevMode;

const main = () => new App(config);

global.app = main();
