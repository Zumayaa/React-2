function Content({ link, title, paragraph }) {
    return (
        <div className="content">
            <img className="image" src={link} alt="" />
            <h1 className="product-title">{title}</h1>
            <p>{paragraph}</p>
        </div>
    );
}

export default Content;