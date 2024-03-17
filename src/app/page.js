import CarouselWithContent from "@/components/Carousel";
import CourseCard from "@/components/CourseCard";
import Image from "next/image";

const course = [
	{
		title: "Flutter Mobile Development",
		image: "/course/flutter.png",
		alt: "flutter",
		description:
			"Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
	},
	{
		title: "IOS Development",
		image: "/course/ios.png",
		alt: "ios",
		description:
			"iOS development course is designed to develop iOS app using Swift programming language. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
	},
	{
		title: "Web Design",
		image: "/course/web design.png",
		alt: "web design",
		description:
			"Web design course is designed to develop web app using HTML, CSS, and JavaScript. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other web functionality to make your app more professional.",
	},
	{
		title: "Data Modeling PostgreSQL",
		image: "/course/sql.png",
		alt: "sql",
		description:
			"SQL & Data Modeling with PostgreSQL course is designed to develop database using SQL and PostgreSQL. We also include with Data Modeling concept. Moreover, integrate with third-party libraries and other database functionality to make your database more professional.",
	},
	{
		title: "DevOps Engineering",
		image: "/course/devops.png",
		alt: "devops",
		description:
			"DevOps Engineering course is designed to develop DevOps using Docker, Kubernetes, and Jenkins. We also include with DevOps concept. Moreover, integrate with third-party libraries and other DevOps functionality to make your DevOps more professional.",
	},
	{
		title: "C++ Programming",
		image: "/course/cplusplus.png",
		alt: "cplusplus",
		description:
			"C++ is one of the world's most popular programming languages. C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems. C++ programming course will guide you to from basic language syntax to OOP concept step by step. Please see the details course offer below,",
	},
	{
		title: "Data Analytics",
		image: "/course/data.png",
		alt: "data",
		description:
			"Data analytics is the science of analyzing raw data to make conclusions about that information. Many of the techniques and processes of data analytics have been automated into mechanical processes and algorithms that work over raw data for human consumption.",
	},
	{
		title: "Andriod Development",
		image: "/course/andriod.png",
		alt: "andriod",
		description:
			"Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers. This course will teach you basic Android programming and will also take you through some advance concepts related to Android application development and include with UX / UI Design concept. Please see the course offers below,",
	},
	{
		title: "NEXT.JS",
		image: "/course/nextjs.png",
		alt: "nextjs",
		description:
			"Next.js course is designed for students to develop single page application. It has all the tools you need to make the Web faster, plus Server-Side Rendering which essential for search engine optimization. We also include with UI/UX Design Concept for professional website development...",
	},
	{
		title: "Blockchain Development",
		image: "/course/blockchain.png",
		alt: "Blockchain Development",
		description:
			"The Blockchain is a technology based on a decentralized network with “blocks” of information. Blockchain, sometimes referred to as Distributed Ledger Technology (DLT), makes the history of any digital asset unalterable and transparent through the use of decentralization and cryptographic hashing.",
	},
	{
		title: "Java Programming",
		image: "/course/java programming.png",
		alt: "Java Programming",
		description:
			"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. This course will cover from fundamental language to OOP concept.",
	},
	{
		title: "Spring Framework",
		image: "/course/spring.png",
		alt: "spring",
		description:
			"Spring Course will help in understanding about Spring framework and how to build web applications, RESTful APIs using Spring, Spring MVC, Spring Boot, Thymeleaf, Spring JDBC etc. By the end of this course, students will understand all the below topics.",
	},
];

export default function Home() {
	return (
		<div className="pb-[50px]">
			<CarouselWithContent />
			<div className="mx-[300px]">
				<h2 className="text-3xl my-[40px] font-bold uppercase">
					Courses
				</h2>
				<div className="grid grid-cols-3 gap-10">
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
