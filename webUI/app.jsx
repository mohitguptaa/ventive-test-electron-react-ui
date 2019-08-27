import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import components from './components';

const {
    ReaderZone,
    FileList,
    UploadFilesButton,
    DocumentViewer,
} = components;

class App extends React.Component {
    getOverlayClass = () => {
        const { disableWindow } = this.props;
        return disableWindow ? 'overlay visible' : 'overlay';
    }

    render() {
        const { documents, selectedDocument } = this.props;
        return (
            <div className="main_container">
                <ReaderZone>
                    <FileList
                        files={documents}
                        selectedDocument={selectedDocument}
                    />
                    <UploadFilesButton />
                </ReaderZone>
                <DocumentViewer document={selectedDocument} />
                <div className={this.getOverlayClass()} />
            </div>
        );
    }
}

App.propTypes = {
    disableWindow: PropTypes.bool,
    documents: PropTypes.object,
    selectedDocument: PropTypes.object,
};

App.defaultProps = {
    disableWindow: false,
    documents: {},
    selectedDocument: null,
};

const mapStateToProps = (state) => {
    const { disableWindow, documents, selectedDocument } = state;
    return { disableWindow, documents, selectedDocument };
};

export default connect(
    mapStateToProps,
)(App);
