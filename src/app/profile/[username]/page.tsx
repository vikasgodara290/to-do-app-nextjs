
interface ProfileProps{
    params : Promise<{username : string}>;
    searchParams : Promise<{q : string}>;
}

export default async function Profile({params, searchParams} : ProfileProps){
    const {username} = await params;
    const {q} = await searchParams;
    return(
        <div className="">
            username : {username}
            <div className="">
                {q}
            </div>
        </div>
    )
}