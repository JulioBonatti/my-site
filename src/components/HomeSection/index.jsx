import "./styles.css";

function HomeSection({ title, subtitle }) {
    return (
        <div className="julios-home-container">
            <div className="home-bg-image" />
            <div className="home-text-contaier">
                <div className="julios-home-text" >{title}</div>
                <div className="julios-home-sibtitle">{subtitle}</div>
            </div>
        </div>
    );
}

export default HomeSection;
