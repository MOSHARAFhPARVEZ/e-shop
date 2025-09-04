import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

export const getstart = (rating) => {
    const fullStar = Math.floor(rating);
    const halfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
    const emptyStar = 5 - fullStar - (halfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStar; i++) {
        stars.push(
            <span key={`full-${i}`} className="text-cyberYellow h-4 w-4 flex items-center">
                <FaStar />
            </span>
        );        
    }

    if (halfStar) {
        stars.push(
            <span key={`half`} className="text-cyberYellow h-4 w-4">
                <FaRegStarHalfStroke />
            </span>
        );
    }

    for (let i = 0; i < emptyStar; i++) {
        stars.push(
            <span key={`empty-${i}`} className="text-cyberYellow h-4 w-4">
                <FaRegStar />
            </span>
        );        
    }

    return stars;

}