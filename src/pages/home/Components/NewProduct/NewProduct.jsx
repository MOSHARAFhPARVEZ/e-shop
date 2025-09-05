import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProductCards from '../../../../globalComponents/productCards/ProductCard'
import MenubarCategories from '../../../../globalComponents/headerComponents/menubar/allcategories/MenubarCategories'
import { NewProductData } from './NewProductData'


const NewProduct = () => {
    const [initialData,setinitialData] = useState(5);
    const {t} = useTranslation()

    const loadMore = () =>{
        setinitialData((prev) => prev + 5)
    }
    return (
        <>
            <div className='relative mt-[80px]'>
                <div className='flex items-center justify-between mb-[48px]'>
                    <h2 className='font-poppins font-semibold text-[36px] text-black01 leading-[46px]'>{t('New_Products')}</h2>
                    <div className='flex items-end gap-x-4'>
                        <p className='font-montserrat font-normal text-base leading-6 text-black01'>{t('Sort_by')}</p>
                        <MenubarCategories icons={true} className='font-montserrat font-bold text-base text-orange leading-[24px] cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5'>
                {
                    NewProductData?.slice(0,initialData)?.map((product)=>(
                        <ProductCards key={product.id} image={product?.image} rating={product?.rating} title={product.title} category={product.category} totalRating={product.totalRating} price={product.price} discount={product.discount} />
                    ))
                }
            </div>
            {
                initialData < NewProductData?.length && (
                    <button className='py-4 px-10 border border-orange rounded-[10px] text-orange font-montserrat font-bold text-[20px] cursor-pointer mx-auto flex justify-center mt-[64px]' onClick={loadMore}>{t('Load_More')}</button>
                )
            }
        </>
    )
}

export default NewProduct