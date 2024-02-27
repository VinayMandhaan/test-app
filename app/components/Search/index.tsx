import React from "react"

const Search = () => {

    const renderDetails = (value) => {
        return (
            <div className="flex items-center mt-4">
            <div className="flex items-center justify-center bg-[#F5F5F5] w-[30px] h-[30px] rounded-full">
                <span className="text-12">{value}</span>
            </div>
            <div className="bg-[#F5F5F5] w-[300px] h-[30px] rounded-full ml-4"></div>
        </div>
        )
    }


    return (
        <div className="flex w-full">
                <div className='w-[8%] bg-gray-500 h-full rounded-tl-lg rounded-bl-lg absolute'></div>
            
            <div className="flex flex-col items-center justify-start w-full mt-10">
                <span>Pate a choux</span>
                <div>
                    <span>Procede</span>
                </div>
                <div className="mt-10">
                    {renderDetails(1)}
                    {renderDetails(2)}
                    {renderDetails(3)}
                    {renderDetails(4)}
                    {renderDetails(5)}
                    {renderDetails(6)}
                </div>
            </div>
        </div>
    )
}

export default Search