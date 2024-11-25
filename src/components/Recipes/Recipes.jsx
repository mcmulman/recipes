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

  return (
    <>
      <Section>
        <div style={{display: 'flex', justifyContent: 'center', gap: '24px'}}>
          <input name="searchTitle" placeholder='Im Titel suchen' onChange={handleSearch}/>
          <input name="searchDesc" placeholder='Im Text suchen' onChange={handleSearch}/>
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
