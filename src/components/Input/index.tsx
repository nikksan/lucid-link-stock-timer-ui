import React from 'react';
import './index.scss';
import classNames from 'classnames';

type Props = {
  placeholder: string;
  type: React.HTMLInputTypeAttribute,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  isDisabled: boolean
  customClass?: string;
};

export default ({ placeholder, type, onChange, isDisabled, customClass }: Props) => {
  const classes = classNames({
    'generic-input': true,
    [customClass ?? '']: true,
  });

  return (
    <input
      placeholder={placeholder}
      className={classes}
      type={type}
      onChange={onChange}
      disabled={isDisabled}
    />
  );
};
