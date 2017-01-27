import React, { PropTypes } from 'react';

const MenuItemGroup = React.createClass({
  propTypes: {
    renderMenuItem: PropTypes.func,
    index: PropTypes.number,
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

  renderInnerMenuItem(item, subIndex) {
    const { renderMenuItem, index } = this.props;
    return renderMenuItem(item, index, subIndex);
  },

  render() {
    const props = this.props;
    const { className = '', rootPrefixCls } = props;
    const titleClassName = props.css[`${rootPrefixCls}-item-group-title`];
    const listClassName = props.css[`${rootPrefixCls}-item-group-list`];
    return (<li className={`${className} ${props.css[`${rootPrefixCls}-item-group`]}`}>
      <div className={titleClassName}>{props.title}</div>
      <ul className={listClassName}>
        {React.Children.map(props.children, this.renderInnerMenuItem)}
      </ul>
    </li>);
  },
});

MenuItemGroup.isMenuItemGroup = true;

export default MenuItemGroup;
