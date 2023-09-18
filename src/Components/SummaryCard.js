import '../Styles/summaryCard.css';

export default function SummaryCard (props) {
    const {_id, image, title} =props
    const imagePath = `http://localhost:5000/uploads/${image}`;

    return (
        <div key={_id} className="summary-card">
            <div className="category-items">
                <img id="category-img" src={imagePath} alt={title}/>
                <p id="category-p">{title}</p>
                <button onClick={props.onHandleClick}>Read more...</button>
            </div>
        </div>
    )
}