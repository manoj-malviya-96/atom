import {HeroText, Link} from "atom-ui";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<HeroText>Welcome to Atom</HeroText>
			<Link href="https://www.google.com/maps">Google</Link>
		</div>
	);
}
