import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>Welcome to&nbsp;</h1>
			<h1 className={title({ color: "pink" } )}>Shared Braincell&nbsp;</h1>
			<img className="mt-6" src="/moves.gif"></img>




		</div>
	);
}
