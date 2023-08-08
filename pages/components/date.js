import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  try {
    const date = parseISO(dateString);

    if (!isNaN(date.getTime())) {
      return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
    } else {
      return <span>Invalid date</span>;
    }
  } catch (error) {
    console.error('Error parsing date:', error);
    return <span>Error parsing date</span>;
  }
}
