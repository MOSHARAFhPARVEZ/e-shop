import { Select } from 'antd';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import i18n from '../../../service/i18n';

const LangSocialCurr = () => {

    const currency = [
        { value: '1', label: 'USD' },
        { value: '2', label: 'TK' },
        { value: '3', label: 'Rupi' },
    ]
    const countriesOptionsWithFlag = [
        {
          value: "us",
          language: "en",
          label: (
            <div className="flex items-center gap-x-2">
              <img
                src="https://flagcdn.com/us.svg"
                alt="flag"
                className="w-[20px] h-[20px]"
              />
              <span>English</span>
            </div>
          ),
        },
        {
          value: "bd",
          language: "bd",
          label: (
            <div className="flex items-center gap-x-2">
              <img
                src="https://flagcdn.com/bd.svg"
                alt="flag"
                className="w-[20px] h-[20px]"
              />
              <span>Bangla</span>
            </div>
          ),
        },
      ];
    
      const handleLanguageChange = (value) => {
        const findLanguage = countriesOptionsWithFlag.find(
          (language) => language.value === value
        );
        if (findLanguage) {
          i18n.changeLanguage(findLanguage.language || "en");
        }
      };
  return (
    <>
    
    <div className='flex items-center w-full gap-1 lg:gap-x-4 lg:justify-end'>
        <div>
            <Select
                showSearch
                defaultValue={currency[0]}
                filterOption={(input, option) => {
                var _a;
                return (
                    (_a = option === null || option === void 0 ? void 0 : option.label) !== null &&
                    _a !== void 0
                    ? _a
                    : ''
                )
                    .toLowerCase()
                    .includes(input.toLowerCase());
                }}
                className='customSelect'
                options={currency}
            />
        </div>
        <div className='w-[1px] h-[32px] bg-black02op25'></div>
        <div>
        <Select
          defaultValue={countriesOptionsWithFlag[0].value}
          style={{ width: 120 }}
          onChange={handleLanguageChange}
          options={countriesOptionsWithFlag}
          className="customSelect"
        />
        </div>
        <div className='w-[1px] h-[32px] bg-black02op25 hidden lg:block'></div>
        <div className='lg:flex items-center gap-x-[24px] hidden'>
            <div>
                <Link to="www.facebook.com">
                    <FaFacebookF color='#303030' size="16px"/>
                </Link>
            </div>
            <div>
                <Link to="www.twitter.com">
                    <FaTwitter color='#303030' size="16px"/>
                </Link>
            </div>
            <div>
                <Link to="www.instagram.com">
                    <FaInstagram color='#303030' size="16px"  />
                </Link>
            </div>
        </div>
    </div>

    </>
  )
}

export default LangSocialCurr