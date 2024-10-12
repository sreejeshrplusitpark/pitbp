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
      title="Innovative Blockchain Development Solutions | PITBP"
      description="Unlock the potential of decentralized technology with our expert blockchain development services. Enhance security, transparency, and efficiency with Plus IT Business Park."
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
                Beyond Boundaries
                <Br /> Pioneering Change
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
               In the realm of blockchain development, we believe in breaking barriers to deliver solutions that inspire confidence and drive change. Our user-centric approach ensures that each application we build is not only secure but also intuitive, allowing users to navigate effortlessly through their digital journeys. By harnessing the full potential of blockchain technology, we create innovative solutions that redefine industries and enhance user experiences.
               
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
        name="Beyond Technical Complexity"
        description="Innovative User Journeys"
        avatar="/static/images/block.png"
        gradient={["pink.200", "purple.500"]}
      >
    Our commitment to blockchain development transcends technical complexity; we aim to create innovative user journeys that enhance interaction. By prioritizing user insights, we design intuitive interfaces that simplify navigation and ensure that every touchpoint is memorable, enabling users to engage effortlessly with blockchain solutions. 
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
      Tools We Used to Build the Next Gen Solutions
        
        </Text>


        <Wrap mt="8">
          {[
            "Ethereum",
            "Hyperledger Fabric",
            "Truffle Suite",
            "Ganache",
            "Remix IDE",
            "Metamask",
            "Infura",
            "IPFS (InterPlanetary File System)",
            "Chaincode",
            "Solidity",
            "JavaScript",
            "Java",
            "BlockExplorer",



            "OpenSea",
            "Mintable",
            "Rarible",
            "Pinata",
            "EVM",
            
            "Chainlink"

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
          Choosing PITBP for your Blockchain and NFT development needs means collaborating with a skilled team dedicated to leveraging the power of Solidity engineering to bring your innovative ideas to life. Our extensive expertise in blockchain technology enables us to understand the nuances of decentralized applications and smart contracts, ensuring that every solution we implement aligns seamlessly with your strategic objectives. We prioritize security and scalability, crafting robust and user-friendly interfaces that enhance user engagement and foster trust in your brand. Our agile development methodology ensures timely delivery while allowing us to adapt swiftly to the evolving landscape of blockchain technology. With a commitment to quality, transparency, and ongoing support, we empower your projects to thrive in the competitive world of Blockchain and NFTs, helping you harness the full potential of this transformative technology.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Decentralization ",
          icon: FiTerminal ,
          description:
            "Focus on eliminating central points of failure by distributing data across multiple nodes, enhancing security and resilience.",
          variant: "inline",
        },
        {
          title: "Smart Contract Development",
          icon: FiTerminal,
          description:
            "Implement self-executing contracts with predefined rules encoded into the blockchain, enabling automated transactions.",
          variant: "inline",
        },
        {
          title: "Interoperability ",
          icon: FiTerminal ,
          description:
            "Design solutions that enable different blockchain systems to communicate and share data seamlessly.",
          variant: "inline",
        },
        {
          title: "Scalability Solutions",
          icon: FiTerminal,
          description:
            "Implement Layer 2 solutions or sharding techniques to improve transaction throughput and network efficiency.",
          variant: "inline",
        },
        {
          title: "Cross-Chain Functionality ",
          icon: FiTerminal,
          description:"Enable interactions between different blockchain networks to enhance usability and expand application capabilities.",
          variant: "inline",
        },
        {
          title: "Regulatory Compliance",
          icon: FiTerminal,
          description:
            " Stay updated with legal and regulatory frameworks to ensure that blockchain applications meet necessary compliance standards.",
          variant: "inline",
        },
        {
          title: "Data Privacy Solutions ",
          icon: FiTerminal,
          description:
            "Implement privacy-focused technologies (e.g., zk-SNARKs) to ensure user data remains confidential on the blockchain.",
          variant: "inline",
        },
        {
          title: "Integration with Existing Systems ",
          icon: FiTerminal,
          description:
            "Ensure seamless integration of blockchain solutions with existing enterprise systems for improved efficiency and functionality.",
          variant: "inline",
        },
        {
          title: "Continuous Improvement",
          icon: FiTerminal,
          description:
            "Adopt an iterative development approach, regularly updating and enhancing blockchain solutions based on user feedback and industry trends.",
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

