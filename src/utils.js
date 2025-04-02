import dayjs from 'dayjs';
 
const DATE_FORMAT = 'D MMM';
const DAYS_DIVIDER = 1000 * 60 * 60 * 24;
const HOURS_DIVIDER = 1000 * 60 * 60;
const MINUTES_DIVIDER = 1000 * 60;
 
const getRandomInteger = (end, start = 0) => {
    const lower = Math.ceil(Math.min(start, end));
    const upper = Math.floor(Math.max(start, end));
    const res = Math.random() * (upper - lower + 1) + lower;
    
    return Math.floor(res);
};
 
function humanizeDate(dueDate,format = DATE_FORMAT) {
    return dueDate ? dayjs(dueDate).format(format) : '';
}
 
function getDurationTime(start, end){
    end = dayjs(end);
    const duration = end.diff(start);
    const days = Math.floor(duration / DAYS_DIVIDER);
    const hours = Math.floor((duration % DAYS_DIVIDER) / HOURS_DIVIDER);
    const minutes = Math.floor((duration % HOURS_DIVIDER) / MINUTES_DIVIDER);
 
    if(days > 0){
        return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
        } else if(hours > 0){
        return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
    }
    return `${minutes.toString().padStart(2, '0')}M`;
}
 
function capitalizeString(word){
    return word[0].toUpperCase() + word.slice(1);
}
 
function getOfferKeyword(title){
    return title.split(' ').slice(-1);
}
 
export {getRandomInteger, humanizeDate, getDurationTime,capitalizeString,getOfferKeyword};