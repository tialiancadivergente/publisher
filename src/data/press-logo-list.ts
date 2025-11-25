export interface PressLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
  className: string;
}

export const pressLogos: readonly PressLogo[] = [
  {
    src: "/images/o-globo.png",
    alt: "Logo do jornal O Globo",
    width: 165,
    height: 28,
    mobileWidth: 86,
    mobileHeight: 14,
    className: "md:w-[165px] md:h-[28px] w-[86px] h-[14px]",
  },
  {
    src: "/images/uol.png",
    alt: "Logo do portal UOL",
    width: 65,
    height: 33,
    mobileWidth: 33,
    mobileHeight: 17,
    className: "md:w-[65px] md:h-[33px] w-[33px] h-[17px]",
  },
  {
    src: "/images/isto-e.png",
    alt: "Logo da revista Isto É",
    width: 98,
    height: 31,
    mobileWidth: 50,
    mobileHeight: 16,
    className: "md:w-[98px] md:h-[31px] w-[50px] h-[16px]",
  },
  {
    src: "/images/terra.png",
    alt: "Logo do portal Terra",
    width: 144,
    height: 41,
    mobileWidth: 74,
    mobileHeight: 21,
    className: "md:w-[144px] md:h-[41px] w-[74px] h-[21px]",
  },
  {
    src: "/images/cbn.png",
    alt: "Logo da rádio CBN",
    width: 83,
    height: 27,
    mobileWidth: 43,
    mobileHeight: 14,
    className: "md:w-[83px] md:h-[27px] w-[43px] h-[14px]",
  },
  {
    src: "/images/record.png",
    alt: "Logo da TV Record",
    width: 107,
    height: 40,
    mobileWidth: 55,
    mobileHeight: 21,
    className: "md:w-[107px] md:h-[40px] w-[55px] h-[21px]",
  },
  {
    src: "/images/sbt.png",
    alt: "Logo da TV SBT",
    width: 44,
    height: 43,
    mobileWidth: 23,
    mobileHeight: 22,
    className: "md:w-[44px] md:h-[43px] w-[23px] h-[22px]",
  },
  {
    src: "/images/band.png",
    alt: "Logo da TV Bandeirantes",
    width: 93,
    height: 32,
    mobileWidth: 48,
    mobileHeight: 17,
    className: "md:w-[93px] md:h-[32px] w-[48px] h-[17px]",
  },
] as const;
