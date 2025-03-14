"use client";

import {Col} from "atom-ui/layout";
import {HeroText, Link} from "atom-ui/text";
import React from "react";
import {SolidButton} from "atom-ui/button";


export default function Home() {
	return (
		<Col
			className="w-screen h-screen"
		>
			<HeroText> Welcome to Atom </HeroText>
			<Link href="https://www.google.com/maps">Google</Link>
			<SolidButton label={"Primary"} onClick={() => console.log("clicked")}/>
		</Col>
	);
}
