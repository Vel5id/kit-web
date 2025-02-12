import DOMPurify from 'dompurify';
import Section from '../../elements/Section.jsx';
import Section2 from '../../elements/Section2.jsx';
import SectionFormBenefit from '../../elements/SectionFormBenefit.jsx';
import MapComponent from '../../elements/MapComponent.jsx';
import EventsSlider from '../../elements/EventsSlider.jsx';
import MainSection from '../../elements/MainSection.jsx';
import About_section from '../../elements/About_section.jsx';
import Separator from '../../elements/Separator.jsx';

function Main() {
  return (
    <>
      <MainSection />
      <About_section/>
      <Separator/>
      <Section2 />
      <SectionFormBenefit />
      <MapComponent />
      <EventsSlider />
    </>
  );
}

export default Main;
