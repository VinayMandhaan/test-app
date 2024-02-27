import React from "react"
import { MdChevronLeft, MdSearch } from 'react-icons/md';


const Details = ({ isFlipped, setIsFlipped }) => {

    const renderDetails = (title) => {
        return (
            <div className="w-[25%]" style={{ width: '25%' }}>
                <span style={{ fontSize: 14 }}>{title}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 10 }}>
                    <span style={{ fontSize: 12 }}>Lait entier</span>
                    <span style={{ fontSize: 12 }}>Lait entier</span>
                    <span style={{ fontSize: 12 }}>Lait entier</span>
                    <span style={{ fontSize: 12 }}>Lait entier</span>
                    <span style={{ fontSize: 12 }}>Lait entier</span>
                    <span style={{ fontSize: 12 }}>Lait entier</span>
                </div>
            </div>
        )
    }

    const renderData = () => {
        return (
            <div className="flex items-center" >
                <span className="text-[12px]">0.25$</span>
            </div>
        )
    }



    return (
        <div className="flex w-full">
            <div className='w-[8%] bg-gray-500 h-full rounded-tr-lg rounded-br-lg absolute right-0'></div>
            <div className="flex flex-col w-full mt-10 items-center justify-start">
                <div className="flex flex-col items-center">
                    <span className="text-14" >Ingredients</span>
                    <div className="bg-[#d3d3d3] w-[250px] rounded-lg p-[4px] mt-4">
                        <MdSearch />
                    </div>
                </div>
                <div className="flex w-full justify-center mt-10" >
                    {renderDetails('Ingredients')}
                    {renderDetails('Poids')}
                    <div className="w-[25%]">
                        <span className="text-14">Cout</span>
                        <div className="flex flex-col gap-2 mt-4">
                            {renderData()}
                            {renderData()}
                            {renderData()}
                            {renderData()}
                            {renderData()}
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    setIsFlipped(!isFlipped)
                }} style={{ position: 'absolute', bottom: 10, left: 10 }}>
                    <MdChevronLeft size={20} />
                </div>
            </div>
        </div>
    )
}

export default Details