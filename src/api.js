import axios from 'axios';
import { useStore } from './store';

export const handleSubmit = async () => {
    const nodes = useStore.getState().nodes;
    const edges = useStore.getState().edges;

    try {
        const response = await axios.post('https://503193e2-6cf4-43d9-af08-d083a92d2550-00-1hyei9og9v40.worf.replit.dev/pipelines/parse', {
            nodes,
            edges
        });

        const { num_nodes, num_edges, is_dag } = response.data;
        alert(`Number of Nodes: ${num_nodes}\nNumber of Edges: ${num_edges}\nIs DAG: ${is_dag}`);
    } catch (error) {
        console.error('Error submitting the pipeline:', error);
        alert('Failed to submit the pipeline.');
    }
};
