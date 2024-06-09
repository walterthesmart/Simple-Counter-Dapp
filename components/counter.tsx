import { useReadContract, TransactionButton } from "thirdweb/react";
import {CONTRACT} from "../utils/constants";
import { prepareContractCall } from "thirdweb";



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
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: "10px",
                marginTop: '10px'
            }}>
                <TransactionButton
                    transaction={() => prepareContractCall({
                        contract: CONTRACT,
                        method: "decrement"
                    })}>-</TransactionButton>
                <TransactionButton
                    transaction={() => prepareContractCall({
                        contract: CONTRACT,
                        method: "increment"
                    })}>+</TransactionButton>
            </div>
        </div>
    )
}

export default Counter;