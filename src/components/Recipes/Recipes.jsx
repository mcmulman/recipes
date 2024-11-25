import {useState} from "react";
import {RECIPES} from "../../recipe-data";
import TabButton from "../Elements/TabButton/TabButton";
import Recipe from "./Recipe";
import Section from "../Elements/Section";
import Tabs from "../Elements/TabButton/Tabs";

function Recipes() {
  const [activeTab, setActiveTab] = useState('');

  function onTabSelect(tab) {
    setActiveTab(tab);
  }

  return (
    <Section title={''} className={'examples'}>
      <Tabs
        wrapperType={'menu'}
        buttons={RECIPES.map((element, index) => (
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
  );
}

export default Recipes;
