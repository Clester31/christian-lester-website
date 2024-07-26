import '../App.css'

export default function ProjectDisplay({ image, description, link }) {
    return (
        <div className='project text-center m-auto border-2 rounded-xl p-3 w-1/3 mb-5 h-96 mx-2'>
            <img src={image} alt="" className='w-64 h-50 border-2 rounded-xl flex m-auto' />
            <p className='w-1/2 flex m-auto pt-2'>{description}</p>
            <button className='aero hover:bg-amber-500 my-2'><a href={link} target='_blank'>See Project</a></button>
        </div>
    )
}