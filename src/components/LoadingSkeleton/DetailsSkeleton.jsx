import Skeleton from 'react-loading-skeleton'

function DetailsSkeleton() {
    return (
        <>
            <div className='movie-section'>
                <div className="section-left">
                    <div className="movie-title"><Skeleton height={7} width={400}/></div>
                    <div className='movie-rating big-screen'>
                        <Skeleton height={4} width={150}/>
                        <Skeleton height={4} width={150}/>
                        <Skeleton height={4} width={150}/>
                        <Skeleton height={4} width={150}/>
                    </div>
                    <div className='small-screen'>
                        <div className='movie-ratings'>
                            <Skeleton height={4} width={200}/>
                            <Skeleton height={4} width={200}/>
                            <Skeleton height={4} width={200}/>
                            <Skeleton height={4} width={200}/>
                        </div>
                        <div className="small-poster">
                            <Skeleton width={300} height={400} />
                        </div>
                    </div>
                    <div className="movie-plot"><Skeleton height={3} width={'100%'} count={4} /></div>
                    <div className="movie-info">
                        <Skeleton height={5} width={'80%'}/>
                        <Skeleton height={5} width={'80%'}/>
                        <Skeleton height={5} width={'80%'}/>
                        <Skeleton height={5} width={'80%'}/>
                        <Skeleton height={5} width={'80%'}/>
                    </div>
                </div>
                <div className="section-right big-screen">
                    <Skeleton width={300} height={'100%'} />
                </div>
            </div>
        </>
    )
}

export default DetailsSkeleton