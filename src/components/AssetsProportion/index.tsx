interface IProps {
  proportions: number[];
  assets: any;
  type: string;
}

const AssetsProportion = ({ proportions, assets, type }: IProps) => {
  return (
    <div
      className={
        type === "vaults"
          ? "flex w-[30px] h-6 ml-[12px] mr-5"
          : "flex ml-3 w-[60px]"
      }
    >
      <div
        style={{
          width: `${proportions ? (30 * proportions[0]) / 100 : 25}px`,
          backgroundColor: assets[0].color,
        }}
        className="h-6"
      >
        <img
          className="absolute w-6 h-6 rounded-full ml-[-12px]"
          src={assets[0].logo}
          alt={assets[0].symbol}
          title={assets[0].name}
        />
      </div>
      <div
        style={{
          width: `${proportions ? (30 * proportions[1]) / 100 : 25}px`,
          backgroundColor: assets[1].color,
        }}
        className="h-6 flex justify-end"
      >
        <img
          className="absolute w-6 h-6 rounded-full mr-[-12px]"
          src={assets[1].logo}
          alt={assets[1].symbol}
          title={assets[1].name}
        />
      </div>
    </div>
  );
};

export { AssetsProportion };
