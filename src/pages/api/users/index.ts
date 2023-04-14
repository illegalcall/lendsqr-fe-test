// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import axios from "axios"

type Response = {
	users?: any[]
	err?: string
}

export default async function getUsers(
	req: NextApiRequest,
	res: NextApiResponse<Response>
) {
	try {
		if (req.method === "GET") {
			let token = ""
			if (req.headers.authorization) {
				token = req.headers.authorization.split(" ")[1]
				if (!token) {
					console.log(token, token)
					return res
						.status(401)
						.json({ err: "please send bearer token to access the api" })
				}
				const decoded = jwt.verify(token, "mysecret") as any
				if (!decoded || decoded.email !== "admin@lendsqr.com") {
					return res.status(401).json({ err: "cannot access the api" })
				}
			} else {
				return res
					.status(401)
					.json({ err: "please send bearer token to access the api" })
			}

			const users = await axios
				.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
				.then((res) => res.data)

			return res.status(200).json({ users })
		} else {
			return res.status(501).json({ err: "method not supported" })
		}
	} catch (err) {
		console.log(err)
		return res.status(500).json({ err: "something went wrong" })
	}
}
