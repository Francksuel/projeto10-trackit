import Days from "../common/Days";

export default function Weekday({ isDisabled, index, weekday, days, setDays }) {
    function selectDay(index) {
        if (!isDisabled) {
            if (days.includes(index)) {
                const newArray = days.filter((id) => (id !== index));
                setDays(newArray);
            } else {
                const newArray = [...days, index];
                setDays(newArray);
            }
        }
    }

    return (
        <Days days={days} index={index} pointer onClick={() => selectDay(index)}>{weekday}</Days>
    )
}