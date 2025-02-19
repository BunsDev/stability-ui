import { USDC, USDT, DAI, WMATIC, WETH, WBTC, PROFIT, SDIV } from "./tokens";

const TABLE = [
  { name: "Symbol", keyName: "name", sortType: "none", dataType: "string" },
  {
    name: "Type",
    keyName: "type",
    sortType: "none",
    dataType: "string",
  },
  {
    name: "Strategy",
    keyName: "strategy",
    sortType: "none",
    dataType: "string",
  },
  { name: "APY", keyName: "apy", sortType: "none", dataType: "number" },
  {
    name: "Price",
    keyName: "shareprice",
    sortType: "none",
    dataType: "number",
  },
  { name: "TVL", keyName: "tvl", sortType: "none", dataType: "number" },
  {
    name: "Balance",
    keyName: "balance",
    sortType: "none",
    dataType: "number",
  },
];
const PAGINATION_VAULTS = 20;

const TOKENS_ASSETS = [
  {
    symbol: "USDC",
    addresses: USDC,
    description:
      "USDC is a fully-reserved stablecoin, which is a type of cryptocurrency, or digital asset. Unlike other cryptocurrencies that fluctuate in price, USDC is designed to maintain price equivalence to the US dollar.",
    website: "https://www.circle.com/en/usdc",
    docs: "https://developers.circle.com/stablecoins/docs",
    color: "#3b87df",
  },
  {
    symbol: "USDT",
    addresses: USDT,
    description:
      "Tether (USDT) is a cryptocurrency with a value meant to mirror the value of the U.S. dollar. The idea was to create stable digital cash. Tether converts cash into digital currency, to anchor or “tether” the value of the coin to the price of national currencies like the US dollar, the Euro, and the Yen.",
    website: "https://tether.to/en/",
    docs: "https://tether.to/en/knowledge-base/",
    color: "#5bc7af",
  },
  {
    symbol: "DAI",
    addresses: DAI,
    description:
      "DAI is an algorithmic stablecoin issued by MakerDAO, an Ethereum-based protocol, that seeks to maintain an exact ratio of one-to-one with the U.S. dollar.",
    website: "https://makerdao.com/",
    docs: "https://docs.makerdao.com/smart-contract-modules/dai-module/dai-detailed-documentation",
    color: "#f3ba42",
  },
  {
    symbol: "WMATIC",
    addresses: WMATIC,
    description:
      "WMATIC is a wrapped version of MATIC that enables it to be easily used within DeFi.",
    website: "https://polygon.technology/",
    docs: "https://wiki.polygon.technology/",
    color: "#9663ee",
  },
  {
    symbol: "WETH",
    addresses: WETH,
    description:
      "WETH is an ERC-20 token on Ethereum that represents 1 Ether (ETH)",
    website: "https://ethereum.org/en/",
    docs: "https://ethereum.org/en/developers/docs/",
    color: "#6372a2",
  },
  {
    symbol: "WBTC",
    addresses: WBTC,
    description:
      "WBTC is an ERC-20 token on the Ethereum blockchain that is pegged to Bitcoin (BTC). WBTC is backed one-to-one with Bitcoin. Before WBTC, the only way to use Bitcoin in a financial transaction was through centralized entities, like centralized exchanges (CEXs).",
    website: "https://wbtc.network/",
    docs: "",
    color: "#f0a051",
  },
  {
    symbol: "PROFIT",
    addresses: PROFIT,
    description:
      "The native token PROFIT's primary purpose is to represent ownership shares of the Stability protocol. Given PROFIT holders are effectively owners of Stability. Holding the token also allows investors to manage the Stability protocol collectively.",
    website: "https://stabilitydao.org/tokens",
    docs: "https://book.stabilitydao.org/tokens.html#profit",
    color: "#886ac3",
  },
  {
    symbol: "SDIV",
    addresses: SDIV,
    description:
      "The SDIV token is intended to distribute the externally generated profit of the organization in the form of dividends.",
    website: "https://stabilitydao.org/tokens",
    docs: "https://book.stabilitydao.org/tokens.html#sdiv",
    color: "#232323",
  },
];

const CHAINS = [
  {
    name: "Polygon",
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/polygon.jpg",
  },
];

const SLIPPAGE_VALUES = ["0.5", "1", "2"];

const GRAPH_ENDPOINT =
  "https://api.thegraph.com/subgraphs/name/jodsmigel/stability";

const GRAPH_QUERY = `
      {
        vaultEntities {
          id
          apr
          tvl
          sharePrice
          assetsProportions
          strategy
          strategyId
          totalSupply
          color
          upgradeAllowed
          vaultType
          version
          colorBackground
          deployAllowed
          vaultBuildingPrice
          underlying
          symbol
          strategySpecific
          name
          strategyAssets
          lastHardWork
          assetsWithApr
          assetsAprs
        }
        platformEntities {
          bcAssets
        }
      }
      `;

const STABILITY_API = "https://api.stabilitydao.org/";

export {
  TABLE,
  PAGINATION_VAULTS,
  TOKENS_ASSETS,
  CHAINS,
  SLIPPAGE_VALUES,
  GRAPH_ENDPOINT,
  GRAPH_QUERY,
  STABILITY_API,
};
