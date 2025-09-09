import { useMemo } from "react"

const useStockStatus = (stock,sold) => {
    return useMemo(() => {
        const total = stock + sold;
        const percentage = total > 0 ? (sold / total ) * 100 :0;

        if(parseFloat(percentage.toFixed(2)) == 0){
            return {
                status: "Out of Stock",
                color: "red",
                percentage: 0
            }
        } else if (parseFloat(percentage.toFixed(2)) <= 20){
            return {
                status: "Limited Stock",
                color: "#FF624C",
                percentage: parseFloat(percentage.toFixed(2))
            }
        } else {
            return {
                status: `${stock} Available`,
                color: "#000",
                percentage: parseFloat(percentage.toFixed(2))
            }
        }
    },[stock,sold])
}

export default useStockStatus;