import { Link } from 'react-router-dom'
import { getstart } from '../../../../utlis/GetRatings'
import { getPrice } from '../../../../utlis/GetDiscountPrice'
import { Progress, Tooltip } from 'antd'
import useStockStatus from '../../homeHooks/useStockStatus'

const OfferProductCard = ( {image, discount , price , rating, title, category, totalRating, stock, sold} ) => {

    const {status,color,percentage} = useStockStatus(stock , sold);


  return (
    <>
        <div>
            <div className='border group border-transparent bg-white03 hover:bg-white  pt-[24px] pr-[24px] pb-[44px] pl-[23px] rounded-[10px]' >
                <div className='relative'>
                    <div className=' w-full h-[345px] overflow-hidden rounded-[10px]'>
                        <img src={image} alt="product image" className='w-full h-full ' />
                    </div>
                    {
                        discount && <div className='absolute -top-0 -right-0 h-[100px] w-[100px] py-[7px] flex justify-center items-center bg-orange rounded-full'>
                            <span className=' text-white font-poppins text-[24px] font-semibold leading-[30px]'>{discount}%</span>
                        </div>
                    }
                </div>
                <div className='mt-10'>
                    <h6 className='font-montserrat text-[14px] text-black01 leading-5 font-normal uppercase tracking-[12px] mb-4'>{category}</h6>
                    {
                        
                        title?.length > 12 ? (
                            <Tooltip placement="topRight" color='#fff' title={<h6  className='font-poppins font-semibold text-black01 text-sm leading-5'>{title}</h6>}>
                                <Link to='/product' className='font-poppins font-semibold text-black01 text-[20px] leading-[30px] truncate block max-w-[235px] cursor-pointer group-hover:text-orange transition-all ease-in duration-300 mt-4'>
                                    {title}
                                </Link>
                            </Tooltip>
                        ) : (
                            <Link to='/product' className='font-poppins font-semibold text-black01 text-[20px] leading-[30px] truncate block max-w-[235px] cursor-pointer group-hover:text-orange transition-all ease-in duration-300 mt-4'>{title}</Link>
                        )
                    }
    
                    <div className='flex items-center gap-x-2 mt-2'>
                        {
                            getstart(rating)
                        }
                        <span className='font-montserrat font-normal text-base text-black01 mt-2'>({totalRating})</span>
                    </div>
                    
                    <div className='mt-6 flex items-center gap-x-2.5'>
                        <p className='font-poppins font-semibold text-2xl leading-6 text-orange'>${getPrice(price,discount)}</p>
                        {
                            discount && (
                                <span className='font-poppins font-normal text-base leading-6 text-black01 line-through'>
                                    ${price}
                                </span>
                            )
                        }
                    </div>
                    
                    <div className='mt-6 bg-white02 w-full rounded-full relative z-[1]'>
                        <div className='absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-in-out -z-[1]' style={{backgroundColor: color, width:`${percentage}%`}}></div>
                       <h5 className='text-center text-white uppercase'>{status}</h5>
                    </div>
    
                </div>
            </div>
        </div>
    </>
  )
}

export default OfferProductCard