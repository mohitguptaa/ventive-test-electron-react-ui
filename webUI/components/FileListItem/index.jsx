import React from 'react';
import './fileListItem.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import documentIcon from '../../static/images/document_icon.png';
import { selectDocument } from '../../store/actions/actions';

class FileListItem extends React.Component {
    /**
     * Dispatch select document action
     * when a user selects a file
     */
    handleOnClick = () => {
        const { file, dispatch } = this.props;
        dispatch(selectDocument(file));
    }

    /**
     * Add overlay class on selected item
     */
    getOverlayClass = () => {
        const { selected } = this.props;
        return selected ? 'overlay selected' : 'overlay';
    }

    render() {
        const { file } = this.props;
        return (
            <div
                className="file_list_item_container"
                onClick={this.handleOnClick}
            >
                <div className={this.getOverlayClass()} />
                <img src={documentIcon} alt="Document Icon" />
                <div className="document_number" title={file.name}>
                    {file.name}
                    <p className="document_name">{file.type}</p>
                </div>
            </div>
        );
    }
}

FileListItem.propTypes = {
    dispatch: PropTypes.func.isRequired,
    file: PropTypes.object.isRequired,
    selected: PropTypes.bool,
};

FileListItem.defaultProps = {
    selected: false,
};

export default connect()(FileListItem);
