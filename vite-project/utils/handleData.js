import { cardComponent } from "../components/cardComponent"
import { cardImage } from "../components/cardImage"
import { usersActions } from "../components/userActions"
import { usersData } from "../components/usersData"


export function handleData(usersArray) {
	app.innerText = ""
	usersArray.forEach((user) => {
		const cardArticle = cardComponent()
		cardArticle.setAttribute("userId", user.id)
		cardArticle.setAttribute("firstName", user.firstName)
		cardArticle.setAttribute("lastName", user.lastName)
		cardArticle.appendChild(cardImage(user.profileImg))
		cardArticle.appendChild(usersData(user.firstName, user.lastName))
		cardArticle.appendChild(usersActions())

		app.appendChild(cardArticle)
	})
}