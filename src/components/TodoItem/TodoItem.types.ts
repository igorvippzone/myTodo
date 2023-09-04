export interface ITodoFetch  {
    id: number;
    title: string;
    completed: boolean;
}
export interface ITodo extends ITodoFetch {

    description: string;
    dates: [Date, Date];

    tags: string[];

}