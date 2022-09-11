export default function Paginator(){
    return(
        <>
        <div className="page-browse my-5 d-flex justify-content-center">
            <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item">
                <a href="/" className="page-link">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="/">1</a></li>
                <li className="page-item active" aria-current="page">
                <a className="page-link" href="/">2 <span className="visually-hidden">(current)</span></a>
                </li>
                <li className="page-item"><a className="page-link" href="/">3</a></li>
                <li className="page-item">
                <a className="page-link" href="/">Next</a>
                </li>
            </ul>
            </nav>
        </div>
        </>
    )
}