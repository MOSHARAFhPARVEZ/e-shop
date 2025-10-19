import GlobalContainer from '../../../../globalComponents/GlobalContainer'
import OfferLef from './OfferLef'
import OfferRight from './OfferRight'

const Offer = () => {
  return (
    <>
      <section className="mt-[40px] bg-white01 py-[40px]">
        <GlobalContainer>
          <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 items-center lg:items-start">
            <div className="w-full lg:w-[35%] px-10 lg:px-0">
              <OfferLef />
            </div>
            <div className="w-full lg:w-[65%]">
              <OfferRight />
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  )
}

export default Offer