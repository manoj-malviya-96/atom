"use client";

import {Col, Row} from "atom-ui/layout";
import {HeroText, Link, PrimaryText, SecondaryText} from "atom-ui/text";
import React from "react";
import {PrimaryButton, SecondaryButton} from "atom-ui/button";
import {ElementColor} from "atom-ui";

export default function Home() {
	return (
		<Col
			className="w-screen h-screen"
		>
			<HeroText> Welcome to Atom </HeroText>
			<Row smallDeviceWrap="wrap">
				<Link href="https://www.google.com/maps">Google</Link>
				<PrimaryText>Primary Text</PrimaryText>
				<SecondaryText>Secondary Text</SecondaryText>
			</Row>
			
			<Row smallDeviceWrap="wrap">
				<PrimaryButton
					icon={"fas fa-plus"}
					label={"Primary"}
					onClick={() => console.log("clicked")}/>
				<PrimaryButton
					icon={"fas fa-trash"}
					label={"Danger"}
					color={ElementColor.Error}
					onClick={() => console.log("clicked")}/>
				<PrimaryButton
					icon={"fas fa-warning"}
					label={"Warning"}
					color={ElementColor.Warning}
					onClick={() => console.log("clicked")}/>
				<PrimaryButton
					icon={"fas fa-check"}
					label={"Success"}
					color={ElementColor.Success}
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
