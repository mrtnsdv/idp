const CompleteList = ({ datas } : { datas: String[]}) => {
  return (
    <div className="w-full p-4">
      <div className="font-semibold text-2xl mb-2 flex items-center">
        Your complete task
        <div className="w-[30px] ms-2">
         <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>
        </div>
      </div>
      <ul>
        {
          datas.length > 0 && datas.map((todo, i) => {
            return (
              <li key={i} className="mb-1">{i + 1}. {todo}</li>
            )
          })
        }
      </ul>
      {
        datas.length == 0 && (
          <div className="rounded text-[#d90429] mt-5">You have no completed task.</div>
        )
      }
    </div>
  )
}

export default CompleteList