
import React, { useState } from "react";
import Nav from './components/Nav/index';
import About from './components/About/index';
import Gallery from './components/Gallery';
import ContactForm from "./components/Contact";

function App() {
  // initializing the category state as an array of a few objects (lifted state to app.js)
const [categories] = useState([
  {
      name: "commercial", 
      description:"Photos of grocery stores, food trucks, and other commercial projects",
  },
  {    name: "portraits", description: "Portraits of people in my life" },
  {    name: "food", description: "Delicious delicacies" },
  {    name:"landscape", description: "Fields, farmhouses, waterfalls, and the beuty of nature",},
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);
//we set the initial value of contactSelected to false. This is to prevent the contact form from showing when a user initially navigates to the homepage. The Gallery will display instead
const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
       </>
     ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
