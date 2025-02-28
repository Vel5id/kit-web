// import DOMPurify from 'dompurify'; На будущее для защиты данных
import MainSection from "../../elements/MainSection/MainSection"
import AboutSection from "../../elements/AboutSection/AboutSection"
import Separator from "../../elements/KIT_Separator/Separator"
import ProductSection from "../../elements/ProductSection/ProductSection"
import ClubSection from "../../elements/ClubSection/ClubSection"

import SubmitSection from "../../elements/SubmitSection/SubmitSection"
import SubmitSection2 from "../../elements/SubmitSection/SubmitSection2"

import BenefitsSlider from "../../elements/BenefitsSlider/BenefitSlider"
import CaseSlider from "../../elements/CaseSection/CaseSlider"
import FeedbackSlider from "../../elements/FeedbaskSection/FeedbackSlider"

import MyMap from "../../elements/MapSection/Map"
import EventSection from "../../elements/EventSection/EventSection"
import FormOfEvents from "../../elements/FormOfEvents/FormOfEvents"
import FadeSection from "./FadeInSection"

function Main() {
  return (
    <div style={{overflowY: "hidden"}}>
      <FadeSection>
        <MainSection/>
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
        <SubmitSection2 />
      </FadeSection>
      <FadeSection>
        <CaseSlider />
      </FadeSection>
      <FadeSection>
        <FeedbackSlider />
      </FadeSection>
      <FadeSection>
        <SubmitSection2 />
      </FadeSection>
    </div>
  );
}

export default Main;
