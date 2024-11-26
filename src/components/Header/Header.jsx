import './Header.css';
import recipeImg from '../../assets/recipes.svg';

function Header() {
  return (
    <header>
      <h1><img src={recipeImg}  /> Rezepte</h1>
    </header>
  );
}

export default Header;
