"use client";
import {
	Card,
	Input,
	Checkbox,
	Button,
	Typography,
} from "@material-tailwind/react";

export default function EnrollForm() {
	return (
		<div className="grid place-content-center py-5">
			<Card className="px-10 py-5">
				<h2 className="font-bold text-3xl text-black">Enroll Form</h2>
				<Typography color="gray" className="mt-1 font-normal">
					Nice to meet you! Enter your details to register.
				</Typography>
				<div className="flex gap-10">
					<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
						<div className="mb-1 flex flex-col gap-6">
							<Typography
								variant="h6"
								color="blue-gray"
								className="-mb-3">
								Full Name
							</Typography>
							<Input
								size="lg"
								placeholder="name@mail.com"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className:
										"before:content-none after:content-none",
								}}
							/>
							<Typography
								variant="h6"
								color="blue-gray"
								className="-mb-3">
								Gender
							</Typography>
							<Input
								size="lg"
								placeholder="name@mail.com"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className:
										"before:content-none after:content-none",
								}}
							/>
							<Typography
								variant="h6"
								color="blue-gray"
								className="-mb-3">
								Date of Birth
							</Typography>
							<Input
								type="date"
								size="lg"
								placeholder="05/07/2024"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className:
										"before:content-none after:content-none",
								}}
							/>
						</div>
					</form>
					<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
						<div className="mb-1 flex flex-col gap-6">
							<Typography
								variant="h6"
								color="blue-gray"
								className="-mb-3">
                                    Email
							</Typography>
							<Input
                                type="email"
								size="lg"
								placeholder="name@mail.com"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className:
										"before:content-none after:content-none",
								}}
							/>
							<Typography
								variant="h6"
								color="blue-gray"
								className="-mb-3">
								Phone Number
							</Typography>
							<Input
                            type="number"
								size="lg"
								placeholder="0965512322"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className:
										"before:content-none after:content-none",
								}}
							/>
							<Typography
								variant="h6"
								color="blue-gray"
								className="-mb-3">
								University
							</Typography>
							<Input
								type="text"
								size="lg"
								placeholder="University of Science"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className:
										"before:content-none after:content-none",
								}}
							/>
						</div>
					</form>
				</div>
				<Button className="mt-6 bg-[#253b95]" fullWidth>
					sign up
				</Button>
				<Typography
					color="gray"
					className="mt-4 text-center font-normal">
					Already have an account?{" "}
					<a href="#" className="font-medium text-gray-900">
						Sign In
					</a>
				</Typography>
			</Card>
		</div>
	);
}
