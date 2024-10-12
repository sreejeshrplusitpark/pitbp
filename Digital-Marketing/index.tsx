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
        title="Beyond Just Marketing We Cultivate Connections | PITBP"
        description="Our approach goes beyond traditional marketing strategies, ensuring tailored campaigns, data-driven insights, and innovative solutions."
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
                Not Just Advertising
                <Br /> Ignite Engagement
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
              We deliver more than just advertising; we empower brands to tell their unique stories. Our innovative strategies focus on building authentic relationships, 
              leveraging data insights to connect with your audience meaningfully and effectively.
               
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
        name="Elevating Your Digital Presence"
        description="with Strategic Marketing Solutions"
        avatar="/static/images/digital.jpeg"
        gradient={["pink.200", "purple.500"]}
      >
         We focus on enhancing your digital footprint through tailored marketing strategies that resonate with your audience.
          Our approach begins with understanding your brand &#39;s unique goals and challenges, allowing us to craft personalized campaigns that drive engagement and growth. 
          From data-driven insights to targeted advertising, we ensure your marketing efforts are both impactful and measurable, helping you connect with your audience, 
         build brand loyalty, and achieve long-term success in the ever-evolving digital landscape.
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
       We use of,
        
        </Text>


        <Wrap mt="8">
          {[
            "Google Tag Manager",
            "Seoblity",
            "Google Add Sense",
            "Meta Busienss Suit",
            "SEMrush ",
            "Hootsuite  ",
            "Mailchimp ",
            "HubSpot ",
            "Canva ",
            "Zapier",
            "Search Engine Optimization (SEO)",
            "Customer Relationship Management (CRM)",
            "Moz ",
            "Google Analytics"

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
          At PLUS IT Park, we provide end-to-end digital marketing solutions tailored to meet your business goals. We leverage data-driven strategies and the latest marketing technologies to help you reach your target audience effectively. 
          Our expertise spans across SEO, social media marketing, paid advertising, content creation, and email marketing, ensuring a comprehensive approach to boosting your online presence. 
          We focus on personalized campaigns, continuous optimization, and performance analytics to maximize ROI. With our dedicated team and innovative methods, we build lasting connections between your brand and your audience, helping you achieve measurable success and sustainable growth.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "SEO Strategy Development ",
          icon: FiTerminal ,
          description:
            "Crafting tailored SEO strategies to boost your website’s visibility and rank higher on search engines.",
          variant: "inline",
        },
        {
          title: "Social Media Management",
          icon: FiTerminal,
          description:
            "Creating and managing engaging content across social media platforms to enhance brand presence and audience engagement.",
          variant: "inline",
        },
        {
          title: "Content Marketing",
          icon: FiTerminal ,
          description:
            "Developing and distributing valuable, relevant content to attract and engage your target audience.",
          variant: "inline",
        },
        {
          title: "Email Marketing Campaigns",
          icon: FiTerminal,
          description:
            "Designing personalized email campaigns to nurture leads and increase customer retention.",
          variant: "inline",
        },
        {
          title: "Content Calendar Creation",
          icon: FiTerminal,
          description:"Building strategic content calendars to ensure consistent and timely communication with your audience.",
          variant: "inline",
        },
        {
          title: "Video Marketing",
          icon: FiTerminal,
          description:
            "Creating impactful video content to tell your brand’s story and engage users across digital platforms.",
          variant: "inline",
        },
        {
          title: "Landing Page Optimization",
          icon: FiTerminal,
          description:
            "Designing high-converting landing pages tailored to specific campaigns for maximum lead generation.",
          variant: "inline",
        },
        {
          title: "Local SEO",
          icon: FiTerminal,
          description:
            "Optimizing your online presence to attract customers from local searches and enhance visibility in specific geographic areas.",
          variant: "inline",
        },
        {
          title: "Brand Identity Development",
          icon: FiTerminal,
          description:
            "Creating and refining your brand's visual and verbal identity to establish a cohesive and recognizable presence.",
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

