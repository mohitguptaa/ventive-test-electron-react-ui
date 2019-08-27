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
        const { documents } = this.props;
        return (
            <div className="main_container">
                <ReaderZone>
                    <FileList files={documents} />
                    <UploadFilesButton />
                </ReaderZone>
                <DocumentViewer />
                <div className={this.getOverlayClass()} />
            </div>
        );
    }
}

App.propTypes = {
    disableWindow: PropTypes.bool,
    documents: PropTypes.object,
};

App.defaultProps = {
    disableWindow: false,
    documents: {},
};

const mapStateToProps = (state) => {
    const { disableWindow, documents } = state;
    return { disableWindow, documents };
};

export default connect(
    mapStateToProps,
)(App);
