"use client";
import DocsSideBar from "@/components/docs-side-bar/docsSideBar";
import PageRendering from "@/components/page-rendering/pageRendering";
import EditThisPage from "@/components/edit-this-page/editThisPage";

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
      content: [
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
      ]
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
      content: [
        {
          type: "link",
          value: "https://rickandmortyapi.com/graphql",
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
  } 
  `,
        },
        {
          type: "block",
          value: "New to GraphQL? check the docs ",
          text_link: "here",
          link: "https://graphql.org/learn/",
        }
      ],
    },
    {
      type: "subtitle",
      value: "REST",
      content: [
        {
          type: "link",
          value: "https://rickandmortyapi.com/api",
        },
        {
          type: "text",
          value: "The base url contains information about all available API's resources. All requests are GET requests and go over https. All responses will return data in json."
        },
        {
          type: "text_code",
          value: "GET"}
      ],
    },
  ];

  const sideBarContent = [
    {
      title: "Introduction",
      items: [
        {
          title: "GraphQL",
          link: "graphql",
        },
        {
          title: "REST",
          link: "#rest",
        },
        {
          title: "Info and Pagination",
          link: "#info-and-pagination",
        },
        {
          title: "JavaScript client",
          link: "#javascript-client",
        },
      ],
    },
    {
      title: "Character",
      items: [
        {
          title: "Character schema",
          link: "character-schema",
        },
        {
          title: "Get all characters",
          link: "get-all-characters",
        },
        {
          title: "Get a single character",
          link: "get-a-single-character",
        },
        {
          title: "Get multiple characters",
          link: "get-multiple-characters",
        },
      ],
    },
    {
      title: "Location",
      items: [
        {
          title: "Location schema",
          link: "location-schema",
        },
        {
          title: "Get all locations",
          link: "get-all-locations",
        },
        {
          title: "Get a single location",
          link: "get-a-single-location",
        },
        {
          title: "Get multiple locations",
          link: "get-multiple-locations",
        },
        {
          title: "Filter locations",
          link: "filter-locations",
        },
      ],
    },
    {
      title: "Episode",
      items: [
        {
          title: "Episode schema",
          link: "episode-schema",
        },
        {
          title: "Get all episodes",
          link: "get-all-episodes",
        },
        {
          title: "Get a single episode",
          link: "get-a-single-episode",
        },
        {
          title: "Get multiple episodes",
          link: "get-multiple-episodes",
        },
        {
          title: "Filter episodes",
          link: "filter-episodes",
        },
      ],
    },
    {
      title: "Libraries",
      items: [
        {
          title: "Dart",
          link: "episode-schema",
        },
        {
          title: "Elixir",
          link: "get-all-episodes",
        },
        {
          title: "Go",
          link: "get-a-single-episode",
        },
        {
          title: "Java",
          link: "get-multiple-episodes",
        },
        {
          title: ".NET",
          link: "filter-episodes",
        },
        {
          title: "PHP",
          link: "episode-schema",
        },
        {
          title: "Python",
          link: "get-all-episodes",
        },
        {
          title: "R",
          link: "get-a-single-episode",
        },
        {
          title: "Ruby",
          link: "get-multiple-episodes",
        },
        {
          title: "Rust",
          link: "filter-episodes",
        },
        {
          title: "Swift",
          link: "filter-episodes",
        },
      ],
    },
  ]
  return (
    <div>
      <div className="flex px-[27px]">
        <DocsSideBar content={sideBarContent} />
        <PageRendering content={content} />
      </div>
      <EditThisPage />
    </div>


  );
};

export default DocsPage;
