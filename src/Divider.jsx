import React, { PropTypes } from 'react';

const Divider = React.createClass({
  propTypes: {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    rootPrefixCls: PropTypes.string,
    css: PropTypes.object,
  },

  getDefaultProps() {
    return {
      disabled: true,
      css: require('../assets/index.css'),
    };
  },

  render() {
    const { className = '', rootPrefixCls, css } = this.props;
    return <li className={`${className} ${css[`${rootPrefixCls}-item-divider`]}`}/>;
  },
});

export default Divider;
