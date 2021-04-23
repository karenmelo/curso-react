import React, { cloneElement } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      {/* map é  usado para mapear um array dentro de outro array - é js*/}
      {/* {React.Children.map(props.children, (child) => {
        return cloneElement(child, props);
      })} */}
      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};
