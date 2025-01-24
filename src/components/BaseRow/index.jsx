import "./styles.css";

function BaseRow({ id,children }) {
    return (
        <div id={id} className="julios-base_row">
            {children}
        </div>
    );
}

export default BaseRow;
