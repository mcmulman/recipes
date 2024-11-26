import {useState} from "react";
import {RECIPES} from "../../recipe-data";
import TabButton from "../Elements/TabButton/TabButton";
import Recipe from "./Recipe";
import Section from "../Elements/Section";
import Tabs from "../Elements/TabButton/Tabs";

function Recipes() {
  const [activeTab, setActiveTab] = useState('');
  const [filteredSearch, setFilteredSearch] = useState(RECIPES);

  function onTabSelect(tab) {
    setActiveTab(tab);
  }

  function handleSearch(e) {
    const type = e.target.name === 'searchDesc' ? 'description' : 'title';
    setFilteredSearch(RECIPES.filter(recipe => recipe[type].toLowerCase().includes(event.target.value.toLowerCase())));
  }

  function handleReload() {
    setFilteredSearch(RECIPES);
    document.getElementById('searchTitle').value = '';
    document.getElementById('searchDescription').value = '';
  }

  return (
    <>
      <Section>
        <div id="searchForm">
          <input id="searchTitle" name="searchTitle" placeholder='Im Titel suchen' onChange={handleSearch}/>
          <input id="searchDesc" name="searchDesc" placeholder='Im Text suchen' onChange={handleSearch}/>
          <button id="searchReset" style={{fontSize: '2em'}} onClick={handleReload}>⟳</button>
        </div>
      </Section>
      <p style={{textAlign: 'center'}}><strong>{filteredSearch.length} / {RECIPES.length}</strong></p>
      <Section title={''} className={'examples'}>
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
