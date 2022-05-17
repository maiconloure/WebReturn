import { Widget } from "./components/Widget"

export function App() {
  return (
    <div>
      <div className="bg-zinc-800">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="h-10 w-40 bg-zinc-600 rounded-md">
            </div>
            <div className="h-3 w-20 bg-zinc-600 rounded-lg">
            </div>
          </div>
        </div>
      </div>
      <Widget />
    </div>
  )
}