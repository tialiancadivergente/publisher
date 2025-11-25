interface ColorsShades {
  [key: string]: string | ColorsShades;
}

export const colors: ColorsShades = {
  areia: {
    DEFAULT: "#D3CAC0",
    claro: "#EAE6E1",
  },
  verde: {
    folha: "#006D71",
    eucalipto: "#104448",
    escuro: "#07242C",
  },
  dourado: {
    DEFAULT: "#C0964B",
    velho: "#AFA69D",
  },
  ouro: {
    velho: "#917E5A"
  },
  creme: {
    DEFAULT: "#F4F0E1",
  }
};