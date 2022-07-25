import React from "react";
import SimpleReactFooter from "simple-react-footer";
import '../css/style.css'

export default function App() {
  const description =
    "Somos una empresa que llevamos mucho tiempo, asi, un buen, y pues somos rebuenos en lo que hacemos, en fin, espero que les haya gustado esta descripción.  Podre Pebro";
  const title = "Daewoo";
  const columns = [
    {
      title: "Navega",
      resources: [
        {
          name: "Ginga",
          link: "/about"
        },
        {
          name: "Blog",
          link: "/bio.js"
        },
        {
          name: "Contacto",
          link: "/contact"
        },
      ]
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacidad",
          link: "/privacy"
        },
        {
          name: "Términos y condiciones",
          link: "/terms"
        }
      ]
    },
    {
      title: "Visita",
      resources: [
        {
          name: "Tutti",
          link: "https://tutti.com.mx/"
        },
        {
          name: "Cultura",
          link: "/culture"
        }
      ]
    }
  ];
  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      linkedin="fluffy_cat_on_linkedin"
      facebook="fluffy_cat_on_fb"
      twitter="fluffy_cat_on_twitter"
      instagram="fluffy_cat_live"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="fluffy_cats_collections"
      copyright="black"
      iconColor="black"
      backgroundColor="white"
      fontColor="black"
      copyrightColor="darkgrey"
    />
  );
}
