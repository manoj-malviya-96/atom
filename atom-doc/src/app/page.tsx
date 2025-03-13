import {Col, Spacing} from "atom-ui/layout";
import {HeroText, Link} from "atom-ui/text";
import React from "react";


export default function Home() {
	return (
		<Col
			spacing={Spacing.Medium}
			className="w-screen h-screen"
		>
			<HeroText> Welcome to Atom </HeroText>
			<Link href="https://www.google.com/maps">Google</Link>
		</Col>
	);
}
