'use client'
import { useState, useEffect, KeyboardEvent } from "react"

// component
import Button from "@/components/Button"
import CompleteList from "@/components/CompleteList"
import CompleteText from "@/components/CompleteText"

export default function Home() {

  const [isComplete, setIsComplete] = useState<Boolean>(false)
  const [dataComplete, setDataComplete] = useState<String[]>([])
  const [dataList, setDataList] = useState<String[]>([])
  const [task, setTask] = useState<string>("")

  useEffect(() => {
    if (dataList.length === 0 && dataComplete.length > 0) {
      setIsComplete(true)
    } else {
      setIsComplete(false)
    }
  }, [dataList])


  const addDataList = () => {
    setDataList(v => [...v, task])
    setTask("")
  }

  const onPressEnter = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      addDataList()
    }
    
  }

  const completeTask = ({idx}: {idx: number}) => {
    const selected = dataList[idx]
    const newList = dataList.filter((data, i) => i !== idx)
    setDataList(newList)
    setDataComplete(v => [...v, selected])
  }

  const removeTask = ({idx}: {idx: number}) => {
    const newList = dataList.filter((data, i) => i !== idx)
    setDataList(newList)
  }

  const removeAllList = () => {
    setDataList([])
    setDataComplete([])
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10 overflow-y-auto">
      <div className="mb-8 text-center">
        <div className="text-4xl font-bold text-[#d90429] mb-2">Welcome, Employee</div>
        <div className="text-sm">Let's start to complete your todo list today! </div>
      </div>

      {
        isComplete && ( <CompleteText /> ) 
      }

      <div className="flex gap-2 w-full mb-3">
        <div className="w-1/2 p-4">
          <div className="mb-6">
            <div className="font-semibold text-2xl mb-2">Todo List</div>
            <div className="flex gap-2 mb-4">
              <input 
                type="text" 
                className="border rounded p-2 w-2/4 bg-[#f8f9fa] focus:outline-0 h-full"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyUp={(e) => onPressEnter(e)}
              />
              <Button title="Add Task" onClick={() => addDataList()}/>
            </div>
            <ul>
              { dataList && dataList.map((todo, i) => {
                return(
                  <li className="flex justify-between mb-1 border-b-2 py-2 border-[#f8f9fa]" key={i}>
                    <div>{i + 1}. { todo }</div>
                    <div className="flex gap-2">
                      <Button title="Done" onClick={() => completeTask({idx: i})} />
                      <Button title="Remove" onClick={() => removeTask({idx: i})} />
                    </div>
                  </li>
                  )
                }) 
              }
            </ul>
          </div>
          <div className="mb-2">Uncompleted list: <span className="font-semibold text-[#d90429]">{ dataList.length }</span></div>
          <Button title="Remove All Lists" onClick={() => removeAllList()} />
        </div>
        <div className="w-1/2">
          <CompleteList datas={dataComplete} />
        </div>
      </div>
    </main>
  )
}
