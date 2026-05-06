export type ProjectCategory = "Habitação" | "Comércio e Serviços";

export interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  year: string;
  category: ProjectCategory;
  subcategory: string;
  description: string;
  fullDescription: string;
  coverImage: string;
  coverImageAlt: string;
  gallery: { src: string; alt: string }[];
}

const h = "/projetos/habitação";
const c = "/projetos/comércio e serviços";

export const projects: Project[] = [

  // 2022 -----------------------------------------------------------------------

  {
    id: 1,
    slug: "moradia-da",
    title: "Moradia DA",
    location: "Torres Vedras",
    year: "2022",
    category: "Habitação",
    subcategory: "Habitação Unifamiliar · 2022",
    description: "",
    fullDescription: "",
    coverImage: `${h}/moradia-DA/moradia-DA-01.jpg`,
    coverImageAlt: "Moradia DA",
    gallery: Array.from({ length: 16 }, (_, i) => ({
      src: `${h}/moradia-DA/moradia-DA-${String(i + 1).padStart(2, "0")}.jpg`,
      alt: `Moradia DA — imagem ${i + 1}`,
    })),
  },

  {
    id: 2,
    slug: "apartamento-pk",
    title: "Apartamento PK",
    location: "Santa Cruz",
    year: "2022",
    category: "Habitação",
    subcategory: "Remodelação · 2022",
    description: "",
    fullDescription: "",
    coverImage: `${h}/Apartamento PK/10.jpg`,
    coverImageAlt: "Apartamento PK",
    gallery: [
      "05","07","08","10","13","20","23",
    ].map((n) => ({
      src: `${h}/Apartamento PK/${n}.jpg`,
      alt: `Apartamento PK — imagem ${n}`,
    })),
  },

  // 2019 -----------------------------------------------------------------------

  {
    id: 3,
    slug: "moradia-dk",
    title: "Moradia DK",
    location: "Torres Vedras",
    year: "2019",
    category: "Habitação",
    subcategory: "Habitação Unifamiliar · 2019",
    description: "",
    fullDescription: "",
    coverImage: `${h}/Moradia DK/moradia-DK-01.jpg`,
    coverImageAlt: "Moradia DK",
    gallery: [
      ...Array.from({ length: 19 }, (_, i) => ({
        src: `${h}/Moradia DK/moradia-DK-${String(i + 1).padStart(2, "0")}.jpg`,
        alt: `Moradia DK — imagem ${i + 1}`,
      })),
      ...Array.from({ length: 9 }, (_, i) => ({
        src: `${h}/Moradia DK/moradia-DK-${String(i + 21).padStart(2, "0")}.jpg`,
        alt: `Moradia DK — imagem ${i + 21}`,
      })),
    ],
  },

  {
    id: 4,
    slug: "edificio-muralhas",
    title: "Edifício Muralhas",
    location: "Torres Vedras",
    year: "2019",
    category: "Habitação",
    subcategory: "Reabilitação Habitação Colectiva · 2019",
    description: "",
    fullDescription: "",
    coverImage: `${h}/Apartamento TA/RDS17_MG_2095.jpg`,
    coverImageAlt: "Edifício Muralhas",
    gallery: [
      "RDS17_MG_2095","RDS17_MG_2096","RDS17_MG_2099","RDS17_MG_2100",
      "RDS17_MG_2102","RDS17_MG_2103","RDS17_MG_2104","RDS17_MG_2105",
      "RDS17_MG_2113","RDS17_MG_2115","RDS17_MG_2116","RDS17_MG_2117",
      "RDS17_MG_2118","RDS17_MG_2120","RDS17_MG_2123","RDS17_MG_2126",
      "RDS17_MG_2130","RDS17_MG_2132","RDS17_MG_2133","RDS17_MG_2136",
      "RDS17_MG_2137","RDS17_MG_2139","RDS17_MG_2140","RDS17_MG_2141",
      "RDS17_MG_2142","RDS17_MG_2145","RDS17_MG_2158","RDS17_MG_2159",
      "RDS17_MG_2160","RDS17_MG_2162","RDS17_MG_2164","RDS17_MG_2167",
      "RDS17_MG_2169","RDS17_MG_2170","RDS17_MG_2172","RDS17_MG_2173",
      "RDS17_MG_2178","RDS17_MG_2179",
    ].map((name) => ({
      src: `${h}/Apartamento TA/${name}.jpg`,
      alt: `Edifício Muralhas — ${name}`,
    })),
  },

  {
    id: 5,
    slug: "apartamento-tf",
    title: "Apartamento TF",
    location: "Torres Vedras",
    year: "2019",
    category: "Habitação",
    subcategory: "Remodelação · 2019",
    description: "",
    fullDescription: "",
    coverImage: `${h}/Apartamento TF/WEB_LF_20210518_6227.jpg`,
    coverImageAlt: "Apartamento TF",
    gallery: [
      "6227","6234","6236","6238","6241","6244","6246","6250","6252","6256",
      "6260","6261","6262","6266","6269","6271","6275","6279","6281","6282",
      "6283","6287","6288","6290","6291","6293","6300","6302","6307","6310",
      "6313","6314","6316","6319","6323","6324","6326","6328","6330","6334",
      "6337","6341","6344","6345","6346","6347","6349","6350","6353","6356",
    ].map((n) => ({
      src: `${h}/Apartamento TF/WEB_LF_20210518_${n}.jpg`,
      alt: `Apartamento TF — imagem ${n}`,
    })),
  },

  // 2018 -----------------------------------------------------------------------

  {
    id: 6,
    slug: "moradia-aa",
    title: "Moradia AA",
    location: "Torres Vedras",
    year: "2018",
    category: "Habitação",
    subcategory: "Reabilitação Habitação Unifamiliar · 2018",
    description: "",
    fullDescription: "",
    coverImage: `${h}/moradia AA/20201010_150710.jpg`,
    coverImageAlt: "Moradia AA",
    gallery: [
      { src: `${h}/moradia AA/20201010_150504.jpg`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/20201010_150546.jpg`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/20201010_150710.jpg`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/20201010_150803.jpg`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/20201010_150856.jpg`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/20201010_151243.jpg`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/2CF47FF2-98AB-4F1B-A988-7ADD55A94E3B.JPG`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/4C2979E6-4376-4679-9358-CB226AD6B400.JPG`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/52C42A9D-FDA4-4950-B9B6-A3542175DBFA.JPG`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/67927468-95A7-49A1-BB6B-62FE1E4BBA0F.JPG`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/6D3E3140-02F5-4C9A-A2B2-0D48CC6EDD02.JPG`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/8E89545B-3558-4EC7-9273-3F8B53D1E4BF.JPG`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/13E72EC9-9A66-4F22-968E-E359E931C291.JPG`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/BA48B466-0D8B-4E40-9C94-0541F0C476EF.JPG`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/E37D529C-7582-4DF2-B3B5-79054DBE0E22.JPG`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/E7620B71-7DEA-45B1-852B-BEAA6B54E705.JPG`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/F848E8BE-C552-4B86-800B-188DCAEC8715.JPG`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/J100.jpg`, alt: "Moradia AA" },
      { src: `${h}/moradia AA/J99.jpg`, alt: "Moradia AA" },
    ],
  },

  // 2017 -----------------------------------------------------------------------

  {
    id: 7,
    slug: "atrio",
    title: "Átrio",
    location: "Torres Vedras",
    year: "2017",
    category: "Comércio e Serviços",
    subcategory: "Restauração · 2017",
    description: "",
    fullDescription: "",
    coverImage: `${c}/atrio_2017/IMG_3277.jpg`,
    coverImageAlt: "Átrio",
    gallery: [
      "IMG_3277","IMG_3278","IMG_3279","IMG_3280","IMG_3281","IMG_3282","IMG_3283",
      "IMG_3284","IMG_3285","IMG_3287","IMG_3288","IMG_3290","IMG_3291","IMG_3293",
      "IMG_3294","IMG_3297","IMG_3298","IMG_3299","IMG_3300",
      "_MG_3806","_MG_3807","_MG_3808","_MG_3809","_MG_3810","_MG_3812",
    ].map((name) => ({
      src: `${c}/atrio_2017/${name}.jpg`,
      alt: `Átrio — ${name}`,
    })),
  },

  {
    id: 8,
    slug: "frankie-braga",
    title: "Frankie Braga",
    location: "Braga",
    year: "2017",
    category: "Comércio e Serviços",
    subcategory: "Restauração · 2017",
    description: "",
    fullDescription: "",
    coverImage: `${c}/frankie Braga_2017/IMG_0757.jpg`,
    coverImageAlt: "Frankie Braga",
    gallery: [
      "IMG_0757","IMG_0759","IMG_0761","IMG_0763","IMG_0764","IMG_0771","IMG_0772",
      "IMG_0782","IMG_0787","IMG_0793","IMG_0796","IMG_0799","IMG_0801","IMG_0802",
      "IMG_0803","IMG_0805","IMG_0809","IMG_0816","IMG_0818","IMG_0820","IMG_0826",
      "IMG_0834","IMG_0835","IMG_0837","IMG_0839","IMG_0842","IMG_0843","IMG_0844",
      "IMG_0845","IMG_0848","IMG_0849","IMG_0851","IMG_0853","IMG_0855",
    ].map((name) => ({
      src: `${c}/frankie Braga_2017/${name}.jpg`,
      alt: `Frankie Braga — ${name}`,
    })),
  },

  // 2016 -----------------------------------------------------------------------

  {
    id: 9,
    slug: "moradia-ap",
    title: "Moradia AP",
    location: "Marinhais",
    year: "2016",
    category: "Habitação",
    subcategory: "Habitação Unifamiliar · 2016",
    description: "",
    fullDescription: "",
    coverImage: `${h}/moradia-AP/moradia-AP-01.jpg`,
    coverImageAlt: "Moradia AP",
    gallery: Array.from({ length: 26 }, (_, i) => ({
      src: `${h}/moradia-AP/moradia-AP-${String(i + 1).padStart(2, "0")}.jpg`,
      alt: `Moradia AP — imagem ${i + 1}`,
    })),
  },

  {
    id: 10,
    slug: "moradia-jf",
    title: "Moradia JF",
    location: "Torres Vedras",
    year: "2016",
    category: "Habitação",
    subcategory: "Reabilitação Habitação Unifamiliar · 2016",
    description: "",
    fullDescription: "",
    coverImage: `${h}/Moradia JF/01.jpg`,
    coverImageAlt: "Moradia JF",
    gallery: [
      "01","02","03","04","05","06","08",
      "11","12","13","14","15","16","17","18","19","20",
      "21","22","23","24","25","26","27","28","29","30",
      "31","32","33","34","35","36","37","38","39","40",
      "41","42","43","44","45","46","47","48",
    ].map((n) => ({
      src: `${h}/Moradia JF/${n}.jpg`,
      alt: `Moradia JF — imagem ${n}`,
    })),
  },

  {
    id: 11,
    slug: "moradia-mm",
    title: "Moradia MM",
    location: "Torres Vedras",
    year: "2016",
    category: "Habitação",
    subcategory: "Reabilitação Habitação Unifamiliar · 2016",
    description: "",
    fullDescription: "",
    coverImage: `${h}/Moradia MM/moradia-MM-02.jpg`,
    coverImageAlt: "Moradia MM",
    gallery: Array.from({ length: 29 }, (_, i) => ({
      src: `${h}/Moradia MM/moradia-MM-${String(i + 1).padStart(2, "0")}.jpg`,
      alt: `Moradia MM — imagem ${i + 1}`,
    })),
  },

  {
    id: 12,
    slug: "frankie-saldanha",
    title: "Frankie Saldanha",
    location: "Lisboa",
    year: "2016",
    category: "Comércio e Serviços",
    subcategory: "Restauração · 2016",
    description: "",
    fullDescription: "",
    coverImage: `${c}/frankie saldanha_2016/_MG_7908.jpg`,
    coverImageAlt: "Frankie Saldanha",
    gallery: [
      "_MG_7908","_MG_7913","_MG_7919","_MG_7922","_MG_7925","_MG_7927",
      "_MG_7928","_MG_7932","_MG_7934","_MG_7937","_MG_7939","_MG_7941",
      "_MG_7943","_MG_7944","_MG_7945","_MG_7946","_MG_7947","_MG_7949",
      "_MG_7950","_MG_7957","_MG_7958","_MG_7972","_MG_7977",
      "_MG_7983","_MG_7987",
    ].map((name) => ({
      src: `${c}/frankie saldanha_2016/${name}.jpg`,
      alt: `Frankie Saldanha — ${name}`,
    })),
  },

  {
    id: 13,
    slug: "sempre-quente",
    title: "Sempre Quente",
    location: "Mafra",
    year: "2016",
    category: "Comércio e Serviços",
    subcategory: "Pastelaria · 2016",
    description: "",
    fullDescription: "",
    coverImage: `${c}/sempre quente_2016/WEB_LF_23112016_0230.jpg`,
    coverImageAlt: "Sempre Quente",
    gallery: [
      "WEB_LF_23112016_0208-2","WEB_LF_23112016_0208-3","WEB_LF_23112016_0208",
      "WEB_LF_23112016_0212","WEB_LF_23112016_0217","WEB_LF_23112016_0220",
      "WEB_LF_23112016_0227-PS","WEB_LF_23112016_0230","WEB_LF_23112016_0236-PS",
      "WEB_LF_23112016_0238","WEB_LF_23112016_0240-PS","WEB_LF_23112016_0242-PS",
      "WEB_LF_23112016_0247-PS","WEB_LF_23112016_0255","WEB_LF_23112016_0257-PS",
      "WEB_LF_23112016_8027","WEB_LF_23112016_8031","WEB_LF_23112016_8033",
      "WEB_LF_23112016_8036","WEB_LF_23112016_8039-PS","WEB_LF_23112016_8040-PS",
      "WEB_LF_23112016_8045-PS","WEB_LF_23112016_8049","WEB_LF_23112016_8051-PS",
      "WEB_LF_23112016_8052","WEB_LF_23112016_8057",
    ].map((name) => ({
      src: `${c}/sempre quente_2016/${name}.jpg`,
      alt: `Sempre Quente — ${name}`,
    })),
  },

  {
    id: 14,
    slug: "sangiovese",
    title: "Sangiovese",
    location: "Lisboa",
    year: "2016",
    category: "Comércio e Serviços",
    subcategory: "Restauração · 2016",
    description: "",
    fullDescription: "",
    coverImage: `${c}/Sangiovese_2016/_MG_8039.jpg`,
    coverImageAlt: "Sangiovese",
    gallery: [
      "_MG_8004","_MG_8006","_MG_8007","_MG_8008","_MG_8009","_MG_8010",
      "_MG_8011","_MG_8012","_MG_8013","_MG_8014","_MG_8015","_MG_8016",
      "_MG_8017","_MG_8018","_MG_8019","_MG_8023","_MG_8025","_MG_8026",
      "_MG_8027","_MG_8028","_MG_8029","_MG_8031","_MG_8032","_MG_8033",
      "_MG_8034","_MG_8036","_MG_8037","_MG_8039","_MG_8040","_MG_8041",
      "_MG_8042","_MG_8043",
    ].map((name) => ({
      src: `${c}/Sangiovese_2016/${name}.jpg`,
      alt: `Sangiovese — ${name}`,
    })),
  },

  // 2015 -----------------------------------------------------------------------

  {
    id: 15,
    slug: "apartamento-pp",
    title: "Apartamento PP",
    location: "Torres Vedras",
    year: "2015",
    category: "Habitação",
    subcategory: "Remodelação · 2015",
    description: "",
    fullDescription: "",
    coverImage: `${h}/Apartamento PP/1.jpg`,
    coverImageAlt: "Apartamento PP",
    gallery: Array.from({ length: 26 }, (_, i) => ({
      src: `${h}/Apartamento PP/${i + 1}.jpg`,
      alt: `Apartamento PP — imagem ${i + 1}`,
    })),
  },

  {
    id: 16,
    slug: "imperio",
    title: "Império",
    location: "Torres Vedras",
    year: "2015",
    category: "Comércio e Serviços",
    subcategory: "Pastelaria · 2015",
    description: "",
    fullDescription: "",
    coverImage: `${c}/imperio_2015/1.jpg`,
    coverImageAlt: "Império",
    gallery: [
      "0","1","2","3","4","5","6","7","08","09",
      "10","11","12","13","14","15","16","17","18","19",
    ].map((n) => ({
      src: `${c}/imperio_2015/${n}.jpg`,
      alt: `Império — imagem ${n}`,
    })),
  },

  // 2014 -----------------------------------------------------------------------

  {
    id: 17,
    slug: "moradia-fv",
    title: "Moradia FV",
    location: "Torres Vedras",
    year: "2014",
    category: "Habitação",
    subcategory: "Habitação Unifamiliar · 2014",
    description: "",
    fullDescription: "",
    coverImage: `${h}/moradia-FV/moradia-FV-13.jpg`,
    coverImageAlt: "Moradia FV",
    gallery: Array.from({ length: 25 }, (_, i) => ({
      src: `${h}/moradia-FV/moradia-FV-${String(i + 1).padStart(2, "0")}.jpg`,
      alt: `Moradia FV — imagem ${i + 1}`,
    })),
  },

  {
    id: 18,
    slug: "bif",
    title: "BIF",
    location: "Lisboa",
    year: "2014",
    category: "Comércio e Serviços",
    subcategory: "Restauração · 2014",
    description: "",
    fullDescription: "",
    coverImage: `${c}/BIF_2014/IMG_8532.jpg`,
    coverImageAlt: "BIF",
    gallery: [
      "IMG_8532","IMG_8535","IMG_8539","IMG_8541","IMG_8542",
      "IMG_8549","IMG_8552","IMG_8560","IMG_8562","IMG_8567",
      "IMG_8596","IMG_8598","IMG_8601","IMG_8602",
    ].map((name) => ({
      src: `${c}/BIF_2014/${name}.jpg`,
      alt: `BIF — ${name}`,
    })),
  },

  {
    id: 19,
    slug: "frankie-campo-grande",
    title: "Frankie Campo Grande",
    location: "Lisboa",
    year: "2014",
    category: "Comércio e Serviços",
    subcategory: "Restauração · 2014",
    description: "",
    fullDescription: "",
    coverImage: `${c}/Frankie Campo Grande_2014/IMG_7706.jpg`,
    coverImageAlt: "Frankie Campo Grande",
    gallery: [
      { src: `${c}/Frankie Campo Grande_2014/1 de maio.jpg`, alt: "Frankie Campo Grande" },
      { src: `${c}/Frankie Campo Grande_2014/IMG_5029.jpg`, alt: "Frankie Campo Grande" },
      { src: `${c}/Frankie Campo Grande_2014/IMG_7706.jpg`, alt: "Frankie Campo Grande" },
      { src: `${c}/Frankie Campo Grande_2014/IMG_7712.jpg`, alt: "Frankie Campo Grande" },
      { src: `${c}/Frankie Campo Grande_2014/IMG_7739.jpg`, alt: "Frankie Campo Grande" },
      { src: `${c}/Frankie Campo Grande_2014/IMG_7740.jpg`, alt: "Frankie Campo Grande" },
      { src: `${c}/Frankie Campo Grande_2014/IMG_7743.jpg`, alt: "Frankie Campo Grande" },
      { src: `${c}/Frankie Campo Grande_2014/IMG_8091.jpg`, alt: "Frankie Campo Grande" },
      { src: `${c}/Frankie Campo Grande_2014/_MG_9350.jpg`, alt: "Frankie Campo Grande" },
    ],
  },

  // 2012 -----------------------------------------------------------------------

  {
    id: 20,
    slug: "moradia-ls",
    title: "Moradia LS",
    location: "Torres Vedras",
    year: "2012",
    category: "Habitação",
    subcategory: "Habitação Unifamiliar · 2012",
    description: "",
    fullDescription: "",
    coverImage: `${h}/moradia-LS/moradia-LS-02.jpg`,
    coverImageAlt: "Moradia LS",
    gallery: Array.from({ length: 11 }, (_, i) => ({
      src: `${h}/moradia-LS/moradia-LS-${String(i + 1).padStart(2, "0")}.jpg`,
      alt: `Moradia LS — imagem ${i + 1}`,
    })),
  },

  // 2010 -----------------------------------------------------------------------

  {
    id: 21,
    slug: "moradia-fm",
    title: "Moradia FM",
    location: "Torres Vedras",
    year: "2010",
    category: "Habitação",
    subcategory: "Habitação Unifamiliar · 2010",
    description: "",
    fullDescription: "",
    coverImage: `${h}/moradia-FM/IMG_9774.jpg`,
    coverImageAlt: "Moradia FM",
    gallery: [
      "IMG_8245","IMG_8261","IMG_8270","IMG_8273","IMG_8285","IMG_8293",
      "IMG_8299","IMG_8304","IMG_8305","IMG_8306","IMG_9551","IMG_9561",
      "IMG_9589","IMG_9666","IMG_9675","IMG_9684","IMG_9703","IMG_9705",
      "IMG_9710","IMG_9721","IMG_9737","IMG_9749","IMG_9760","IMG_9774",
      "IMG_9777","IMG_9783","IMG_9787","IMG_9788",
      "seq1","seq2 noite","seq3 noite interior",
    ].map((name) => ({
      src: `${h}/moradia-FM/${name}.jpg`,
      alt: `Moradia FM — ${name}`,
    })),
  },

  // 2009 -----------------------------------------------------------------------

  {
    id: 22,
    slug: "apartamento-ct",
    title: "Apartamento CT",
    location: "Torres Vedras",
    year: "2009",
    category: "Habitação",
    subcategory: "Remodelação · 2009",
    description: "",
    fullDescription: "",
    coverImage: `${h}/Apartamento CT/IMG_9626.jpg`,
    coverImageAlt: "Apartamento CT",
    gallery: [
      "IMG_9595","IMG_9597","IMG_9601","IMG_9602","IMG_9612","IMG_9616",
      "IMG_9617","IMG_9620","IMG_9622","IMG_9623","IMG_9625","IMG_9626",
      "IMG_9629","IMG_9631","IMG_9633","IMG_9634","IMG_9636","IMG_9640",
      "IMG_9641","IMG_9649","IMG_9651","IMG_9652","IMG_9654",
      "seq quarto",
    ].map((name) => ({
      src: `${h}/Apartamento CT/${name}.jpg`,
      alt: `Apartamento CT — ${name}`,
    })),
  },
];

export const featuredProjects = projects.slice(0, 3);
