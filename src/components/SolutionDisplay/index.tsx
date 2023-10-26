import { Solution } from '../../services/types';
import './index.scss';
import classNames from 'classnames';

type Props = {
  solution: Solution | null,
  customClass?: string;
};

export default ({ customClass, solution }: Props) => {
  const classes = classNames({
    'generic-solution-display': true,
    [customClass ?? '']: true,
  });

  const text = JSON.stringify(solution);

  return (
    <div className={classes}>{text}</div>
  );
};
