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
      title="Refund Policy | Plus IT Business Park"
      description="Understand our refund policy at Plus IT Business Park. We ensure transparency in transactions and provide clear guidelines for refunds and cancellations."
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
               REFUND
                <Br />  POLICY
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
               The webpage provides comprehensive information about Plus IT Business Park &#39;s Refund Policy, offering a detailed breakdown of the procedure.
              </FallInPlace>
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
          REFUND ELIGIBILITY
          <Br /> 
        </Heading>
      }
      description={
        <>
         
          <Br />
          The section outlines the criteria for refund eligibility concerning 
          products and services And It is noted to be Complete Refund will never be initiated .


        <br/>
        <br/> 
         <br/>

         At Plus IT Business Park, our refund policy allows for refunds on services within 30 days of purchase, provided the services have not been initiated or started. For products, such as software and web products, refunds are subject to the terms specified on the product page or upon delivery. However, certain items are non-refundable, including custom development work that has been initiated or completed, as well as any digital marketing services rendered or time spent on campaigns. The percentage of the refund will be determined by Plus IT Business Park based on the work completed, items purchased, and any other relevant factors. Additionally, delivered items are not eligible for refunds.

        <br/>
        <br/> 
         <br/>
         <b>
         REFUND PROCESS

         </b>
         <br/>
        <br/> 
         <br/>To initiate a refund at Plus IT Business Park, users must submit a refund request through the official support email at support@plusitpark.com within the eligible period. It is crucial to initiate the procedure using the email address previously used for communication; failure to do so may result in the rejection of the refund request. Upon receipt of the request, users will receive an acknowledgment email containing a unique Request ID for tracking purposes. Once approved, the funds will be settled within 15 days or fewer, although a slightly extended timeframe may apply under rare conditions. Please note that the refund amount may be subject to deductions for any completed work or expenses incurred up to the point of the refund request.


         <br/>
         <b>
         <br/>
         EXCEPTIONS FROM OUR SIDE
         </b>
         <br/>
        <br/> 
        In the rare occurrence of exceptional circumstances preventing the timely delivery of a promised service or product, Plus IT Business Park assures users that every effort is made to avoid such situations. However, should these circumstances arise, users have the right to request a refund. The refund process will be initiated, taking into account the activities already undertaken for the project, and users can expect a prompt resolution to address their concerns. While these situations are actively minimized, our commitment to user satisfaction remains paramount. Users can rest assured that any applicable refunds will be processed with due diligence and transparency, prioritizing a fair resolution under exceptional circumstances
        
       
<br/>
<br/>
<b> Contact Information</b> If you have any inquiries or require assistance regarding refunds, please reach out to our support team at support@plusitpark.com. For additional queries about our Privacy Policy, please visit the dedicated Privacy Policy page. It&#39;s important to note that all refund requests will be assessed and processed in accordance with our established policy.
<br/>
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

