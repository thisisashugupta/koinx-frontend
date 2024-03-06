import WhiteCard from "@/components/ui/WhiteCard";
import Title from "@/components/ui/Title";
import Heading from "@/components/ui/Heading";
import { ArrowRight } from 'lucide-react'


export default function AboutCard() {
    return (
        <WhiteCard>
            <Title>About Bitcoin</Title>
            <Heading>What is Bitcoin?</Heading>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis esse delectus vel dignissimos voluptatibus, voluptatum praesentium nemo totam aperiam necessitatibus ipsa accusantium. Nemo deleniti ab consequatur rerum placeat ducimus.</p>
            <Heading>Lorem ipsum dolor sit amet</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minima nihil esse aut cum facere quos facilis cupiditate quibusdam totam? Harum repudiandae consequuntur quisquam nemo dicta earum obcaecati totam eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, optio debitis at aut esse porro recusandae facere officiis sapiente, inventore mollitia suscipit sit impedit voluptas, ipsam vero placeat! Inventore, reprehenderit!</p>
            <p className="mt-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis odit quaerat exercitationem et quod cumque nostrum at, aut cupiditate inventore facilis magnam quis, nesciunt dicta enim asperiores sunt nam praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam provident numquam? Eum, nam provident, maxime laborum reiciendis ab architecto veritatis saepe rerum dolore ex aliquid facere natus hic omnis.</p>
            <p className="mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus corrupti delectus voluptatem, quae iure animi non in inventore fuga odit adipisci nesciunt odio maiores quas autauao dui</p>
            <Heading>Already Holding Crypto?</Heading>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex">
                    <img className="rounded-lg" src="https://via.placeholder.com/120x120" alt="placeholder" />
                    <div className="w-full px-6 flex flex-col justify-between my-2">
                        <div className="text-lg text-white font-bold">Calculate Your Profits</div>
                        <div><button className="bg-white py-[6px] px-3 rounded-lg text-sm font-semibold flex space-x-2"><p>Check Now</p><ArrowRight size={20} /></button></div>
                    </div>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-orange-400 to-red-500 flex">
                    <img className="rounded-lg" src="https://via.placeholder.com/120x120" alt="placeholder" />
                    <div className="w-full px-6 flex flex-col justify-between my-2">
                        <div className="text-lg text-white font-bold">Calculate Your tax liability</div>
                        <div><button className="bg-white py-[6px] px-3 rounded-lg text-sm font-semibold flex space-x-2"><p>Check Now</p><ArrowRight size={20} /></button></div>
                    </div>
                </div>
            </div>

        </WhiteCard>
    );
}