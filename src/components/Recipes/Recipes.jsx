import {useState} from "react";
import {RECIPES} from "../../recipe-data";
import TabButton from "../Elements/TabButton/TabButton";
import Recipe from "./Recipe";
import Section from "../Elements/Section";
import Tabs from "../Elements/TabButton/Tabs";
import offImg from '../../assets/off.svg';
import onImg from '../../assets/on.svg';

function Recipes() {
  const [activeTab, setActiveTab] = useState('');
  const [filteredSearch, setFilteredSearch] = useState(RECIPES);
  const [showTabs, setShowTabs] = useState(true);

  function onTabSelect(tab) {
    setActiveTab(tab);
  }

  function handleSearch(e) {
    const type = e.target.name === 'searchDesc' ? 'description' : 'title';
    setShowTabs(true);
    setFilteredSearch(RECIPES.filter(recipe => recipe[type].toLowerCase().includes(event.target.value.toLowerCase())));
  }

  function handleReload() {
    setFilteredSearch(RECIPES);
    setShowTabs(true);
    document.getElementById('searchTitle').value = '';
    document.getElementById('searchDescription').value = '';
  }

  function toggleMenu() {
    !!activeTab && setShowTabs(!showTabs);
  }

  return (
    <>
      <Section>
        <div id="searchForm">
          <input id="searchTitle" name="searchTitle" placeholder='Im Titel suchen' onChange={handleSearch}/>
          <input id="searchDesc" name="searchDesc" placeholder='Im Text suchen' onChange={handleSearch}/>
          <button id="searchReset" onClick={handleReload}>⟳</button>
        </div>
      </Section>
      <p style={{textAlign: 'center'}}><strong>{filteredSearch.length} / {RECIPES.length}</strong></p>
      <p id={'toggleMenu'} onClick={toggleMenu}>
        <img src={offImg} className={showTabs ? 'show' : 'hide'} width={'60'} />
        <img src={onImg} className={showTabs ? 'hide' : 'show'} width={'60'} /> Navi</p>
      <Section title={''} className={showTabs ? 'examples' : 'examples hide-tabs'}>
        <Tabs
          wrapperType={'menu'}
          buttons={filteredSearch.map((element, index) => (
            <TabButton key={index - 1} onTabSelect={() => onTabSelect(element.id)}
                       active={activeTab === element.id}>{element.title}</TabButton>
          ))}
        >
          {activeTab && (
            <div className={'tab-content'}>
              <Recipe {...RECIPES[activeTab - 1]} />
            </div>
          )}
        </Tabs>
      </Section>
    </>
  );
}

export default Recipes;
