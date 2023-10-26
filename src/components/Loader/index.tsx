import React from 'react';
import './index.scss';
import classNames from 'classnames';

type Props = {
  customClass?: string;
};

export default ({ customClass }: Props) => {
  const classes = classNames({
    'generic-loader': true,
    [customClass ?? '']: true,
  });

  return (
    <div className={classes}></div>
  );
};
