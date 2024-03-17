import NewsCard from "@/components/NewsCard";
import React from "react";

const news = [
	{
		title: "WebEssentials ប្រកាសរើសបុគ្គលិក Software Developer និង Senior Software Developer",
		image: "/job/job1.png",
		alt: "image 1",
	},
	{
		title: "Senior Spring Web Developer",
		image: "/job/job2.png",
		alt: "image 2",
	},
	{
		title: "Senior Java Developer in Sky Booking Co., Ltd",
		image: "/job/job3.png",
		alt: "image 2",
	},
	{
		title: "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
		image: "/job/job4.png",
		alt: "image 2",
	},
];

export default function page() {
	return (
		<div>
			<h2 className="text-3xl font-bold uppercase mx-[300px] pt-[50px]">
				useful content
			</h2>
			<div className="mx-[300px] py-10 grid grid-cols-4 gap-5 ">
				{news.map((item, index) => (
					<NewsCard
						key={index}
						title={item.title}
						image={item.image}
						alt={item.alt}
					/>
				))}
			</div>
		</div>
	);
}
