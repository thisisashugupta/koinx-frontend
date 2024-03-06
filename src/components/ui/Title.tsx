export default function Title({children} : {children: React.ReactNode}) {
        
    return (
        <div className="mb-4 text-2xl font-semibold">
            <p>{children}</p>
        </div>
    );
}