import React from 'react';
import PropTypes from 'prop-types';
import './fileList.scss';
import FileListItem from '../FileListItem';

class FileList extends React.Component {
    /**
     * Create file list items from the given files
     */
    getFileListItems = () => {
        const { files, selectedDocument } = this.props;
        return Object.values(files).map((document) => (
            <FileListItem
                key={document.name} // add key for faster dom reconcillation
                file={document}
                selected={selectedDocument
                    && document.name === selectedDocument.name} // highlight the selected document
            />
        ));
    }

    render() {
        return (
            <div className="file_list_container">
                <p>FILES</p>
                {this.getFileListItems()}
            </div>
        );
    }
}

FileList.propTypes = {
    files: PropTypes.object.isRequired,
    selectedDocument: PropTypes.object,
};

FileList.defaultProps = {
    selectedDocument: null,
};

export default FileList;
