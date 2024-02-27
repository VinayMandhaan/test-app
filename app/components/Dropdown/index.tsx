import React from "react"

const Dropdown = ({title}) => {
    return (
        <select className="bg-[#d3d3d3] rounded-lg w-[180px] pt-[2px] pb-[2px] pl-[6px] pr-[6px] text-14">
        <option>{title}</option>
    </select>
    )
}

export default Dropdown