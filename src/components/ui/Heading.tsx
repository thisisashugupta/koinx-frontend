export default function Title({children} : {children: React.ReactNode}) {
        
    return (
        <div className="my-4 text-xl font-bold">
            <p>{children}</p>
        </div>
    );
}