import WinApp from './win';
import MacApp from './osx';

/**
 * To automatically pick the
 * correct App based on platform
 */
const map = {
    darwin: MacApp,
    win32: WinApp,
};
export default map[process.platform];
