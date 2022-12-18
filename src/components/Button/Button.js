import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { useContext } from 'react';
import { ModalContext, UserCurrentContext } from '~/Provider';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  children,
  className,
  onClick,
  leftIcon,
  rightIcon,
  ...passProps
}) {

  const { handleOpenModal } = useContext(ModalContext)
  const { currentUser } = useContext(UserCurrentContext)
  
  let Components = "button";

  const props = {
    onClick ,
    ...passProps,
  };

  if (disabled) {
    for (let key in props) {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    }
  }
  
  if(!onClick && !currentUser) {
      props.onClick = handleOpenModal
  }

  if (to) {
    props.to = to;
    Components = Link;
  } else if (href) {
    props.href = href;
    Components = "a";
  }

  const classes = cx("wrapper", {
    [className] : className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,    
    leftIcon,
    rightIcon,
  });



  return (
    <Components className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon  && <span className={cx('icon')}>{rightIcon}</span>}
    </Components>
  );
}

Button.propTypes = {
  to : PropTypes.string,
  href : PropTypes.string,
  primary : PropTypes.bool,
  outline : PropTypes.bool,
  small : PropTypes.bool,
  large : PropTypes.bool,
  text : PropTypes.bool,
  disabled : PropTypes.bool,  
  rounded : PropTypes.bool,
  children : PropTypes.node.isRequired,
  className : PropTypes.string,
  onClick : PropTypes.func,
  leftIcon : PropTypes.node,
  rightIcon : PropTypes.node
}

export default Button;
