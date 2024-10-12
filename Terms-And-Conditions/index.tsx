import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiPenTool,
  FiAperture ,
  FiHeart ,
  FiUsers,
  FiSun,
  FiTool,
  FiSettings,
  FiGlobe ,
  FiTerminal,
  FiThumbsUp,
  FiCoffee,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const CareerPage: NextPage = () => {
  return (
    <Box>
   <SEO
      title="Terms and Conditions | Plus IT Business Park"
      description="Review the terms and conditions governing the use of services at Plus IT Business Park. Understand your rights and responsibilities as a user."
/>



      <Box>
        <HeroSection />

        <FeaturesSection />

      
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 50 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
               TERMS
                <Br />  AND CONDITIONS
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
The page details the agreement between the user (“User”) and Plus IT Business Park (“Plus IT Park,” “we,” “us,” or “our”). It outlines the terms and conditions that govern the use of any services provided by Plus IT Park, which include but are not limited to our website, applications, products, and related services collectively referred to as the “Services.” By accessing or using these Services, the User agrees to be bound by the terms and conditions set forth in this Agreement.          </FallInPlace>
            }
          >
            
          </Hero>
       
        </Stack>
      </Container>
    </Box>
  );
};



const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
TERMS AND CONDITIONS | PITBP
<Br /> 
        </Heading>
      }
      description={
        <>
         
         <b>
         USER&#39;S ACCEPTANCE OF TERMS
         </b>
         <br/>
        <br/> 
          <Br />
          When you use our services, it indicates that you have taken the time to read, comprehend, and willingly commit to adhering to the terms and conditions as detailed in this Agreement. If, for any reason, you find yourself in disagreement with any aspect of these terms, we kindly request that you refrain from using our services. We value your autonomy and understand that agreements may not suit everyone. Therefore, if you do not agree with the terms outlined in this Agreement, we respect your decision. You are free to exit the page or discontinue the use of our products and services at any time. We appreciate your understanding and thank you for considering our terms. If you have any questions or concerns, we encourage you to reach out to us at info@plusitpark.com. We are here to assist you and address any inquiries you may have. Your feedback is important to us, and we appreciate the opportunity to provide assistance and clarification on any matters related to our services.




        <br/>
        <br/> 
        <b>
        BINDING AGREEMENT      </b>
         <br/>
         This Agreement serves as a legally binding contract between you, the User, and Plus IT Business Park. By accessing or using our services, you confirm that you are of legal age and possess the legal capacity to enter into such agreements. If you are utilizing our services on behalf of an organization, you assert and guarantee that you have the proper authority to legally bind that organization to the terms outlined in this Agreement. In essence, this statement ensures that all parties involved have the legal standing and authority necessary to engage in the contractual obligations set forth within this Agreement.

<br/>
    
         <br/>
         <b>
         RIGHT TO MODIFY


         </b>
        
        <br/> 
         <br/>Plus IT Business Park reserves the right to adjust, modify, or update the terms and conditions as needed. Any alterations will become effective immediately upon being posted on our website. It is the User&#39;s responsibility to regularly check and review these terms to stay informed about any changes. This ensures that Users understand the most recent terms governing their use of Plus IT Business Park’s services. Regularly reviewing the terms helps Users remain informed and compliant with the latest conditions associated with their interactions on the company&#39;s website.


         <br/><br/>



         <b>
         GENERAL GUIDELINES

         </b>
        
        <br/> 
         <br/>By accessing and navigating our website, we assume that you agree to abide by the terms and conditions outlined on this page. If you disagree with any of these terms, we kindly request that you refrain from using Plus IT Business Park&#39;s website. In the context of these Terms and Conditions, Privacy Statement, and Disclaimer Notice, the following definitions apply:  Client, You, and Your refer to the individual accessing this website and agreeing to comply with the Company&#39;s terms. The Company, We, Our, and Us refer to Plus IT Business Park. Party, Parties, or Us collectively refer to both the Client and Plus IT Business Park. Terms like Client, You, and Your apply in singular and plural forms, and terms are used interchangeably to refer to the same entity. The mention of offer, acceptance, and consideration of payment necessary to undertake our assistance underscores the contractual relationship aimed at meeting the Client&#39;s needs regarding the services provided by Plus IT Business Park.


         <br/><br/>

         <b>
         COOKIES AND SESSIONS

         </b>
        
        <br/> 
         <br/>At Plus IT Business Park, we utilize cookies and sessions to enhance your experience on our website and provide personalized services tailored to your preferences. Cookies, small text files stored on your device, help track and analyze your preferences, enabling us to better understand your needs and improve our services. Sessions are also used to maintain your logged-in status and store temporary information, ensuring a seamless and secure browsing experience. By continuing to use our website, you consent to the use of cookies and sessions in accordance with our privacy policy. For a deeper understanding of how we handle and protect your data, please review our Privacy Statement. If you have any questions or concerns about the use of cookies and sessions, we encourage you to consult our Terms and Conditions or contact us for further assistance. At Plus IT Business Park, safeguarding your privacy and ensuring your satisfaction are our top priorities.


         <br/><br/>





         <b>
         ENCOURAGE USERS TO REFRAIN FROM


         </b>
        
        <br/> 
         <br/>At Plus IT Business Park, we prioritize responsible engagement within our community, encouraging users to interact on our platform in a way that fosters respect and positivity. We are committed to maintaining ethical standards and expect our users to uphold these values, ensuring a secure and constructive environment for all. Our platform is designed to benefit everyone, and by promoting responsible use, we aim to create a space where all users can fully experience our services in a safe manner.


         <br/><br/>
         <b>Terms of Use:</b>
         o preserve the integrity and functionality of the website, certain activities are strictly prohibited. Users are not permitted to copy or reproduce any content without explicit permission, nor should they use the content or services for commercial purposes like selling or renting. Any attempt to gain unauthorized access to restricted parts of the website or misuse information obtained through the platform is considered a violation. Additionally, impersonating others, providing false information, or engaging in harmful actions that impair the website’s functionality is forbidden.
         <br/><br/>
         Lastly, users must comply with all applicable laws and regulations while using the website, ensuring they respect intellectual property rights and refrain from disrupting the website&#39;s normal operations. Malicious activities, including the introduction of harmful software or false information during registration, are strictly prohibited to maintain a safe and lawful environment.
         <br/><br/>





<b>
DISCLAIMER


</b>

<br/>
<br/>
The content presented on this website is intended for general informational purposes only.
While our aim is to maintain the information’s currency and accuracy, we do not provide any
assurances or warranties, whether express or implied, regarding the completeness, accuracy,
reliability, suitability, or availability of the website or the information, products, services,
or related graphics contained on the website for any purpose. Therefore, any reliance you
place on such information is entirely at your own risk.
<br></br>
<br></br>
This website may include links to other websites over which we have no control. We lack
authority over the nature, content, and availability of those sites. The inclusion of any links
on our website does not imply endorsement or control on our part. Users are advised to
exercise caution and discretion when navigating to external websites, as we do not assume
responsibility for their content.

<br/><br/>





<b>
THIRD-PARTY LINKS


</b>

<br/>
<br/>
Plus IT Business Park may provide links to third-party websites for your convenience and informational purposes. However, we do not endorse, control, or assume responsibility for the content, privacy practices, or potential risks associated with these external sites. Accessing any third-party links is at your own risk, and we recommend reviewing their terms and privacy policies, as they may differ from ours. While we strive to ensure that all links lead to reputable sources, we cannot guarantee the accuracy or reliability of the content on external sites. If you have concerns about any link, please contact us at info@plusitpark.com, and we will address the issue. Your trust is important to us, and we urge you to exercise caution when navigating external sites through our platform.

<br/><br/>





<b>
UPDATES AND MODIFICATIONS



</b>

<br/>
<br/>
Plus IT Business Park reserves the right to update and modify these Terms and Conditions at its discretion. Users are encouraged to review this page periodically, as continued use of the website after updates or modifications signifies acceptance of the changes. While we aim for transparency, it is the user&#39;s responsibility to stay informed about the latest version of the Terms and Conditions. We strive to notify users of significant changes, but for any concerns or clarifications, please contact us at info@plusitpark.com. By using the website, you agree to the most recent version of these terms.



        </>


      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
       
        
      ]}
    />
  );
};





export default CareerPage;

