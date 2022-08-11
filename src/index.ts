const MILLISECONDS_TO_SECONDS = 1000;
const SECONDS_TO_MINUTES = 60;
const MINUTES_TO_DAYS = 60;
const DAYS = 24;

export default function daysToXmas(date: Date) {
  const referenceDate = new Date("Dec 25, 2021");
  const millisecondDifference: number =
    referenceDate.valueOf() - date.valueOf();

  const millisecondsToDays =
    millisecondDifference /
    MILLISECONDS_TO_SECONDS /
    SECONDS_TO_MINUTES /
    MINUTES_TO_DAYS /
    DAYS;

  return Math.ceil(millisecondsToDays);
}
