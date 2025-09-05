import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  SimpleGrid,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import { product } from "../../../data/dami-data";
import "./index.scss";
import { SlickProduct } from "./slickProduct";


const categories = [
  "General Trading",
  "Fabrication",
  "Machining",
  "Interior",
  "Construction",
  "Electrical",
  "Security System",
];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProducts = product.filter(
    (item) => item.kategoriProduct === activeCategory
  );

  return (
    <div className="product-catalog">
      <Box className="catalog-header">
        <Heading color="white">Our Product Catalog</Heading>
        <Text color="white">
          Explore our comprehensive range of products and services
        </Text>
      </Box>

      <Flex className="category-nav" flexWrap="wrap" justify="center" mb={6}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${cat === activeCategory ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            <div className="underline" />
          </button>
        ))}
      </Flex>

      <Box className="catalog-container">
        {product.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {filteredProducts.map((item, idx) => (
             <Card
  key={idx}
  border="1px solid #e28316ff" 
  boxShadow="0 4px 10px rgba(235, 161, 65, 0.3))" 
  borderRadius="xl"
  overflow="hidden"
  transition="all 0.3s ease"
  _hover={{
    transform: "translateY(-5px) scale(1.02)",
    boxShadow: "0 8px 10px rgba(235, 161, 65, 0.3)",
    borderColor: "#e28316ff", 
  }}
>
                <CardBody>
                    {/* slider gambar dalam card */}
                    <Box w="100%" h="350px" mb={4}>
                      <SlickProduct getNameProduct={item.nameProduct} />
                    </Box>
                  
                  
                  <Stack spacing={2}>
                    <Heading size="md" color="orange.400">{item.nameProduct}</Heading>
                    <Text fontSize="sm" noOfLines={3}>
                      {item.deskripsion || "Deskripsi tidak tersedia"}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        ) : (
          <Text color="white" textAlign="center" fontSize="lg" mt={10}>
            No products found in this category.
          </Text>
        )}
      </Box>
    </div>
  );
};

export default ProductSection;
