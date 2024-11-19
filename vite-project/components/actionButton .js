/**
 * 
 * @param {string} icon 
 * @param {string} className
 * @param {function} onClick // runs a function that is passed as a parameter
 * @returns {HTMLButtonElement}
 */

export const actionButton = (icon,className,onClick) => {
	const buttonElement = document.createElement("button")
	buttonElement.classList.add("btn")
    buttonElement.classList.add(className)
	const deleteImg = new Image()
	deleteImg.src = icon
	deleteImg.style.pointerEvents = "none"
	buttonElement.appendChild(deleteImg)
    
    buttonElement.addEventListener("click", (e) => {
		onClick(e)
	})

	return buttonElement
}

