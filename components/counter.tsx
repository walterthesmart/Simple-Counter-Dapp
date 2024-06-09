import { useReadContract } from "thirdweb/react";
import {CONTRACT} from "../utils/constants";



const Counter: React.FC = () => {
    const {data: count, isLoading: loadingCount} = useReadContract({
        contract: CONTRACT,
        method: "getCount"
    });
    return (
        <div style={{marginTop: "20px"}}>
            <h1>Counter</h1>
            {loadingCount ? (
                <h2>.............loading..........</h2>
            ) : (
                <h2>{count ?.toString()}</h2>
            )}
        </div>
    )
}

export default Counter;