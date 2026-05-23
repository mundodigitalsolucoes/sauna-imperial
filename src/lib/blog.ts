export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "onde-relaxar-em-rio-preto",
    title: "Onde relaxar em Rio Preto",
    excerpt:
      "Um guia objetivo para quem busca uma pausa de qualidade em São José do Rio Preto.",
    date: "2026-03-12",
    readTime: "4 min",
    content: [
      "São José do Rio Preto é uma cidade dinâmica, com rotina intensa, trânsito em horários de pico, agenda cheia e muitos profissionais que passam o dia inteiro em movimento.",
      "Por isso, encontrar um lugar para relaxar com conforto, discrição e praticidade faz diferença na qualidade da rotina.",
      "A Sauna Imperial oferece uma estrutura pensada para esse momento de pausa: piscina, hidromassagem, sauna, duchas, american bar e ambientes reservados para quem busca tranquilidade.",
      "Mais do que um espaço físico, a proposta é oferecer uma experiência de bem-estar em Rio Preto, com atendimento discreto e ambiente acolhedor.",
    ],
  },
  {
    slug: "beneficios-da-sauna-para-relaxar",
    title: "Benefícios da sauna para relaxar",
    excerpt:
      "Entenda como a sauna pode ajudar na sensação de descanso e bem-estar depois de uma rotina intensa.",
    date: "2026-02-22",
    readTime: "5 min",
    content: [
      "A sauna é uma experiência associada ao relaxamento, à pausa e à recuperação depois de dias intensos.",
      "O calor, o silêncio e o ambiente reservado ajudam a criar uma sensação de desaceleração, ideal para quem precisa sair do ritmo acelerado da rotina.",
      "Na Sauna Imperial, a experiência é complementada por hidromassagem, piscina, duchas e espaços de convivência, tornando a visita mais completa.",
      "Para quem busca bem-estar em São José do Rio Preto, a sauna pode ser uma alternativa elegante para transformar algumas horas do dia em um momento de cuidado pessoal.",
    ],
  },
  {
    slug: "parada-para-descanso-em-viagem",
    title: "Parada para descanso em viagem",
    excerpt:
      "Uma opção prática para quem está de passagem por Rio Preto e quer descansar antes de seguir viagem.",
    date: "2026-01-30",
    readTime: "3 min",
    content: [
      "São José do Rio Preto recebe muitas pessoas que estão de passagem pela região, seja a trabalho, compromissos comerciais ou deslocamentos entre cidades.",
      "Nesses momentos, uma parada estratégica para descanso pode tornar a viagem mais confortável e produtiva.",
      "A Sauna Imperial está localizada em uma região de fácil acesso e oferece uma estrutura reservada para quem deseja relaxar, tomar uma ducha, aproveitar a hidromassagem ou apenas desacelerar por algumas horas.",
      "Com atendimento discreto e ambiente bem cuidado, o espaço é uma alternativa para quem busca praticidade, privacidade e conforto em Rio Preto.",
    ],
  },
];