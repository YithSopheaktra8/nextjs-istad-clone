import NewsCard from "@/components/NewsCard";
import React from "react";

const news = [
	{
		title: "លេងបិទពួនជាមួយ Searching Algorithm",
		image: "/news/news1.jpeg",
		alt: "image 1",
	},
	{
		title: "ជជែកគ្នាលេងអំពី Web 4.0",
		image: "/news/news2.jpg",
		alt: "image 2",
	},
	{
		title: "តើអ្វីទៅជា Cybersecurity",
		image: "/news/news3.png",
		alt: "image 2",
	},
	{
		title: "អ្វីដែលគួរត្រៀមសម្រាប់អ្នកចង់ចាប់អាជីព IT",
		image: "/news/news5.png",
		alt: "image 2",
	},
	{
		title: "សេចក្តីជូនដំណឹង  ស្តីពីការប្រលងជ្រើសរើសនិស្សិតអាហារូបករណ៍  ផ្នែកព័ត៌មានវិទ្យាចំនួន  ៥០  កន្លែងក្នុងឆ្នាំសិក្សា ២០២៣",
		image: "/news/news4.jpg",
		alt: "image 2",
	},
	{
		title: "ភាពខុសគ្នារវាង Rest API និង Restful API",
		image: "/news/news6.png",
		alt: "image 2",
	},
	{
		title: "ការប្រៀបធៀបរវាង Flutter និង React Native",
		image: "/news/news7.png",
		alt: "image 2",
	},
	{
		title: "ស្វែងយល់អំពី Smart Contract",
		image: "/news/news8.png",
		alt: "image 2",
	},
];

export default function page() {
	return (
		<div className="mx-[300px] py-10 grid grid-cols-4 gap-5">
			{news.map((item, index) => (
				<NewsCard
					key={index}
					title={item.title}
					image={item.image}
					alt={item.alt}
				/>
			))}
		</div>
	);
}
