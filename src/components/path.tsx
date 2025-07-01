import useRouter from '../hooks/useRouter';

type TPath = {
    to: string;
    page: preact.ComponentChildren;
}

function Path({ to, page }: TPath) {
    const { path } = useRouter()

    return path === to && <>{page}</>
}

export default Path;

