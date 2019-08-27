import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Document, Page, pdfjs } from 'react-pdf';
import './pdfViewer.scss';

// This is required as webpack is not packing this properly and is an open issue with react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';

/**
 * PDF Viewer to preview pdf files. This is using react-pdf
 * since native object/embed/iframe doesn't support pdf preview.
 */
class PDFViewer extends Component {
    constructor() {
        super();
        this.state = {
            numPages: null,
        };
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { numPages } = this.state;
        const { document } = this.props;
        return (
            <div className="pdf_view_container">
                <Document
                    file={document}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    {
                        Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                />
                            ),
                        )
                    }
                </Document>
            </div>
        );
    }
}

PDFViewer.propTypes = {
    document: PropTypes.object,
};

PDFViewer.defaultProps = {
    document: null,
};

export default PDFViewer;
