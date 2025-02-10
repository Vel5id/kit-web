import DOMPurify from 'dompurify';
import Header from './elements/Header.jsx';
import Section from './elements/Section.jsx';
import Section2 from './elements/Section2.jsx';
import SectionFormBenefit from './elements/SectionFormBenefit.jsx';
import MapComponent from './elements/MapComponent.jsx';

import logo from './logo.svg';
import './App.css';
import EventsSlider from './elements/EventsSlider.jsx';


function App() {
  return (
    <>
      <Header />
      <Section />
      <Section2 />
      <SectionFormBenefit />
      <MapComponent />
      <EventsSlider />

      {/* Другие компоненты приложения */}
    </>
  );
}

export default App;
