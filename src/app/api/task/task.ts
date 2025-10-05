
interface TaskType {
    id : string;
    task : string;
    userId : string;
    isCompleted : boolean;
    createdOn : string;
    completedOn : string;
    updatedOn : string;
}

let Tasks = [
    {
        id : "1",
        task : "Learn Next.js",
        userId : "u1",
        isCompleted : false,
        createdOn : new Date().toISOString(),
        completedOn : "",
        updatedOn : new Date().toISOString()
    },
    {
        id : "2",
        task : "Learn TypeScript",
        userId : "u1",
        isCompleted : true,
        createdOn : new Date().toISOString(),
        completedOn : new Date().toISOString(),
        updatedOn : new Date().toISOString()            
    },
    {
        id : "3",
        task : "Learn React",
        userId : "u2",
        isCompleted : false,
        createdOn : new Date().toISOString(),
        completedOn : "",
        updatedOn : new Date().toISOString()            
    },
    {
        id : "4",
        task : "Learn Node.js",
        userId : "u2",
        isCompleted : false,
        createdOn : new Date().toISOString(),
        completedOn : "",
        updatedOn : new Date().toISOString()            
    },
    {
        id : "5",
        task : "Learn Express.js",
        userId : "u3",
        isCompleted : true,
        createdOn : new Date().toISOString(),
        completedOn : new Date().toISOString(),
        updatedOn : new Date().toISOString()
    }
];

export default  Tasks;