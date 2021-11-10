import './Header.scss';

interface IProps {
  title: string;
}

const Header = (props: IProps) => {
  const { title } = props;

  return (
        <header className="todos-header">
            {title}
        </header>
  );
};

export default Header;