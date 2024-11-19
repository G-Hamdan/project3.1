export async function fetchUsers() {
	try {
		const url = "http://localhost:5000/api/users"
		const options = {
			method: "GET",
			headers: {
				"x-api-key": import.meta.env.VITE_APP_KEY ,
			},
		}

		const res = await fetch(url, options)
		if (!res.ok) throw new Error("Error with the connection")
		const data = await res.json()
		return data
	} catch (error) {
		return error
	}
}