import CardOne from "./CardOne";

function CardData({ ourData }) {
    console.log(ourData);
    const rows = [];
    const usersPerRow = 3;

    for (let i = 0; i < ourData.length; i += usersPerRow) {
        const rowClass = i % (usersPerRow * 2) === 0 ? "row-first" : "row-second";
        rows.push(
            <div className={`reviews-row ${rowClass}`} key={i}>
                {ourData.slice(i, i + usersPerRow).map((user) => (
                    <CardOne user={user} key={user.id} />
                ))}
            </div>
        );
    }

    return (
        <section className="reviews">
            <div>
                {rows}
            </div>
        </section>
    );
}

export default CardData