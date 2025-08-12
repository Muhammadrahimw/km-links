import {headers} from "next/headers";

export type Action = {
	id: string;
	title: string;
	subtitle?: string;
	href: string;
	icon?: string;
};

interface CompanyProfile {
	handle: string;
	name?: string;
	primaryColor?: string;
	background?: string;
	logo?: string;
	about?: string;
	actions?: Action[];
	socials?: {id: string; title: string; subtitle?: string; href: string}[];
	footer?: {text: string; linkText: string; href: string};
}

export async function getCompany(): Promise<CompanyProfile> {
	const h = await headers();
	const forwardedProto = h.get("x-forwarded-proto") ?? undefined;
	const forwardedHost = h.get("x-forwarded-host") ?? undefined;
	const host = forwardedHost ?? h.get("host") ?? undefined;

	const envBase = process.env.NEXT_PUBLIC_BASE_URL?.trim();
	const base =
		envBase && /^https?:\/\//i.test(envBase)
			? envBase.replace(/\/$/, "")
			: host
			? `${forwardedProto ?? "http"}://${host}`
			: "http://localhost:3000";

	const res = await fetch(`${base}/api/open/data/company`, {
		cache: "no-store",
	});

	return res.json();
}
