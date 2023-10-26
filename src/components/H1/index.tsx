import React from 'react';
import './index.scss';
import classNames from 'classnames';

type Props = {
  children?: React.ReactNode
  customClass?: string;
};

export default ({ children, customClass }: Props) => {
  const classes = classNames({
    'generic-h1': true,
    [customClass ?? '']: true,
  });

  return (
    <h1 className={classes}>{children}</h1>
  );
};
