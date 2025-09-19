// Enlaces de la barra de navegación
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Servicios", url: "/#servicios" },
  { name: "Proyectos", url: "/#proyectos" },
  { name: "Nosotros", url: "/#nosotros" },
  { name: "Blog", url: "/#blog" },
  { name: "Contacto", url: "/#contacto" },
];

// Enlaces para el footer
const footerLinks = [
  {
    section: "Servicios",
    links: [
      { name: "Obras Civiles", url: "/servicios/obras-civiles" },
      {
        name: "Mantenimiento Eléctrico",
        url: "/servicios/mantenimiento-electrico",
      },
      { name: "Servicios Mecánicos", url: "/servicios/mecanicos" },
      { name: "Estructuras y MetalMecánica", url: "/servicios/estructuras" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Acerca de OBMAIN", url: "/nosotros" },
      { name: "Misión y Visión", url: "/nosotros#mision-vision" },
      { name: "Valores", url: "/nosotros#valores" },
      { name: "Clientes y Aliados", url: "/nosotros#clientes" },
    ],
  },
  {
    section: "Recursos",
    links: [
      { name: "Blog", url: "/blog" },
      { name: "Documentación Técnica", url: "/documentacion" },
      { name: "Carreras", url: "/carreras" },
      { name: "Contacto", url: "/contacto" },
    ],
  },
];

// Redes sociales y contacto OBMAIN
const socialLinks = {
  facebook: "https://www.facebook.com/obmain", // ajusta si tienes el link real
  linkedin: "https://www.linkedin.com/company/obmain", // ajusta si existe
  whatsapp: "https://wa.me/573207265669", // WhatsApp directo con el número del brochure
  email: "mailto:obmaindeltolimasas@hotmail.com",
  maps: "https://maps.google.com/?q=Supermanza+4+Manzana+2+Casa+1+Ibagué+Tolima",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
