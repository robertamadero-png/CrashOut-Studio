export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectContext = {
  heading: string;
  description: string;
  image: string;
  alt: string;
};

export type ProjectDetail = {
  id: string;
  slug: string;
  title: string;
  heroImage: string;
  heroImageAlt: string;
  description: string;
  problem: ProjectContext;
  inspiration: ProjectContext;
  solution: ProjectContext;
  carouselImages: [ProjectImage, ProjectImage, ProjectImage, ProjectImage, ProjectImage];
};

const loopAsset = (fileName: string) => `/assets/projects/loop-magazine/${fileName}`;
const abeyanceAsset = (fileName: string) => `/assets/projects/abeyance/${fileName}`;
const osakaAsset = (fileName: string) =>
  `/assets/projects/osaka-suppliers-catalogue/${fileName}`;
const sinceYouBeenGoneAsset = (fileName: string) =>
  `/assets/projects/since-you-been-gone/${fileName}`;

export const projects: ProjectDetail[] = [
  {
    id: "01",
    slug: "abeyance",
    title: "ABEYANCE",
    heroImage: abeyanceAsset("abeyance-image-1.png"),
    heroImageAlt: "Open Abeyance concept book featuring The Fortress",
    description:
      "Concept book for an RPG-style video game, featuring art and elements that help visualize its core concept, overall story, and characters. Abeyance is a story of self-discovery and choice, where you follow the characters as they explore this world and its inhabitants.",
    problem: {
      heading: "The problem",
      description:
        "The project came from a passion for creating and sharing video games, as well as the desire to bring together multiple ideas for the game's story and world.",
      image: abeyanceAsset("abeyance-image-2.jpg"),
      alt: "Abeyance concept book artwork",
    },
    inspiration: {
      heading: "Inspiration",
      description:
        "Mostly inspired by games like Deltarune, OneShot, OMORI, and many others.",
      image: abeyanceAsset("abeyance-image-3.jpg"),
      alt: "Abeyance concept book character artwork",
    },
    solution: {
      heading: "Solution",
      description:
        "Creating a concept book that serves as a visual pitch for the project, bridging the gap between imagination and reality.",
      image: abeyanceAsset("abeyance-image-4.jpg"),
      alt: "Abeyance printed concept book spread",
    },
    carouselImages: [
      {
        src: abeyanceAsset("abeyance-image-5-a.jpg"),
        alt: "Abeyance concept book spread, image 5",
      },
      {
        src: abeyanceAsset("abeyance-image-5-b.jpg"),
        alt: "Abeyance concept book spread, second supplied image 5",
      },
      {
        src: abeyanceAsset("abeyance-image-6.jpg"),
        alt: "Abeyance concept book spread, image 6",
      },
      {
        src: abeyanceAsset("abeyance-image-7.jpg"),
        alt: "Abeyance concept book spread, image 7",
      },
      {
        src: abeyanceAsset("abeyance-image-8.jpg"),
        alt: "Abeyance concept book spread, image 8",
      },
    ],
  },
  {
    id: "02",
    slug: "loop-magazine",
    title: "LOOP MAGAZINE",
    heroImage: loopAsset("loop-img-4.jpeg"),
    heroImageAlt: "Loop Magazine cover featuring a fashion editorial titled Dress It",
    description:
      "An alternative fashion magazine for teenagers and young adults interested in discovering their best selves through fashion, while also exploring the historical background of various subcultures to help them understand the reasons behind these specific styles of dress.",
    problem: {
      heading: "The problem",
      description:
        "People would like to know how to find their style, how to get unique clothing, how to combine materials for experiment and have unique looks",
      image: loopAsset("loop-img-2.jpeg"),
      alt: "Loop Magazine spread featuring an alternative fashion portrait",
    },
    inspiration: {
      heading: "Inspiration",
      description:
        "I was inspired by some fashion magazines and some k-pop & pop songs that gave me a runway vibe and how your clothes and accessories can look when you are searching inside your closet.",
      image: loopAsset("loop-img-1.jpeg"),
      alt: "Loop Magazine gyaru fashion spread",
    },
    solution: {
      heading: "Solution",
      description:
        "Adding famous people for the viewers to feel a connection with the topics inside the magazine, vibrant colores and clothing elements that makes it feel less empty.",
      image: loopAsset("loop-img-6.jpeg"),
      alt: "Loop Magazine dual-page fashion editorial",
    },
    carouselImages: [
      {
        src: loopAsset("loop-img-3.jpeg"),
        alt: "Loop Magazine spread featuring David Bowie",
      },
      {
        src: loopAsset("loop-img-5.jpeg"),
        alt: "Loop Magazine goth fashion spread",
      },
      {
        src: loopAsset("loop-img-8.jpeg"),
        alt: "Loop Magazine genderless fashion spread",
      },
      {
        src: loopAsset("loop-img-9.jpeg"),
        alt: "Loop Magazine accessories editorial spread",
      },
      {
        src: loopAsset("loop-img-7.jpeg"),
        alt: "Loop Magazine gyaru fashion article",
      },
    ],
  },
  {
    id: "03",
    slug: "since-you-been-gone",
    title: "SINCE YOU BEEN GONE",
    heroImage: "/assets/Since-you-been-gone.png",
    heroImageAlt: "Since You Been Gone album artwork",
    description: 'Album cover for the song "Since you been gone" by Kelly Clarkson',
    problem: {
      heading: "The problem",
      description:
        "Create al album in base of a random song and a with the style of a random photographer.",
      image: sinceYouBeenGoneAsset("album-1.png"),
      alt: "Since You Been Gone album artwork photographed at night",
    },
    inspiration: {
      heading: "Inspiration",
      description:
        "In base of the 2000's styles of the song and the Photograper Olivia Bee, Mostly in how she overlaps photos and the natural backgrounds.",
      image: sinceYouBeenGoneAsset("album-2.png"),
      alt: "Since You Been Gone album artwork featuring a styled portrait and platform boot",
    },
    solution: {
      heading: "Solution",
      description:
        "Overlaping images and textures to the principal image and making use of the natural backgrounds",
      image: "/assets/Since-you-been-gone.png",
      alt: "Since You Been Gone album cover",
    },
    carouselImages: [
      {
        src: sinceYouBeenGoneAsset("sybg-img-1.jpg"),
        alt: "Night fashion portrait beside a meeting-point sign",
      },
      {
        src: sinceYouBeenGoneAsset("sybg-img-2.jpg"),
        alt: "Night fashion portrait posing beside a stone wall",
      },
      {
        src: sinceYouBeenGoneAsset("sybg-img-3.jpg"),
        alt: "Platform boot with leopard-print tights",
      },
      {
        src: sinceYouBeenGoneAsset("sybg-img-4.jpg"),
        alt: "Fashion portrait holding a platform boot",
      },
      {
        src: sinceYouBeenGoneAsset("sybg-img-5.jpg"),
        alt: "Fashion portrait with leopard-print styling",
      },
    ],
  },
  {
    id: "04",
    slug: "Osaka Suppliers Catalogue",
    title: "OSAKA SUPPLIERS CATALOGUE",
    heroImage: osakaAsset("osc-img-1.jpg"),
    heroImageAlt: "Osaka Suppliers Catalogue handmade cover",
    description:
      "A catalogue that can help you find suppliers inside Osaka, Japan in case you want to open a store in there",
    problem: {
      heading: "The problem",
      description: "A guide that can help you find suppliers inside Osaka, Japan",
      image: osakaAsset("osc-img-2.jpg"),
      alt: "Osaka Suppliers Catalogue exterior binding",
    },
    inspiration: {
      heading: "Inspiration",
      description:
        "Japanese modernism design that was influenced by the modernism and bauhause school by the european movements.",
      image: osakaAsset("osc-img-3.jpg"),
      alt: "Osaka Suppliers Catalogue printed spread",
    },
    solution: {
      heading: "Solution",
      description:
        "A Catalogue sectioned by colors in different categories of suppliers, some of the elements were handmade and they follow the water and mountains concept for the interior design.",
      image: osakaAsset("osc-img-4.jpg"),
      alt: "Osaka Suppliers Catalogue interior pages",
    },
    carouselImages: [
      {
        src: osakaAsset("osc-img-5.jpg"),
        alt: "Osaka Suppliers Catalogue image 5",
      },
      {
        src: osakaAsset("osc-img-6.jpg"),
        alt: "Osaka Suppliers Catalogue image 6",
      },
      {
        src: osakaAsset("osc-img-7.jpg"),
        alt: "Osaka Suppliers Catalogue image 7",
      },
      {
        src: osakaAsset("osc-img-8.jpg"),
        alt: "Osaka Suppliers Catalogue image 8",
      },
      {
        src: osakaAsset("osc-img-9.jpg"),
        alt: "Osaka Suppliers Catalogue image 9",
      },
    ],
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, ProjectDetail>;
