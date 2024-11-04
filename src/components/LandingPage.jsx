import "../css/style.css";
import Header from "./Header";
import Body from "./Body";
import Obrazac from "./Obrazac";
import { useRef } from "react";

export default function LandingPage() {
    const obrazacRef = useRef(null);
   
    return <div>
        <Header />
        <Body obrazacRef={obrazacRef} />
        <Obrazac ref={obrazacRef} />
    </div>;
}