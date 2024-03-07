import Image from "next/image";

export default function TeamCard({name, img}: {name: string, img: string}) {
    return (
        <div className="m-2 md:px-6 rounded-lg bg-blue-100/50 p-2 flex flex-col md:flex-row items-center">
            <div className="md:ml-2 md:mr-8">
                <Image className="mt-1 mb-3 w-28" src={img} alt="Team" width={500} height={300} />
                <p className="w-max mx-auto font-semibold">{name}</p>
                <p className="w-max mx-auto text-sm text-gray-500">Designation Here</p>
            </div>
            <p className="my-3 text-left text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
    );
}