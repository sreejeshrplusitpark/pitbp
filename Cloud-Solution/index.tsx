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
      title="Secure and Scalable Cloud Solutions | PITBP"
      description="Enhance your business agility with secure and scalable cloud solutions, designed to meet evolving business needs while maintaining top-tier security."
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
                Fortify,  
                <Br /> Optimize, Elevate
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
             Beyond cloud management, we fortify your cloud infrastructure with robust security measures, 
             vigilant monitoring, and fast incident response. Our solutions provide the resilience and agility 
             you need to navigate ever-changing digital threats while maintaining peak cloud performance.
               
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
        name="Empowering Cloud Infrastructure"
        description="with Seamless Management"
        avatar="/static/images/cloud.png"
        gradient={["pink.200", "purple.500"]}
      >
         We focus on delivering robust cloud management solutions that improve the agility and security of your cloud infrastructure. By utilizing proactive monitoring,
          thorough risk analysis, and rapid incident resolution, we provide a secure, high-performance environment tailored to your operational needs, ensuring that your cloud scales with your business.
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
            "Elastic Load Balancing (ELB) ",
            "Kubernetes ",
            "AWS CloudWatch",
            "Auto-scaling",
            "IPSec VPN",
            "Network File System (NFS)  ",
            "Ngnix",
            "Puppet",
            "Jenkins ",
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
          At PLUS IT Park, we specialize in delivering robust cloud solution management services tailored to meet your organization &#39;s specific needs. Our approach goes beyond traditional cloud management by focusing on seamless integration, proactive monitoring, and continuous optimization. Utilizing cutting-edge technologies 
          like auto-scaling, load balancing, and virtualization, we ensure that your cloud infrastructure is not only resilient but also highly efficient. Our expert team continuously monitors your systems, identifying and addressing potential issues before they impact your operations, ensuring minimal downtime and maximum performance. With a focus on security and compliance, we implement industry-leading
           practices to protect your data, maintain regulatory standards, and optimize your cloud environment. Partner with us to elevate your cloud infrastructure, reduce operational risks, and drive growth with scalable and resilient cloud management strategies.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Cloud Infrastructure Design",
          icon: FiTerminal ,
          description:
            "Architecting and configuring cloud environments tailored to your business needs for scalability and performance.",
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
          title: "Auto-Scaling ",
          icon: FiTerminal ,
          description:
            "Automatically adjusting resources to meet real-time demands, ensuring cost-efficiency and optimal performance.",
          variant: "inline",
        },
        {
          title: "Cloud Monitoringt",
          icon: FiTerminal,
          description:
            "Continuous oversight of cloud infrastructure performance to detect and resolve issues before they impact operations.",
          variant: "inline",
        },
        {
          title: "Cloud Security Management",
          icon: FiTerminal,
          description:"Securing cloud environments through encryption, identity management, and compliance with industry standards.",
          variant: "inline",
        },
        {
          title: "Container Orchestration",
          icon: FiTerminal,
          description:
            "Managing and deploying containers in cloud environments using tools like Kubernetes and Docker.",
          variant: "inline",
        },
        {
          title: "Multi-Cloud Management",
          icon: FiTerminal,
          description:
            "Overseeing and optimizing the use of multiple cloud providers to balance costs, performance, and reliability.",
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
          title: "Log Management",
          icon: FiTerminal,
          description:
            "Collecting, storing, and analyzing logs from cloud services to ensure visibility and troubleshoot issues effectively.",
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

