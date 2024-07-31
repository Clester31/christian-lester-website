import '../App.css'

export default function ProjectDisplay({ image, description, link }) {
    return (
        <div className='project text-center m-auto border-2 rounded-xl p-3 lg:w-1/3 mb-5 h-96 mx-2'>
            <img src={image} alt="" className='w-64 h-64border-2 rounded-xl flex m-auto h-1/2' />
            <p className='flex m-auto mt-2 h-1/4'>{description}</p>
            <button className='aero hover:bg-amber-500 my-2'><a href={link} target='_blank'>See Project</a></button>
        </div>
    )
}