type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
    </header>
  );
};
export default Header;
