import './Header.css';
import recipeImg from '../../assets/recipes.svg';
import veganImg from '../../assets/vegan.svg';

function Header() {
  return (
    <header>
      <h1><img src={recipeImg} id={'recipeImg'} /> Rezepte <img style={{position: 'relative', top: '-12px', left: '-6px'}} width={'32'} src={veganImg}/></h1>
    </header>
  );
}

export default Header;
