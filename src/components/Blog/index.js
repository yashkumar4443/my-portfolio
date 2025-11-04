import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const posts = [
  { id: 1, title: "Getting Started with OpenAI: Setup, Concepts, and Smart Prompt Strategies", slug: "openai-setup-and-prompt-strategies" },
  { id: 2, title: "Setting Up Staging and Production Environments in React Native", slug: "staging-and-production-in-react-native" },
  { id: 3, title: "Managing Work and Personal Projects: Handling Two GitHub Accounts Smoothly", slug: "manage-two-github-accounts" },
  { id: 4, title: "Improve React Native App Speed with Image Optimization", slug: "optimize-images-react-native" },
  { id: 5, title: "Build a Full-Stack Starter Template Using Reenode", slug: "fullstack-boilerplate-reenode" },
  { id: 6, title: "A Friendly Introduction to JavaScript Generators", slug: "introduction-to-generators" },
  { id: 7, title: "Implementing JWT Authentication in Node.js Made Simple", slug: "jwt-authentication-nodejs" },
  { id: 8, title: "How to Build a To-Do App with React Hooks", slug: "todo-app-react-hooks" },
  { id: 9, title: "Creating a Lightweight SPA Router in Vanilla JavaScript", slug: "spa-routing-vanilla-js" },
  { id: 10, title: "Simple Static Routing in Node.js Explained", slug: "static-routing-nodejs" },
  { id: 11, title: "Understanding JavaScript Classes Beyond the Basics", slug: "javascript-classes-explained" },
  { id: 12, title: "Redux Thunk Explained: Why It’s Just a Simple Action Creator", slug: "redux-thunk-explained" },
  { id: 13, title: "How Online Learning Helped Boost My Developer Confidence", slug: "developer-confidence-journey" },
  { id: 14, title: "Exploring Variable Scope in JavaScript: Local, Global, and Lexical", slug: "variable-scope-javascript" },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Read My Blog</h1>

      <div className="blog-list">
        {posts.map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`} className="blog-item">
            <h2 className="blog-post-title">{post.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
