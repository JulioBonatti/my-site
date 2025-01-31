import "./styles.css";

function SectionTitle({ style, children }) {
    return (
            <div className="julios-section-title-container">
                <div className="julios-section-title" style={{ style }}>{children}</div>
            </div>
    );
}

export default SectionTitle;
