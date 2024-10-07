import Title from "../components/Title";

function Orders(){
    return (
        <div className="py-10 min-h-[70vh]">
            <div className="text-xl sm:text-2xl">
                <Title text1={'My'} text2={'Orders'} />
            </div>
            <div className="py-6">
                Orders
            </div>
        </div>
    )
}

export default Orders;