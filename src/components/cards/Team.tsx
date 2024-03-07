import WhiteCard from "@/components/ui/WhiteCard";
import Title from "@/components/ui/Title";
import Member from "@/components/ui/Member";
import MayLike from "@/components/MayLike";

export default function TeamCard() {
    return (
        <WhiteCard>
            <Title>Team</Title>
            <p className="mb-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer.</p>
            <Member name="John Smith" img="/john-2.png" />
            <Member name="Elina Williams" img="/elina.png" />
            <Member name="Josh Smith" img="/john.png" />
            <div className="block md:hidden"><MayLike /></div>
            <div className="block md:hidden"><MayLike /></div>
        </WhiteCard>
    );
}