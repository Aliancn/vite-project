export const getTimePeriod= ()=> {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 12) {
        return "早上";
    } else if (hours >= 12 && hours < 18) {
        return "中午";
    } else if (hours >= 18 && hours < 24) {
        return "晚上";
    } else {
        return "凌晨";
    }
}



