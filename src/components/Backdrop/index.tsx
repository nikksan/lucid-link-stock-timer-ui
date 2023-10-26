import React from 'react';
import './index.scss';
import classNames from 'classnames';

type Props = {
  customClass?: string;
};

export default ({ customClass }: Props) => {
  const classes = classNames({
    'generic-backdrop': true,
    [customClass ?? '']: true,
  });

  return (
    <div className={classes}></div>
  );
};
