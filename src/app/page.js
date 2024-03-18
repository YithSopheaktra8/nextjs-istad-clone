"use client";
import CarouselWithContent from "@/components/Carousel";
import CourseCard from "@/components/CourseCard";
import course from "@/constants/courseConstant";

export default function Home() {
	return (
		<div className="pb-[50px]">
			<CarouselWithContent />
			<div className="mx-[30px] md:mx-[100px] lg:mx-[200px]">
				<h2 className="text-3xl my-[40px] font-bold uppercase">
					Courses
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
					{course.map((item, index) => {
						return (
							<CourseCard
								key={index}
								title={item.title}
								image={item.image}
								alt={item.alt}
								description={item.description}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
