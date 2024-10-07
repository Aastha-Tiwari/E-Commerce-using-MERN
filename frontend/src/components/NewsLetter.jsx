function NewsLetter(){
    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div className="text-center">

            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium pb-4">Subscribe now & get 20% off</p>

            <p className="w-5/6 m-auto text-xs sm:text-sm md:text-base font-medium text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <form onSubmit={handleSubmit} className="flex items-center w-full sm:w-1/2 mx-auto my-6 border">
                <input type="email" className="outline-none w-full text-gray-700 px-3" name="email" id="email" placeholder="Enter your email" required/>
                <button type="submit" className="bg-black text-white py-4 px-4 sm:px-10 uppercase text-xs ">Subscribe</button>
            </form>

        </div>
    )
}

export default NewsLetter;