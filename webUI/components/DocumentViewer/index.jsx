import React from 'react';
import './documentViewer.scss';
import documentIcon from '../../static/images/document_icon_large.png';

class DocumentViewer extends React.Component {
    render() {
        return (
            <div className="document_viewer_container">
                <img src={documentIcon} alt="Document Icon" />
                <div className="document_name"> Document 01 </div>
                <div className="document_view" />
            </div>
        );
    }
}

export default DocumentViewer;
