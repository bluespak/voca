import dummy from "../db/data.json"
import { useParams } from "react-router-dom"
import Word from "./Word.js"

export default function Day() {
    //   console.log(dummy);
    const day = useParams().day;
    const wordlist = dummy.words.filter(word => word.day === Number(day));
    // day = useParams().day;

    return (
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordlist.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}