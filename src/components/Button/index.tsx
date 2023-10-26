import './index.scss';
import classNames from 'classnames';

type Props = {
  customClass?: string;
  text: string,
  isDisabled: boolean,
  onClick: () => void;
};

export default ({  isDisabled, onClick, text }: Props) => {
  const classes = classNames({
    'generic-button': true,
    disabled: isDisabled,
  });

  return (
    <a className={classes} onClick={onClick} href="#">{text}</a>
  );
}
