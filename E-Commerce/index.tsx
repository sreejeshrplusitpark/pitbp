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
    title="Seamless E-Commerce Software Solutions for Growing Businesses | PITBP"
    description="Our expert team at PLUS IT Park delivers end-to-end e-commerce development, focusing on performance, security, and flexibility. Build a powerful online store tailored to your business needs."
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
                <Br /> Growth
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
Our approach to e-commerce development goes beyond creating a simple online store. We focus on building scalable, user-friendly platforms that enable your team to manage products, optimize customer experiences, and drive sales with ease. By prioritizing both functionality and user experience, we deliver e-commerce solutions that empower your business to thrive in the digital marketplace, ensuring seamless transactions and long-term customer loyalty.              </FallInPlace>
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
        name="More Than Transactions"
        description="TTransformative Commerce"
        avatar="/static/images/ecom.jpg"
        gradient={["pink.200", "purple.500"]}
      >
We believe that effective e-commerce development is not just about facilitating transactions; it &#39;s about creating meaningful customer experiences. Our solutions emphasize intuitive product organization and seamless navigation, enabling your team to deliver engaging, relevant content that resonates with your audience. By focusing on both functionality and customer satisfaction, we ensure your e-commerce platform fosters strong connections and drives long-term loyalty.   
 
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
       What We Offer,
        
        </Text>


        <Wrap mt="8">
          {[
            "User-Friendly Interface",
            "Mobile Responsiveness",
            "Payment Gateway Integration",
            "Product Catalog Management",
            "Inventory Management",
            "Search Engine Optimization (SEO)",
            "Customer Reviews and Ratings",
            "Multilingual Support",
            "Order Management",
            "Analytics and Reporting",
            "Marketing Tools",
            "Customer Support Tools",
            "Security Features",

            "Customizable Templates",
            "Shipping Integration",
            "Loyalty Programs",

            "Social Media Integration",
            "Scalability",

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
          Choosing PITBP for your e-commerce development means partnering with a dedicated team that specializes in building robust, scalable, and user-friendly online stores tailored to your unique business needs. Our extensive industry experience enables us to create seamless e-commerce solutions that incorporate essential features such as user-friendly interfaces, mobile responsiveness, and secure payment gateway options. We optimize product catalog management and inventory systems to ensure smooth operations while enhancing search engine visibility. With multilingual support, comprehensive order management, and powerful analytics tools, we empower you to make data-driven decisions and deliver a frictionless shopping experience for your customers. Our focus on security protects sensitive information, while marketing tools and social media integration amplify your brand presence. Committed to scalability and continuous support, we ensure your e-commerce platform remains optimized, secure, and effective in engaging your audience.     </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "User-Friendly Interface",
          icon: FiTerminal ,
          description:
            "Design intuitive and visually appealing interfaces that facilitate easy navigation, allowing customers to browse products and complete transactions seamlessly.",
          variant: "inline",
        },
        {
          title: "Mobile Responsiveness",
          icon: FiTerminal,
          description:
            "Ensure the e-commerce platform is optimized for mobile devices, providing a smooth shopping experience on smartphones and tablets.",
          variant: "inline",
        },
        {
          title: "Payment Gateway Integration ",
          icon: FiTerminal ,
          description:
            "Incorporate secure and diverse payment options, allowing customers to choose from various payment methods, enhancing convenience and trust.",
          variant: "inline",
        },
        {
          title: "Product Catalog Management",
          icon: FiTerminal,
          description:
            "Implement robust tools for managing product listings, including categorization, filtering, and detailed product descriptions, enabling customers to find what they need quickly.",
          variant: "inline",
        },
        {
          title: "Inventory Management",
          icon: FiTerminal,
          description:"Provide real-time inventory tracking to help businesses manage stock levels efficiently and prevent overselling.",
          variant: "inline",
        },
        {
          title: "Search Engine Optimization (SEO)",
          icon: FiTerminal,
          description:
            "Utilize built-in SEO features to optimize product pages, improving visibility on search engines and driving organic traffic.",
          variant: "inline",
        },
        {
          title: "Marketing Tools ",
          icon: FiTerminal,
          description:
            "Provide built-in marketing features, such as email campaigns and discount codes, to engage customers and drive sales.",
          variant: "inline",
        },
        {
          title: "Shipping Integration ",
          icon: FiTerminal,
          description:
            "Offer seamless integration with shipping providers to automate shipping calculations, tracking, and label printing.",
          variant: "inline",
        },
        {
          title: "Scalability",
          icon: FiTerminal,
          description:
            "Ensure the e-commerce platform can grow alongside the business, supporting increased traffic, product listings, and user accounts without performance issues.",
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

