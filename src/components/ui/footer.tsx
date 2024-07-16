const data = new Date()

const Footer = () => {
    return (
        <>
        <div className="text-center py-8 border-t-2">
            <a href="#aboutme">@ Kan Ho {data.getFullYear()}</a>
        </div>
        </>
    )
}

export default Footer