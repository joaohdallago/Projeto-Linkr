import { useEffect, useState } from "react";
import { getTrending } from "../../service/linkr";
import { Line, Trends } from "./TrendingStyle";

export default function Trending() {

    const userData = JSON.parse(sessionStorage.getItem("user"));
    const { token } = userData;

    const [list, setList] = useState([])

    useEffect(() => {
        getTrending(token).then((res) => setList([...list, res.data]))
    }, [])
    console.log(list)
    return (
        <Trends>
            <h3>trending</h3>
            <Line />
            <h4><strong># javascript</strong></h4>
            <h4><strong># react</strong></h4>
            <h4><strong># react-native</strong></h4>
            <h4><strong># material</strong></h4>
            <h4><strong># web-dev</strong></h4>
            <h4><strong># mobile</strong></h4>
            <h4><strong># mobile</strong></h4>
            <h4><strong># css</strong></h4>
        </Trends>
    );
}