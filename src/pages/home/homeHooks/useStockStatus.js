import { useMemo } from "react"

const useStockStatus = (stock , sold) => {
    return useMemo(() => {
        const availableStock = stock - sold;
        const soldpercentage = sold > 0 ? (sold / stock ) * 100 :0;
        const roundedPercentage = Math.round(soldpercentage);



        

        if(roundedPercentage >= 100 || availableStock <= 0){
            return {
                status: "Out of Stock",
                color: "red",
                percentage: 0
            }
        } else if (roundedPercentage >= 80) {
            return {
                status: "Limited Stock",
                color: "#FF624C",
                percentage: roundedPercentage
            }
        } else {
            return {
                status: `${availableStock} Available`,
                color: "#000",
                percentage: roundedPercentage
            }
        }
    },[stock,sold])
}

export default useStockStatus;