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
    title="Seamless  Server Integration and Management | PITBP"
    description="Our  server management services ensure smooth integration, enhanced security, and efficient performance for your operations."
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
                Protect, Monitor,  
                <Br /> Respond
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
              We don &#39;t just manage servers; we fortify them. Our approach goes beyond routine maintenance, 
              providing comprehensive security measures, proactive threat monitoring, and rapid response strategies. With our expertise, we ensure that your server 
              infrastructure remains resilient against evolving cyber threats while maximizing performance.
               
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
        name="Elevating Server Security and Performance"
        description="with Expert Server Management Solutions"
        avatar="/static/images/server.jpg"
        gradient={["pink.200", "purple.500"]}
      >
         Our focus is on enhancing the resilience of your server infrastructure. Through diligent monitoring, risk assessment, and swift incident response,
          we create a secure environment that supports your business objectives. Our expert team ensures that your servers are always optimized for performance and fortified against emerging cyber threats.
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
        Tools and Methods we make use of
        
        </Text>


        <Wrap mt="8">
          {[
            "Docker ",
            "Kubernetes ",
            "AWS CloudWatch",
            "Grafana",
            "Prometheus",
            "VMware  ",
            "Ngnix",
            "Puppet",
            "OpenStack ",
            "Terraform",
            "Load Balancing",
            "Caching ",
            "Clustering",

            "Service Discovery",
            "Backup and Recovery",
            "Database Sharding ",
            "Virtualization",

            "Content Delivery Network (CDN)"

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
          At PLUS IT Park, we deliver comprehensive server management solutions tailored to meet the unique demands of your business. 
          Our expert team leverages industry-leading practices in server deployment, monitoring, and maintenance to ensure optimal performance and reliability. We utilize advanced tools and technologies such as load balancers, caching solutions, and virtualization to maximize resource efficiency and minimize downtime. Our proactive monitoring systems detect issues before they escalate, allowing us to implement timely solutions that safeguard your infrastructure. With a commitment to security and compliance, we ensure your servers are fortified against vulnerabilities while remaining compliant with industry standards. Partner with us to enhance your server performance, 
          reduce operational risks, and empower your organization with scalable and resilient server management strategies.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Server Deployment",
          icon: FiTerminal ,
          description:
            "Seamless setup and configuration of servers tailored to your specific business requirements.",
          variant: "inline",
        },
        {
          title: "Load Balancing",
          icon: FiTerminal,
          description:
            "Distributing network traffic across multiple servers to enhance responsiveness and uptime.",
          variant: "inline",
        },
        {
          title: "Server Monitoring ",
          icon: FiTerminal ,
          description:
            "Continuous tracking of server performance metrics to identify and resolve potential issues proactively.",
          variant: "inline",
        },
        {
          title: "Patch Management",
          icon: FiTerminal,
          description:
            "Regular updates and patches to server software to mitigate vulnerabilities and improve performance.",
          variant: "inline",
        },
        {
          title: "Network Configuration",
          icon: FiTerminal,
          description:"Setting up and managing network settings to ensure secure and efficient communication between servers.",
          variant: "inline",
        },
        {
          title: "Database Management",
          icon: FiTerminal,
          description:
            "Overseeing database installations, configurations, and optimizations to ensure data accessibility and integrity.",
          variant: "inline",
        },
        {
          title: "API Management",
          icon: FiTerminal,
          description:
            "Monitoring and controlling APIs to ensure secure and efficient interactions between applications and servers.",
          variant: "inline",
        },
        {
          title: "Storage Management",
          icon: FiTerminal,
          description:
            "Overseeing storage solutions and configurations to ensure optimal data storage and retrieval.",
          variant: "inline",
        },
        {
          title: "User Management",
          icon: FiTerminal,
          description:
            "Managing user accounts and permissions to ensure secure access to server resources.",
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

