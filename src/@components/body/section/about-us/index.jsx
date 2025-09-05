import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "./useCountUp";
import {
  Box,
  Heading,
  Image,
  Text,
  SimpleGrid,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { portfolioData } from "../../../data/dami-data";

const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const tabs = [
    { id: "story", label: "Our Story", icon: "📖" },
    { id: "mission", label: "Mission & Vision", icon: "🎯" },
    { id: "values", label: "Our Values", icon: "💎" },
  ];

  const stats = [
    {
      id: "projects",
      label: "Projects Completed",
      value: 50,
      suffix: "+",
      icon: "🏗️",
    },
    {
      id: "clients",
      label: "Happy Clients",
      value: 100,
      suffix: "+",
      icon: "🤝",
    },
    {
      id: "experience",
      label: "Years Experience",
      value: 15,
      suffix: "+",
      icon: "⏳",
    },
    { id: "team", label: "Expert Team", value: 25, suffix: "+", icon: "👥" },
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "We deliver superior quality in every project we undertake",
      icon: "🌟",
    },
    {
      title: "Innovation",
      description: "Embracing cutting-edge technology and creative solutions",
      icon: "💡",
    },
    {
      title: "Integrity",
      description: "Building trust through transparency and ethical practices",
      icon: "🤝",
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally responsible construction",
      icon: "🌱",
    },
  ];

  const projectTypes = [
    { name: "Office Buildings", icon: "🏢" },
    { name: "Apartments", icon: "🏠" },
    { name: "Schools & Universities", icon: "🎓" },
    { name: "Hospitals", icon: "🏥" },
    { name: "Factories", icon: "🏭" },
    { name: "Shopping Malls", icon: "🏪" },
    { name: "Hotels", icon: "🏨" },
    { name: "Places of Worship", icon: "🕌" },
    { name: "Airports", icon: "✈️" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getTabContent = () => {
    switch (activeTab) {
      case "story":
        return (
          <div className="tab-content">
            <div className="content-grid">
              <div className="text-content">
                <h3>Building Indonesia's Future</h3>
                <p>
                  PT ALTINDO MITRA PERKASA adalah perusahaan yang bergerak di
                  bidang engineering, construction dan general trading...
                </p>
              </div>
              <div className="image-content">
                <div className="image-wrapper">
                  <img
                    src="https://cdn.itm.ac.in/2024/05/mechanical-engineering-latest-trends-job-prospects-and-future-scopes.webp"
                    alt="Our Story"
                  />
                  <div className="image-overlay">
                    <span>PT. ALTINDO MITRA PERKASA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "mission":
        return (
          <div className="tab-content">
            <div className="mission-vision-grid">
              <div className="mission-card">
                <div className="card-icon">🎯</div>
                <h4>Our Mission</h4>
                <p>
                  To provide exceptional engineering and construction
                  services...
                </p>
              </div>
              <div className="vision-card">
                <div className="card-icon">🌟</div>
                <h4>Our Vision</h4>
                <p>
                  To become the leading construction and engineering company...
                </p>
              </div>
            </div>
          </div>
        );
      case "values":
        return (
          <div className="tab-content">
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section id="about" className="about-us-section" ref={sectionRef}>
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <span className="section-badge">About Us</span>
            <h2>Transforming Visions Into Reality</h2>
            <p>
              Your trusted partner in construction and engineering excellence
            </p>
          </div>

          {/* Stats Section */}
          <div className={`stats-section ${isVisible ? "animate" : ""}`}>
            <div className="stats-grid">
              {stats.map((stat, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true });
                const count = useCountUp(stat.value, isInView);

                return (
                  <motion.div
                    key={stat.id}
                    className="stat-card"
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">
                      {count}
                      {stat.suffix}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Tabs Section */}
          <div className="tabs-section">
            <div className="tabs-nav">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tabs-content">{getTabContent()}</div>
          </div>

          {/* Project Types */}
          <div className="project-types-section">
            <h3>Our Expertise</h3>
            <p>We specialize in various types of construction projects</p>
            <div className="project-types-grid">
              {projectTypes.map((type, index) => (
                <div key={index} className="project-type-card">
                  <div className="project-icon">{type.icon}</div>
                  <span>{type.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h3>Ready to Start Your Project?</h3>
              <p>Let's work together to bring your vision to life</p>
              <div className="cta-buttons">
                <button className="btn-primary">
                  <a href="#contact">Get Started</a>
                </button>
                <button className="btn-secondary" onClick={onOpen}>
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Portfolio Modal (List) */}
<Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Our Portfolio</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {portfolioData.map((item) => (
          <Box
            key={item.id}
            bg="white"
            boxShadow="md"
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            onClick={() => {
              setSelectedPortfolio(item); // simpan data yg diklik
              onClose(); // tutup modal list
            }}
          >
            <Image
              src={item.img}
              alt={item.title}
              objectFit="cover"
              w="100%"
              h="200px"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={1}>
                {item.title}
              </Heading>
              <Text fontSize="sm" color="gray.500">
                {item.category} • {item.year}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </ModalBody>
  </ModalContent>
</Modal>

{/* Portfolio Detail Modal */}
<Modal
  isOpen={!!selectedPortfolio}
  onClose={() => setSelectedPortfolio(null)}
  size="xl"
  isCentered
>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>{selectedPortfolio?.title}</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Image
        src={selectedPortfolio?.img}
        alt={selectedPortfolio?.title}
        objectFit="cover"
        w="100%"
        h="300px"
        borderRadius="md"
        mb={4}
      />
      <Text fontSize="sm" color="gray.500" mb={2}>
        {selectedPortfolio?.category} • {selectedPortfolio?.year}
      </Text>
      <Text>{selectedPortfolio?.description}</Text>
    </ModalBody>
  </ModalContent>
</Modal>
    </>
  );
};

export default AboutUsSection;
