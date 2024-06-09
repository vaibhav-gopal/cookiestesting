export default function Button({txt, link}) {
    return (
        <div className='w-28 h-12'>
            <a href={link} className="border-2 border-white border-solid w-full h-full">
                {txt}
            </a>
        </div>
    )
}