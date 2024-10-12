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
    title="Boost Your Online Presence with Expert SEO Services | PITBP"
    description="At PLUS IT Park, we specialize in tailored SEO strategies that enhance your website's visibility, drive organic traffic, and improve search engine rankings. Our expert team employs the latest techniques to ensure your brand reaches its target audience effectively."
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
                Not Just Rankings
                <Br /> Lasting Visibility
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Our approach emphasizes developing SEO strategies that not only improve search engine rankings but also enhance user engagement. By focusing on the needs and preferences of your target audience, we create optimized content and structures that guide users effortlessly to your website, ensuring that every interaction leaves a lasting impression. 
               
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
        name="More Than Keywords"
        description="Transformative Visibility"
        avatar="/static/images/sei.png"
        gradient={["pink.200", "purple.500"]}
      >
      We believe that effective SEO is not just about driving traffic; it&#39;s about building relationships. Our strategies emphasize understanding user intent and delivering relevant content that captures attention and encourages interaction, ensuring a rewarding experience that keeps visitors coming back for more.
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
       Tools and Methods We Used to Rank you on top,
        
        </Text>


        <Wrap mt="8">
          {[
            "Google Lighthouse",
            "Seoblity",
            "Google Analytics",
            "Google Search Console",
            "SEMrush",
            "Keyword Planner",
            "Google Trends",
            "Content Management Systems (CMS)",
            "Local SEO Strategies",
            "Technical SEO Practices",
            "Google PageSpeed Insights",
            "PageOptimizer",
            "Mobile Optimization",
            "Analytics and Monitoring"

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
          Choosing PITBP for your SEO needs means partnering with a dedicated team that is committed to enhancing your online presence and driving meaningful traffic to your website. With extensive industry experience, we understand the nuances of search engine algorithms and user behavior, ensuring that every strategy we implement aligns perfectly with your unique business goals. We prioritize a data-driven approach, crafting tailored SEO solutions that not only improve visibility but also engage your target audience effectively. Our agile methodology allows us to adapt quickly to changing trends and algorithm updates, ensuring your SEO strategy remains effective and relevant. With a strong commitment to quality, transparency, and ongoing support, we empower your brand to succeed in the competitive digital landscape.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "User-Centric Approach  ",
          icon: FiTerminal ,
          description:
            "Focus on understanding user intent and behavior to create content that resonates and drives engagement.",
          variant: "inline",
        },
        {
          title: "Responsive Design",
          icon: FiTerminal,
          description:
            "Ensure optimal visibility and functionality across all devices, enhancing user experience and satisfaction.",
          variant: "inline",
        },
        {
          title: "Keyword Research ",
          icon: FiTerminal ,
          description:
            "Identify and analyze relevant keywords to inform content strategy and improve search engine rankings.",
          variant: "inline",
        },
        {
          title: "On-Page Optimization",
          icon: FiTerminal,
          description:
            "Optimize website elements such as title tags, meta descriptions, and headings to align with SEO best practices and improve visibility.",
          variant: "inline",
        },
        {
          title: "Content Development ",
          icon: FiTerminal,
          description:"ICreate high-quality, valuable content that addresses user needs and interests, establishing authority and driving organic traffic.",
          variant: "inline",
        },
        {
          title: "Technical SEO",
          icon: FiTerminal,
          description:
            "Implement technical best practices to enhance website performance, including site speed optimization, mobile-friendliness, and proper indexing.",
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
          title: "Link Building ",
          icon: FiTerminal,
          description:
            "Develop a robust backlink strategy to increase domain authority and improve search engine rankings through quality external links.",
          variant: "inline",
        },
        {
          title: "Continuous Improvement",
          icon: FiTerminal,
          description:
            "Regularly update and refine SEO strategies based on industry trends and performance analytics to ensure sustained success.",
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

