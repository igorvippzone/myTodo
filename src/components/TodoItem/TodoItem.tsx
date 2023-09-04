import style from './TodoItem.module.scss';
import {FC} from "react";
import {formateDate} from "../../utils/formateDate";
import {ITodo} from "./TodoItem.types";

type Props = {
    todo: ITodo;
    onChecked: (id: number) => void
}
const TodoItem: FC<Props> = ({todo,onChecked}) => {
    const {title, completed, description, dates, tags,id} = todo;
    const [from, to] = dates

    return (
        <div className={style.WrapperTodo}>
            <div className={style.TodoItem}>
                <div>
                    <input
                        className={style.checkbox}
                        type='checkbox'
                        onChange={() =>onChecked(id)}
                        checked={completed}/>
                    <h2 className={style.title}>{title}</h2>
                </div>
                <div className={style.dates}>
                    <p>{formateDate(from)}</p>
                    <p>{formateDate(to)}</p>
                </div>

                <p className={style.description}>
                    {description}
                </p>

                <div className={style.tags}>
                    {tags.map((tag, index) => {

                        return <div key={index} className={style.tag}>
                            <span>{tag}</span>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default TodoItem;