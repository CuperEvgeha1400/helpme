
export const useNavig = (elem : HTMLAnchorElement )=> {
    const attribute = elem.getAttribute('href');
    const section  = document.getElementById(attribute);
    section.scrollIntoView({
        behavior : 'smooth',
        block : 'start'
    })


}