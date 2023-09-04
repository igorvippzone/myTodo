import {FC} from 'react'
import style from './TodoList.module.scss';
import {TodoItem} from "../TodoItem";
import Loader from "../ui/Loader/Loader";
import {ITodo} from "../TodoItem/TodoItem.types";

interface Props extends React.HTMLProps<HTMLDivElement> {
    todos: ITodo[],
    checkedTodo: (id: number) => void,
    loader: boolean
}

const TodoList: FC<Props> = (props) => {
    const {todos, checkedTodo,loader, ...otherProps} = props

    return <div {...otherProps} className={style.TodoList}>
        {todos.map((todo) => <TodoItem onChecked={checkedTodo} key={todo.id} todo={todo}/>)}
        {loader && <Loader />}
    </div>
}

export default TodoList;