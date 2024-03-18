"use client";
import React from "react";
import CourseCard from "@/components/CourseCard";
import course from "@/constants/courseConstant";

export default function Course() {
	return (
		<div className="pt-10">
			<h2 className="text-3xl font-bold uppercase mx-[50px] md:mx-[200px]">
				Courses
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-[50px] md:mx-[200px] py-10">
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
	);
}
