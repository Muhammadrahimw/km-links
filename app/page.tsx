import {Action, getCompany} from "@/services/link";
import {Button} from "@/utils/button";
import Image from "next/image";

export default async function Home() {
	const received = await getCompany();

	const defaults = {
		logo: "/ogo.png",
		handle: "kengmakon",
		phone: "+998 (98) 300 36 76",
		phoneHref: "tel:+998983003676",
		catalog: "https://kengmakon.uz/catalog/spalnyy-garnitur",
		socials: {
			telegram: "https://t.me/kengmakonuz",
			instagram: "https://www.instagram.com/kengmakon.uzb/",
			facebook: "https://www.facebook.com/profile.php?id=100085820027934",
		},
	} as const;

	const color = "#fff";
	const logo = received.logo || defaults.logo;
	const handle = received.handle || defaults.handle;

	const actions: Action[] =
		received.actions && received.actions.length > 0
			? received.actions
			: [
					{
						id: "call",
						title: "Звонок",
						subtitle: "Позвоните для подробной информации",
						href: defaults.phoneHref,
						icon: "📞",
					},
					{
						id: "catalog",
						title: "Каталог",
						subtitle: "Ознакомьтесь с нашим каталогом",
						href: defaults.catalog,
						icon: "📘",
					},
			  ];

	const socials =
		received.socials && received.socials.length > 0
			? received.socials
			: [
					{
						id: "telegram",
						title: "Telegram",
						subtitle: "Подпишитесь на наш канал",
						href: defaults.socials.telegram,
					},
					{
						id: "instagram",
						title: "Instagram",
						subtitle: "Следите за новостями",
						href: defaults.socials.instagram,
					},
					{
						id: "facebook",
						title: "Facebook",
						subtitle: "Будьте в курсе новостей",
						href: defaults.socials.facebook,
					},
			  ];
	return (
		<main className="min-h-dvh flex justify-center">
			<div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 py-10">
				<div className="flex flex-col items-center gap-3">
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: "50%",
							overflow: "hidden",
							width: "150px",
							height: "150px",
							backgroundColor: "#0a3c69",
						}}>
						{logo && (
							<Image
								width={102}
								height={70}
								src={logo}
								alt={`${received.name ?? handle} logo`}
								style={{
									height: "70px",
									backgroundColor: "#0a3c69",
								}}
							/>
						)}
					</div>

					<h1
						className="text-base font-medium"
						style={{color: "#777777", fontWeight: "bold"}}>
						{handle}
					</h1>
				</div>

				<section className="mt-6 space-y-4">
					{actions.map((a: Action) => (
						<Button
							key={a.id}
							href={a.href}
							title={a.title}
							subtitle={a.subtitle}
							icon={a.icon}
							color={color}
						/>
					))}
				</section>

				<div className="my-8 flex items-center" aria-hidden>
					<div className="h-px w-[20em] mx-auto bg-black/10" />
				</div>

				<section className="space-y-4">
					{socials.map(
						(s: {
							id: string;
							title: string;
							subtitle?: string;
							href: string;
						}) => (
							<Button
								key={s.id}
								href={s.href}
								title={s.title}
								subtitle={s.subtitle}
								color={color}
							/>
						)
					)}
				</section>

				{received.footer && (
					<footer className="text-center text-xs text-black/50 mt-10">
						{received.footer.text}{" "}
						<a
							className="underline"
							href={received.footer.href}
							target="_blank"
							rel="noopener noreferrer">
							{received.footer.linkText}
						</a>
					</footer>
				)}
			</div>
		</main>
	);
}
