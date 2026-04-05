import React from "react";
import styled from "styled-components";
 
const Container = styled.div`
  max-width: 900px;
  margin: 100px auto;
  padding: 40px 20px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.8;
  font-family: "Inter", sans-serif;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;
const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text_secondary};
`;
const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.text_primary};
`;
const CodeBlock = styled.pre`
  background-color: ${({ theme }) => theme.card};
  padding: 16px;
  border-radius: 10px;
  overflow-x: auto;
  margin: 20px 0;
  font-size: 0.9rem;
  font-family: "Fira Code", monospace;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
const Divider = styled.hr`
  margin: 40px 0;
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
 
export const StagingProduction = () => (
  <Container>
    <Title>Setting Up Staging and Production Environments in React Native</Title>
    <Paragraph>
      Managing multiple environments in React Native helps you test safely before shipping to real users.
      With the right setup, you can switch between staging and production with a single command.
    </Paragraph>
 
    <SectionTitle>1. Install react-native-config</SectionTitle>
    <Paragraph>This library lets you load environment variables from `.env` files.</Paragraph>
    <CodeBlock>{`npm install react-native-config`}</CodeBlock>
 
    <SectionTitle>2. Create Environment Files</SectionTitle>
    <CodeBlock>{`# .env.staging
API_URL=https://staging.api.example.com
APP_ENV=staging
 
# .env.production
API_URL=https://api.example.com
APP_ENV=production`}</CodeBlock>
 
    <SectionTitle>3. Use in Your Code</SectionTitle>
    <CodeBlock>{`import Config from "react-native-config";
 
console.log(Config.API_URL);   // https://staging.api.example.com
console.log(Config.APP_ENV);   // staging`}</CodeBlock>
 
    <SectionTitle>4. Run with Different Environments</SectionTitle>
    <CodeBlock>{`# Android
ENVFILE=.env.staging react-native run-android
ENVFILE=.env.production react-native run-android
 
# iOS
ENVFILE=.env.staging react-native run-ios
ENVFILE=.env.production react-native run-ios`}</CodeBlock>
 
    <Paragraph>
      You can also add scripts to your `package.json` to simplify this further and reduce human error across your team.
    </Paragraph>
    <Divider />
    <Paragraph>
      With this setup, your staging builds talk to test APIs and your production builds are always clean and safe.
    </Paragraph>
  </Container>
);
 
export default StagingProduction;
 