function Tabs({children, buttons, wrapperType = 'menu'}) {

  // Define the container type and generate a component based on the wrapperType prop
  const DynamicContainer = wrapperType;

  return (
    <>
      <DynamicContainer>
        {buttons}
      </DynamicContainer>
      {children}
    </>
  );
}

export default Tabs;
