import React from 'react';
import './fileListItem.scss';
import PropTypes from 'prop-types';
import documentIcon from '../../static/images/document_icon.png';

class FileListItem extends React.Component {
    render() {
        const { file } = this.props;
        return (
            <div className="file_list_item_container">
                <div className="overlay" />
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
    file: PropTypes.object.isRequired,
};

export default FileListItem;
