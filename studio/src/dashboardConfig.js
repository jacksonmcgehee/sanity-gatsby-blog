export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "606c5b1c8253c56dcb9ac0b9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gg4jyy71",
                  apiId: "e8dae9d1-a923-48a5-ab5d-7b49c2f71af3",
                },
                {
                  buildHookId: "606c5b1c04ad8370149e8599",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9mhbn9f3",
                  apiId: "95303cfd-f582-44f9-97ec-adfb82e91433",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jacksonmcgehee/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9mhbn9f3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
