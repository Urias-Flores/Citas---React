const Error = ({children}) => {
    return (
            <div className="bg-red-700 rounded-md px-3 py-2 mb-3 text-white font-bold text-center uppercase">
                {children}
            </div>
    )
}

export default Error