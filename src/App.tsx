import style from './App.module.scss'
import {TodoList} from "./components/TodoList";
import axios, {AxiosResponse} from "axios";
import {useEffect, useState} from "react";
import {generateData} from "./utils/generateData";
import Header from "./components/Header/Header";
import {ITodo, ITodoFetch} from "./components/TodoItem/TodoItem.types";

function App() {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isLastPage, setIsLastPage] = useState(false)

    const getTodos = async () => {
        try {
            setIsLoading(true)
            const nextPage = page + 1
            const result: AxiosResponse<ITodoFetch[]> = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${nextPage}`)
            if (result.data.length === 0) {
                setIsLastPage(true)
                throw new Error('Ошибка, получен пустой массив')
            }
            const todos = result.data.map(generateData)
            setTodos((prev) => [...prev, ...todos])
            setPage(nextPage)
        } catch (e) {
            console.error('Error: ', e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        setIsLoading(true)
    }, [])

    useEffect(() => {
        if (isLoading) {
            getTodos()
        }
    }, [isLoading, getTodos])

    const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
        if (isLastPage) return
        const scrollHeight = e.currentTarget.scrollHeight
        const scrollTop = e.currentTarget.scrollTop
        const clientHeight = e.currentTarget.clientHeight

        if (scrollHeight - (scrollTop + clientHeight) < 100) {
            setIsLoading(true)
        }
    }

    const checkedHandler = (id: number) => {
        const cloneArr = [...todos]
        const todoIndex = cloneArr.findIndex(todo => todo.id === id)
        cloneArr[todoIndex].completed = !cloneArr[todoIndex].completed
        setTodos(cloneArr)
    }

    return (
        <div className={style.App}>
            <Header page={page}/>
            <TodoList onScroll={scrollHandler} loader={isLoading} checkedTodo={checkedHandler} todos={todos}/>
        </div>
    )
}

export default App
