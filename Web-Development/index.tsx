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
        title="Not Just a Website | Build a Brand | PITBP"
        description="Craft a Amazing User Experence Along With Your Idendity | Web Development Team  | PITBP" 
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
                 Not Just Website
                <Br /> A Brand
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                In today’s digital landscape, we know that a successful website goes beyond just eye-catching design—it’s about seamless functionality, 
                intuitive navigation, and delivering an engaging user experience.
               
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
        name="Personalized designs "
        description="crafted to reflect your unique brand identity. "
        avatar="/static/images/purpose-of-design.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        Discover the advantages of our website design services, where personalized creations are crafted to perfectly align with your brand identity. We design visually striking websites that capture the essence of your brand, leaving a memorable impact on your audience. Our customized approach ensures a design that connects with your target market, elevating your online presence and driving engagement.
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
        <br/>
        <br/>
      Technologies We Work With
        
        </Text>


        <Wrap mt="8">
          {[
            "MERN",
            "Next Js",
            "Mongo DB ",
            "Ngnix",
            "TypeScript",
            "Vite",
            "GraphQL",
            "Kubernetes",
            "Postman",
            "Jenkins",
            "Docker",
            "Git",
            "Vercel",
            "Passport"

          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
        
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
          At PITBP, we create more than just websites—we craft custom digital experiences that perfectly reflect your brand &#39;s identity and values.
           Our designs are not only visually unique but also scalable, growing with your business to accommodate future needs. We ensure your website is responsive across all devices, optimized for SEO to boost visibility, 
           and built for fast loading times to enhance user experience. With robust security measures like SSL certification and secure coding, we prioritize protecting your data. Plus, our ongoing support guarantees that your website remains secure, up-to-date, and high-performing at all times.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Custom Web Design ",
          icon: FiTerminal ,
          description:
            "Tailored website designs that reflect your brand’s unique identity and values.",
          variant: "inline",
        },
        {
          title: "Responsive Design",
          icon: FiTerminal,
          description:
            "Ensures optimal functionality and appearance across all devices, from mobile to desktop.",
          variant: "inline",
        },
        {
          title: "Scalable Solutions ",
          icon: FiTerminal ,
          description:
            "Websites designed to grow with your business, easily adaptable to future needs.",
          variant: "inline",
        },
        {
          title: "SEO Optimization ",
          icon: FiTerminal,
          description:
            "Built with SEO best practices to improve search engine ranking and visibility.",
          variant: "inline",
        },
        {
          title: "Security Features",
          icon: FiTerminal,
          description:"Robust security measures, including SSL encryption and secure coding practices, to protect your data.",
          variant: "inline",
        },
        {
          title: "Multi-Language Support  ",
          icon: FiTerminal,
          description:
            "Websites designed to support multiple languages, expanding your global reach.",
          variant: "inline",
        },
        {
          title: "Backup Solutions ",
          icon: FiTerminal,
          description:
            "Regular backup services to safeguard your data against potential loss.",
          variant: "inline",
        },
        {
          title: "Payment Gateway Integration ",
          icon: FiTerminal,
          description:
            "Secure and flexible payment solutions for e-commerce sites.",
          variant: "inline",
        },
        {
          title: "Cloud Hosting Solutions",
          icon: FiTerminal,
          description:
            "Reliable cloud hosting options for improved speed, scalability, and performance.",
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

