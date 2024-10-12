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
    title="Innovative Media Solutions for Every Platform | PITBP"
    description="At PLUS IT Park, our media team crafts cutting-edge strategies that amplify your brand's presence across digital, social, and traditional media platforms, ensuring impactful storytelling and audience engagement."
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
                Design Beyond the
                <Br /> Surface
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                We transform ideas into visually compelling designs that captivate users and drive meaningful engagement. By merging creativity with functionality, we create seamless experiences that resonate with audiences
               
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
        name="More Than Just Edits "
        description="Engaging Experiences"
        avatar="/static/images/media.jpeg"
        gradient={["pink.200", "purple.500"]}
      >
Our team excels in creating compelling visual stories that captivate and engage audiences. With expertise in tools like Photoshop and advanced video editing software, we transform concepts into striking visuals that not only convey messages but also evoke emotions.      </HighlightsTestimonialItem>
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
            "Adobe Photoshop",
            "Adobe Illustrator",
            "CorelDRAW ",
            "Canva ",
            "Sketch ",
            "Final Cut Pro",
            "Adobe Premiere Pro",
            "DaVinci Resolve ",
            "Adobe Audition",
            "Adobe After Effects",
            "Blender",
            "Trello "

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
          At PITBP, our media team is dedicated to transforming your creative vision into captivating visual content that resonates with your audience. With extensive industry experience, we understand the nuances of visual storytelling and audience engagement, ensuring every project aligns with your objectives. We prioritize innovative design and compelling narratives, crafting stunning assets that inspire and captivate. Our agile production process guarantees timely delivery while allowing for flexibility and adaptation to new ideas. Committed to quality and ongoing support, we empower your brand to stand out in a crowded marketplace, creating transformative experiences that leave lasting impressions.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Visual Storytelling ",
          icon: FiTerminal ,
          description:
            "Craft compelling narratives through visuals that resonate with audiences and convey messages effectively.",
          variant: "inline",
        },
        {
          title: "Brand Consistency",
          icon: FiTerminal,
          description:
            "Maintain a cohesive visual identity across all media platforms to strengthen brand recognition and trust.",
          variant: "inline",
        },
        {
          title: "Creative Collaboration",
          icon: FiTerminal ,
          description:
            "Work closely with clients and stakeholders to ensure the final product aligns with their vision and objectives.",
          variant: "inline",
        },
        {
          title: "Dynamic Content Creation",
          icon: FiTerminal,
          description:
            "Develop engaging content tailored for various platforms, including social media, websites, and advertising campaigns.",
          variant: "inline",
        },
        {
          title: "Feedback Integration ",
          icon: FiTerminal,
          description:"Actively seek and incorporate feedback throughout the creative process to refine and improve content.",
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
          title: "Trendy Designs ",
          icon: FiTerminal,
          description:
            "Stay updated on the latest design trends and technologies to ensure content is fresh and relevant.",
          variant: "inline",
        },
        {
          title: "Post-Production Excellence  ",
          icon: FiTerminal,
          description:
            "Focus on high-quality editing and finishing processes to ensure the final product is polished and professional.",
          variant: "inline",
        },
        {
          title: "Scriptwriting and Storyboarding ",
          icon: FiTerminal,
          description:
            "Develop scripts and storyboards to plan and visualize media projects before production begins.",
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

