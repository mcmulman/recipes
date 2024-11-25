import './TabButton.css';

function TabButton({children, onTabSelect, active}) {
  function clickHandler(id) {
    onTabSelect(id);
  }

  const className = active ? 'active' : '';

  return (
    <li>
      <button className={className} onClick={clickHandler}>{children}</button>
    </li>
  );
}

export default TabButton;
