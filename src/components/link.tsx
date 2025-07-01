import useRouter from "../hooks/useRouter";

type TLink = {
    to: string;
    replace?: boolean;
    children: preact.ComponentChildren;
}

function Link({to, replace=false, children}:TLink) {
    const {navigate} = useRouter()
    
    const handleClick = (e: MouseEvent) => {
        e.preventDefault()  
        navigate(to, replace)
    }

    return (
        <a href={to} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link;