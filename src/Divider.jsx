import React, { PropTypes } from 'react';
import css from '../assets/index.css';

const Divider = React.createClass({
  propTypes: {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    rootPrefixCls: PropTypes.string,
  },

  getDefaultProps() {
    return {
      disabled: true,
    };
  },

  render() {
    const { className = '', rootPrefixCls } = this.props;
    return <li className={`${className} ${css[`${rootPrefixCls}-item-divider`]}`}/>;
  },
});

export default Divider;
