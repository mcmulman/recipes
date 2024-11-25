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
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'}}>
            <label htmlFor='search'>Search in title:&nbsp;
            </label><input name="searchTitle" placeholder='Search in title' onChange={handleSearch}/>
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'}}>
            <label htmlFor='searchDesc'>Search in description:&nbsp;</label>
            <input name="searchDesc" placeholder='Search in description' onChange={handleSearch}/>
          </div>
        </div>
      </Section>

      <Section title={''} className={'examples'}>
        <Tabs
          wrapperType={'menu'}
          buttons={filteredSearch.map((element, index) => (
            <TabButton key={index-1} onTabSelect={() => onTabSelect(element.id)} active={activeTab === element.id}>{element.title}</TabButton>
          ))}
        >
          {!activeTab && <p>Select a tab to view the Recipe</p>}
          {activeTab && (
            <div className={'tab-content'}>
              <Recipe {...RECIPES[activeTab-1]} />
            </div>
          )}
        </Tabs>
      </Section>
    </>
  );
}

export default Recipes;
