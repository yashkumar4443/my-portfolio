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

const OpenAISetup = () => {
  return (
    <Container>
      <Title>Getting Started with OpenAI: Setup, Concepts, and Smart Prompt Strategies</Title>

      <Paragraph>
        Artificial Intelligence is revolutionizing how developers create apps. From chatbots to automation, 
        OpenAI’s API makes it simple to integrate intelligent features into your workflow. Let’s look at how 
        to set up the OpenAI SDK, structure prompts effectively, and write better interactions.
      </Paragraph>

      <SectionTitle>1. Setting Up the OpenAI SDK</SectionTitle>
      <Paragraph>
        Install and initialize the OpenAI client in Node.js:
      </Paragraph>

      <CodeBlock>{`npm install openai
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getResponse() {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a concise assistant for developers." },
      { role: "user", content: "Explain the difference between var, let, and const in JavaScript." },
    ],
  });
  console.log(res.choices[0].message.content);
}

getResponse();`}</CodeBlock>

      <Paragraph>
        Always store your API keys securely using environment variables — never hardcode them into your code.
      </Paragraph>

      <SectionTitle>2. Understanding Prompts</SectionTitle>
      <Paragraph>
        Prompts are the instructions you send to the model. Clear, context-rich prompts yield much better answers. 
        Think of them as your interface to AI — precision and clarity make all the difference.
      </Paragraph>

      <CodeBlock>{`// Poor prompt:
"Write about JavaScript"

// Better prompt:
"Write a concise explanation of JavaScript fundamentals for beginners, 
with examples of variables and functions."`}</CodeBlock>

      <Paragraph>
        The better you guide the model, the more accurate and useful your responses will be.
      </Paragraph>

      <Divider />

      <Paragraph>
        That’s it for the basics! In the next part, we’ll explore advanced prompt techniques, 
        fine-tuning models, and integrating AI-powered features into real-world products.
      </Paragraph>
    </Container>
  );
};

export default OpenAISetup;
