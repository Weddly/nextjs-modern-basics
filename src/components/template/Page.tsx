export default function Page(props: any) {
    return(
        <div className={`
            flex flex-col justify-center items-center
            h-screen w-screen text-white
            bg-[url('https://source.unsplash.com/random/1920x1080/?abstract')]
            bg-no-repeat bg-cover
        `}>
            <div className={`
                flex flex-col items-center justify-center w-full h-full
                bg-black bg-opacity-80
            `}>
                {props.children}
            </div>
        </div>
    )
}