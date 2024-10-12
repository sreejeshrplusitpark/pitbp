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
        title="Building Cyber Fortress | Secring Digital Assets | PITBP"
        description="comprehensive cybersecurity services protect your organization from evolving threats,incident response, and risk management."
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
                 Not Just a Protection
                <Br /> We Build Fortress
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
              We provide more than just cybersecurity solutions; we build a resilient defense system that safeguards your digital assets. Our approach goes beyond 
              standard security measures, ensuring comprehensive protection, proactive threat detection, 
              and swift incident response to keep your operations secure and seamless.
               
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
        name="Fortifying Your Digital Landscape"
        description="with Robust Cybersecurity Solutions"
        avatar="/static/images/cybersec.jpg"
        gradient={["pink.200", "purple.500"]}
      >
         we prioritize the security of your digital assets. Our approach centers on understanding your unique security challenges and tailoring solutions that safeguard your organization. With a focus on proactive threat detection,
          real-time monitoring, and responsive incident management, we ensure your systems remain resilient against evolving threats.
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
        Technologies We Use for Cybersecurity
        
        </Text>


        <Wrap mt="8">
          {[
            "Firewall Solutions",
            "Intrusion Detection Systems (IDS)",
            "Intrusion Prevention Systems (IPS)",
            "Identity and Access Management (IAM)",
            "Vulnerability Assessment",
            "Penetration Testing ",
            "Threat Intelligence",
            "Cloud Security",
            "Network Security ",
            "Compliance Management Tools",
            "Wireshark",
            "Metasploit",
            "Nmap",
            "Endpoint Protection"

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
          At PLUS IT Park, we offer comprehensive cybersecurity solutions tailored to your unique needs, employing proven methodologies such as risk assessment, threat modeling, and incident response planning. Our advanced technologies, including data encryption and access control management, 
          create robust security frameworks that protect sensitive information and ensure compliance with industry regulations. We prioritize user awareness and training, empowering your team to recognize and respond to potential threats effectively. With continuous monitoring, proactive threat detection, 
          and dedicated support, we keep your defenses strong and ready to respond in real-time. Our commitment is to transform your cybersecurity strategy into a powerful shield against evolving threats, allowing you to focus on growing your business with confidence.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Threat Assessment  ",
          icon: FiTerminal ,
          description:
            "Comprehensive evaluations to identify vulnerabilities and potential threats to your digital assets.",
          variant: "inline",
        },
        {
          title: "Incident Response Planning",
          icon: FiTerminal,
          description:
            "Strategies and protocols to effectively respond to security incidents and mitigate their impact.s",
          variant: "inline",
        },
        {
          title: "Security Audits ",
          icon: FiTerminal ,
          description:
            "In-depth reviews of your security policies, processes, and technologies to ensure compliance and effectiveness.",
          variant: "inline",
        },
        {
          title: "Firewall Implementation",
          icon: FiTerminal,
          description:
            "Deployment of advanced firewall solutions to safeguard networks against unauthorized access and threats.",
          variant: "inline",
        },
        {
          title: "Endpoint Protection",
          icon: FiTerminal,
          description:"Securing endpoints (devices) to prevent malware infections and unauthorized access to networks.",
          variant: "inline",
        },
        {
          title: "Disaster Recovery Planning",
          icon: FiTerminal,
          description:
            "Creating plans to ensure business continuity and data recovery in the event of a security breach.",
          variant: "inline",
        },
        {
          title: "Vulnerability Management",
          icon: FiTerminal,
          description:
            "Regular assessments and management of vulnerabilities to minimize potential risks.",
          variant: "inline",
        },
        {
          title: "Penetration Testing",
          icon: FiTerminal,
          description:
            "Simulated attacks to assess the security posture and identify weaknesses in your infrastructure.",
          variant: "inline",
        },
        {
          title: "User Training and Awareness",
          icon: FiTerminal,
          description:
            "Programs designed to educate employees about cybersecurity best practices and threat recognition.",
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

