import { FC, useState } from "react";
import { Star } from "./Star";

interface ICount {
    count: number
}

export const Stars: FC<ICount> = ({count}):JSX.Element => {
    const [countStars, setCountStars] = useState<number>(count)

    const handelClickPlus = () => {
        setCountStars(countStars + 1)
    }

    const handelClickMinus = () => {
        setCountStars(countStars - 1)
    }

    function handelCountStar(count:number): JSX.Element[] {
        const listStar = [...Array(count)].map((_, i) => i)
        return listStar.map((i) => <Star key={i} fill="#D3BCA2"/>)
    } 

    return (
        <>
            {(count > 0 && count <= 5) &&
                <ul className="card-body-stars u-clearfix">
                    {handelCountStar(countStars)}
                    {countStars ? <button className="button" onClick={handelClickMinus}>-</button> : ''}
                    {countStars < 5 ? <button className="button" onClick={handelClickPlus}>+</button> : ''}
                </ul>
            }
        </>
    )
}