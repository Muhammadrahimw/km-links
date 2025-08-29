import Link from "next/link";

export function Button({
	href,
	title,
	subtitle,
	icon,
	color,
}: {
	href: string;
	title: string;
	subtitle?: string;
	icon?: string;
	color: string;
}) {
	return (
		<Link
			href={href}
			target={href.startsWith("http") ? "_blank" : undefined}
			rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
			className="block w-full rounded-lg px-5 py-4 shadow-sm transition-transform hover:scale-[1.01] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-[#0a3d6979] backdrop-blur-[6px]">
			<div className="flex flex-col items-center text-center">
				<div className="font-semibold" style={{color}}>
					{icon ? `${icon} ` : ""}
					{title}
				</div>
				{subtitle && (
					<div className="text-xs opacity-90 mt-1" style={{color}}>
						{subtitle}
					</div>
				)}
			</div>
		</Link>
	);
}
