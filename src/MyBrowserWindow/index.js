import electron, { BrowserWindow } from 'electron';
import path from 'path';
import config from '../config';

/**
 * This class encapsulate the Electron Browser Window with custom config options
 *
 * @class MyBrowserWindow
 */
class MyBrowserWindow {
    /**
     * Constructor
     * @param {Object} opts       - Options for the creating Browser Window object
     * @param {Object} windowOpts - Options for the Browser Window object
     */
    constructor(opts, windowOpts) {
        this.screen = electron.screen;
        this.windowOpts = windowOpts;
        this.defaultOpts = this.defaultOpts();
        this.browserWindowOpts = { ...this.defaultOpts, ...opts };
    }

    /**
     * returns default options for BrowserWindow
     *
     * @returns {Object} BrowserWindow options
     */
    defaultOpts() {
        const {
            minWidth,
            minHeight,
            title,
            icon,
            nodeIntegration,
            webviewTag,
            enableDevTools,
        } = config.browserWindow;

        const screenSize = this.screen.getPrimaryDisplay().workAreaSize;
        const width = Math.ceil(0.75 * screenSize.width);
        const height = Math.ceil(0.75 * screenSize.height);

        return {
            width: width >= minWidth ? width : minWidth,
            height: height >= minHeight ? height : minHeight,
            show: false,
            minWidth,
            minHeight,
            resizable: false,
            center: true,
            title,
            icon: path.resolve(icon),
            webPreferences: {
                webviewTag,
                nodeIntegration,
                devTools: enableDevTools,
            },
        };
    }

    /**
     * Create browser window
     */
    create() {
        const window = new BrowserWindow(this.browserWindowOpts);
        if (this.windowOpts.url) {
            window.loadURL(this.windowOpts.url);
        }
        return window;
    }
}

export default MyBrowserWindow;
