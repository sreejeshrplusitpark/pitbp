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
        title="Mobile App Development | PITBP"
        description="Free SaaS landingspage starter kit"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                 Not Just an App
                <Br /> A User Experience
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                We believe in creating more than just applications; we craft immersive user experiences that resonate with your audience. 
                Our approach goes beyond basic functionality to ensure every interaction is seamless, intuitive, and engaging. 
               
              </FallInPlace>
            }
          >
            
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >  
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Why PITBP ? ">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
          At Plus IT Business Park Thrissur (PITBP), we are committed to driving your business towards excellence with a comprehensive suite of technology solutions.
           Our services are tailored to meet the unique needs of modern businesses, combining innovation, scalability, and security. From web and app development to cloud infrastructure and digital marketing, 
           we ensure that your brand thrives in the digital space. With a dedicated team of experts and cutting-edge technology, PITBP offers the support and expertise needed to propel your business forward in today’s competitive market.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="We Love to ">
        <Text color="muted" fontSize="lg">
        We love turning ideas into reality through innovative technology. 
        We create seamless web and mobile apps, boost businesses with tailored digital marketing and SEO, and build secure, scalable cloud infrastructures. 
        Our passion lies in solving challenges and helping businesses thrive in the digital world.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Empowering User-Centric Design "
        description="for Lasting Engagement "
        avatar="/static/images/mobile.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        With a focus on user-centric design, we prioritize understanding your target audience's needs and preferences, enabling us to deliver apps that not only meet expectations but exceed them. From smooth navigation to visually appealing interfaces, our goal is to transform your vision into a powerful mobile experience that captivates users and fosters lasting connections.
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Innovation and Comprehensive Solutions:"
      >
        <Text color="muted" fontSize="lg">
      
        <br/>
        At Plus IT Business Park, we are passionate about leveraging the latest technologies to deliver a comprehensive suite of services tailored to meet your digital needs. 
        Our team of experts is dedicated to staying ahead of industry trends, ensuring that your business benefits from cutting-edge web and app development, effective digital marketing strategies, and reliable cloud solutions. By integrating these services, 
        we create a seamless experience that boosts engagement, drives conversions, and fosters long-term success for your brand. Experience the difference with our innovative approach to your business growth!
        </Text>
        
      </HighlightsItem>
    </Highlights>
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
          Why US ?
          <Br /> 
        </Heading>
      }
      description={
        <>
         
          <Br />
          When it comes to mobile development, choosing PITBP means partnering with a dedicated team committed to transforming your ideas into impactful applications. 
          Our extensive industry experience allows us to grasp the intricacies of mobile technology and user behavior, ensuring that every app we create aligns perfectly with your unique vision and objectives. We prioritize user-centric design, crafting intuitive interfaces that enhance user engagement and satisfaction.
           Our agile development process guarantees timely delivery while providing the flexibility to adapt to evolving requirements. With a strong commitment to quality, security, and ongoing support, we not only build apps that meet your needs but also empower your brand to thrive in the competitive mobile landscape.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Custom App Development  ",
          icon: FiTerminal ,
          description:
            "Tailored applications that align with your unique business goals and vision.",
          variant: "inline",
        },
        {
          title: "Cross-Platform Solutions",
          icon: FiTerminal,
          description:
            "Develop apps that work seamlessly across multiple platforms, including iOS and Android.",
          variant: "inline",
        },
        {
          title: "Agile Development Process ",
          icon: FiTerminal ,
          description:
            "Flexible development methodology that allows for quick iterations and adaptations.",
          variant: "inline",
        },
        {
          title: "Performance Optimization ",
          icon: FiTerminal,
          description:
            "Ongoing optimization of app speed and responsiveness for an enhanced user experience.",
          variant: "inline",
        },
        {
          title: "App Store Submission Support",
          icon: FiTerminal,
          description:"Guidance and assistance in the submission process to various app stores for a smooth launch.",
          variant: "inline",
        },
        {
          title: "Maintenance and Updates",
          icon: FiTerminal,
          description:
            "Ongoing support and regular updates to keep your app performing at its best.",
          variant: "inline",
        },
        {
          title: "Subscription Management ",
          icon: FiTerminal,
          description:
            "Develop systems for managing user subscriptions and recurring payments effortlessly.",
          variant: "inline",
        },
        {
          title: "Custom Dashboards ",
          icon: FiTerminal,
          description:
            "Create personalized dashboards for users to easily access and manage their preferences.",
          variant: "inline",
        },
        {
          title: "Innovative Technologies",
          icon: FiTerminal,
          description:
            "Utilization of the latest technologies, such as AI and AR, to create cutting-edge applications.",
          variant: "inline",
        },
        
      ]}
    />
  );
};



const FaqSection = () => {
  return (
    <Heading
      lineHeight="short"
      fontSize={["2xl", null, "4xl"]}
      textAlign="center"
      as="p"
    >
      {/* How About Starting a Discussion ? 
      <Br />    
                  ......Here Comes a Ending Statement  ......
      
        Send a Mail on info@plusitpark.com */}
      
    </Heading>
  );
};


export default CareerPage;

