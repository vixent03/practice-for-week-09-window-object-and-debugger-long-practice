export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    window.document.title = "vincent portfolio"

    // Your code here
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
        document.body.children[0].children[0].innerText = " i am vincent"

}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    document.body.children[1].children[1].innerText = "I am vincent and thisis the first paragraf om my portfolio. It fills with bla0bla tesxt for test purposes.";
}
