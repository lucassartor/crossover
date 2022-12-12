import "./styles.scss";

function SidebarLink({ text, icon, setActivePage }) {
  return (
    <div className="link py-2" onClick={() => setActivePage(text)}>
      <div className="icon">{icon}</div>
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarLink;
