import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
type AnimationName =
  | "zoom-in-top"
  | "zoom-in-bottom"
  | "zoom-in-left"
  | "zoom-in-right";

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
  className?: string;
};

export interface TransitionItemProps {
  ref?: any;
}
/* type ChildrenComponent = TransitionChildren & {
  ref?: any;
}; */
// wrapper 是解决有些元素自带transition属性就会导致动画失效

const Transition: React.FC<TransitionProps> = (props) => {
  const { children, animation, className, wrapper, ...restProps } = props;
  const nodeRef = React.useRef(null);
  const childrenElement = children as React.FunctionComponentElement<
    TransitionItemProps
  >;
  const childrenComponent = React.cloneElement(childrenElement, {
    ref: nodeRef,
  });
  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={animation || className}
      {...restProps}
    >
      {childrenComponent}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  animation: "zoom-in-top",
  appear: true,
  unmountOnExit: true,
};

export default Transition;
