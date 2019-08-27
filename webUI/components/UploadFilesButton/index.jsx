import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './uploadFilesButton.scss';
import cloudIcon from '../../static/images/cloud_icon.png';
import { disableWindow, addDocuments } from '../../store/actions/actions';


class UploadFilesButton extends React.Component {
    /**
     * Dispatch disable window action to
     * disable the window and add overlay
     */
    disableWindow = (disable) => {
        const { dispatch } = this.props;
        dispatch(disableWindow(disable));
    }

    handleOnClick = (e) => {
        e.target.value = null;
        document.body.onfocus = this.handleOnFocus;
        this.disableWindow(true);
    }

    /**
     * Reenable the window once
     * file selection is done
     */
    handleOnFocus = () => {
        document.body.onfocus = null;
        this.disableWindow(false);
    }

    /**
     * Add selected files to store
     */
    handleOnFileChange = (e) => {
        const { dispatch } = this.props;
        if (e.target.files) {
            dispatch(addDocuments(e.target.files));
        }
    }

    render() {
        return (
            <div className="upload_files_button">
                <img src={cloudIcon} alt="Upload Icon" />
                <label htmlFor="files" className="text" onClick={this.handleOnClick}>
                    Upload Files
                    <input type="file" id="files" onChange={this.handleOnFileChange} multiple />
                </label>
            </div>
        );
    }
}

UploadFilesButton.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(UploadFilesButton);
