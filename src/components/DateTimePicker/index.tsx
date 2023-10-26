import classNames from 'classnames';
import { DateOrTimeView, DateTimePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

type Props = {
  label: string;
  value: Dayjs | null,
  isDisabled: boolean,
  onChange: (newValue: Dayjs | null) => void;
  format: string,
  customClass?: string;
};

const views: Array<DateOrTimeView> = ['year', 'day', 'hours', 'minutes', 'seconds'];

export default ({ label, value, onChange, isDisabled, format, customClass  }: Props) => {
  const classes = classNames({
    [customClass ?? '']: true,
  });

  return (
    <DateTimePicker
      className={classes}
      label={label}
      views={views}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      format={format}
    />
  );
};
