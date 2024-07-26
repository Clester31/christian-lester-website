import { useState } from "react"

export default function ImageGallery({ imgArray }) {
    const [index, setIndex] = useState(0);

    const updateImage = (dir) => {
        if(dir == 'L') {
            if(index !== 0) {
                setIndex((prev) => prev - 1);
            }
        } else {
            if(index !== imgArray.length - 1) {
                setIndex((prev) => prev + 1);
            }
        }
    }

    return (
        <div className="flex flex-row items-center">
            <i className="fa-solid fa-arrow-left mx-2 cursor-pointer text-3xl" onClick={() => updateImage("L")}></i>
            <img src={imgArray[index]} alt="" className="w-60 h-60 rounded-md"/>
            <i className="fa-solid fa-arrow-right mx-2 cursor-pointer text-3xl" onClick={() => updateImage("R")}></i>
        </div>
    )
}