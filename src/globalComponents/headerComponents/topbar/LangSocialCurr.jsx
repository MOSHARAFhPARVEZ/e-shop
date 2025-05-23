import { Select } from 'antd';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LangSocialCurr = () => {
    const currency = [
        { value: '1', label: 'USD' },
        { value: '2', label: 'TK' },
        { value: '3', label: 'Rupi' },
    ]
    const language = [
        { 
            value: 'en', 
            label:(
                <div className='flex items-center gap-x-2'>
                    <img src="https://flagcdn.com/us.svg" alt="flag" className='w-[20px] h-[20px]' />
                    <span>English</span>
                </div>
            )
        },
        { 
            value: 'bd', 
            label:(
                <div className='flex items-center gap-x-2'>
                    <img src="https://flagcdn.com/bd.svg" alt="flag" className='w-[20px] h-[20px]' />
                    <span>Bangladesh</span>
                </div>
            )
        },
    ]
  return (
    <>
    
    <div className='flex items-center w-full gap-x-4 justify-end'>
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
                showSearch
                defaultValue={language[0]}
                className='customSelect'
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
                options={language}
            />
        </div>
        <div className='w-[1px] h-[32px] bg-black02op25'></div>
        <div className='flex items-center gap-x-[24px]'>
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