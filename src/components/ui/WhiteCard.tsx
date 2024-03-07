export default function WhiteCard({children} : {children: React.ReactNode}) {
    
    return (
        <div className="px-3 py-4 md:border-0 border border-gray-300 rounded-lg bg-white">
            {children}
        </div>
    );
}