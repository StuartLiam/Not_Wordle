import Words from "./Words"
export default function WordGenerator() {

    const days = 0;
    const prime = 3001;
    const q = prime*days % Words.length;

    return Words[q].split("");
}