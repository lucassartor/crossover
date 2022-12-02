import "./styles.css";

function SidebarLink({ text, icon, setActivePage }) {
    return(
        <div className="link" onClick={() => setActivePage(text)}>
            <div className="icon">
                {icon}
            </div>
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarLink;
