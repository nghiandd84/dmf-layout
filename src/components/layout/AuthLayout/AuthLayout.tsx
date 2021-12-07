import React from 'react';
type Props = {
  className?: string;
  header?: JSX.Element;
  footer?: JSX.Element;
  leftMenu?: JSX.Element;
  rightMenu?: JSX.Element;
  children: JSX.Element;
};
const AuthLayout = ({ children, className, header, footer }: Props) => {
  return (
    <>
      {header}
      <div className={className}>{children}</div>
      {footer}
    </>
  );
};

export default AuthLayout;
