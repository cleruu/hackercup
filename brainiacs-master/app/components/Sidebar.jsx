'use client';
import React, { useState, useMemo } from 'react';
import { FaBrain } from 'react-icons/fa';
import classNames from 'classnames';
import Link from 'next/link';
import antsyn from '../ant-syn/page';

const Sidebar = (props) => {
    const wrapperClasses = classNames(
        "h-screen px-4 pt-8 pb-4 bg-[#7ABFE6] flex justify-between flex-col w-80",
    );

    if (props.newTestament) {
        return (
            <div className={wrapperClasses}>
                <div className='flex flex-col'>
                    <div className='flex items-center relative'>
                        <FaBrain className='mx-[25px] mt-1.5 w-8 h-8 text-[#fff]'/>
                        <span className='mt-1.5 text-3xl text-center font-bold text-[#fff]'>
                            Brainiacs
                        </span>
                    </div>
                    <div className='flex flex-col items-start mx-[70px] mt-20 text-xl font-medium text-[#fff]'>
                    <Link href="/studentAssignments">Assignments</Link>
                    <Link href="/recommendations">Reccomendations</Link>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={wrapperClasses}>
                <div className='flex flex-col'>
                    <div className='flex items-center relative'>
                        <FaBrain className='mx-[25px] mt-1.5 w-8 h-8 text-[#fff]'/>
                        <span className='mt-1.5 text-3xl text-center font-bold text-[#fff]'>
                            Brainiacs
                        </span>
                    </div>
                    <div className='flex flex-col items-start mx-[70px] mt-20 text-xl font-medium text-[#fff]'>
                    <Link href="/lecture">Assignments</Link>
                    </div>
                </div>
            </div>
        )
    }

}
export default Sidebar;