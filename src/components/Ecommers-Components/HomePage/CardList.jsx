export const CardList = ({ children }) => {
    return (
        <div className="overflow-hidden p-4">
            <ul className='m-6 flex space-x-4 overflow-x-auto'>
                {children}
            </ul>
        </div>
    )
}