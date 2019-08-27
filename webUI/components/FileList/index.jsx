import React from 'react';
import PropTypes from 'prop-types';
import './fileList.scss';
import FileListItem from '../FileListItem';

class FileList extends React.Component {
    getFileListItems = () => {
        const { files } = this.props;
        return Object.values(files).map((document) => (
            <FileListItem key={document.name} file={document} />
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
};

export default FileList;
