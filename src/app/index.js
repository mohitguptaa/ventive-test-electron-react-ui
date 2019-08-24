import WinApp from './win';
import MacApp from './osx';

const map = {
    darwin: MacApp,
    win32: WinApp,
};
export default map[process.platform];
