# The Alleyway

## Table of Contents

1. [Getting Started](#getting-started)
2. [File Structure](#file-structure)
3. [Technologies](#technologies)<br />
   - [Prismic](#prismic)
4. [Developers](#developers)

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/Scout-NU/alejandra-site.git
```

2. **Change directories**

```bash
cd alejandra-site
```

3. **Set up environment variables**
   In the project directory there is a file called `env_example`, which holds all the necessary environment variables. Most importantly, it contains the Prismic access token.

Copy the file and add the values to the variables.

```sh
cp env_example .env
```

```sh
PRISMIC_URL="XXXXXXXXXXXXXXX"
```

4. **Install the packages**

```bash
# In the project directory
npm install
```

5. **Run the server locally**

```bash
npm run dev
```

Now the server will run locally, most likely on `http://localhost:3000`. Your work will be displayed, and as changes are saved it will auto-refresh the site.

## :file_folder: File Structure

A quick look at the top-level file structure used

    .
    ├── /node_modules
    ├── /pages
    ├── /public
    ├── /styles
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages)are automatically installed.

2.  **`/pages`**: This directory contains the routes, with each route in a seperate file. Next.js then pre-renders every page in the **`/pages`** directory.

3.  **`/public`**: This directory is used by Next.js to statically serve files.

4.  **`/styles`**: This directory contains the global styles utilized in the project.

5.  **`.gitignore`**: This file tells git which files will not maintain a version history, thus don't need to be tracked.

6.  **`package-lock.json`**: (First see `package.json`, below) This is an automatically generated file based on the exact versions of your npm dependencies used for the project. **You won't change this file directly.**

7.  **`package.json`**: A manifest file for Node.js projects, this file includes the metadata for the project. Metadat incluedes the project's name, author, etc. This manifest is how npm knows which packages to isntall to run the project.

6.**`README.md`**: A reference text file containing information about the project.

## :gear: Technologies

The website is built on the following technologies:

- [NextJS](https://nextjs.org/): Static site generator for the site
- [Netlify](https://www.netlify.com/): Site hosting provider
- [Prismic](https://prismic.io/): Content Management Site

### :diamond_shape_with_a_dot_inside: Prismic

The Alleyway website uses [Prismic](https://prismic.io/) as its Content Management System (CMS). Prismic is a headless CMS that offers the flexibility to easily manage content. To update data in Prismic, the following must be done:

1. ** Publish document on Prismic ** Publishing new data will not immediately show up on the site, since the data will need to be queried and stored in the build.

2. ** Restart the development server** When the server restarts the new data published is grabbed and used in the build.

Prismic documentation: [https://prismic.io/docs](https://prismic.io/docs)

### :zap: Learn NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :phone: Developers

This repository is for [The Alleyway's website](https://the-alleyway.netlify.app/).
This repository was built by The Alleyway team at [Scout](https://scout.camd.northeastern.edu/).

**Jean Zhang**<br />
Developer<br />
jean.nmn.zhang@gmail.com

**Judy Zhang**<br />
Developer<br />
zhzhang66@gmail.com

**Izzy Berzsenyi**<br />
Developer<br />
iberzsenyi@yahoo.com
