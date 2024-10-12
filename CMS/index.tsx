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
      title="Comprehensive CMS Development Services for Your Business | PITBP"
      description="At PLUS IT Park, we develop intuitive CMS platforms that empower teams to manage content with ease. From customization to seamless integration, our CMS solutions enhance efficiency and user experience."
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
               Empowering 
                <Br /> Content
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
Our approach to CMS development goes beyond basic content management. We focus on creating scalable, user-friendly platforms that allow your team to easily update and optimize content. By prioritizing both functionality and user experience, we design CMS systems that empower you to manage your digital presence with ease, ensuring seamless interaction and long-term engagement with your audience.               
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
        name="More Than Content"
        description="Transformative Management"
        avatar="/static/images/cms.webp"
        gradient={["pink.200", "purple.500"]}
      >
We believe that effective CMS development is not just about managing content; it&#39;s about creating meaningful user experiences. Our solutions emphasize intuitive content organization and seamless navigation, enabling your team to deliver engaging, relevant material that resonates with your audience. By focusing on both functionality and user satisfaction, we ensure your CMS system fosters strong connections and drives long-term engagement.      </HighlightsTestimonialItem>
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
       Methods We Use,
        
        </Text>


        <Wrap mt="8">
          {[
            "Version Control",
            "Content Organization",
            "SEO Optimization",
            "User Permissions and Access Control",
            "Mobile Optimization",
            "Content Scheduling",
            "Content Personalization",
            "Multilingual Support",
            "Integration with Third-Party Tools",
            "Analytics and Reporting",
            "Media Management",
            "Scalability",
            "Security Features",
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
          Choosing PITBP for your CMS development means partnering with a team that excels in creating robust, scalable, and user-friendly content management systems tailored to your specific needs. Our extensive industry experience allows us to design CMS solutions that simplify content creation, organization, and publication while ensuring seamless integration with your existing workflows. We prioritize flexibility and scalability, ensuring your CMS can grow with your business. With a focus on security, performance, and user experience, we deliver solutions that empower you to manage content efficiently while keeping your audience engaged. Our commitment to continuous support and transparent communication ensures your CMS remains optimized, secure, and up-to-date.        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "User-Friendly Interface ",
          icon: FiTerminal ,
          description:
            "Design intuitive and easy-to-navigate interfaces that allow content creators to manage, update, and publish content without technical expertise.",
          variant: "inline",
        },
        {
          title: "Customizable Templates",
          icon: FiTerminal,
          description:
            "Provide flexible and customizable templates that align with the branding and design needs of the business, ensuring consistency across all content.",
          variant: "inline",
        },
        {
          title: "Content Versioning ",
          icon: FiTerminal ,
          description:
            "Enable version control to track changes, allowing users to restore previous content versions and maintain content integrity.",
          variant: "inline",
        },
        {
          title: "Access Control Management",
          icon: FiTerminal,
          description:
            "Implement role-based permissions to control who can create, edit, approve, or publish content, ensuring security and content integrity.",
          variant: "inline",
        },
        {
          title: "SEO-Friendly Tools ",
          icon: FiTerminal,
          description:"Incorporate built-in SEO features like meta tags, keyword optimization, and XML sitemaps to enhance content visibility on search engines.",
          variant: "inline",
        },
        {
          title: "Media Management",
          icon: FiTerminal,
          description:
            "Offer efficient tools for managing images, videos, and other media files, including drag-and-drop functionality and media categorization.",
          variant: "inline",
        },
        {
          title: "Scalability ",
          icon: FiTerminal,
          description:
            "Ensure the CMS can scale as the organization grows, supporting larger content volumes and more users without compromising performance.",
          variant: "inline",
        },
        {
          title: "Analytics Integration ",
          icon: FiTerminal,
          description:
            "Integrate with analytics platforms to provide insights into content performance, user behavior, and engagement metrics, guiding future content strategies.",
          variant: "inline",
        },
        {
          title: "Security Features",
          icon: FiTerminal,
          description:
            "Incorporate advanced security measures like SSL encryption, two-factor authentication, and regular security updates to protect content and user data.",
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

