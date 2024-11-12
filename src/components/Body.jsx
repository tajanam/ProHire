
const Body = ({ obrazacRef }) => {
    const onClick = (e) => {
        e.preventDefault();
        obrazacRef.current.scrollIntoView({behavior: "smooth"});
    };

    return <div className="container">
        <span className="intro">
            <h2 id="posao">Administrator</h2>
            <p>Quos, itaque culpa pariatur vero facere voluptas odio quia quis qui magni, voluptatibus cumque quisquam! Iusto veniam id culpa accusantium nihil itaque?</p>
            <p>Quos, itaque culpa pariatur vero facere voluptas odio quia quis qui magni, voluptatibus cumque quisquam! Iusto veniam id culpa accusantium nihil itaque?</p>
            <button onClick={onClick} className="prijava">PRIJAVI SE</button>
        </span>
    </div>
}

export default Body;