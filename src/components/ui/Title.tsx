export default function Title({children} : {children: React.ReactNode}) {
        
    return (
        <div className="text-2xl font-semibold">
            <p>{children}</p>
        </div>
    );
}