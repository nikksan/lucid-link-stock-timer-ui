import React from 'react';
import './index.scss';
import classNames from 'classnames';
import { ReactComponent as CrossSVG } from './cross.svg';

type Props = {
  customClass?: string,
  children?: React.ReactNode;
  onClose: () => void,
};

export default ({ children, customClass, onClose }: Props) => {
  const classes = classNames({
    'generic-error-message': true,
    [customClass ?? '']: true,
  });

  return (
    <div className={classes}>
      <span className='cross' onClick={onClose}>
        <CrossSVG />
      </span>
      {children}
    </div>
  );
};
