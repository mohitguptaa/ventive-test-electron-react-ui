import React from 'react';
import PropTypes from 'prop-types';
import './documentViewer.scss';
import PDFViewer from '../PDFViewer';
import documentIcon from '../../static/images/document_icon_large.png';

class DocumentViewer extends React.Component {
    getDocumentView = () => {
        const { document } = this.props;
        if (document.type === 'application/pdf') {
            return (<PDFViewer document={document} />);
        }
        return (
            <object
                data={URL.createObjectURL(document)}
                type={document.type}
            >
                This file type is not supported!
            </object>
        );
    }

    render() {
        const { document } = this.props;
        if (document) {
            return (
                <div className="document_viewer_container">
                    <img src={documentIcon} alt="Document Icon" />
                    <div className="document_name">
                        {document.name}
                    </div>
                    <div className="document_view">
                        {this.getDocumentView()}
                    </div>
                </div>
            );
        }
        return (
            <div className="document_viewer_container" />
        );
    }
}

DocumentViewer.propTypes = {
    document: PropTypes.object,
};

DocumentViewer.defaultProps = {
    document: null,
};

export default DocumentViewer;
