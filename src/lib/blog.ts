export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
};

export const POSTS: BlogPost[] = [
  {
    slug: "onde-relaxar-em-rio-preto",
    title: "Onde relaxar em Rio Preto",
    excerpt: "Um guia objetivo para encontrar uma pausa de qualidade no ritmo de São José do Rio Preto.",
    date: "2026-03-12",
    readTime: "4 min",
    content: "São José do Rio Preto reúne opções para quem busca relaxar com conforto. Entre cafés silenciosos, espaços de bem-estar e ambientes reservados, escolher o lugar certo faz diferença na qualidade do descanso. A Sauna Imperial oferece uma estrutura completa pensada para esse momento de pausa.",
  },
  {
    slug: "o-que-fazer-a-noite-em-rio-preto",
    title: "O que fazer à noite em Rio Preto",
    excerpt: "Sugestões discretas para encerrar o dia com tranquilidade e conforto na cidade.",
    date: "2026-02-22",
    readTime: "5 min",
    content: "A noite em Rio Preto pode ser tão produtiva quanto silenciosa. Para quem prefere recuperar a energia em um ambiente reservado, a sauna e a hidromassagem são alternativas elegantes ao tradicional happy hour.",
  },
  {
    slug: "parada-para-descanso-em-viagem",
    title: "Parada para descanso em viagem",
    excerpt: "Estrutura ideal para quem está de passagem e quer descansar antes de seguir.",
    date: "2026-01-30",
    readTime: "3 min",
    content: "Para quem viaja a trabalho ou está de passagem por Rio Preto, uma parada estratégica para descansar pode mudar o rendimento do dia seguinte. Ambientes silenciosos, ducha quente e atendimento discreto fazem a diferença.",
  },
];