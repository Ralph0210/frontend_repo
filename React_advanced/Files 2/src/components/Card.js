import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack align="flex-start" bg='white' borderRadius={'lg'}>
      <Image src={imageSrc} borderRadius='lg' fallbackSrc='https://via.placeholder.com/250'/>
      <Heading size="md" color="black" padding="2">{title}</Heading>
      <Text color="black" padding="2">{description}</Text>
      <Text as='b' color="black" padding="2">See more   <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/></Text>
      
    </VStack>
  );
};

export default Card;
