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
        title="Join The Team | PITBP"
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
                We  Just not Code;
                <Br /> We Make an Impact
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Plus IT Business Park Thrissur (PITBP) serves as the Information and Technology division of Worldwide Plus,
                 focusing on cutting-edge advancements in technology and innovation. 
                 As a dedicated tech hub, PITBP drives the development of modern digital solutions, ranging from software development to 
                 IT infrastructure services, supporting the global mission of Worldwide Plus to lead in technology-driven transformation.
               
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
      <HighlightsItem colSpan={[1, null, 2]} title="Our Vision">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
          Aspire to become a forefront organization in the realms of Blockchain Technology, 
          Progressive Web Application Development, and Artificial Intelligence.
           Strive to construct a highly secure and dynamic infrastructure, with the overarching aim of positively impacting human lives and contributing to a more sustainable globe
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Our Mission">
        <Text color="muted" fontSize="lg">
        The goal of Plus IT Business Park is to create a significant impact in cutting-edge technologies. 
        This objective involves revamping existing solutions and developing dependable, scalable applications within a secure infrastructure.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Software Development"
        description="Reviews - Ambitionbox"
        avatar="/static/images/ambition.webp"
        gradient={["pink.200", "purple.500"]}
      >
        “I am truly impressed with the great work-life balance at plus IT Business Park Thrissur.
The amazing work environment, fantastic team, and supportive team lead make every
day enjoyable. The administration is incredibly supportive, ensuring a smooth and
efficient workflow. The Go Green campus and office cleanliness add to the overall
positive atmosphere. Free food, diverse projects with social commitments, and regular
vacation opportunities make it an enriching experience.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Know About us More.."
      >
        <Text color="muted" fontSize="lg">
        
        <Image 
            src="/static/images/Rating.png" // Replace with your image path
            alt="Ambitionbox Rating" 
            width={200} // Set width
            height={70} // Set height
        />
        <br/>
        At Plus IT Business Park (PITBP), we boast an impressive overall rating of 5.0 highlighted as a key strength. 
        While our employees appreciate the stability and assurance of working here, company culture,  presents opportunities for enhancement.
         We invite you to delve into detailed reviews by job profile, department, and location to gain firsthand insights into what it’s like to be part of our innovative team, showcasing our commitment to empowering employees and fostering a collaborative work environment.
        </Text>
        
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
          What We Value
          <Br /> 
        </Heading>
      }
      description={
        <>
         
          <Br />
          Life at Plus IT Business Park (PITBP) is characterized by a strong sense of community, where employees are treated as valued members of a family.
           We believe in fostering a collaborative environment that encourages innovation and personal growth. Our team thrives on open communication and mutual support, creating a workplace culture that prioritizes well-being and work-life balance.
            Employees enjoy various opportunities for professional development and engagement, including team-building activities and knowledge-sharing sessions. 
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Innovative Projects.",
          icon: FiHeart ,
          description:
            "Engage in cutting-edge projects that push the boundaries of technology and creativity.",
          variant: "inline",
        },
        {
          title: "Continuous Learning",
          icon: FiHeart,
          description:
            "Access to workshops, courses, and mentorship programs for personal and professional growth.",
          variant: "inline",
        },
        {
          title: "Flexible Work Hours",
          icon: FiHeart ,
          description:
            "Enjoy a work-life balance with flexible schedules that accommodate personal needs.",
          variant: "inline",
        },
        {
          title: "Collaborative Environment",
          icon: FiHeart,
          description:
            "Work in teams that emphasize collaboration, ensuring diverse perspectives are valued.",
          variant: "inline",
        },
        {
          title: "Health and Wellness Programs",
          icon: FiHeart,
          description:
            "Participate in wellness initiatives that promote physical and mental health.",
          variant: "inline",
        },
        {
          title: "Feedback-Driven Culture",
          icon: FiHeart,
          description:
            "Engage in an open feedback culture where your voice and ideas are heard and valued.",
          variant: "inline",
        },
        {
          title: "Open-Door Policy",
          icon: FiHeart,
          description:
            "Experience transparent communication with management, encouraging open dialogue and approachability.",
          variant: "inline",
        },
        {
          title: "Supportive Leadership",
          icon: FiHeart,
          description:
            "Work under leaders who prioritize employee well-being and foster a culture of trust and support.",
          variant: "inline",
        },
        {
          title: "Employee Development Programs",
          icon: FiHeart,
          description:"Access tailored development programs that align with your career goals and aspirations.",
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
  return (
    <Heading
      lineHeight="short"
      fontSize={["2xl", null, "4xl"]}
      textAlign="center"
      as="p"
    >
      Want to Know about current Openings ?
      <Br />
      <Link
        href="https://plusitpark.zohorecruit.in/jobs/Careers"
        isExternal
        color="teal.500" // You can customize the color
        fontWeight="bold"
        textDecoration="none" // Disable underline

      >
        Visit our Official Careers Page to Know More
      </Link>
    </Heading>
  );
};


export default CareerPage;

