import dayjs from 'dayjs';

const DATE_FORMAT = 'D MMM';

function humanizeDate (dueDate, format = DATE_FORMAT) {
    return dueDate ? dayjs(dueDate).format(format) : '';
}

