"use client";

import {Col, Row} from "atom-ui/layout";
import {HeroText, Link} from "atom-ui/text";
import React from "react";
import {PrimaryButton, SecondaryButton} from "atom-ui/button";

export default function Home() {
	return (
		<Col
			className="w-screen h-screen"
		>
			<HeroText> Welcome to Atom </HeroText>
			<Link href="https://www.google.com/maps">Google</Link>
			<Row>
				<PrimaryButton label={"Primary"} onClick={() => console.log("clicked")}/>
				<SecondaryButton label={"Secondary"} onClick={() => console.log("clicked")}/>
			</Row>
		</Col>
	);
}
