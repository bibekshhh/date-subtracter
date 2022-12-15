const startDate = document.querySelector("#start");
const endDate = document.querySelector("#end");

const currentDate = new Date();

function calcDate(prevDate, newDate) {
    const difference = ((new Date(newDate) - new Date(prevDate)) / 86400000).toFixed(1);
    if (difference < 0) return "start date cannot be a future date"
    return difference
}

startDate.addEventListener('change', (e) => {
    if (endDate.value !== "" && endDate.value !== undefined && new Date(endDate.value) !== currentDate) {
        console.log(calcDate(e.target.value, endDate.value))
    } else if (new Date(e.target.value) <= currentDate && e.target.value > endDate.value) {
        console.log(calcDate(e.target.value, currentDate))
    }
});

endDate.addEventListener('change', (e) => {
    if (startDate.value !== "" && startDate.value !== undefined && new Date(startDate.value) !== currentDate) {
        if (startDate.value <= e.target.value) {
            console.log(calcDate(startDate.value, e.target.value))
        } else console.log("end date cannot be before start date")
    }
    console.log("Please select start date")
});
