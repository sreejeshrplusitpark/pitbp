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
        title="UI |Design Beyond Boundaries | PITBP"
        description="Not Just Screens Let's Build Lasting Impressions | UI Design Team - Plus IT Business Park "
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
                Not Just Screens
                <Br /> Lasting Impressions
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Our approach emphasizes crafting visually stunning interfaces that not only capture attention but also facilitate seamless interactions. By focusing on user needs and preferences, 
                we design intuitive layouts that guide users effortlessly through their journey, ensuring that every touchpoint is memorable. 
               
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
        name="More Than Wireframes "
        description="Transformative Experiences"
        avatar="/static/images/ui.jpg"
        gradient={["pink.200", "purple.500"]}
      >
       Our focus is on designing intuitive interfaces that make every interaction seamless and enjoyable. By understanding user needs, we ensure that our designs not only function well but also create lasting impressions. 
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Innovation and Comprehensive Solutions:"
      >
        <Text color="muted" fontSize="lg">
      
        <br/>
        Choosing PITBP for your UI design means partnering with a team committed to creating intuitive and impactful user experiences.
         We understand that great design goes beyond aesthetics; it’s about functionality and user satisfaction. Our expertise in user behavior allows us to craft interfaces that are not only visually appealing but also easy to navigate. 
         We prioritize a user-centric approach, ensuring that every design element serves a purpose and enhances usability. With our collaborative mindset, we work closely with you to bring your vision to life, delivering designs that resonate with your audience. 
         <br/>
        <br/>
       Build Impressions With help of 
        
        </Text>


        <Wrap mt="8">
          {[
            "Figma",
            "Adobe XD",
            "Wireframe",
            "Prototype",
            "Typography",
            "Aesthetics",
            "Responsiveness",
            "Layout",
            "Hierarchy",
            "Microinteractions",
            "Sketch",
            "Framer",
            "Canva",
            "InVision Studio"

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
          title: "User-Centric Design  ",
          icon: FiTerminal ,
          description:
            "Focused on understanding user needs to create intuitive interfaces that enhance satisfaction.",
          variant: "inline",
        },
        {
          title: "Responsive Design",
          icon: FiTerminal,
          description:
            "Ensures optimal functionality across all devices, providing a seamless experience for users.",
          variant: "inline",
        },
        {
          title: "Interactive Prototypes ",
          icon: FiTerminal ,
          description:
            "Develop interactive mockups to visualize design concepts and gather user feedback early in the process.",
          variant: "inline",
        },
        {
          title: "Accessibility Features",
          icon: FiTerminal,
          description:
            "Design with inclusivity in mind, ensuring all users, including those with disabilities, can engage with your app.",
          variant: "inline",
        },
        {
          title: "Microinteractions ",
          icon: FiTerminal,
          description:"Incorporate subtle animations and feedback to enhance user engagement and provide visual cues.",
          variant: "inline",
        },
        {
          title: "Information Architecture",
          icon: FiTerminal,
          description:
            " Organize content logically to help users find information effortlessly and efficiently.",
          variant: "inline",
        },
        {
          title: "Scalability ",
          icon: FiTerminal,
          description:
            "Design interfaces that can grow and adapt as your business needs evolve.",
          variant: "inline",
        },
        {
          title: "Integration with Development Teams  ",
          icon: FiTerminal,
          description:
            "Collaborate closely with developers to ensure designs are feasible and efficiently implemented.",
          variant: "inline",
        },
        {
          title: "Data-Driven Design ",
          icon: FiTerminal,
          description:
            "Use analytics and user data to inform design decisions and enhance user experience.",
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

