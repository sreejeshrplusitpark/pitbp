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
      title="Beyond Just Protection We Uncover Truths | PITBP"
      description="Our cyber forensics services go beyond basic investigation, providing in-depth analysis, digital evidence recovery, and comprehensive solutions to uncover and prevent cyber threats."
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
                Beyond Defense
                <Br /> We Unveil Hidden Threats
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
              We provide more than just cyber forensic services; we uncover hidden insights and digital evidence with precision. Our approach goes beyond standard investigative techniques,
               ensuring thorough analysis, timely identification of breaches, and a clear pathway to resolution.
               With our expertise, we help secure your digital landscape and provide critical data for decision-making, enabling swift action and long-term protection.
               
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
        name="Uncovering the Truth in Your Digital Landscape"
        description="with Expert Cyber Forensics Solutions"
        avatar="/static/images/Forensics.jpg"
        gradient={["pink.200", "purple.500"]}
      >
         We prioritize the integrity of your digital environment. Our approach focuses on uncovering the root cause of cyber incidents 
         and providing comprehensive forensic analysis tailored to your specific needs. Through meticulous data examination, proactive threat identification, and detailed incident reporting, 
         we help you maintain resilience against cyber threats while empowering you to take informed action to prevent future attacks.
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
            "Autopsy ",
            "Wireshark ",
            "Disk Imaging",
            "Memory Analysis",
            "Network Forensics",
            "Malware Analysis  ",
            "Mobile Device Forensics",
            "Log Analysis",
            "Data Recovery ",
            "Compliance Management Tools",
            "Cryptography and Decryption",
            "Volatility ",
            "Registry Recon",
            "SIFT Workstation"

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
          At PLUS IT Park, we provide end-to-end cyber forensics solutions that are designed to uncover, analyze, and act on digital evidence effectively. Our specialized team employs cutting-edge forensics methodologies such as data recovery, forensic imaging, and deep analysis of compromised systems. 
          Using advanced tools like EnCase, FTK, and Volatility, we help identify vulnerabilities, trace malicious activities, and preserve crucial data for legal proceedings. With a focus on maintaining the integrity of evidence and adhering to industry standards, we ensure a thorough investigation process that supports your legal and security needs. 
          Our commitment to swift and accurate forensic analysis helps you mitigate damage, recover essential data, and strengthen your defenses for the future.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Digital Forensics Investigation ",
          icon: FiTerminal ,
          description:
            "In-depth analysis of compromised systems to trace and recover digital evidence for security and legal purposes.",
          variant: "inline",
        },
        {
          title: "Data Encryption",
          icon: FiTerminal,
          description:
            "Implementation of encryption techniques to protect sensitive data both in transit and at rest.",
          variant: "inline",
        },
        {
          title: "Network Traffic Analysis ",
          icon: FiTerminal ,
          description:
            "Monitoring and analyzing network traffic to detect suspicious behavior and potential security breaches.",
          variant: "inline",
        },
        {
          title: "Malware Analysis",
          icon: FiTerminal,
          description:
            "Identifying, dissecting, and understanding malware behavior to develop effective defense strategies.",
          variant: "inline",
        },
        {
          title: "Cloud Security Monitoring",
          icon: FiTerminal,
          description:"Continuous monitoring of cloud environments to detect vulnerabilities and ensure compliance with security standards.",
          variant: "inline",
        },
        {
          title: "Data Loss Prevention (DLP)",
          icon: FiTerminal,
          description:
            "Strategies and technologies to prevent the loss of sensitive data through encryption, monitoring, and policy enforcement.",
          variant: "inline",
        },
        {
          title: "Incident Log Analysis",
          icon: FiTerminal,
          description:
            "Reviewing logs from security systems to identify and respond to security incidents",
          variant: "inline",
        },
        {
          title: "Access Control Management",
          icon: FiTerminal,
          description:
            "Restricting access to systems and data based on user roles, using techniques like multi-factor authentication (MFA).",
          variant: "inline",
        },
        {
          title: "Threat Hunting",
          icon: FiTerminal,
          description:
            "Proactively searching for threats and vulnerabilities in your systems before they result in security breaches.",
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

