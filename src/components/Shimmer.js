// import './shimmer.css'

const Shimmer = () => {

    return (
        <div className="shimmer flex w-60 h-52 rounded-sm  flex-col gap-y-2 ">
            <div className="shimmer-image w-full h-3/4 rounded-lg bg-black/25"></div>
            <div className="shimmer-h1 w-2/3 h-4 rounded-lg bg-black/25"></div>
            <div className="shimmer-h2 w-3/4 h-4 bg-black/25 rounded-lg"></div>

        </div>
    )
}

export default Shimmer;