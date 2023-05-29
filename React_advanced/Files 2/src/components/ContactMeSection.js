import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe' | 'openSource' | 'other',
      comment: "",
    },
    onSubmit: async (values, { resetForm }) => {

    // Call the submit function with the form values
    await submit('/api/submit', values);

    if (!isLoading && response) {
      // Handle the response
      if (response.type === 'success') {
        // Show success alert with the first name
        onOpen('success', response.message);

        // Reset the form
        resetForm();
      } else if (response.type === 'error') {
        // Show error alert
        onOpen('error', response.message);
      }
    }
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      email: Yup.string().required("Required").email('Invalid email address'),
      comment: Yup.string().required('Required').min(25, 'Must be at least 25 characters'),
    }),
  });

  const { touched, errors, handleSubmit, getFieldProps } = formik;

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
            <FormControl isInvalid={touched.firstName && errors.firstName}>
            <FormLabel htmlFor="firstName">Name</FormLabel>
            <Input {...getFieldProps('firstName')} />
              {touched.firstName && errors.firstName && (
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              )}
            </FormControl>

              <FormControl isInvalid={touched.email && errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input {...getFieldProps('email')}/>
                {touched.email && errors.email && (
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                )}
                
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...getFieldProps('type')} id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={touched.comment && errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  {...getFieldProps('comment')}
                  height={250}
                />
                {touched.comment && errors.comment && (
                  <FormErrorMessage>{errors.comment}</FormErrorMessage>
                )}
                
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
              Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
