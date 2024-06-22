// submit.js 
import { handleSubmit } from "./api";

export const SubmitButton = () => {
    return (
        <div className="flex items-center justify-center mt-8">
            <button type="button" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32">
                Submit
            </button>
        </div>
    );
}

