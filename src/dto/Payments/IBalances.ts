import IDollarCurrency from "./IDollarCurrency";
import INairaCurrency from "./INairaCurrency";

interface IBalances {
    balances: Array<INairaCurrency | IDollarCurrency>
}

export default IBalances;