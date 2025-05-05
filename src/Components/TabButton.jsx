function TabButton({ label, onSelect, isClicked }) {
  return (
    <>
      <li>
        <button className={isClicked ? "active" : undefined} onClick={onSelect}>
          {label}
        </button>
      </li>
    </>
  );
}

export default TabButton;
