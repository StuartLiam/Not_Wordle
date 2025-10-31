import Words from "./Words"
export default function WordGenerator() {

    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    const startMilli = new Date("October 31, 2025").valueOf();
    const currentMilli = Date.now();

    const days = Math.floor((currentMilli-startMilli)/millisecondsPerDay);
    const prime = 3001;
    const q = prime*days % Words.length;

    return Words[q].split("");
}