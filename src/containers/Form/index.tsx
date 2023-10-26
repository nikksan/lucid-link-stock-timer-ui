import { Fragment, useState } from 'react';
import './index.scss';
import DateTimePicker from '../../components/DateTimePicker';
import { Dayjs } from 'dayjs';
import H1 from '../../components/H1';
import Input from '../../components/Input';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import classNames from 'classnames';
import Loader from '../../components/Loader';
import Backdrop from '../../components/Backdrop';
import SolutionDisplay from '../../components/SolutionDisplay';
import { Solution } from '../../services/types';
import ApiClient from '../../services/ApiClient';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export default () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [availableFunds, setAvailableFunds] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [solution, setSolution] = useState<Solution | null | undefined>();

  const handleSubmit = async () => {
    setErrorMessage('');
    setSolution(undefined);

    if (!startDate) {
      setErrorMessage(`Please input start date!`);
      return;
    }

    if (!endDate) {
      setErrorMessage(`Please input end date!`);
      return;
    }

    if (!startDate.isBefore(endDate)) {
      setErrorMessage(`Please input a valid date range!`);
      return;
    }

    if (!availableFunds) {
      setErrorMessage(`Please input your available funds`);
      return;
    }

    setIsLoading(true);

    try {
      const solution = await ApiClient.calculateSolution(startDate, endDate);
      setSolution(solution);
    } catch (err) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  const formClasses = classNames({
    'form-container': true,
    error: !!errorMessage,
  });

  return (
    <div className="App">
      <H1 customClass='title'>Stock Timer UI</H1>

      <div className={formClasses}>
        <DateTimePicker
          customClass='date-time-picker'
          label="Start (UTC)"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          isDisabled={isLoading}
          format={DATE_FORMAT}
        />
        <DateTimePicker
          customClass='date-time-picker'
          label="End (UTC)"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          isDisabled={isLoading}
          format={DATE_FORMAT}
        />
        <Input
          placeholder='Available funds'
          customClass='available-funds-input'
          type="number"
          onChange={(e) => setAvailableFunds(Number(e.target.value))}
          isDisabled={isLoading}
        />

        {
          errorMessage && <Alert
            onClose={() => setErrorMessage('')}
            customClass='error-message'>
            {errorMessage}
          </Alert>
        }

        <Button
          text='Calculate'
          isDisabled={isLoading}
          onClick={handleSubmit}
        />

        {
          isLoading && (
            <Fragment>
              <Loader />
              <Backdrop customClass='loader' />
            </Fragment>
          )
        }
      </div>

      {(solution !== undefined && availableFunds > 0) && (
        <SolutionDisplay
          customClass='form-result-container'
          solution={solution}
          availableFunds={availableFunds}
        />
      )}
    </div>
  );
}
