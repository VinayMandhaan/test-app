
'use client'
import React, { useState } from 'react';
import { MdArrowDownward, MdArrowUpward, MdChevronRight } from 'react-icons/md';
import Dropdown from '../Dropdown';
import Button from '../Button';

const Cover = ({ isFlipped, setIsFlipped }) => {
    return (
        <div>
            <div className='flex w-full'>
                <div className='w-[8%] bg-gray-500 h-full rounded-tl-lg rounded-bl-lg absolute'></div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 40, alignItems: 'center', justifyContent: 'start', zIndex: 9999 }}>
                    <div>
                        <Dropdown title={'Categories'} />
                    </div>
                    <div className='mt-10'>
                        <input type='text' placeholder='Nom' style={{
                            borderBottom: '1px solid black',
                            width: '280px',
                            textAlign: 'start',
                            paddingBottom: '4px', fontSize: 14
                        }} />
                    </div>
                    <div className='mt-10'>
                        <span className='text-12 text-gray-500'>Reccite utillise dans d'autres reccetes</span>
                    </div>
                    <div className='flex flex-col items-center mt-10'>
                        <span className='text-12 text-gray-300'>Conversion</span>
                        <div className='flex items-center mt-4'>
                            <div>
                                <MdArrowUpward />
                                <MdArrowDownward />
                            </div>
                            <div className='ml-2'>
                                <span className='text-14'>2</span>
                            </div>
                            <div className='ml-4'>
                                <Dropdown title={'Options'} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full mt-10 ml-10'>
                        <div className='ml-10'>
                            <span className='text-14 text-gray-400'>Notes</span>
                        </div>
                        <div className='flex items-center justify-center mt-6'>
                            <textarea className='h-[150px] bg-[#d3d3d3] w-[90%] rounded-lg p-4' />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <Button title={'Annuler'} />
                    </div>
                    <div onClick={() => {
                        setIsFlipped(!isFlipped)
                    }} style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <MdChevronRight size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cover