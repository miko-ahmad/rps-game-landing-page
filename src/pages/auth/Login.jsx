import FormLogin from "../../components/form/FormLogin"

export default function Login () {
    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <FormLogin />
            </div>
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                <div className=" w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 animate-bounce rounded-full"/>
                <div className="w-full h-1/2 bg-white/10 absolute bottom-0 backdrop-blur-lg "/>
            </div>

        </div>
    )
}