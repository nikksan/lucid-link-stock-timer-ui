import { Solution } from '../../services/types';
import './index.scss';
import classNames from 'classnames';

type Props = {
  solution: Solution | null,
  availableFunds: number,
  customClass?: string;
};

const generateText = (solution: Solution | null, availableFunds: number) => {
  if (!solution) {
    return 'No profitable solution exists.';
  }

  const numberOfStocks = (availableFunds / solution.entryPrice);
  const profit = numberOfStocks * (solution.exitPrice - solution.entryPrice);

  return `${numberOfStocks.toFixed(2)} stocks could have been bought on ${solution.entryDate} and sold on ${solution.exitDate} for a total profit of ${profit.toFixed(2)}`;
}

export default ({ customClass, solution, availableFunds }: Props) => {
  const classes = classNames({
    'generic-solution-display': true,
    [customClass ?? '']: true,
  });

  return (
    <div className={classes}>{generateText(solution, availableFunds)}</div>
  );
};
