import electron from 'electron';
import windowState from 'electron-window-state';
import ExitDialog from '../ExitDialog';
import MyBrowserWindow from '../MyBrowserWindow';

/**
 * This class represents the application
 */
class AppBase {
    /**
     * Create the application instance.
     *
     * @param {Object} config config which is a plain json object
     * bus.
     */
    constructor(config) {
        this.app = electron.app;
        this.config = config;
        this.exitDialog = ExitDialog.create({
            config: this.config.exitDialog,
        });
        this.mainWindow = null;
        this.mainWindowState = null;
        this.onAppReadyCb = this.onAppReady.bind(this);
        this.onAppActivateCb = this.showMainWindow.bind(this);
        this.onUncaughtExceptionCb = this.onUncaughtException.bind(this);

        this.setUpListeners();
        this.requestSingleInstanceLock();
        if (this.app && this.app.isReady()) {
            this.onAppReady();
        }
    }

    /**
     * setUp listeners
     *
     * @memberof Application
     * @returns {undefined}
     */
    setUpListeners() {
        this.app.on('ready', this.onAppReadyCb);
        this.app.on('activate', this.onAppActivateCb);
        process.on('uncaughtException', this.onUncaughtExceptionCb);
    }

    /**
     * Creates single app instance and ensures only single instance
     * of application is running on user's system.
     *
     * @returns {undefined}
     */
    requestSingleInstanceLock() {
        const { app } = this;
        if (!app.requestSingleInstanceLock(this.showMainWindow)) {
            this.quit();
        }
    }

    /**
     * Setup application
     *
     * @returns  {undefined}
     */
    onAppReady() {
        this.setMainBrowserWindow();
        this.setUpApplicationModules();
    }

    /**
     * sets up Application modules
     *
     * @memberof Application
     * @returns {undefined}
     */
    setUpApplicationModules() {
        // Setup menu here
        this.menu = null;
    }

    /**
     * Sets up the mainBrowserWindow
     *
     * @returns {undefined}
     */
    setMainBrowserWindow() {
        this.mainWindowState = windowState();
        const {
            x,
            y,
            width,
            height,
        } = this.mainWindowState;

        const opts = {
            x,
            y,
            width,
            height,
        };

        if (width && height && x && y) {
            this.mainWindow = new MyBrowserWindow(opts, {
                // eslint-disable-next-line no-undef
                url: MAIN_WINDOW_WEBPACK_ENTRY,
                loadReactDevTools: this.config.loadDevTools,
            }).create();
        } else {
            this.mainWindow = new MyBrowserWindow({}, {
                // eslint-disable-next-line no-undef
                url: MAIN_WINDOW_WEBPACK_ENTRY,
                loadReactDevTools: this.config.loadDevTools,
            }).create();
        }
        this.mainWindowState.manage(this.mainWindow);

        this.mainWindow.once('ready-to-show', this.showMainWindow.bind(this));
    }

    /**
     * shows the main window
     *
     * @memberof Application
     * @returns {undefined}
     */
    showMainWindow() {
        if (this.mainWindow) {
            this.mainWindow.show();
        }
    }

    /**
     * Quits the app.
     *
     * @returns {undefined}
     */
    quit() {
        const { app } = this;
        this.destroy();
        app.quit();
    }

    /**
     * handler for uncaughtException event from process
     *
     * @param {Error} error error Error object
     * @memberof Application
     * @returns {undefined}
     */
    onUncaughtException() {
        this.exitGracefully('Application terminated unexpectedly');
    }

    /**
     * Exit app gracefully by calling ExitDialog.
     *
     * @param  {String} message - The message to exit with
     *
     * @returns  {undefined}
     */
    exitGracefully(message) {
        if (this.app.isReady()) {
            this.exitDialog.showDialog(message);
        }
    }

    /**
     * remove Listeners from various application modules
     *
     * @memberof Application
     * @returns {undefined}
     */
    removeListeners() {
        this.app.removeListener('ready', this.onAppReadyCb);
        this.app.removeListener('activate', this.onAppActivateCb);
        process.removeListener('uncaughtException', this.onUncaughtExceptionCb);
    }

    /**
     * Destroy the app instance the to properly cleanup.
     *
     * @returns {undefined}
     */
    destroy() {
        this.removeListeners();
        this.exitDialog.destroy();

        this.config = null;
        this.exitDialog = null;
        this.app = null;
        this.mainWindow = null;
        this.mainWindowState = null;
        this.onAppReadyCb = null;
        this.onAppActivateCb = null;
        this.onUncaughtExceptionCb = null;
    }
}

export default AppBase;
