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
        title="Our Services | PITBP"
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
                 Innovative  Solutions
                <Br /> Strategic Technology
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                At Plus IT Business Park, we offer a comprehensive range of services designed to propel your business forward in the digital age. 
                From cutting-edge web and app development that brings your ideas to life, to powerful digital marketing and SEO strategies that increase visibility and engagement,
                 we ensure your brand stands out. Our cloud and infrastructure solutions provide secure, scalable systems, while our custom software development tailors solutions to your specific needs.
               
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
        name="Surath Lal"
        description="Operations Head, Edupace "
        avatar="/static/images/edu.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “I am truly impressed with the great work-life balance at plus IT Business Park Thrissur.
The amazing work environment, fantastic team, and supportive team lead make every
day enjoyable. The administration is incredibly supportive, ensuring a smooth and
efficient workflow. The Go Green campus and office cleanliness add to the overall
positive atmosphere. Free food, diverse projects with social commitments, and regular
vacation opportunities make it an enriching experience.”
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
          Areas We Work with
          <Br /> 
        </Heading>
      }
      description={
        <>
         
          <Br />
          At PLUS IT Park, we are committed to harnessing the latest technologies to elevate your business in the digital landscape. 
          Our expertise spans the development of dynamic websites, intuitive mobile applications, and sophisticated software solutions, including ERP systems and progressive web apps. 
          We embrace cutting-edge tools to deliver innovative solutions tailored to your unique needs. In addition to development, we prioritize your online visibility by implementing best practices for SEO and digital marketing, ensuring your brand effectively reaches and engages your target audience. With a focus on creating impactful digital experiences, 
          we’re dedicated to turning your vision into reality and driving tangible results for your business.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Web Development.",
          icon: FiTerminal ,
          description:
            "We create visually striking and performance-driven websites that adapt seamlessly across all devices, ensuring your online presence stands out in today’s digital landscape.",
          variant: "inline",
        },
        {
          title: "Mobile App Development ",
          icon: FiTerminal,
          description:
            "Empower your business with tailor-made mobile applications, built to deliver a user-friendly experience and optimized for both Android and iOS platforms.",
          variant: "inline",
        },
        {
          title: "UI/UX Design",
          icon: FiTerminal ,
          description:
            "Our design experts focus on user-centric interfaces, ensuring each touchpoint not only looks great but enhances the overall customer journey for higher engagement.",
          variant: "inline",
        },
        {
          title: "DevOps & Automation",
          icon: FiTerminal,
          description:
            "Our DevOps services streamline your software delivery, automating tasks to improve collaboration, speed, and the reliability of your deployments, reducing time to market.",
          variant: "inline",
        },
        {
          title: "Employee Development Programs",
          icon: FiTerminal,
          description:"Access tailored development programs that align with your career goals and aspirations.",
          variant: "inline",
        },
        {
          title: "Custom Software Development ",
          icon: FiTerminal,
          description:
            "We build bespoke software solutions tailored to your specific business needs, helping you streamline operations, improve efficiency, and gain a competitive edge with personalized technology.",
          variant: "inline",
        },
        {
          title: "Blockchain Solutions ",
          icon: FiTerminal,
          description:
            "Explore secure, transparent, and tamper-proof blockchain solutions tailored for industries like finance, supply chain, and more, adding trust and efficiency to your operations",
          variant: "inline",
        },
        {
          title: "Digital Marketing Services",
          icon: FiTerminal,
          description:
            "Boost your brand’s visibility and reach with our end-to-end digital marketing strategies, combining SEO, PPC, social media, and content marketing to drive results.",
          variant: "inline",
        },
        {
          title: "Server Maintenance & Support",
          icon: FiTerminal,
          description:
            "Ensure uptime and security with our proactive server management services, including 24/7 monitoring, routine updates, and troubleshooting for seamless operations.",
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

