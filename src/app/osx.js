import path from 'path';
import AppBase from './appBase';

/**
 * This class is mac flavour for AppBase. Mac specific code should go into this
 * class.
 *
 * @class App
 * @extends {AppBase}
 */
class App extends AppBase {
    /**
     * override setUpApplicationModules to set dock icon
     *
     * @memberof App
     * @returns {undefined}
     */
    setUpApplicationModules() {
        super.setUpApplicationModules();
        const dockIconPath = path.resolve(this.config.browserWindow.icon);
        this.app.dock.setIcon(dockIconPath);
    }
}

export default App;
