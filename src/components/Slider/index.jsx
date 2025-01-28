import "./styles.css";

function Slider({ title, onChange, min, max, value, footerText }) {
    return (
        <div className="slider-container">
            <div className="slider-title">{title}</div>
            <input type="range"
                onChange={onChange}
                min={min}
                max={max}
                value={value}>
            </input>
            <div className="slider-footer">{footerText}</div>
        </div>
    );
}

export default Slider;
