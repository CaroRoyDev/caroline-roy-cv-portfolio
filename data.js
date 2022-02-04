const NavList = [
  { iconName: "FaHome", path: "/", name: "Accueil" },
  { iconName: "FaPencilRuler", path: "/competences", name: "Compétences" },
  { iconName: "FaThLarge", path: "/portfolio", name: "Portfolio" },
  { iconName: "FaGraduationCap", path: "/formations", name: "Formations" },
  { iconName: "FaBriefcase", path: "/experiences-pro", name: "Expérience pro" },
  { iconName: "FaComments", path: "/contact", name: "Contact" },
];

const HomePagePresentation = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a odio
      vitae urna sollicitudin blandit. Vivamus tortor tellus, cursus facilisis
      dui nec, ultricies dapibus mauris. Pellentesque mauris sem, tempus
      accumsan augue sit amet, fringilla consequat sem. In quis urna sit amet
      nisi vulputate elementum id at eros. Nulla placerat nisi diam. Nullam urna
      magna, vehicula vitae porttitor sed, venenatis in leo. Aenean nisl eros,
      consequat sit amet nulla non, congue dapibus sapien. Pellentesque sed
      tempus libero, non feugiat massa. Phasellus posuere non eros sed mattis.
      Aenean vitae sagittis nunc.
    </p>
    <p>
      Duis faucibus ligula semper ultrices eleifend. Morbi pretium arcu
      consequat blandit aliquam. Etiam a massa et ante cursus dapibus. Morbi
      suscipit justo sit amet lorem semper, eu feugiat erat commodo. Quisque
      sagittis sapien nisl. Vestibulum vitae finibus arcu. Etiam vitae lectus
      finibus, condimentum quam eu, sodales ante. Aenean aliquet quam erat, sed
      sollicitudin nisl euismod imperdiet. Nunc tempus porttitor tortor. Cras ac
      faucibus lectus. Quisque et condimentum orci, ut hendrerit purus. Maecenas
      ac mi vitae magna euismod dignissim.
    </p>
  </div>
);
const HomePageTags = [
  "Développeuse Front-end",
  "React & Next",
  "28 ans",
  "Roubaix",
];

export { NavList, HomePagePresentation, HomePageTags };
