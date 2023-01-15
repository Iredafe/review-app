function Header({ text }) {
  return (
    <header>
      <div className='container'>
        <h2>Review App UI</h2>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;
