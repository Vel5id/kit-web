import DOMPurify from 'dompurify';
import EventsSlider from '../../elements/EventsSlider.jsx';
import MainSection from '../../elements/MainSection.jsx';
import About_section from '../../elements/About_section.jsx';
import Separator from '../../elements/Separator.jsx';
import Product_section from '../../elements/Product_section.jsx';
import Club_section from '../../elements/Club_section.jsx';
import SubmitSection from '../../elements/SubmitSection.jsx';
import BenefitsSlider from '../../elements/BenefitSlider.jsx';
import MyMap from '../../elements/Map.jsx';
import PhotoSlider from '../../elements/blocks/PhotoSlider.jsx';

function Main() {
  return (
    <div>
      <MainSection />
      <About_section/>
      <Separator/>
      <Product_section/>
      <Club_section/>
      <SubmitSection/>
      <BenefitsSlider/>
      <MyMap/>
      <PhotoSlider/>
      <EventsSlider />
    </div>
  );
}

export default Main;
