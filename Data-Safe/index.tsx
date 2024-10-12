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
      title="Data Safety and Content Removal | Plus IT Business Park"
      description="Discover how Plus IT Business Park prioritizes data safety and manages content removal. Learn about our commitment to protecting your information and ensuring compliance."
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
               PITBP
                <Br />  SAFE DATA PAGE
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
Safe Type is an initiative introduced by Plus IT Business Park (PITBP) aimed at enhancing the safety, security, and transparency of the tech space. The domain pitbp.com, along with the products offered by PITBP, strictly adheres to the Safe Tech Policy. This policy is consistently valid, ensuring the safety and security of the products and services provided by Plus IT Business Park.              </FallInPlace>
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
SAFE TYPE
<Br /> 
        </Heading>
      }
      description={
        <>
         
         <b>
        CONTENT REMOVAL
         </b>
         <br/>
        <br/> 
          <Br />
          Plus IT Business Park (PITBP) unequivocally opposes and does not tolerate actions that violate the moral ethics of society. We categorically disapprove of and do not support hate speech, racism, color-based discrimination, sex-based discrimination, discrimination against certain communities, or any behavior deemed unacceptable. PITBP ensures, to the best of its ability, that its products and services are not misused for any such actions. Any content violating these principles will be promptly addressed and removed at the earliest opportunity. Users are encouraged to reach out to us if they encounter any issues or concerns, as we are committed to investigating and addressing reported issues promptly. Any content on any platform related to Plus IT Business Park found guilty of promoting such actions will be swiftly removed as soon as it is identified.




        <br/>
        <br/> 
        <b>
        ENCRYPTED         </b>
         <br/>
         Encrypted is open for public engagement, particularly for cybersecurity enthusiasts. We believe in continuous updates to enhance the safety and security of our systems. Through the Encrypt Program, individuals with expertise in cybersecurity are welcome to test the security of our domains upon gaining access. To participate in Encrypt, please contact us at we@plusitpark.com. However, attempting penetration testing on systems, disrupting services, and damaging systems without prior authorization is unacceptable and may lead to legal consequences.
        <br/>
    
         <br/>
         <b>
         USERS BELOW AGE OF 13

         </b>
        
        <br/> 
         <br/>Plus IT Business Park places a high value on the data and privacy of children. In alignment with this commitment, products or services provided by Plus IT Business Park do not require users below the age of 13 to register. Furthermore, we are more than willing to accommodate requests for the removal of data belonging to individuals whose age is below 13. Users falling into this category can reach out to us, and we will be pleased to promptly remove their data upon request. Please reach out to us at info@plusitpark.com.


         <br/><br/>
<br/>
<b>Policy Updates:</b> Plus IT Business Park reserves the exclusive right to update the Refund Policy according to its evolving needs. Please note that policies may be updated without prior notice. 
agency
<br/>




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

