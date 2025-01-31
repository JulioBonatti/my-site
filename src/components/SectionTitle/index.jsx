import "./styles.css";

function SectionTitle({ style, title }) {
    return (
            <div className="julios-section-title-container">
                <div className="julios-section-title" style={{ style }}>{title}</div>
            </div>
    );
}

export default SectionTitle;
