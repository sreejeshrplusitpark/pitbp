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
      title="DevSecOps: Security-First Development | PITBP"
      description="Transform your development processes with our comprehensive DevSecOps services. Safeguard your applications and streamline security practices at Plus IT Business Park."
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
               Integrating Security into Development
                <Br /> 
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
In today’s fast-paced development environment, we are dedicated to embedding security at every stage of your software lifecycle through our comprehensive DevSecOps solutions. Our approach ensures that security is not an afterthought but a fundamental aspect of development, allowing for continuous integration and delivery without compromising on safety. By leveraging advanced tools and industry best practices, we facilitate collaboration between development, security, and operations teams, resulting in a streamlined process that enhances code quality and compliance. Our expert team focuses on creating a culture of security awareness, empowering your organization to innovate confidently while safeguarding your applications and data against evolving threats.              </FallInPlace>
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
        name="Security as a Culture"
        description="Transforming Development Practices"
        avatar="/static/images/devsecops.webp"
        gradient={["pink.200", "purple.500"]}
      >
Embracing a DevSecOps culture means transforming how your organization approaches security. We advocate for a mindset where security is a shared responsibility among all team members, from developers to operations staff. By incorporating security training and awareness programs, we equip your team with the knowledge to identify and mitigate risks throughout the development process. This holistic approach not only strengthens your software security but also fosters a culture of accountability and vigilance.
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
      We Build With
        
        </Text>


        <Wrap mt="8">
          {[
            "Continuous Integration (CI)",
            "Automated Testing",
            "CD",
            "SAST & DAST",
            "Container Security",
            "Configuration Management",
            "Vulnerability Assessment",
            "Threat Modeling",
            "Risk Assessment",
            "Penetration Testing",
            "Agile Development",
            "DevOps Toolchain",
            "Change Management",



            "Jenkins ",
            "GitLab CI",
            "Kubernetes ",
            "PagerDuty ",
            "Terraform",
            
            "SonarQube "

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
          When you choose PITBP for your DevSecOps needs, you are partnering with a dedicated team that prioritizes security throughout the software development lifecycle. Our expertise in integrating advanced tools like Jenkins, GitLab CI, and SonarQube ensures seamless continuous integration and delivery while identifying vulnerabilities early. We leverage industry-leading solutions such as Fortify and Checkmarx for static application security testing, alongside dynamic tools like OWASP ZAP and Snyk to protect your applications from real-time threats. Our commitment to secure infrastructure is backed by Terraform and Kubernetes, enabling us to provision and manage environments securely. With a focus on automating security measures and fostering collaboration across development, operations, and security teams, PITBP empowers you to build resilient applications that meet the highest security standards. Trust us to enhance your security posture and navigate the complexities of DevSecOps with confidence.  
   </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Vulnerability Scanning ",
          icon: FiTerminal ,
          description:
            "Utilize automated tools to scan systems and networks for known vulnerabilities, ensuring timely identification of security risks.",
          variant: "inline",
        },
        {
          title: "Penetration Testing",
          icon: FiTerminal,
          description:
            "Simulate real-world attacks to assess the security posture of applications, networks, and systems, revealing potential weaknesses.",
          variant: "inline",
        },
        {
          title: "Compliance Assessments ",
          icon: FiTerminal ,
          description:
            "Ensure that systems and processes comply with relevant regulations and standards, such as GDPR, HIPAA, or PCI-DSS.",
          variant: "inline",
        },
        {
          title: "Environment Variable Management",
          icon: FiTerminal,
          description:
            "Store sensitive configuration values, such as API keys and database credentials, in environment variables instead of hardcoding them in the source code.",
          variant: "inline",
        },
        {
          title: "Access Control Policies",
          icon: FiTerminal,
          description:"Implement strict access control policies to ensure that only authorized personnel and applications can access sensitive secrets.",
          variant: "inline",
        },
        {
          title: "Audit Logging",
          icon: FiTerminal,
          description:
            " Enable detailed logging of all access to secrets, allowing organizations to track who accessed what secrets and when for accountability..",
          variant: "inline",
        },
        {
          title: "Continuous Security Monitoring ",
          icon: FiTerminal,
          description:
            "Implement ongoing monitoring solutions to quickly identify and respond to new vulnerabilities as they arise.",
          variant: "inline",
        },
        {
          title: "Use of Secure Libraries",
          icon: FiTerminal,
          description:
            "Utilize well-maintained and vetted libraries and frameworks to avoid known vulnerabilities and ensure best practices are followed.",
          variant: "inline",
        },
        {
          title: "Secure Coding Guidelines",
          icon: FiTerminal,
          description:
            "Follow established secure coding guidelines, such as the OWASP Secure Coding Practices, to ensure that security considerations are integrated into the development process.",
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

