import { dialog } from 'electron';

/**
 * This class encapsulate the exit dialog rendered with options restart and
 * quit.
 *
 * @class ExitDialog
 */
class ExitDialog {
    /**
     * Creates an instance of ExitDialog.
     *
     * @param {Object} config - configuration data
     *
     * @memberof ExitDialog
     */
    constructor(config) {
        this.isVisible = false;

        this.defaultMessage = config.defaultMessage;
        this.dialogType = config.dialogType;
        this.dialogButtons = config.dialogButtons;
    }

    /**
     * display the exit dialog with restart and quit options.
     *
     * @public
     *
     * @param {String} messageToSend - message to display in dialog box.
     * @param {Function} btnHandlerCb - Callback to be called on the button click
     * @returns {undefined}
     *
     * @memberof ExitDialog
     */
    showDialog(messageToSend, btnHandlerCb) {
        const message = messageToSend || this.defaultMessage;

        if (this.isVisible) {
            return;
        }

        const opts = {
            type: this.dialogType,
            buttons: this.dialogButtons,
            message,
        };

        this.isVisible = true;
        dialog.showMessageBox(opts, btnHandlerCb);
    }

    /**
     * Nullify references and mark for garbage collection.
     *
     * @public
     * @memberof ExitDialog
     *
     * @returns {undefined}
     */
    destroy() {
        this.defaultMessage = null;
        this.dialogType = null;
        this.dialogButtons = null;
    }
}

export default {
    create(config) {
        return new ExitDialog(config);
    },
};
