import React from 'react';
import PropTypes from 'prop-types';

const initAd = () => {
  window.onload = function () {
  (window.adsbygoogle = window.adsbygoogle || []).push({});
    
  }
  // (window.adsbygoogle = window.adsbygoogle || []).push({});
};

className GoogleAd extends React.Component {
  componentDidMount() {
    initAd();
  }

  shouldComponentUpdate(nextProps) {
    const { props: { path } } = this;
    return nextProps.path !== path;
  }

  componentDidUpdate() {
    initAd();
  }

  render() {
    const { children, classNameName, path } = this.props;
    return (
      <div key={path} classNameName={`adsense ${classNameName}`}>
        <ins className="adsbygoogle"
            style={{display:"inline-block",width:"320px",height:"100px"}}
            data-ad-client="ca-pub-1919598055512436"
            data-ad-slot="2044520891"></ins>
      </div>
    );
  }
}

GoogleAd.propTypes = {
  path: PropTypes.string.isRequired,
  classNameName: PropTypes.string,
};

GoogleAd.defaultProps = {
  classNameName: '',
};

export default GoogleAd;