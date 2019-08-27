import React from 'react';
import PropTypes from 'prop-types';
import './fileList.scss';
import FileListItem from '../FileListItem';

class FileList extends React.Component {
    getFileListItems = () => {
        const { files, selectedDocument } = this.props;
        return Object.values(files).map((document) => (
            <FileListItem
                key={document.name}
                file={document}
                selected={selectedDocument
                    && document.name === selectedDocument.name}
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
