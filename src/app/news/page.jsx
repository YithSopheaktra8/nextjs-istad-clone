import NewsCard from "@/components/NewsCard";
import React from "react";
import news from "@/constants/newsConstant";

export default function page() {
	return (
		<div>
			<h2 className="text-3xl font-bold uppercase mx-[50px] md:mx-[200px] pt-[50px]">
				useful content
			</h2>
			<div className="mx-[50px] md:mx-[200px] py-10 grid grid-cols-1 md:grid-cols-4 gap-5 ">
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
