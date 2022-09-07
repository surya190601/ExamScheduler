import React from "react";

const TextComponent = (props) => {
  const { className,label,children,styleProps={}} = props;
  return (
    <div className= {className} style={styleProps}>
      {label}
      {children}
    </div>
  );
};



export default TextComponent;
