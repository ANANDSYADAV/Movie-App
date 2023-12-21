import Skeleton from 'react-loading-skeleton'

function ListingSkeleton() {
    return (
        <div className='card-item'>
            <Skeleton variant="rectangular" width={280} height={300} />
            <div className="card-bottom">
                <div className="card-info">
                    <h4><Skeleton /></h4>
                    <p><Skeleton /></p>
                </div>
            </div>
        </div >
    )
}

export default ListingSkeleton