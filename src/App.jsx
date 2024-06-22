import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 p-4">
            <h1 className="text-white text-3xl text-center mb-6">React Flow Pipeline</h1>
            <div className=" justify-center gap-4">
                <PipelineToolbar />
                <PipelineUI />
               
            </div>
            <SubmitButton />  
        </div>
    </div>
  );
}

export default App;
