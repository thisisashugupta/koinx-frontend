export default function WhiteCard({children} : {children: React.ReactNode}) {
    
    return (
        <div className="my-5 m-3 px-3 py-4 border border-gray-300 rounded-lg bg-white">
            {children}
        </div>
    );
}