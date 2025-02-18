import Imagekit from "imagekit"
import config from "@/lib/config"
import { NextResponse } from "next/server"
const imagekit = new Imagekit({
	publicKey: config.env.imagekit.publicKey as string,
	privateKey: config.env.imagekit.privateKey as string,
	urlEndpoint: config.env.imagekit.url as string,
})

export async function GET() {
	return NextResponse.json(imagekit.getAuthenticationParameters())
}
