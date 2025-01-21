
const DateFomatter = ({ time }) => {
    const Months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (!time) {
        return 'Unknown';
    }
    const newTime = time?.split("T")[0];
    const date = newTime.split("-")[2];
    const month = newTime.split("-")[1];
    const year = newTime.split("-")[0]
    return `${date} ${Months[month - 1]} ${year}`
}

export default DateFomatter