import { format } from "date-fns";

/**
 * 
 * @param {String} str date with str
 * @param {String} type - 'yyyy.mm.dd'
 * @returns formated_date
 */
export function formatDate(str, type){
    const date = new Date(str);
    return format(date, type);
}