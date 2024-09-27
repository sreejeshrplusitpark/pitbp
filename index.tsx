import * as React from "react";
import styles from './HomepageStyle'; // Adjust the path if necessary
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

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="PLUS IT BUSINESS PARK | Diffrentiated Insigits"
        description="Free SaaS landingspage starter kit"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        {/* <TestimonialsSection /> */}

        {/* <PricingSection /> */}

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
               Differentiated
                <Br /> Insights
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                The Story of <Em>AI and Human Intuition </Em> With the right combination <Br />
                Makes the Right  Diffrentiated Insigits 
               
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                
                
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
               
                
              </ButtonGroup>
            </FallInPlace>
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
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
               
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>


          
  <div style={{ position: 'relative', textAlign: 'center' }}>
  <h1 style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontWeight: 'bold', // Set font weight to bold
    transform: 'translate(-50%, -50%)',
    fontSize: '6rem', // Adjust size as needed
    color: 'rgba(255, 255, 255, 0.1)', // Adjust color and opacity
    whiteSpace: 'nowrap'
  }}>
    4 D's
  </h1>
  <Features
    id="benefits"
    columns={[1, 2, 4]}
    iconSize={4}
    innerWidth="container.xl"
    pt="20"
    features={[
      {
        title: "Design",
        icon: FiPenTool,
        description: "Combining Artistic Vision with Strategic Insight, we create visually striking and user-centric designs that not only captivate audiences but also drive engagement, enhance user experience, and amplify your brand’s impact in a competitive market.",
        iconPosition: "left",
        delay: 0.6,
      },
      {
        title: "Development",
        icon: FiTool,
        description: "Leveraging the Latest Technologies and Best Development Practices, we create robust, scalable solutions tailored to your unique needs, empowering your business to innovate, optimize processes, and achieve sustainable growth in an ever-evolving digital landscape.",
        iconPosition: "left",
        delay: 0.8,
      },
      {
        title: "Deschooling",
        icon: FiGrid,
        description: "Reimagining Education through Deschooling: Embracing Self-Directed Learning and Real-World Experiences to Foster Curiosity, Creativity, and Lifelong Growth Beyond Traditional Boundaries.",
        iconPosition: "left",
        delay: 1,
      },
      {
        title: "Digital Marketing",
        icon: FiCoffee,
        description: "Unlocking Your Brand's Potential through Strategic Digital Marketing: Utilizing Data-Driven Insights, Engaging Content, and Targeted Campaigns to Enhance Visibility, Drive Traffic, and Boost Conversions in a Dynamic Online Landscape.",
        iconPosition: "left",
        delay: 1.1,
      },
    ]}
    reveal={FallInPlace}
  />
</div>

    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Leveraging Technology | Streamlining Operations">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
          Unlock the potential of your business through <Em> transformative opportunities and innovative solutions.</Em>
           We specialize in empowering organizations to navigate the complexities of today’s digital landscape. 
           By leveraging cutting-edge technologies and strategic insights, we help you enhance operations, 
           streamline processes, and drive sustainable growth.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Future-Driven Development">
        <Text color="muted" fontSize="lg">
        We specialize in developing scalable, 
        future-ready platforms that empower businesses to adapt, innovate, and thrive in the digital age.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="JOVIN C VARGHESE"
        description="CEO & Fonder, Ex ISRO"
        avatar="/static/images/jovin.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “At PITBP, we place great value on our processes and culture.
         We trust in engineering excellence and skill while celebrating the richness of diversity and the uniqueness of our shared culture.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Elevate Your Brand with Our Services"
      >
        <Text color="muted" fontSize="lg">
        At PITBP, we offer a suite of comprehensive services designed to elevate your brand to new heights.
         From innovative web development that captures your vision to robust digital marketing strategies that engage and convert, our expert team is dedicated to delivering exceptional results. 
         We understand the power of a strong online presence and the importance of security in building trust. By leveraging cutting-edge technology and industry insights, we empower your business to thrive in the digital world.
        </Text>
        <Wrap mt="8">
          {[
            "Web Development",
            "Mobile App Development",
            "Cyber Security",
            "Digital Marketing",
            "App Deployment",
            "UI/UX Development",
            "Cyber Forensics",
            "Server Management",
            "Cloud Solutions",
            "Graphic Design",
            "Search Engine Optimization (SEO)",
            "Content Management Systems (CMS)",
            "E-commerce Development",
            "Social Media Marketing",
            "Blockchain Development",
            "Web Hosting Services",
            "Business Process Automation",
            "Cloud Migration Services",
            "Infrastructure Management",
            "Penetration Testing",
            "DevSecOps"

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
          Engineering the Future of 
          <Br /> Digital Interaction
        </Heading>
      }
      description={
        <>
          
          <Br />
          As pioneers in the digital realm, we are dedicated to transforming visions into reality. 
          Our team of experts harnesses the latest advancements in technology to create tailored solutions that empower businesses and individuals alike.
           At PITBP, we prioritize collaboration and innovation, making us the ideal partner to navigate the complexities of the digital landscape.
            Join us in this journey as we innovate the future of technology, making it accessible and beneficial for everyone.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Expertise Across Domains.",
          icon: FiGlobe ,
          description:
            "Our team comprises specialists from various fields, including technology, design, and marketing. This diverse expertise allows us to approach projects with a comprehensive perspective, ensuring all aspects are covered.",
          variant: "inline",
        },
        {
          title: "Customized Solutions.",
          icon: FiSettings,
          description:
            "Recognizing that every client is unique, we tailor our services to meet your specific needs and objectives. This personalized approach ensures that the solutions we provide are both effective and aligned with your vision.",
          variant: "inline",
        },
        {
          title: "Agile Methodology",
          icon: FiAperture ,
          description:
            "Our agile approach allows for flexibility and quick iterations, enabling us to adapt to changing requirements and feedback. This ensures your project remains on track and responsive to your needs.",
          variant: "inline",
        },
        {
          title: "Sustainability Focus.",
          icon: FiHeart,
          description:
            "We integrate sustainable practices into our processes, promoting responsible technology use. Our commitment to sustainability reflects our dedication to a better future for all.",
          variant: "inline",
        },
        {
          title: "Scalable Solutions",
          icon: FiFlag,
          description:
            "We build solutions that grow with your business. This scalability ensures long-term success, allowing you to adapt to changing market demands without the need for a complete overhaul.",
          variant: "inline",
        },
        {
          title: "Holistic Digital Marketing.",
          icon: FiSun,
          description:
            "From SEO to social media, we cover all aspects of digital marketing. Our comprehensive approach enhances your online presence, driving traffic and engagement across multiple channels.",
          variant: "inline",
        },
        {
          title: "Community Engagement.",
          icon: FiUsers,
          description:
            "We are committed to giving back to the community. By supporting local initiatives and charities, we demonstrate our dedication to making a positive impact beyond business.",
          variant: "inline",
        },
        {
          title: "Passion for Innovation.",
          icon: FiTerminal,
          description:
            "Our team is driven by a passion for technology and innovation. This enthusiasm translates into exceptional solutions that push boundaries and redefine possibilities.",
          variant: "inline",
        },
        {
          title: "Performance Monitoring.",
          icon: FiCode,
          description:"We implement performance monitoring tools to track the effectiveness of our solutions. By analyzing metrics and KPIs, we can make data-driven adjustments to optimize performance and achieve desired outcomes.",
          variant: "inline",
        },
      ]}
    />
  );
};

// const TestimonialsSection = () => {
//   const columns = React.useMemo(() => {
//     return testimonials.items.reduce<Array<typeof testimonials.items>>(
//       (columns, t, i) => {
//         columns[i % 3].push(t);

//         return columns;
//       },
//       [[], [], []]
//     );
//   }, []);

//   return (
//     <Testimonials
//       title={testimonials.title}
//       columns={[1, 2, 3]}
//       innerWidth="container.xl"
//     >
//       <>
//         {columns.map((column, i) => (
//           <Stack key={i} spacing="8">
//             {column.map((t, i) => (
//               <Testimonial key={i} {...t} />
//             ))}
//           </Stack>
//         ))}
//       </>
//     </Testimonials>
//   );
// };

// const PricingSection = () => {
//   return (
//     <Pricing {...pricing}>
//       <Text p="8" textAlign="center" color="muted">
//         VAT may be applicable depending on your location.
//       </Text>
//     </Pricing>
//   );
// };

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

