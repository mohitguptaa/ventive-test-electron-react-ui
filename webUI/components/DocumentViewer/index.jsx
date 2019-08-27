import React from 'react';
import PropTypes from 'prop-types';
import './documentViewer.scss';
import PDFViewer from '../PDFViewer';
import documentIcon from '../../static/images/document_icon_large.png';

/**
 * Component to display the document preview on the right side panel
 */
class DocumentViewer extends React.Component {
    /**
     * Get the document view, based on the type of the document.
     * object html tag doesn't work for pdf in electron. Hence using
     * react-pdf npm module in PDFViewer
     *
     * object element will handle most
     * file like text, png, jpeg, html, etc.
     */
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
        // Initially don't display anything on the right panel
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
