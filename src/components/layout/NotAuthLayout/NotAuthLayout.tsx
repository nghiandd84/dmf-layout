import React from 'react';

type Props = {
  className?: string;
  children: JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
  sessions?: JSX.Element[];
};

const NotAuthLayout = ({
  children,
  className,
  header,
  footer,
  sessions = [],
}: Props) => {
  return (
    <div
      tw="flex flex-col flex-nowrap relative w-full min-h-screen"
      className={className}
    >
      {header && <div tw=" border-red-300 border">{header}</div>}
      <main tw="flex-1 flex">
        <div className="flex-1">{children}</div>
        {sessions.map((item) => (
          <section tw="pb-20 relative block">{item}</section>
        ))}
      </main>
      {footer && <div tw="border-red-300 border">{footer}</div>}
    </div>
  );
};

export default NotAuthLayout;
