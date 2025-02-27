import DOMPurify from 'dompurify';
import EventsSlider from '../../elements/EventsSlider.jsx';
import MainSection from '../../elements/MainSection.jsx';
import AboutSection from '../../elements/AboutSection.jsx';
import Separator from '../../elements/Separator.jsx';
import ProductSection from '../../elements/ProductSection.jsx';
import ClubSection from '../../elements/ClubSection.jsx';
import SubmitSection from '../../elements/SubmitSection.jsx';
import BenefitsSlider from '../../elements/BenefitSlider.jsx';
import MyMap from '../../elements/Map.jsx';
import PhotoSlider from '../../elements/blocks/PhotoSlider.jsx';
import FadeSection from './FadeInSection';
import EventSection from '../../elements/EventSection.jsx';
import FormOfEvents from '../../elements/FormOfEvents.jsx';

function Main() {
  return (
    <div style={{overflowY: "hidden"}}>
      <FadeSection>
        <MainSection />
      </FadeSection>
      <FadeSection>
        <AboutSection />
      </FadeSection>
      <FadeSection>
        <Separator />
      </FadeSection>
      <FadeSection>
        <ProductSection />
      </FadeSection>
      <FadeSection>
        <ClubSection />
      </FadeSection>
      <FadeSection>
        <SubmitSection />
      </FadeSection>
      <FadeSection>
        <BenefitsSlider />
      </FadeSection>
      <FadeSection>
        <MyMap />
      </FadeSection>
      <FadeSection>
        <EventSection/>
      </FadeSection>
      <FadeSection>
        <FormOfEvents/>
      </FadeSection>
      <FadeSection>
        <SubmitSection />
      </FadeSection>
    </div>
  );
}

export default Main;
