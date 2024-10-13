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
import dynamic from 'next/dynamic';
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
      title="Privacy and Data Protection Policies | PITBP"
      description="At Plus IT Business Park, we prioritize your privacy. Learn more about how we protect your data, ensure transparency, and comply with regulations to safeguard your information."
/>

      <Box>
        <HeroSection />

        <FeaturesSection />

      
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 50 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
               PRIVACY AND
                <Br /> DATA POLICY
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                At Plus IT Business Park (PITBP), your privacy is our top priority. We are committed to safeguarding your personal information and ensuring that all data collected is handled with the highest level of security and transparency. Our privacy and data protection policies comply with industry standards and regulations, guaranteeing that your information is used responsibly and only for its intended purpose. We take proactive measures to protect your data from unauthorized access, and we ensure full transparency about how your data is collected, stored, and used.
               
              </FallInPlace>
            }
          >
            
          </Hero>
       
        </Stack>
      </Container>
    </Box>
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
          PRIVACY AND DATA POLICY
          <Br /> 
        </Heading>
      }
      description={
        <>
         
          <Br />
                  Guard your data like a precious secret: in its protection lies the sanctuary of privacy, where
        trust is nurtured and information finds its safe haven.”At Plus IT Business Park (plusitpark.com), we give the highest priority to how
        we handle data. This involves implementing stringent protocols to ensure the most robust
        safeguarding of user data. Our commitment to maintaining a Zero Data Leak policy underscores our dedication to data security and confidentiality.This section provides comprehensive insights into the diverse privacy policies we embrace and the measures we implement
        to uphold our data policies. The document elucidates our approach to data collection and
        sharing, ensuring transparency throughout the entire process. 


        <br/>
        <br/> 
         <br/>

        Our documentation meticulously outlines the privacy policies we follow, shedding light
on the types of information we gather and how we responsibly utilize that information.
We have designed the entire procedure to be straightforward and clear. If you seek additional clarity on our data policy or have any inquiries, please feel free to connect with us at
info@plusitpark.com. We are eager to assist you and address any questions you may have,
making your experience both informative and pleasant.

        <br/>
        <br/> 
         <br/>
         <b>
         What Kind of Data We Use
         </b>
         <br/>
        <br/> 
         <br/>At PITBP we acquire user information through various methods, including personal details like names and email addresses,
as well as technical information such as the type of operating systems and browsers utilized.
Certain data, like names, is obtained with user consent through various forms,
while others are acquired through technical handshakes. These technical handshakes come in various forms and occur when users engage with our services and technologies provided by Plus IT Business Park. 

<br/>
        <br/> 
         <br/>

             The gathered data is categorized into two distinct groups: Personally Identifiable Information (PII) and Non-personally Identifiable Information (non-PII). PII encompasses information that holds a significant sensitivity level and could personally identify an individual.
This category includes data like names, email addresses, phone numbers, and government
ID numbers, which users provide with their explicit consent. On the other hand, non-PII
consists of data that lacks personal identifiable information and primarily pertains to technical aspects, such as logs, header information, etc. This type of information is retrieved from
user requests, public IP addresses, request headers, and similar sources.  

<br/>
        <br/> 
         <br/>

In managing Personally Identifiable Information (PII), Plus IT Business Park adheres to
well-defined guidelines for utilizing such data.The PII, voluntarily provided by users with
their consent, is employed for various purposes, including troubleshooting, offering support,
providing updates, and disseminating other relevant information.Importantly, Type Seven
Technocrats upholds a strict policy of not sharing any information with external organizations under any circumstances. Simultaneously, the storage and handling of Personally
Identifiable Information prioritize the highest level of security protocols to ensure data integrity and safeguard user privacy.
<br/>
        <br/> 
         <br/>

In the management of Non-Personally Identifiable Information (Non-PII), we follow consistent guidelines for analyzing and tracking activities. The data, derived mainly from interactions with the service, encompasses elements like handshakes, request types, user agents,
cookies, and various headers. This information is utilized to analyze user interactions, ultimately aiming to improve service quality. It’s crucial to emphasize that, despite utilizing the
data for understanding user behavior, Type Seven Technocrats and its products do not have
the intention to target or track specific users based on this information.


<br/>
        <br/> 
         <br/>
         <b>
        DATA DELETION
         </b>
         <br/>
        <br/> 
        PLUS IT BUSIENSS PARK  provides the option to delete Personally Identifiable Information
(PII) submitted to us under various circumstances:
<br/>
<br/>
<b> User Request:</b> If a user requests the removal of their data.
<br/>
<br/>
<b>Law Enforcement Agency Request:</b> In response to a request from a law enforcement
agency
<br/>
<br/>
<b>
Reasonable Grounds for Deletion: </b>When there are valid reasons for data deletion.
In these instances, the data is permanently eliminated from the records of Plus IT Business
Park Thrissur, with no further retention of logs.
<br/>
<br/>
While we generally maintain a flexible approach to PII, allowing most services to be accessible without personal data, there are exceptions. We meticulously collect personal information, particularly for services involving payments. This practice is crucial for recordkeeping, compliance with laws, and assisting law enforcement as needed.

<br/> 
         <br/>
         <b>
        HOW WE USE PII
         </b>
         <br/>
        <br/> 
        We strictly adhere to a comprehensive policy and governance framework governing the use
of personal data and information provided by our users.The data inputted is securely stored
in isolated databases, incorporating multiple layers of data security and access control measures.
<br/>
<br/> The primary objective of utilizing this data is to improve the delivery of our products and
services, ensuring personalized service delivery. Notably, the data is not used for sending
news feeds unless users have explicitly opted for it. As staunch opponents of spam mails,
our data handling policy ensures that user data will never be utilized for sending unsolicited
messages. The data serves various purposes, including:
<br/>
        <br/> 
        <ol>
            <li>
            Personalized Recommendations: Crafting recommendations tailored to individual preferences.
            </li>

            <li>
            Assistance in Troubleshooting and Support: Providing support and troubleshooting
assistance based on user data.

            </li>

            <li>

            Personalized Advertisements: Ensuring that advertisements are personalized and relevant to the customer
            </li>

        </ol>
        <br/>
        <br/>
        By employing the data in these ways, our aim is to elevate the overall user experience and
provide services and recommendations that are precisely customized to individual needs.


<br/> 
         <br/>
         <b>
         DATA SHARING POLICY
         </b>
         <br/>
        <br/> 
        We reject the notion that sharing is caring when it comes to data within PLUS IT BUSINESS PARK. Our robust Data Sharing Policy explicitly forbids any form of data sharing, reflecting our commitment to treating data with the utmost care and responsibility as a responsible
technical organization
<br/>
<br/> Adhering strictly to the principle of not sharing data with external entities, we make an
exception only in the case of legal requirements, where law enforcement agencies may request data submission. Even in such instances, the sharing of sensitive data is governed
by rigorous conditions and legal agreements with the involved party. Importantly, Type
Seven Technocrats assumes full liability for any data breaches that may occur from our end,
demonstrating our dedication to safeguarding data and taking accountability for any unforeseen incidents related to data security

<br/>
<br/>
<br/>
         <b>
         HOW TO ACCESS AND CONTROL YOUR DATA
         </b>
         <br/>
        <br/> 
        We provide you with the flexibility to access and manage the data you’ve provided through
the dedicated dashboard of the respective service. This dashboard is designed to offer transparency into the data you’ve shared, empowering you to modify records as needed.

<br/>
        <br/> 
        Through the user-friendly dashboard interface, you have complete control to make necessary adjustments to the data at your convenience. Additionally, if you prefer, you can
achieve the same by reaching out to our support team via email. Rest assured, any requested
changes will be promptly handled from our end.


<br/>
<br/>
<br/>
         <b>
         COOKIES AND RELATED TECHNOLOGIES
         </b>
         <br/>
        <br/> 
        At PITBP our commitment to enhancing user interactions is manifested
through the utilization of various technologies, including Cookies, Web Beacons, and Log
Files.Cookies, acting as small text files stored on local computers, are employed under the
website’s browser instruction to provide essential personalized customization to our products. Upon loading the domain or page, these files are retrieved, ensuring a tailored user
experience.

<br>
</br>
<br/>
Concurrently, our proactive approach to data security is reflected in the meticulous maintenance of Logs. These logs serve the dual purpose of guaranteeing operational safety and
security while facilitating debugging when necessary. The information contained within
logs encompasses details such as the IP address of the request, request type, and technical specifics like headers and status codes. Additionally, our implementation of server-side
session management further reinforces our commitment to delivering customized services,
ultimately contributing to an enriched user experience


<br/>
<br/>
         <b>
         DATA REMOVAL POLICIES
         </b>
         <br/>
        <br/> 
        The Data Removal Policies encompass various guidelines that dictate the process of eliminating data from the records of PLUS IT BUSINESS PARK  and its products.
        <br/>
        <br/> 
        Data removal, as per this policy, entails the deletion of any records associated with an entity
from Type Seven Technocrats and its products. Users have the option to voluntarily initiate
the removal process through the dashboard, by emailing info@plusitpark.com, or by contacting
the PITBP Safe Center.Moreover, legal actions, as per the Constitution of the Republic
of India and at the request of law enforcement agencies, may also trigger data removal. The
policy acknowledges instances where data removal is considered ethical or aligns with a
code of ethics.
<br/>
<br/> 
Additionally, the data removal policy may be enforced if the data owner is aged 13 or below.For further details, do not hesitate to reach out to the PITBP Data Safe Center
<br/>
<br/>
         <b>
         POLICY FOR USERS UNDER 13 YEARS OLD
         </b>
         <br/>
        <br/> 
        PITBP has implemented a policy explicitly stating that it refrains from
collecting any data from individuals under the age of 13, aligning with privacy regulations
and standards that recognize the need for special considerations when handling data related
to minors.
<br/>
<br/>Additionally, the company adopts a proactive approach by not offering products or services
targeting children, specifically those under the age of 13. This strategic decision underscores
the company&#39;s dedication to responsible data practices, preventing any unintended collection
of information from this age group.Acknowledging the sensitivity surrounding the handling
of data from child users, Type Seven Technocrats emphasizes the importance of exercising
extra caution and diligence in this aspect. This underscores the company&#39;s commitment to
safeguarding the privacy and security of young users.
<br/>
<br/>

In situations where a user is identified as being under the age of 13, the company ensures
that such users are granted all privileges related to data security. This includes providing
them with an easily accessible option to remove their data from the company&#39;s servers. This
additional step reflects Type Seven Technocrats&#39; commitment to granting users, particularly
minors, control over their personal information and ensuring a transparent and secure data
handling process.

<br/>
<br/>
         <b>
         PLUS IT SAFE CENTER

         </b>
         <br/>
        <br/> 
        The Plus IT Safe Center, established by Plus IT Business Park, is a proactive initiative committed to ensuring the implementation of safe and secure data policies and regulations. This initiative extends its focus to both internal and external aspects of data management within the organization
        <br/>
        <br>
        </br>
        In situations involving data removal, privacy violations, content removal, or any other concerns related to data security, users can confidently turn to the Plus IT Safe Center for assistance. This specialized center is designed to take the lead in addressing and resolving various issues related to data integrity, security, and compliance. The Plus IT Safe Center serves as a central hub for users to seek help and guidance, showcasing the organization’s commitment to maintaining a secure and trustworthy data environment. Whether users encounter challenges with their data or have specific concerns about privacy, the Plus IT Safe Center is equipped to provide timely and effective assistance.
        <br/>
        <br/> 
        This initiative reflects Plus IT Business Park’s dedication to prioritizing data protection and user security, reinforcing the organization’s commitment to transparency, accountability, and user satisfaction. Users can rest assured that the Plus IT Safe Center is ready to assist them in navigating any data-related issues, contributing to a safer and more secure digital experience.

        <br/>
        <br/>
        Head of Opertions ,Plus Safe Center
        <br/>
        <b> Mr Sreejesh R</b>
        <br></br>
        Chief Technology Officer ,
        <br></br>
        sree@plusitpark.com | cto@plusitpark.com 

        <br/>
<br/>
         <b>
         DATA OPERATIONS ADMINISTRATION

         </b>
         <br/>
        <br/> 
        At Plus IT Business Park, the Data Operations and Administration agency assumes a critical role in the update and administration of policies. This department is dedicated to ensuring that the organization s policies undergo regular review and updates, aligning with industry standards and regulatory requirements.
        <br/>
        <br/>
        The Data Ops and Admin Department places significant importance on conducting routine overviews to uphold a comprehensive understanding of data operations within the organization. Their commitment lies in implementing and enforcing Standard Operating Procedures (SOPs) to guarantee a well-structured and secure approach to data management.

For additional inquiries or to establish contact, please feel free to reach out to us at <b>  info@plusitpark.com.</b>

<br/>
        <br/>
        Head of Opertions ,Data Administration
        <br/>
        <b> Mr Jovin C Vargheese</b>
        <br></br>
        Chief Executive Officer ,
        <br></br>
        ceo@plusitpark.com 


        <br/>
<br/>
         <b>
         CONCLUSION

         </b>
         <br/>
        <br/> 
        In summary, the quotation from Daniel Keys Morgan You can have data without information  but you cannot have information without data strongly aligns with the core values and practices of Plus IT Business Park. The company places paramount importance on user data, implementing a Zero Data Leak Policy and ensuring robust safeguards for user information. Transparency is a cornerstone of their approach, evident in the comprehensive documentation outlining privacy policies, information collection methods, and usage protocols. Users seeking clarification on their data policy are encouraged to reach out to the company via 
        <b> info@plusitpark.com.
          </b>
          <br/>
          <br/> Plus IT Business Park collects various types of data, including personal details and technical information, each handled with distinct protocols. Personally Identifiable Information (PII) and Non-personally Identifiable Information (non-PII) are categorized, and stringent measures are applied to protect user privacy. The company provides users with the option to delete their data through various means, such as user requests, law enforcement agency requests, or when there are valid grounds for deletion. The company’s commitment to responsible data practices extends to the secure storage of personal data with multiple layers of security, focusing on enhancing product and service delivery. The data is utilized for personalized recommendations, troubleshooting support, and personalized advertisements, all aimed at improving the overall user experience.

<br/>
          <br/>

          Plus IT Business Park enforces a strict Data Sharing Policy, prohibiting any form of data sharing except under legal requirements, where sharing is governed by rigorous conditions and legal agreements. The company assumes liability for any data breaches, underscoring its dedication to data security and accountability. Users are provided with tools to access and control their data through the service dashboard, ensuring a seamless and user-friendly experience. Technologies like Cookies, Web Beacons, and Log Files are leveraged to enhance user interactions, with a focus on customization and security.

<br/>
          <br/>
          The Data Removal Policies delineate guidelines for the voluntary removal of data by users or as a result of legal actions. Special consideration is given to users aged 13 or below, emphasizing ethical and responsible data handling practices. Finally, the specific data policy regarding users below the age of 13 reinforces Plus IT Business Park’s commitment to safeguarding the privacy and security of young users. The company not only refrains from collecting data from this age group but also provides additional privileges for data security and an easy option for data removal, highlighting their dedication to transparency and responsible data practices.




        </>


      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
       
        
      ]}
    />
  );
};





export default CareerPage;

