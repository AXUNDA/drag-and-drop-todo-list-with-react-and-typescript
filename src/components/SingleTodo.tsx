import React,{useState,useRef,useEffect} from 'react'
import Todo from './model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { BsCheck2All } from "react-icons/bs"
import "./styles.css"
interface Props {
  todo: Todo
  todos: Todo[],
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}



const SingleTodo:React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(todos)
  };

  const handleDone = (id: number) => {
    console.log(todos,id)
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>

      {edit ? (
      <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      
      ): (
           todo.isDone ? (
      <s className="todos__single--text">
        {todo.todo}


      </s>
      
      ) : (
          <span className="todos__single--text">
        {todo.todo}


      </span>
          
          
      )
        
      )}
     
      
      <div>
        <span className="icon"
           onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        
        ><AiFillEdit /></span>
        <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
        <span className="icon" onClick={() => handleDone(todo.id)}><BsCheck2All/></span>
        

      </div>
    
    
    </form>
  )
}

export default SingleTodo