import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export default function Calendar({ onChange, date }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar value={dayjs.extend(customParseFormat)(date, 'MM/DD/YYYY')} onChange={onChange} />
    </LocalizationProvider>
  );
}

Calendar.propTypes = {
  date: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Calendar.defaultProps = {
  date: '',
};

// DateCalendar component needs to access the prop of onChange so that the application can access the date selected
