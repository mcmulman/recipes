import {useEffect, useState} from "react";
import {RECIPES} from "../../recipe-data";
import TabButton from "../Elements/TabButton/TabButton";
import Recipe from "./Recipe";
import Section from "../Elements/Section";
import Tabs from "../Elements/TabButton/Tabs";
import offImg from '../../assets/off.svg';
import onImg from '../../assets/on.svg';
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";

function Recipes() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('');
  const [filteredSearch, setFilteredSearch] = useState(RECIPES);
  const [showTabs, setShowTabs] = useState(true);
  const amount = RECIPES.length;

  const [search, setSearch] = useSearchParams();

  function onTabSelect(tab) {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({ id: tab.toString() }).toString()
    });
    //setSearch({ id: tab.toString() });
  }

  function resetSearch() {
    setFilteredSearch(RECIPES);
    document.getElementById('searchTitle').value = '';
    document.getElementById('searchDesc').value = '';
  }

  function handleSearch(e) {
    const type = e.target.name === 'searchDesc' ? 'description' : 'title';
    setShowTabs(true);
    setFilteredSearch(RECIPES.filter(recipe => recipe[type].toLowerCase().includes(event.target.value.toLowerCase())));
  }

  function handleReload() {
    setShowTabs(true);
    resetSearch();
  }

  function toggleMenu() {
    !!activeTab && setShowTabs(!showTabs);
  }

  // Add navigation functions
  function navigateNext() {
    resetSearch();

    const currentId = parseInt(activeTab);
    const nextId = currentId < amount ? currentId + 1 : 1;
    onTabSelect(nextId);
  }

  function navigatePrevious() {
    resetSearch();

    const currentId = parseInt(activeTab);
    const previousId = currentId > 1 ? currentId - 1 : amount;
    onTabSelect(previousId);
  }

  useEffect(() => {
    const recipeId = search.has('id') ? parseInt(search.get('id')) : 0;

    if (recipeId && recipeId <= amount) {
      setActiveTab(recipeId);
      setShowTabs(false);
    }
  }, [search]);

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
            <>
              <div className="navigation-buttons">
                <button
                  onClick={navigatePrevious}
                  className="navigation-button"
                >« Previous</button>
                <button
                  onClick={navigateNext}
                  className="navigation-button"
                >Next »</button>
              </div>
              <div className={'tab-content'}>
                <Recipe {...RECIPES[activeTab - 1]} />
              </div>
              <div className="navigation-buttons">
                <button
                  onClick={navigatePrevious}
                  className="navigation-button"
                >« Previous</button>
                <button
                  onClick={navigateNext}
                  className="navigation-button"
                >Next »</button>
              </div>
            </>
          )}
        </Tabs>
      </Section>
    </>
  );
}

export default Recipes;
