import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

const tasks = [];

function App() {
  const [getTasks, setTasks] = useState(tasks);
  const newTask = useRef()

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }


function addNewTask() {
    const taskValue = newTask.current.value;
    setTasks((oldTasks) => {
        return [...oldTasks, taskValue];
    }
  );
    newTask.current.value='';
}

function removeTask(index) {
    setTasks(oldTasks => {
      return oldTasks.filter((_, i) => i !== index)
    })

}


  return (
    <div className="p-5">
      <div className="mb-6">
        <h1 className="text-center text-5xl font-serif">Todo</h1>
      </div>

      <div class="flex">
        <div class="w-1/6 flex items-center">
            <p className="text-3xl text-center ">I need to ... </p>
        </div>

  
        <div class="w-4/6 mx-3">
          <input
            type="text"
            ref={newTask}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="w-1/6 ">
          <button
            class="block w-full h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={(e) => addNewTask()}
          > Add </button>
        </div>

      </div>



<div class="relative overflow-x-auto mt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3">
                    Task
                </th>
                <th scope="col" class="py-3">
                    Mark Done
                </th>

            </tr>
        </thead>
        <tbody>

      {getTasks.map((value, index) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" name={index}>
                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {value}
                </th>
                <td class="py-4">
          <button
            class="h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" name={index}
            type="button"
            onClick={() => removeTask(index)}
          > Done </button>
                </td>
            </tr>
      ))}
        </tbody>
    </table>
</div>



    </div>
  );
}

export default App;
