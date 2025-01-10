import './Header.css';
import recipeImg from '../../assets/recipes.svg';
import veganImg from '../../assets/vegan.svg';

function Header() {
  return (
    <header onClick={() => window.location = window.location.origin + '/recipes'} title={'Vegane Rezeptesammlung'} style={{ cursor: 'pointer' }}>
      <h1><img src={recipeImg} id={'recipeImg'} /> Rezepte (vegan) <img style={{position: 'relative', top: '-12px', left: '-6px'}} width={'32'} src={veganImg}/></h1>
    </header>
  );
}

export default Header;
