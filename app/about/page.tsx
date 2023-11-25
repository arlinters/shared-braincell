import { title } from "@/components/primitives";
import Image from 'next/image'

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>Welcome to&nbsp;</h1>
			<h1 className={title({ color: "pink" } )}>Shared Braincell&nbsp;</h1>
			<Image alt="A dancing creature" className="mt-6" src="/moves.gif"></Image>




		</div>
	);
}
