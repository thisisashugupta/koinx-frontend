export default function Card({children} : {children: React.ReactNode}) {
    
    return (
        <div className="my-5 m-3 p-4 border border-gray-300 rounded-lg bg-white">
            {children}
        </div>
    );
}