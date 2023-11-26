import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Image from 'next/image'

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({color: "pink"})}>Shared Braincell</h1>
				<br/>
				<h1 className={title()}>The race to World First</h1>
				<br />
				<h2 className={subtitle()}>
					(in being cool)
				</h2>

				<Image className="ml-auto mr-auto" src="/Orc_male250x.webp" alt="Badass Orc doing real dance moves" width="250"></Image>

			<p className='mb-4'>
			Nyaa~! Hewwo from Shared Braincell! (*＾▽＾)／ Get weady to embark on a kawaii journey wike no othew as you step into the weawm of Azeowof wif the most ewite guild in the wowld. (*≧ω≦)
			</p>

			<h2 className={title({color:'pink'})}>
				Fowge Yer Wegacy
			</h2>
			<p className='mt-4'>
	This is nyot just a guild; it&apos;s a wegacy in the making. Shared Braincell is youw gatewày to a wowwd whewe gaming weaches nyew heights. Join us, and togefew, we&apos;ww wedefinye what it means to be wegendawy in Azeowof. (灬º‿º灬)♡

	Hit that join button, and wet the epic jouwney begin! (*≧ω≦)
</p>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.discord}
					className={buttonStyles({ size:'lg', color: "primary", radius: "full", variant: "shadow", })}
				>
					Join Our Discord
				</Link>
			</div>


		</section>
	);
}
