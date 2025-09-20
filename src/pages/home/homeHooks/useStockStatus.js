import { useMemo } from "react"

const useStockStatus = (stock , sold) => {
    return useMemo(() => {
        const total = stock + sold;
        const percentage = total > 0 ? (stock / total ) * 100 :0;
        const roundedPercentage = Math.round(percentage);


        console.log("roundedPercentage", roundedPercentage);
        

        if(roundedPercentage == 0){
            return {
                status: "Out of Stock",
                color: "red",
                percentage: 0
            }
        } else if (roundedPercentage <= 20){
            return {
                status: "Limited Stock",
                color: "#FF624C",
                percentage: roundedPercentage
            }
        } else {
            return {
                status: `${stock} Available`,
                color: "#000",
                percentage: roundedPercentage
            }
        }
    },[stock,sold])
}

export default useStockStatus;