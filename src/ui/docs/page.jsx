"use client";
import DocsLeftBar from "@/components/docs-left-bar/docsLeftBar";
import PageRendering from "@/components/page-rendering/pageRendering";
import React from "react";

const DocsPage = () => {
  const content = [
    {
      type: "heading",
      value: "Documentation",
    },
    {
      type: "subtitle",
      value: "Introduction",
    },
    {
      type: "paragraph2",
      items: [
        {
          type: "text",
          value:
            "This documentation will help you get familiar with the resources of the ",
        },
        {
          type: "bold",
          value: "Rick and Morty API ",
        },
        {
          type: "text",
          value:
            "and show you how to make different queries, so that you can get the most out of it.",
        },
      ],
    },
    {
      type: "subtitle",
      value: "GraphQL",
    },
    {
      type: "link",
      value: "https://rickandmortyapi.com/graphql",
    },
    {
      type: "subtitle",
      value: "REST",
    },
    {
      type: "link",
      value: "https://rickandmortyapi.com/api",
    },
    {
      type: "subtitle",
      value: "Code Example",
    },
    {
      type: "code",
      value: `
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
     }
     results {
        name
     }
    }
    location(id: 1) {
      id
   }
   episodesByIds(ids: [1, 2]) {
     id
    }
  } `,
    },
  ];
  return (
    <div className="flex">
      <DocsLeftBar />
      <PageRendering content={content} />
    </div>
  );
};

export default DocsPage;
