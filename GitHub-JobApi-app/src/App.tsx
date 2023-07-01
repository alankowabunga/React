import "./App.css";
import { useFetchJobs } from "./useFetchJobs";
import { Container } from "react-bootstrap";

function App() {

    // 工作資訊、執行的狀態、錯誤訊息
    const { jobs, loading, error } = useFetchJobs();

    return (
        <>
            <Container>
                {loading && <h1>Loading</h1>}
                {error && <h1>Error，try refresh</h1>}
                <h1>{jobs.length}</h1>
            </Container>
        </>
    );
}

export default App;
