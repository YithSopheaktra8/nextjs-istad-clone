import { Roboto } from "next/font/google";
import "./globals.css";
import NavbarWithMegaMenu from "@/components/NavbarComponent";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ['100','300','400','500', '700','900'],
	subsets: ["latin"],
});

export const metadata = {
	title: "CSTAD",
	description:
		"CSTAD is a leading IT training provider in Cambodia. We offer a wide range of IT courses, including web development, mobile app development, and data science. Our courses are designed to help you learn the latest technologies and get a job in the IT industry. We also provide job placement services to help you find a job after completing the course. Our instructors are experienced professionals who have worked in the IT industry for many years. They will teach you the skills you need to succeed in the IT industry. Our courses are designed to be practical and hands-on, so you can learn by doing. We also provide career counseling to help you choose the right course and get a job in the IT industry. Our goal is to help you succeed in the IT industry and build a successful career. Contact us today to learn more about our courses and how we can help you succeed in the IT industry.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<header>
					<link
						rel="shortcut icon"
						href="/images/cstad logo-no-bg.png"
					/>
					<NavbarWithMegaMenu />
				</header>
				<main className="bg-[#f5f5f5]">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
