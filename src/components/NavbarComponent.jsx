"use client";

import React from "react";
import {
	Navbar,
	Collapse,
	Typography,
	Button,
	IconButton,
	List,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import {
	ChevronDownIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import {
	NewspaperIcon,
	SunIcon,
	AcademicCapIcon,
	ComputerDesktopIcon,
	BriefcaseIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const navListMenuItems = [
	{
		title: "Enroll",
		description: "Start your journey with us today",
		icon: AcademicCapIcon,
		link: "/enroll",
	},
	{
		title: "Course",
		description: "Explore our wide range of courses",
		icon: ComputerDesktopIcon,
		link: "/course",
	},
	{
		title: "IT News",
		description: "Read insightful articles, tips, and expert opinions.",
		icon: NewspaperIcon,
		link: "/news",
	},
	{
		title: "Job Opportunities",
		description: "Find your dream job in the IT industry",
		icon: BriefcaseIcon,
		link: "/job",
	},
];

export default function NavbarWithMegaMenu() {
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	return (
		<Navbar
			fullWidth
			color="transparent"
			className="mx-auto sticky top-10  w-screen px-4 bg-[#253a95] border-none">
			<div className="flex items-center justify-between text-blue-gray-900">
				<div className="flex justify-center items-center gap-2 md:gap-2 lg:gap-0">
					<Link href="/">
						<Image
							src="/images/cstad logo-no-bg.png"
							alt="cstad logo-no-bg"
							width={60}
							height={60}
						/>
					</Link>
					<Typography
						as="a"
						href="#"
						variant="h6"
						className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-white">
						ISTAD
					</Typography>
				</div>

				<div className="hidden lg:block">
					<NavList />
				</div>
				<div className="hidden gap-2 lg:flex">
					<Button
						size="sm"
						className="text-black bg-white hover:text-[#253a95]">
						Log In
					</Button>
					<Button
						size="sm"
						className="text-black bg-white hover:text-[#253a95]">
						Sign In
					</Button>
				</div>
				<IconButton
					variant="text"
					className="lg:hidden text-white"
					onClick={() => setOpenNav(!openNav)}>
					{openNav ? (
						<XMarkIcon className="h-6 w-6" strokeWidth={2} />
					) : (
						<Bars3Icon className="h-6 w-6" strokeWidth={2} />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
				<div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
					<Button
						variant="outlined"
						size="sm"
						color="blue-gray"
						fullWidth>
						Log In
					</Button>
					<Button variant="gradient" size="sm" fullWidth>
						Sign In
					</Button>
				</div>
			</Collapse>
		</Navbar>
	);
}

function NavListMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const renderItems = navListMenuItems.map(
		({ icon, title, description, link }, key) => (
			<a href={link} key={key}>
				<MenuItem className="flex items-center gap-3 rounded-lg">
					<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
						{" "}
						{React.createElement(icon, {
							strokeWidth: 2,
							className: "h-6 text-gray-900 w-6",
						})}
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="flex items-center text-sm font-bold text-white md:text-[#253b95] text-lg">
							{title}
						</Typography>
						<Typography
							variant="paragraph"
							className="text-xs !font-medium text-blue-gray-500">
							{description}
						</Typography>
					</div>
				</MenuItem>
			</a>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium">
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-medium text-white text-lg"
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
							Resources
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavList() {
	return (
		<List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
			<Typography
				as="a"
				href="/"
				variant="small"
				color="blue-gray"
				className="font-medium">
				<ListItem className="flex items-center gap-2 py-2 pr-4 text-white text-lg">
					Home
				</ListItem>
			</Typography>
			<NavListMenu />
			<Typography
				as="a"
				href="/about"
				variant="small"
				color="blue-gray"
				className="font-medium">
				<ListItem className="flex items-center gap-2 py-2 pr-4 text-white text-lg">
					About Us
				</ListItem>
			</Typography>
		</List>
	);
}
