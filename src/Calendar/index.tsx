import './index.scss';
import { Dayjs } from 'dayjs';
import MonthCalendar from './MonthCalender';

export interface CalendarProps {
    value: Dayjs
}

function Calendar(props: CalendarProps) {


    return <div className="calendar">
        <MonthCalendar {...props}/>
    </div>
}

export default Calendar;