import React from 'react';
import './readerZone.scss';
import PropTypes from 'prop-types';
import readerZoneImage from '../../static/images/logo_sm_white.png';

class ReaderZone extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="reader_zone_container">
                <img src={readerZoneImage} alt="Reader Zone" />
                {children}
            </div>
        );
    }
}

ReaderZone.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ReaderZone;
