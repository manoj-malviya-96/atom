"use client";

import {Col, Row} from "atom-ui/layout";
import {HeroText, Link} from "atom-ui/text";
import React from "react";
import {PrimaryButton, SecondaryButton} from "atom-ui/button";
import {State} from "atom-ui";

export default function Home() {
	return (
		<Col
			className="w-screen h-screen"
		>
			<HeroText> Welcome to Atom </HeroText>
			<Link href="https://www.google.com/maps">Google</Link>
			<Row>
				<PrimaryButton
					icon={"fas fa-plus"}
					label={"Primary"}
					onClick={() => console.log("clicked")}/>
				<PrimaryButton
					icon={"fas fa-trash"}
					label={"Danger"}
					state={State.Error}
					onClick={() => console.log("clicked")}/>
				<PrimaryButton
					icon={"fas fa-warning"}
					label={"Warning"}
					state={State.Warning}
					onClick={() => console.log("clicked")}/>
				<PrimaryButton
					icon={"fas fa-check"}
					label={"Success"}
					state={State.Success}
					onClick={() => console.log("clicked")}/>
				<PrimaryButton
					icon={"fas fa-info"}
					onClick={() => console.log("clicked")}/>
				<SecondaryButton
					icon={"fas fa-minus"}
					label={"Secondary"}
					onClick={() => console.log("clicked")}/>
			</Row>
		</Col>
	);
}
