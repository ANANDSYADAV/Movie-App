import Skeleton from 'react-loading-skeleton'

function DetailsSkeleton() {
    return (
        <>
            <div className='movie-section'>
                <div className="section-left">
                    <div className="movie-title"><Skeleton /></div>
                    <div className='movie-rating big-screen'>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                    <div className='small-screen'>
                        <div className='movie-ratings'>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                        <div className="small-poster">
                            <Skeleton variant="rectangular" width={300} height={400} />
                        </div>
                    </div>
                    <div className="movie-plot"><Skeleton count={4} /></div>
                    <div className="movie-info">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
                <div className="section-right big-screen">
                    <Skeleton variant="rectangular" width={300} height={400} />
                </div>
            </div>
        </>
    )
}

export default DetailsSkeleton