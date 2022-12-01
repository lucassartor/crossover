import "./styles.css";

function SidebarLink({ text, icon }) {
    return(
        <div className="link">
            <div className="icon">
                {icon}
            </div>
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarLink;
