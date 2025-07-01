import { useCallback, useEffect, useState } from "react"

type TuseRouter = {
    path: string;
    navigate: (to: string, replace?: boolean) => void;
}

function useRouter(): TuseRouter {
    const [path, setPath] = useState(window.location.pathname)

    const navigate = useCallback((to: string, replace: boolean = false) => {
        if (replace) {
            window.history.replaceState({}, '', to)
        } else {
            window.history.pushState({}, '', to)
        }
        setPath(to)
    }, [])

    useEffect(() => {
        const onPopState = () => {
            setPath(window.location.pathname)
        }

        window.addEventListener('popstate', onPopState)

        return () => {
            window.removeEventListener('popstate', onPopState)
        }
    }, [])

    return {
        path,
        navigate
    }
}

export default useRouter;