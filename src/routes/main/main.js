import DOMPurify from 'dompurify';
import Section from '../../elements/Section.jsx';
import Section2 from '../../elements/Section2.jsx';
import SectionFormBenefit from '../../elements/SectionFormBenefit.jsx';
import MapComponent from '../../elements/MapComponent.jsx';
import EventsSlider from '../../elements/EventsSlider.jsx';
import MainSection from '../../elements/MainSection.jsx';

function Main() {
  return (
    <>
      <MainSection />
      <Section />
      <Section2 />
      <SectionFormBenefit />
      <MapComponent />
      <EventsSlider />
    </>
  );
}

export default Main;
